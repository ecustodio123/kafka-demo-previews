import assert from 'node:assert/strict'
import test from 'node:test'
import { fetchCategories, fetchProducts, getCartStorageKey, prepareWhatsAppCheckout } from '@ecustodio123/kafka-commerce'
import { isPublicSupabaseKey, isStorePath, loadPublicStore, resolveStoreRoute } from '../../src/lib/commerce/storefront.js'
import { getStoreCheckout, getStoreProps } from '../../src/lib/commerce/storeProps.js'

function mockClient(result) {
  const calls = []
  const query = {
    select(...args) { calls.push(['select', ...args]); return query },
    eq(...args) { calls.push(['eq', ...args]); return query },
    in(...args) { calls.push(['in', ...args]); return query },
    order(...args) { calls.push(['order', ...args]); return query },
    abortSignal() { return query },
    maybeSingle() { return Promise.resolve(result) },
    then(resolve, reject) { return Promise.resolve(result).then(resolve, reject) },
  }
  const client = { from(table) { calls.push(['from', table]); return query } }
  return { client, calls }
}

test('default, numeric, slug and legacy routes remain distinct', () => {
  assert.deepEqual(resolveStoreRoute('/kafka-store', '', '1'), { kind: 'id', value: '1' })
  assert.deepEqual(resolveStoreRoute('/tiendas-prueba/', '', '1'), { kind: 'id', value: '1' })
  assert.deepEqual(resolveStoreRoute('/kafka-store/6', '?id=1', '1'), { kind: 'id', value: '6' })
  assert.deepEqual(resolveStoreRoute('/kafka-store/accesorios-kafka/', '', '1'), { kind: 'slug', value: 'accesorios-kafka' })
  assert.deepEqual(resolveStoreRoute('/floreria-kafka/stores', '?id=3', '1'), { kind: 'id', value: '3' })
  assert.equal(isStorePath('/kafka-store/cliente'), true)
  assert.equal(isStorePath('/floreria-kafka'), false)
  assert.equal(isStorePath('/kafka-store/cliente/extra'), false)
})

test('invalid explicit identifiers never use the environment fallback', () => {
  for (const id of ['', '0', '-1', '1.2', '01', '1e2', 'abc', '9007199254740992']) {
    assert.throws(() => resolveStoreRoute('/floreria-kafka/stores', `?id=${id}`, '1'))
  }
  assert.throws(() => resolveStoreRoute('/floreria-kafka/stores', '?id=3&id=4', '1'))
  for (const id of ['0', '-1', '1.2', '01', '%2F', '%ZZ', 'cliente_con_espacios', '9007199254740992']) {
    assert.throws(() => resolveStoreRoute(`/kafka-store/${id}`, '', '1'))
  }
  assert.throws(() => resolveStoreRoute('/kafka-store', '', undefined))
})

test('slug lookup reads only public store identity, filtered by exact slug', async () => {
  const { client, calls } = mockClient({ data: { id: 6, name: 'Accesorios', slug: 'accesorios-kafka' }, error: null })
  const store = await loadPublicStore(client, { kind: 'slug', value: 'accesorios-kafka' }, new AbortController().signal)
  assert.deepEqual(store, { id: '6', name: 'Accesorios', slug: 'accesorios-kafka' })
  assert.deepEqual(calls, [['from', 'stores'], ['select', 'id,name,slug'], ['eq', 'slug', 'accesorios-kafka']])
})

test('unreadable slugs, duplicate rows and mismatched identities fail closed', async () => {
  for (const result of [
    { data: null, error: null },
    { data: null, error: { message: 'RLS or duplicate rows' } },
    { data: { id: 6, name: 'Otro', slug: 'otro' }, error: null },
  ]) {
    await assert.rejects(loadPublicStore(mockClient(result).client, { kind: 'slug', value: 'cliente' }, new AbortController().signal))
  }
})

