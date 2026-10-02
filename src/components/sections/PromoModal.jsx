import { useEffect, useState } from 'react'

export function PromoModal({ promo, slug }) {
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const storageKey = `kafka-promo-seen-${slug}`

  useEffect(() => {
    if (!promo) {
      return
    }

    if (window.localStorage.getItem(storageKey) !== 'true') {
      const timer = window.setTimeout(() => setIsVisible(true), 650)
      return () => window.clearTimeout(timer)
    }
  }, [promo, storageKey])

  if (!promo || !isVisible) {
    return null
  }

  const closeModal = () => {
    window.localStorage.setItem(storageKey, 'true')
    setIsVisible(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    closeModal()
  }

  return (
    <div className="promo-modal" role="dialog" aria-modal="true" aria-labelledby="promo-title">
      <div className="promo-modal__backdrop" onClick={closeModal} />
      <form className="promo-modal__card" onSubmit={handleSubmit}>
        <button
          aria-label="Cerrar promocion"
          className="promo-modal__close"
          onClick={closeModal}
          type="button"
        >
          &times;
        </button>
        <div className="promo-modal__media">
          <img src={promo.image} alt={promo.imageAlt} />
          <span>{promo.ribbon}</span>
        </div>
        <div className="promo-modal__content">
          <span>{promo.eyebrow}</span>
          <h2 id="promo-title">{promo.title}</h2>
          <p>{promo.description}</p>
          <label>
            <span>Correo electronico</span>
            <input
              onChange={(event) => setEmail(event.target.value)}
              placeholder={promo.placeholder}
              type="email"
              value={email}
            />
          </label>
          <button className="promo-modal__cta" type="submit">
            {promo.cta}
          </button>
          <small>{promo.terms}</small>
        </div>
      </form>
    </div>
  )
}
