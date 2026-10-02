import { Container } from '../ui/Container'

export function TestimonialsSection({ clientName }) {
  return (
    <section className="section section--quote">
      <Container>
        <blockquote>
          “Hola, sabemos que estuviste interesado. Te preparamos un pequeno adelanto visual de
          como podria verse tu web con Kafka. No es una version final, sino una muestra rapida de
          estilo, estructura y direccion visual.”
        </blockquote>
        <p>Mensaje comercial para {clientName}</p>
      </Container>
    </section>
  )
}
