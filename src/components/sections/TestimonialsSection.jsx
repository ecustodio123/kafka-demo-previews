import { Container } from '../ui/Container'

export function TestimonialsSection({ clientName }) {
  return (
    <section className="section section--quote">
      <Container>
        <blockquote>
          “Preparamos esta vista para mostrar una posible direccion de contenido, estilo y
          experiencia. Si el enfoque encaja, el siguiente paso es definir alcance, tiempos y precio.”
        </blockquote>
        <p>Nota preparada para {clientName}</p>
      </Container>
    </section>
  )
}
