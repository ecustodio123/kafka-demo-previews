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
              <p>Una opción pensada para orientar al cliente antes de conversar con el equipo.</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
