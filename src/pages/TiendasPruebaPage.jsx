import { useEffect, useState } from 'react'
import { CommerceStore } from '@ecustodio123/kafka-commerce'
import { ArrowLeft, Settings } from 'lucide-react'

import { Badge, Button } from '../components/ui/primitives'
import { commerceSupabase, missingCommerceConfig } from '../lib/commerce/supabase.js'
import { loadPublicStore, resolveStoreRoute } from '../lib/commerce/storefront.js'
import { getStoreProps } from '../lib/commerce/storeProps.js'

const storefrontConfig = {
  defaultStoreId: import.meta.env.VITE_STORE_ID,
  defaultStoreName: import.meta.env.VITE_STORE_NAME,
  defaultPhone: import.meta.env.VITE_WHATSAPP_PHONE,
  storePhones: import.meta.env.VITE_STORE_WHATSAPP_PHONES,
}

export function TiendasPruebaPage() {
  const [resolution, setResolution] = useState({ loading: true, props: null, error: null })

  useEffect(() => {
    if (!commerceSupabase) return
    const controller = new AbortController()

    async function loadStore() {
      try {
        const route = resolveStoreRoute(window.location.pathname, window.location.search, storefrontConfig.defaultStoreId)
        const store = await loadPublicStore(commerceSupabase, route, controller.signal)
        const props = getStoreProps(commerceSupabase, store, storefrontConfig)
        if (!controller.signal.aborted) setResolution({ loading: false, props, error: null })
      } catch (error) {
        if (!controller.signal.aborted) setResolution({ loading: false, props: null, error: error.message })
      }
    }

    loadStore()
    return () => controller.abort()
  }, [])

  useEffect(() => {
    document.title = 'Kafka Store | Tiendas online'
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Descubre Kafka Store, nuestra solución de tiendas online personalizadas. Explora productos, categorías, ofertas y una experiencia de compra moderna.')
  }, [])

  if (!commerceSupabase) {
    return <MissingCommerceConfig missingVariables={missingCommerceConfig} />
  }

  if (resolution.error) return <InvalidStoreLink message={resolution.error} />

  return (
    <main className="min-h-svh bg-[#f7f7f4] text-[#17211d]">
      <header className="border-b border-neutral-200 bg-white/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <a className="inline-flex items-center gap-2 text-sm font-bold text-neutral-600 no-underline transition hover:text-neutral-950" href="/">
            <ArrowLeft aria-hidden="true" size={17} />
            Volver al showroom
          </a>
        </div>
      </header>

      <section className="py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {resolution.loading ? (
            <p className="px-4 py-16 text-center text-neutral-600" role="status">Cargando tienda…</p>
          ) : (
            <>
              {!resolution.props.checkout && (
                <p className="mb-4 rounded-lg border border-neutral-200 bg-white p-4 text-sm text-neutral-600" role="status">
                  Puedes explorar el catálogo y guardar tu selección. Los pedidos por WhatsApp aún no están habilitados para esta tienda.
                </p>
              )}
              <CommerceStore key={resolution.props.storeId} {...resolution.props} />
            </>
          )}
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
