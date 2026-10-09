import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function BeforeAfterSection({ beforeAfter }) {
  if (!beforeAfter?.items?.length) {
    return null
  }

  return (
    <section className="section section--before-after" id="resultados">
      <Container>
        <SectionHeading
          eyebrow={beforeAfter.eyebrow}
          title={beforeAfter.title}
          description={beforeAfter.description}
        />
        <div className="before-after-grid">
          {beforeAfter.items.map((item) => (
            <article className="before-after-card" key={item.title}>
              <div className="before-after-card__media">
                <img className="before-after-card__before" src={item.image} alt="" loading="eager" decoding="async" />
                <img src={item.image} alt={item.title} loading="eager" decoding="async" />
                <span className="before-after-card__tag before">Antes</span>
                <span className="before-after-card__tag after">Despues</span>
              </div>
              <div className="before-after-card__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
