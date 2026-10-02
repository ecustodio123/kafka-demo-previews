import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function OccasionsSection({ occasions }) {
  if (!occasions?.items?.length) {
    return null
  }

  return (
    <section className="section section--occasions" id="ocasiones">
      <Container>
        <SectionHeading
          eyebrow={occasions.eyebrow}
          title={occasions.title}
          description={occasions.description}
        />
        <div className="occasion-grid">
          {occasions.items.map((item) => (
            <article className="occasion-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div>
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
