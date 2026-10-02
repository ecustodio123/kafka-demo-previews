export function Button({ children, href = '#contacto', variant = 'primary' }) {
  return (
    <a className={`button button--${variant}`} href={href}>
      {children}
    </a>
  )
}
