import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function ProcessSection({ process }) {
  if (!process) {
    return null
  }

  return (
    <section className="section section--tinted" id="proceso">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />
        <div className="process-list">
          {process.steps.map((step, index) => (
            <article className="process-item" key={typeof step === 'string' ? step : step.title}>
              {typeof step === 'string' ? null : (
                <img className="process-item__image" src={step.image} alt={step.title} loading="eager" decoding="async" />
              )}
              <span>{index + 1}</span>
              <div>
                {typeof step === 'string' ? null : <h3>{step.title}</h3>}
                <p>{typeof step === 'string' ? step : step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
