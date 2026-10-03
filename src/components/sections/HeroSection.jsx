import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function HeroSection({ preview }) {
  if (preview.hero.variant === 'florist') {
    return <FloristHeroSection preview={preview} />
  }

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
        <aside className="hero-visual" aria-label="Vista principal">
          <img src={preview.hero.image} alt={`Imagen principal de ${preview.clientName}`} />
          <div className="hero-visual__glass">
            <span>{preview.industry}</span>
            <strong>{preview.clientName}</strong>
            <p>{preview.summary}</p>
          </div>
          <div className="hero-visual__meta">
            <span>Web</span>
            <span>Mobile</span>
            <span>WhatsApp</span>
          </div>
        </aside>
      </Container>
    </section>
  )
}

function FloristHeroSection({ preview }) {
  const { hero } = preview

  return (
    <section className="hero-section hero-section--florist">
      <Container className="florist-hero">
        <div className="florist-hero__copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>

          <div className="florist-hero__actions">
            <Button>{hero.cta}</Button>
            <Button href="#servicios" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>

          <div className="florist-hero__chips" aria-label="Atajos por ocasión">
            {hero.quickLinks?.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <TrustItems items={hero.trust} className="florist-hero__trust--desktop" />
        </div>

        <aside className="florist-hero__showcase" aria-label="Productos destacados">
          <article className="florist-hero__featured">
            <img src={hero.showcase.image} alt={hero.showcase.alt} />
            <div className="florist-hero__featured-card">
              <span>{hero.showcase.eyebrow}</span>
              <strong>{hero.showcase.title}</strong>
              <p>{hero.showcase.description}</p>
              <small>{hero.showcase.price}</small>
            </div>
          </article>

          <div className="florist-hero__side">
            {hero.miniProducts?.map((item) => (
              <article className="florist-hero__mini" key={item.title}>
                <img src={item.image} alt={item.alt} />
                <div>
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                  <small>{item.price}</small>
                </div>
              </article>
            ))}

            <article className="florist-hero__delivery">
              <span>{hero.delivery.eyebrow}</span>
              <strong>{hero.delivery.title}</strong>
              <p>{hero.delivery.description}</p>
            </article>
          </div>
        </aside>

        <TrustItems items={hero.trust} className="florist-hero__trust--mobile" />
      </Container>
    </section>
  )
}

function TrustItems({ items, className }) {
  return (
    <div className={`florist-hero__trust ${className}`}>
      {items?.map((item) => (
        <article key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  )
}
