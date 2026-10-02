import { Badge } from '../components/ui/Badge'
import { Container } from '../components/ui/Container'

const publishedProjects = [
  {
    name: 'Surevia Group',
    category: 'Cargo Risk Management',
    url: 'https://sureviagroup.com/home',
    image: '/client-work/surevia.png',
    description:
      'Sitio corporativo para comunicar gestion de riesgos de carga, coberturas y respaldo operativo con una presencia seria y clara.',
    result: 'Proyecto publicado para presentar una propuesta especializada y facilitar contacto comercial.',
  },
  {
    name: 'Cafe Siniestro',
    category: 'Riesgos, seguros y supply chain',
    url: 'https://cafesiniestro.com/',
    image: '/client-work/cafe-siniestro.png',
    description:
      'Marca personal y plataforma de contenidos para convertir experiencia tecnica en conversacion clara y autoridad profesional.',
    result: 'Proyecto publicado para posicionar conocimiento, contenido y contacto directo.',
  },
  {
    name: 'SUINTEC Peru',
    category: 'Suministros industriales tecnologicos',
    url: 'https://suintecperu.com/',
    image: '/client-work/suintec.png',
    description:
      'Web comercial para mostrar bombas, motores, tableros y soluciones industriales con cotizacion directa.',
    result: 'Proyecto publicado para ordenar productos, reforzar confianza y abrir conversaciones de venta.',
  },
]

export function HomePage() {
  return (
    <main className="home-page home-page--public">
      <section className="home-hero">
        <Container className="home-hero__grid">
          <div>
            <Badge>Kafka Studio</Badge>
            <h1>Disenamos sitios web que ayudan a negocios reales a verse mejor y vender con mas confianza.</h1>
            <p>
              Creamos landing pages, sitios corporativos e interfaces web con foco en diseno,
              estructura, responsive, WhatsApp, SEO base y publicacion. Aqui puedes ver algunos
              proyectos ya publicados para clientes de Kafka.
            </p>
            <div className="home-hero__actions">
              <a className="button button--primary" href="#clientes">
                Ver proyectos publicados
              </a>
              <a className="button button--secondary" href="#clientes">
                Casos reales
              </a>
            </div>
          </div>
          <aside className="home-showcase" aria-label="Proyectos publicados por Kafka">
            <div className="home-showcase__summary">
              <span>Trabajo publicado</span>
              <strong>3 sitios reales online</strong>
              <p>Clientes con presencia digital clara, responsive y lista para vender.</p>
            </div>
            <div className="home-showcase__stack">
              {publishedProjects.map((project) => (
                <a
                  className="home-showcase__item"
                  href={project.url}
                  key={project.name}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={project.image} alt={`Vista previa de ${project.name}`} />
                  <span>{project.name}</span>
                </a>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <section className="home-section home-section--studio">
        <Container className="studio-grid">
          <article>
            <span>Que hacemos</span>
            <h2>Sitios web bonitos, claros y listos para publicar.</h2>
          </article>
          <article>
            <p>
              Ayudamos a pequenos negocios, estudios y empresas a ordenar su presencia digital con
              paginas que se entienden rapido y se ven profesionales desde el celular.
            </p>
          </article>
        </Container>
      </section>

      <section className="home-section client-work-section" id="clientes">
        <Container>
          <div className="client-work-heading">
            <span>Clientes publicados</span>
            <h2>Proyectos reales que ya estan online</h2>
            <p>
              Estos trabajos muestran cómo convertimos una idea comercial en una web clara,
              responsive y lista para compartir con clientes.
            </p>
          </div>
          <div className="client-work-grid">
            {publishedProjects.map((project) => (
              <a
                className="client-work-card"
                href={project.url}
                key={project.name}
                rel="noreferrer"
                target="_blank"
              >
                <img src={project.image} alt={`Captura de ${project.name}`} loading="lazy" />
                <div className="client-work-card__content">
                  <span>{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <small>{project.result}</small>
                  <strong>Visitar sitio</strong>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
