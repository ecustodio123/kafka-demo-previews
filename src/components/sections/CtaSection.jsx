import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function CtaSection({ preview }) {
  return (
    <section className="section section--final">
      <Container className="final-cta">
        <span>Kafka Pages</span>
        <h2>Listo para convertir esta vista en una web publicada?</h2>
        <p>
          Podemos cerrar el alcance, ordenar el contenido final y preparar una cotizacion con tiempos,
          entregables y precio.
        </p>
        <Button>{preview.hero.cta}</Button>
      </Container>
    </section>
  )
}
