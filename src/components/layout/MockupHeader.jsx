import { Container } from '../ui/Container'

export function MockupHeader({ mockup }) {
  return (
    <header className="preview-header">
      <Container className="preview-header__inner">
        <a className="brand" href="/">
          <span className="brand__mark">K</span>
          <span>
            <strong>Kafka Pages</strong>
            <small>Showroom interno</small>
          </span>
        </a>
        <nav aria-label="Secciones de la página">
          <a href="#galeria">Galeria</a>
          {mockup.optionalSections?.beforeAfter ? <a href="#resultados">Resultados</a> : null}
          {mockup.optionalSections?.occasions ? <a href="#ocasiones">Ocasiones</a> : null}
          {mockup.optionalSections?.featured ? <a href="#destacados">Destacados</a> : null}
          <a href="#servicios">Servicios</a>
          {mockup.optionalSections?.process ? <a href="#proceso">Pedido</a> : null}
          {mockup.optionalSections?.onlineServices ? <a href="#servicios-en-linea">Online</a> : null}
          {mockup.optionalSections?.team ? <a href="#equipo">Equipo</a> : null}
          {mockup.optionalSections?.whatsapp ? <a href="#whatsapp">WhatsApp</a> : null}
          <a href="#contacto">Contacto</a>
        </nav>
        <span className="preview-header__client">{mockup.clientName}</span>
      </Container>
    </header>
  )
}
