import { getMockupBySlug } from './data/mockups'
import { HomePage } from './pages/HomePage'
import { MockupPage } from './pages/MockupPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === '/') {
    return <HomePage />
  }

  const slug = path.replace('/', '')
  const mockup = getMockupBySlug(slug)

  return mockup ? <MockupPage mockup={mockup} /> : <NotFoundPage />
}

export default App
