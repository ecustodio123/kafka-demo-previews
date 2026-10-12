import { useEffect, useMemo } from 'react'
import { CommerceStore } from '@ecustodio123/kafka-commerce'
import { createClient } from '@supabase/supabase-js'
import { ArrowLeft, Settings } from 'lucide-react'

import { Badge, Button } from '../components/ui/primitives'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const envStoreId = import.meta.env.VITE_STORE_ID
const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE
const storeName = import.meta.env.VITE_STORE_NAME || 'Kafka Store'

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

function resolveStoreIdFromUrl() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === '/kafka-store' || path === '/tiendas-prueba') {
    return {
      storeId: envStoreId,
      missingVariables: [
        ['VITE_STORE_ID', envStoreId],
      ].filter(([, value]) => !value),
    }
  }

  if (/^\/[^/]+\/stores$/.test(path)) {
    const id = new URLSearchParams(window.location.search).get('id')
    const isValidId = id ? /^[1-9]\d*$/.test(id) : false

    return {
      storeId: isValidId ? id : null,
      storeError: isValidId
        ? null
        : 'No pudimos abrir esta tienda porque el enlace no incluye un ID de tienda válido.',
      missingVariables: [],
    }
  }

  return {
    storeId: envStoreId,
    missingVariables: [
      ['VITE_STORE_ID', envStoreId],
    ].filter(([, value]) => !value),
  }
}

export function TiendasPruebaPage() {
  const storeResolution = resolveStoreIdFromUrl()
  const missingVariables = [
    ['VITE_SUPABASE_URL', supabaseUrl],
    ['VITE_SUPABASE_ANON_KEY o VITE_SUPABASE_PUBLISHABLE_KEY', supabaseAnonKey],
    ['VITE_WHATSAPP_PHONE', whatsappPhone],
    ...storeResolution.missingVariables,
  ].filter(([, value]) => !value)

  const supabase = useMemo(() => {
    if (missingVariables.length > 0) return null

    return createClient(supabaseUrl, supabaseAnonKey)
  }, [missingVariables.length])

  useEffect(() => {
    document.title = 'Kafka Store | Tiendas online'
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Descubre Kafka Store, nuestra solución de tiendas online personalizadas. Explora productos, categorías, ofertas y una experiencia de compra moderna.')
  }, [])

  if (storeResolution.storeError) {
    return <InvalidStoreLink message={storeResolution.storeError} />
  }

  if (!supabase) {
    return <MissingCommerceConfig missingVariables={missingVariables.map(([name]) => name)} />
  }

  return (
    <main className="min-h-svh bg-[#f7f7f4] text-[#17211d]">
      <header className="border-b border-neutral-200 bg-white/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <a className="inline-flex items-center gap-2 text-sm font-bold text-neutral-600 no-underline transition hover:text-neutral-950" href="/">
            <ArrowLeft aria-hidden="true" size={17} />
            Volver al showroom
          </a>
          {/* <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700">
            Tienda conectada con Kafka Commerce
          </Badge> */}
        </div>
      </header>

      <section className="py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <CommerceStore
            checkout={{
              phone: whatsappPhone,
              type: 'whatsapp',
            }}
            columns={3}
            features={{
              cart: true,
              filters: true,
              search: true,
            }}
            gap="18px"
            layout="sections"
            storeId={storeResolution.storeId}
            storeName={storeName}
            supabase={supabase}
            theme={commerceTheme}
            title="Kafka Store"
            description=""
          />
        </div>
      </section>
    </main>
  )
}

function InvalidStoreLink({ message }) {
  return (
    <main className="grid min-h-svh place-items-center bg-[#f7f7f4] px-4 py-16 text-[#17211d]">
      <section className="w-full max-w-2xl rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
        <span className="grid size-12 place-items-center rounded-2xl bg-neutral-950 text-white">
          <Settings aria-hidden="true" size={22} />
        </span>
        <Badge className="mt-6 border-rose-200 bg-rose-50 text-rose-800">
          Enlace no válido
        </Badge>
        <h1 className="mt-5 text-4xl font-semibold leading-none">
          No pudimos abrir esta tienda.
        </h1>
        <p className="mt-4 text-base leading-8 text-neutral-600">
          {message}
        </p>
        <Button asChild className="mt-6 rounded-full">
          <a href="/kafka-store">
            <ArrowLeft aria-hidden="true" size={17} />
            Ir a Kafka Store
          </a>
        </Button>
      </section>
    </main>
  )
}

function MissingCommerceConfig({ missingVariables }) {
  return (
    <main className="grid min-h-svh place-items-center bg-[#f7f7f4] px-4 py-16 text-[#17211d]">
      <section className="w-full max-w-2xl rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
        <span className="grid size-12 place-items-center rounded-2xl bg-neutral-950 text-white">
          <Settings aria-hidden="true" size={22} />
        </span>
        <Badge className="mt-6 border-amber-200 bg-amber-50 text-amber-800">
          Configuración pendiente
        </Badge>
        <h1 className="mt-5 text-4xl font-semibold leading-none">
          Faltan variables para cargar Kafka Commerce.
        </h1>
        <p className="mt-4 text-base leading-8 text-neutral-600">
          La integración ya está lista, pero esta ruta necesita la configuración pública de Supabase y la tienda.
        </p>
        <div className="mt-6 rounded-2xl bg-neutral-950 p-4 text-sm font-semibold text-white">
          {missingVariables.map((variable) => (
            <div className="py-1" key={variable}>
              {variable}
            </div>
          ))}
        </div>
        <Button asChild className="mt-6 rounded-full">
          <a href="/">
            <ArrowLeft aria-hidden="true" size={17} />
            Volver al showroom
          </a>
        </Button>
      </section>
    </main>
  )
}
