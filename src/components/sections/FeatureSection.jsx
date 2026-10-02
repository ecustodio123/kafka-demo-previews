import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function FeatureSection({ feature }) {
  if (!feature) {
    return null
  }

  return (
    <section className="section section--feature">
      <Container className="feature-grid">
        <SectionHeading
          eyebrow={feature.eyebrow}
          title={feature.title}
          description={feature.description}
        />
        <div className="visual-placeholder" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </Container>
    </section>
  )
}
