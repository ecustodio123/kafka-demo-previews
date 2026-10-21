import { isValidWhatsAppPhone, normalizeWhatsAppPhone } from '@ecustodio123/kafka-commerce'

/** @typedef {{ defaultStoreId?: string, defaultStoreName?: string, defaultPhone?: string, storePhones?: string }} StorefrontConfig */

/** @type {import('@ecustodio123/kafka-commerce').CommerceThemeInput} */
const commerceTheme = {
  background: '#f7f7f4',
  border: '#dfe5e1',
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  mutedText: '#647067',
  primary: '#111827',
  primaryText: '#ffffff',
  radius: '18px',
  surface: '#ffffff',
  text: '#17211d',
}

/**
 * stores currently exposes identity, not a checkout phone. Scope host config by ID.
 * @param {import('./storefront.js').PublicStore} store
 * @param {StorefrontConfig} config
 * @returns {import('@ecustodio123/kafka-commerce').CheckoutConfig | undefined}
 */
export function getStoreCheckout(store, config) {
  /** @type {Record<string, unknown>} */
  let phones = {}
  if (config.storePhones?.trim()) {
    try {
      phones = JSON.parse(config.storePhones)
      if (!phones || typeof phones !== 'object' || Array.isArray(phones)) throw new Error()
    } catch {
      throw new Error('La configuración de contacto de las tiendas no es válida.')
    }
  }
  const isDefaultStore = store.id === config.defaultStoreId?.trim()
  const phone = Object.hasOwn(phones, store.id) ? phones[store.id] : isDefaultStore ? config.defaultPhone : undefined
  if (typeof phone !== 'string' || !isValidWhatsAppPhone(phone)) return undefined
  return { type: 'whatsapp', phone: normalizeWhatsAppPhone(phone) }
}

/**
 * The published props are typechecked against the installed package's public API.
 * @param {import('@supabase/supabase-js').SupabaseClient} supabase
 * @param {import('./storefront.js').PublicStore} store
 * @param {StorefrontConfig} config
 * @returns {import('@ecustodio123/kafka-commerce').CommerceStoreProps}
 */
export function getStoreProps(supabase, store, config) {
  const isDefaultStore = store.id === config.defaultStoreId?.trim()
  const name = store.name === 'Kafka Store' && isDefaultStore
    ? config.defaultStoreName || store.name : store.name
  return {
    supabase,
    storeId: store.id,
    storeName: name,
    title: name,
    description: '',
    checkout: getStoreCheckout(store, config),
    navigationMode: 'standalone',
    productImageBucket: 'product-images',
    layout: 'sections',
    columns: 3,
    gap: '18px',
    features: { cart: true, filters: true, search: true },
    theme: commerceTheme,
  }
}
