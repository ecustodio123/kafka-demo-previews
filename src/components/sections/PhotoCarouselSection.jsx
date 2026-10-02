import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function PhotoCarouselSection({ gallery }) {
  if (!gallery?.images?.length) {
    return null
  }

  const loopImages = [...gallery.images, ...gallery.images]

  return (
    <section className="section section--photos" id="galeria" aria-label={gallery.title}>
      <Container>
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
        />
      </Container>
      <div className="photo-carousel">
        <div className="photo-carousel__track">
          {loopImages.map((image, index) => (
            <figure className="photo-card" key={`${image.src}-${index}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
