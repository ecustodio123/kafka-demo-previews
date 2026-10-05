import { getMockupBySlug } from './data/mockups'
import { ChatbaseWidget } from './components/integrations/ChatbaseWidget'
import { HomePage } from './pages/HomePage'
import { MockupPage } from './pages/MockupPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === '/') {
    return (
      <>
        <HomePage />
        <ChatbaseWidget />
      </>
    )
  }

  const slug = path.startsWith('/previews/')
    ? path.replace('/previews/', '')
    : path.replace('/', '')
  const mockup = getMockupBySlug(slug)

  return (
    <>
      {mockup ? <MockupPage mockup={mockup} /> : <NotFoundPage />}
      <ChatbaseWidget />
    </>
  )
}

export default App
