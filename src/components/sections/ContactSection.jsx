import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

export function ContactSection({ contact }) {
  return (
    <section className="section section--contact" id="contacto">
      <Container className="contact-grid">
        <SectionHeading
          eyebrow="Contacto"
          title={contact.title}
          description={contact.description}
        />
        <aside className="contact-card">
          <span>Canales sugeridos</span>
          <ul>
            {contact.channels.map((channel) => (
              <li key={channel}>{channel}</li>
            ))}
          </ul>
          <div className="visual-form" aria-label="Formulario visual de contacto">
            <div>Nombre</div>
            <div>Servicio de interes</div>
            <div>Mensaje breve</div>
          </div>
          <Button>Contactar por WhatsApp</Button>
        </aside>
      </Container>
    </section>
  )
}
