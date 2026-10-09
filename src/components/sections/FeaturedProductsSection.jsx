import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function FeaturedProductsSection({ featured }) {
  if (!featured?.items?.length) {
    return null
  }

  return (
    <section className="section section--featured" id="destacados">
      <Container>
        <SectionHeading
          eyebrow={featured.eyebrow}
          title={featured.title}
          description={featured.description}
        />
        <div className="featured-grid">
          {featured.items.map((item) => (
            <article className="featured-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="eager" decoding="async" />
              <div className="featured-card__content">
                <span>{item.price}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#contacto">{item.cta ?? 'Pedir similar'}</a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
