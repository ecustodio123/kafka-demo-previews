import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function CtaSection({ preview }) {
  return (
    <section className="section section--final">
      <Container className="final-cta">
        <span>Kafka Pages</span>
        <h2>Listo para transformar este mockup en una propuesta formal?</h2>
        <p>
          Podemos preparar alcance, tiempos, estructura de contenido y precio para convertir esta
          direccion visual en un sitio publicable.
        </p>
        <Button>{preview.hero.cta}</Button>
      </Container>
    </section>
  )
}
