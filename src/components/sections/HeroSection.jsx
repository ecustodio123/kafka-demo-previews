import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function HeroSection({ preview }) {
  return (
    <section className="hero-section">
      <Container className="hero-section__grid">
        <div className="hero-section__content">
          <span className="eyebrow">{preview.hero.eyebrow}</span>
          <h1>{preview.hero.title}</h1>
          <p>{preview.hero.description}</p>
          <div className="hero-section__actions">
            <Button>{preview.hero.cta}</Button>
            <Button href="#servicios" variant="secondary">
              {preview.hero.secondaryCta}
            </Button>
          </div>
        </div>
        <aside className="hero-visual" aria-label="Vista visual de la propuesta">
          <img src={preview.hero.image} alt={`Imagen referencial para ${preview.clientName}`} />
          <div className="hero-visual__glass">
            <span>{preview.industry}</span>
            <strong>{preview.clientName}</strong>
            <p>{preview.summary}</p>
          </div>
          <div className="hero-visual__meta">
            <span>Visual</span>
            <span>Mobile</span>
            <span>WhatsApp</span>
          </div>
        </aside>
      </Container>
    </section>
  )
}
