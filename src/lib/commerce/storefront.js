/** @typedef {{ kind: 'id' | 'slug', value: string }} StoreRoute */
/** @typedef {{ id: string, name: string, slug: string | null }} PublicStore */

const invalidLink = 'El enlace de esta tienda no es válido. Revisa la dirección e inténtalo nuevamente.'

/** @param {unknown} value */
export function isStoreId(value) {
  return typeof value === 'string' && /^[1-9]\d*$/.test(value) && Number.isSafeInteger(Number(value))
}

/** @param {string} pathname */
export function isStorePath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  return path === '/kafka-store' || path === '/tiendas-prueba'
    || /^\/kafka-store\/[^/]+$/.test(path) || /^\/[^/]+\/stores$/.test(path)
}

/**
 * Explicit links never fall back to the default store.
 * @param {string} pathname
 * @param {string} search
 * @param {string | undefined} defaultStoreId
 * @returns {StoreRoute}
 */
export function resolveStoreRoute(pathname, search, defaultStoreId) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/kafka-store' || path === '/tiendas-prueba') {
    const id = defaultStoreId?.trim()
    if (!isStoreId(id)) throw new Error('La tienda predeterminada todavía no está configurada.')
    return { kind: 'id', value: /** @type {string} */ (id) }
  }

  if (/^\/[^/]+\/stores$/.test(path)) {
    const ids = new URLSearchParams(search).getAll('id')
    if (ids.length !== 1 || !isStoreId(ids[0])) throw new Error(invalidLink)
    return { kind: 'id', value: ids[0] }
  }

  const match = path.match(/^\/kafka-store\/([^/]+)$/)
  if (!match) throw new Error(invalidLink)
  let identifier
  try {
    identifier = decodeURIComponent(match[1])
  } catch {
    throw new Error(invalidLink)
  }
  if (isStoreId(identifier)) return { kind: 'id', value: identifier }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(identifier) || /^\d+$/.test(identifier)) {
    throw new Error(invalidLink)
  }
  return { kind: 'slug', value: identifier }
}

/**
 * Only public identity columns are requested, using the anonymous client's RLS.
 * Legacy IDs can still load their scoped catalog when store metadata is not visible.
 * @param {import('@supabase/supabase-js').SupabaseClient} supabase
 * @param {StoreRoute} route
 * @param {AbortSignal} signal
 * @returns {Promise<PublicStore>}
 */
export async function loadPublicStore(supabase, route, signal) {
  const { data, error } = await supabase.from('stores')
    .select('id,name,slug')
    .eq(route.kind === 'slug' ? 'slug' : 'id', route.value)
    .abortSignal(signal)
    .maybeSingle()

  if (signal.aborted) throw new Error('Consulta cancelada.')
  if (error) throw new Error('No pudimos cargar la tienda en este momento. Inténtalo nuevamente en unos minutos.')
  if (!data) {
    if (route.kind === 'id') return { id: route.value, name: 'Kafka Store', slug: null }
    throw new Error('No encontramos una tienda disponible con ese nombre. Revisa el enlace o consulta con el negocio.')
  }
  const id = String(data.id)
  if (!isStoreId(id) || (route.kind === 'id' && id !== route.value)
    || (route.kind === 'slug' && data.slug !== route.value)) {
    throw new Error('No pudimos verificar la tienda de este enlace.')
  }
  return { id, name: data.name || 'Kafka Store', slug: data.slug || null }
}

/** @param {string | undefined} key */
export function isPublicSupabaseKey(key) {
  if (!key) return false
  if (key.startsWith('sb_publishable_')) return true
  try {
    const payload = JSON.parse(atob(key.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))
    return payload.role === 'anon'
  } catch {
    return false
  }
}
