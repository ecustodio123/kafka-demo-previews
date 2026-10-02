import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function OnlineServicesSection({ onlineServices }) {
  if (!onlineServices) {
    return null
  }

  return (
    <section className="section section--tinted" id="servicios-en-linea">
      <Container className="online-services">
        <SectionHeading
          eyebrow={onlineServices.eyebrow}
          title={onlineServices.title}
          description={onlineServices.description}
        />
        <div className="online-services__grid">
          {onlineServices.items.map((item) => (
            <article className="online-card" key={item}>
              <span>{item}</span>
              <p>Espacio visual preparado para una futura etapa, sin prometer backend activo.</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
