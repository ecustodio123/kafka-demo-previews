import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function WhatsAppSection({ whatsapp }) {
  if (!whatsapp?.messages?.length) {
    return null
  }

  return (
    <section className="section section--whatsapp" id="whatsapp">
      <Container className="whatsapp-grid">
        <SectionHeading
          eyebrow={whatsapp.eyebrow}
          title={whatsapp.title}
          description={whatsapp.description}
        />
        <div className="chat-card" aria-label="Conversacion de WhatsApp">
          <div className="chat-card__top">
            <span />
            <strong>WhatsApp</strong>
          </div>
          <div className="chat-card__messages">
            {whatsapp.messages.map((message) => (
              <p className={`chat-bubble chat-bubble--${message.from}`} key={message.text}>
                {message.text}
              </p>
            ))}
          </div>
          <Button>Consultar por WhatsApp</Button>
        </div>
      </Container>
    </section>
  )
}
