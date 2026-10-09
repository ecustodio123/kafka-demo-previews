export function ServiceCard({ service, index }) {
  return (
    <article className="service-card">
      {service.image ? (
        <img className="service-card__image" src={service.image} alt={service.title} loading="eager" decoding="async" />
      ) : null}
      <span className="service-card__number">{String(index + 1).padStart(2, '0')}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  )
}
