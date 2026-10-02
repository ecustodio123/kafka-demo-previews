import { Container } from '../ui/Container'

export function MockupFooter({ mockup }) {
  return (
    <footer className="preview-footer">
      <Container className="preview-footer__inner">
        <p>
          Vista preparada para <strong>{mockup.clientName}</strong> por Kafka.
        </p>
        <a href="/">Volver a Kafka Pages</a>
      </Container>
    </footer>
  )
}
