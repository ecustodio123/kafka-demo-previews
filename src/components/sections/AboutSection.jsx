import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection({ about }) {
  return (
    <section className="section section--about" id="quienes-somos">
      <Container className="about-grid">
        <div className="about-copy">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
          />
          {about.insight ? (
            <article className="about-insight-card">
              <span>{about.insight.eyebrow}</span>
              <h3>{about.insight.title}</h3>
              <p>{about.insight.description}</p>
              <ul>
                {about.insight.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ) : null}
        </div>
        {about.card ? (
          <article className="about-story-card">
            <img src={about.card.image} alt={about.card.title} loading="lazy" />
            <div>
              <h3>{about.card.title}</h3>
              <p>{about.card.description}</p>
              <ul>
                {about.card.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ) : (
          <div className="stats-grid">
            {about.stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
