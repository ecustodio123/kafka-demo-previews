import { createClient } from '@supabase/supabase-js'
import { isPublicSupabaseKey } from './storefront.js'

const url = import.meta.env.VITE_SUPABASE_URL
const publicKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY

export const missingCommerceConfig = [
  !url?.startsWith('https://') && 'VITE_SUPABASE_URL',
  !isPublicSupabaseKey(publicKey) && 'VITE_SUPABASE_PUBLISHABLE_KEY o VITE_SUPABASE_ANON_KEY (clave pública)',
].filter(Boolean)

// A public storefront must never inherit an authenticated admin session.
export const commerceSupabase = missingCommerceConfig.length === 0
  ? createClient(url, publicKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  })
  : null
