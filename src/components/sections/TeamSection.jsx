import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function TeamSection({ team }) {
  if (!team) {
    return null
  }

  return (
    <section className="section" id="equipo">
      <Container>
        <SectionHeading eyebrow={team.eyebrow} title={team.title} />
        <div className="team-grid">
          {team.members.map((member) => (
            <article className="team-card" key={member.role}>
              <div className="team-card__avatar">{member.role.slice(0, 1)}</div>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