test('legacy ID catalog survives hidden metadata, without another store fallback', async () => {
  const { client, calls } = mockClient({ data: null, error: null })
  assert.deepEqual(await loadPublicStore(client, { kind: 'id', value: '3' }, new AbortController().signal), {
    id: '3', name: 'Kafka Store', slug: null,
  })
  assert.deepEqual(calls.at(-1), ['eq', 'id', '3'])
})

test('cancelled store lookups cannot populate a new storefront', async () => {
  const controller = new AbortController()
  controller.abort()
  await assert.rejects(loadPublicStore(mockClient({ data: null, error: null }).client, { kind: 'id', value: '1' }, controller.signal))
})

test('checkout and names are scoped to the resolved ID', () => {
  const config = { defaultStoreId: '1', defaultPhone: '+51 999 999 999', defaultStoreName: 'Predeterminada', storePhones: '{"6":"51888888888"}' }
  const store = (id) => ({ id, name: 'Kafka Store', slug: null })
  assert.deepEqual(getStoreCheckout(store('1'), config), { type: 'whatsapp', phone: '51999999999' })
  assert.deepEqual(getStoreCheckout(store('6'), config), { type: 'whatsapp', phone: '51888888888' })
  assert.equal(getStoreCheckout(store('3'), config), undefined)
  assert.equal(getStoreCheckout(store('1'), { ...config, storePhones: '{"1":""}' }), undefined)
  assert.throws(() => getStoreCheckout(store('1'), { ...config, storePhones: 'invalid' }))
  assert.equal(getStoreProps({}, store('3'), config).title, 'Kafka Store')
  assert.equal(getStoreProps({}, store('1'), config).title, 'Predeterminada')
  assert.equal(getStoreProps({}, { ...store('1'), name: 'Nombre público' }, config).title, 'Nombre público')
})

test('public client accepts publishable/anon keys and rejects admin credentials', () => {
  const jwt = (role) => `header.${Buffer.from(JSON.stringify({ role })).toString('base64url')}.signature`
  assert.equal(isPublicSupabaseKey('sb_publishable_example'), true)
  assert.equal(isPublicSupabaseKey(jwt('anon')), true)
  assert.equal(isPublicSupabaseKey(jwt('service_role')), false)
  assert.equal(isPublicSupabaseKey('sb_secret_example'), false)
  assert.equal(isPublicSupabaseKey(undefined), false)
})

test('published package scopes catalog queries, active categories and cart persistence', async () => {
  for (const storeId of ['1', '6']) {
    for (const fetcher of [fetchProducts, fetchCategories]) {
      const { client, calls } = mockClient({ data: [], error: null })
      assert.deepEqual(await fetcher({ supabase: client, storeId }), [])
      assert.ok(calls.some((call) => call[0] === 'eq' && call[1] === 'store_id' && call[2] === storeId))
      assert.ok(calls.some((call) => call[0] === 'eq' && call[1] === 'active' && call[2] === true))
    }
  }
  assert.notEqual(getCartStorageKey('1'), getCartStorageKey('6'))
})

test('published WhatsApp checkout revalidates scoped products without writes or sending', async () => {
  const { client, calls } = mockClient({ data: [{ id: 61, store_id: 6, name: 'Producto de prueba', price: 25, available: true, active: true }], error: null })
  const result = await prepareWhatsAppCheckout({
    supabase: client,
    storeId: '6',
    items: [{ productId: '61', name: 'Producto de prueba', unitPrice: 25, quantity: 2 }],
    checkout: { type: 'whatsapp', phone: '51888888888' },
  })
  assert.equal(result.prepared.total, 50)
  assert.ok(result.prepared.url.startsWith('https://wa.me/51888888888?text='))
  assert.ok(result.prepared.message.includes('Producto de prueba'))
  assert.ok(calls.some((call) => call[0] === 'eq' && call[1] === 'store_id' && call[2] === '6'))
})
