import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceCard } from '../ui/ServiceCard'

export function ServicesSection({ services, heading }) {
  const isCarousel = heading?.presentation === 'carousel'
  const renderedServices = isCarousel ? [...services, ...services] : services

  return (
    <section className="section" id="servicios">
      <Container>
        <SectionHeading
          eyebrow={heading?.eyebrow ?? 'Servicios principales'}
          title={heading?.title ?? 'Servicios claros para elegir sin vueltas'}
          description={
            heading?.description ??
            'Información breve, fotos útiles y llamados a la acción para que el visitante pueda consultar rápido.'
          }
        />
        <div className={isCarousel ? 'services-carousel' : 'services-grid'}>
          <div className={isCarousel ? 'services-carousel__track' : 'services-grid__inner'}>
            {renderedServices.map((service, index) => (
              <ServiceCard service={service} index={index % services.length} key={`${service.title}-${index}`} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
