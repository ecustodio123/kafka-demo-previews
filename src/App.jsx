import { lazy, Suspense, useEffect } from 'react'

import { getMockupBySlug, getMockupMeta } from './data/mockups'
import { ChatbaseWidget } from './components/integrations/ChatbaseWidget'
import { NotFoundPage } from './pages/NotFoundPage'

// Cada página se descarga solo cuando se visita, así un cliente que abre su mockup
// no baja el código de la home ni de los demás mockups.
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })))
const MockupPage = lazy(() => import('./pages/MockupPage').then((m) => ({ default: m.MockupPage })))
const TiendasPruebaPage = lazy(() => import('./pages/TiendasPruebaPage').then((m) => ({ default: m.TiendasPruebaPage })))

function useDocumentMeta(mockup) {
  useEffect(() => {
    if (!mockup) return

    const { title, description } = getMockupMeta(mockup)
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [mockup])
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const slug = path.startsWith('/previews/')
    ? path.replace('/previews/', '')
    : path.replace('/', '')
  const mockup = path === '/' ? null : getMockupBySlug(slug)

  useDocumentMeta(mockup)

  let page = <NotFoundPage />
  if (path === '/') page = <HomePage />
  else if (path === '/kafka-store' || path === '/tiendas-prueba') page = <TiendasPruebaPage />
  else if (mockup) page = <MockupPage mockup={mockup} />

  return (
    <>
      <Suspense fallback={null}>{page}</Suspense>
      <ChatbaseWidget />
    </>
  )
}

export default App
