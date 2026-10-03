import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function FaqSection({ faq }) {
  if (!faq?.length) {
    return null
  }

  return (
    <section className="section" id="preguntas">
      <Container className="faq-layout">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Respuestas que reducen fricción antes del contacto"
        />
        <div className="faq-list">
          {faq.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
