import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Check, MapPin, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'

import { Badge, Button, Card } from '../ui/primitives'
import { cn } from '../../lib/utils'

const defaultDistricts = [
  'Ancón',
  'Ate',
  'Barranco',
  'Breña',
  'Carabayllo',
  'Chaclacayo',
  'Chorrillos',
  'Cieneguilla',
  'Comas',
  'El Agustino',
  'Independencia',
  'Jesús María',
  'La Molina',
  'La Victoria',
  'Lima',
  'Lince',
  'Los Olivos',
  'Lurigancho',
  'Lurín',
  'Magdalena del Mar',
  'Miraflores',
  'Pachacámac',
  'Pucusana',
  'Pueblo Libre',
  'Puente Piedra',
  'Punta Hermosa',
  'Punta Negra',
  'Rímac',
  'San Bartolo',
  'San Borja',
  'San Isidro',
  'San Juan de Lurigancho',
  'San Juan de Miraflores',
  'San Luis',
  'San Martín de Porres',
  'San Miguel',
  'Santa Anita',
  'Santa María del Mar',
  'Santa Rosa',
  'Santiago de Surco',
  'Surquillo',
  'Villa El Salvador',
  'Villa María del Triunfo',
]

const defaultTheme = {
  accent: '#0b63f6',
  accentText: 'text-[#0b63f6]',
  background: 'bg-white',
  border: 'border-[#dfe5f1]',
  cardBackground: 'bg-white',
  checkoutButton: 'bg-[#25d366] text-[#11351f] hover:bg-[#22c55e]',
  focusRing: 'focus-visible:ring-[#0b63f6]',
  heading: 'text-[#09111f]',
  muted: 'text-[#64748b]',
  orderBackground: 'bg-[#f5f7fb]',
  productButtonIdle: 'border border-[#dfe5f1] bg-[#f5f7fb] text-[#09111f] hover:border-[#0b63f6]/35 hover:bg-white',
  productButtonSelected: 'bg-[#09111f] text-white hover:bg-[#111827]',
  productCard: 'border-[#dfe5f1] bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]',
  productCardSelected: 'border-[#0b63f6] ring-4 ring-[#dbeafe]',
  tag: 'bg-white text-[#0b63f6]',
  totalBackground: 'bg-[#09111f]',
}

const defaultCheckout = {
  areaLabel: 'Solo Lima Metropolitana',
  disabledText: 'Completa los datos para finalizar',
  enabled: true,
  finalButtonLabel: 'Finalizar pedido por WhatsApp',
  helperText: 'Antes de abrir WhatsApp te pediremos datos de entrega para armar el mensaje completo.',
  modalDescription: 'Completa la información de entrega. Con estos datos armamos el mensaje final para WhatsApp.',
  modalTitle: 'Datos para confirmar tu pedido',
  noticeText: 'Si prefieres recojo en tienda, indícalo en la referencia o consulta por WhatsApp.',
  noticeTitle: 'Envíos solo dentro de Lima',
  paymentNote: 'El pago y el costo de delivery se confirman directamente por WhatsApp.',
}

function normalizeTheme(theme = {}) {
  return { ...defaultTheme, ...theme }
}

function normalizeCheckout(checkout = {}) {
  return { ...defaultCheckout, ...checkout }
}

function getProductSubtitle(product) {
  return product.category || product.game || product.subtitle || ''
}

function getDefaultLine(product, index) {
  const subtitle = getProductSubtitle(product)
  const parts = [product.title, subtitle, product.price].filter(Boolean)

  return `${index + 1}. ${parts.join(' - ')}`
}

function buildWhatsAppMessage({ checkoutData, checkout, items, message }) {
  if (message?.buildMessage) {
    return message.buildMessage(items, checkoutData)
  }

  const productList = items.map((item, index) => getDefaultLine(item, index)).join('\n')
  const intro = message?.intro || 'Hola, quiero finalizar mi pedido.'
  const finalQuestion = message?.finalQuestion || '¿Me ayudan a confirmar stock, total, delivery y forma de pago?'
  const deliveryNote = checkout?.areaConfirmation || 'Importante: entiendo que el envío aplica solo dentro de Lima.'

  return `${intro}\n\nPRODUCTOS:\n${productList}\n\nDATOS DEL CLIENTE:\nNombre: ${checkoutData.fullName}\nWhatsApp: ${checkoutData.phone}\nDistrito: ${checkoutData.district}\nDirección: ${checkoutData.address}\nReferencia: ${checkoutData.reference}\n\n${deliveryNote}\n\n${finalQuestion}`
}

function getPriceNumber(price) {
  const match = String(price).match(/[\d.]+/)

  return match ? Number(match[0]) : 0
}

export function WhatsAppOrderFlow({
  checkout,
  message,
  order,
  products,
  productSection,
  theme,
  whatsappNumber,
}) {
  const prefersReducedMotion = useReducedMotion()
  const lift = prefersReducedMotion ? {} : { whileTap: { scale: 0.99 } }
  const resolvedTheme = normalizeTheme(theme)
  const resolvedCheckout = normalizeCheckout(checkout)
  const [cartItems, setCartItems] = useState([])
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [checkoutData, setCheckoutData] = useState({
    address: '',
    district: '',
    fullName: '',
    phone: '',
    reference: '',
  })

  const hasItems = cartItems.length > 0
  const phoneDigits = checkoutData.phone.replace(/\D/g, '')
  const isCheckoutReady = Object.values(checkoutData).every((value) => value.trim()) && phoneDigits.length === 9
  const productLabel = cartItems.length === 1 ? order.itemSingular : order.itemPlural
  const cartTotal = cartItems.reduce((total, item) => total + getPriceNumber(item.price), 0)
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage({
    checkout: resolvedCheckout,
    checkoutData,
    items: cartItems,
    message,
  }))}`

  const toggleCartItem = (item) => {
    setCartItems((currentItems) => {
      const itemExists = currentItems.some((cartItem) => cartItem.title === item.title)

      if (itemExists) {
        return currentItems.filter((cartItem) => cartItem.title !== item.title)
      }

      return [...currentItems, item]
    })
  }

  const removeCartItem = (title) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.title !== title))
  }

  const updateCheckoutData = (field, value) => {
    setCheckoutData((currentData) => ({ ...currentData, [field]: value }))
  }

  return (
    <>
      <ProductGrid
        cartItems={cartItems}
        lift={lift}
        productSection={productSection}
        products={products}
        theme={resolvedTheme}
        onToggleCartItem={toggleCartItem}
      />

      <OrderSummary
        cartItems={cartItems}
        cartTotal={cartTotal}
        checkout={resolvedCheckout}
        hasItems={hasItems}
        order={order}
        productLabel={productLabel}
        productSection={productSection}
        theme={resolvedTheme}
        onClearCart={() => setCartItems([])}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onRemoveItem={removeCartItem}
      />

      {isCheckoutOpen ? (
        <CheckoutModal
          checkout={resolvedCheckout}
          checkoutData={checkoutData}
          isReady={isCheckoutReady}
          theme={resolvedTheme}
          whatsappHref={whatsappHref}
          onChange={updateCheckoutData}
          onClose={() => setIsCheckoutOpen(false)}
        />
      ) : null}
    </>
  )
}

function ProductGrid({ cartItems, lift, productSection, products, theme, onToggleCartItem }) {
  return (
    <section className={cn('px-4 py-20 sm:px-6 lg:px-8', productSection.className)} id={productSection.id}>
      <div className={cn('mx-auto max-w-[1160px]', productSection.containerClassName)}>
        <div className={cn(productSection.actionHref && 'flex flex-col justify-between gap-5 sm:flex-row sm:items-end')}>
          <SectionIntro
            description={productSection.description}
            eyebrow={productSection.eyebrow}
            headingClassName={productSection.headingClassName}
            mutedClassName={productSection.mutedClassName || theme.muted}
            title={productSection.title}
            theme={theme}
          />
          {productSection.actionHref ? (
            <Button asChild variant="secondary" className={cn('w-fit rounded-full', productSection.actionClassName)}>
              <a href={productSection.actionHref}>{productSection.actionLabel}</a>
            </Button>
          ) : null}
        </div>

        <div className={cn('mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4', productSection.gridClassName)}>
          {products.map((item) => {
            const isSelected = cartItems.some((cartItem) => cartItem.title === item.title)
            const subtitle = getProductSubtitle(item)

            return (
              <motion.article
                className={cn(
                  'group overflow-hidden rounded-[1.75rem] border transition',
                  theme.productCard,
                  isSelected && theme.productCardSelected,
                )}
                key={item.title}
                {...lift}
              >
                <div className="relative overflow-hidden">
                  <img
                    className={cn('aspect-square w-full object-cover', productSection.imageClassName)}
                    src={item.image}
                    alt={item.title}
                    loading="eager" decoding="async"
                  />
                  {productSection.imageOverlay ? <div className={productSection.imageOverlay} /> : null}
                  {item.tag ? (
                    <span
                      className={cn('absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black shadow', theme.tag)}
                      style={item.accent ? { backgroundColor: item.accent } : undefined}
                    >
                      {item.tag}
                    </span>
                  ) : null}
                  {isSelected ? (
                    <span className={cn('absolute right-4 top-4 grid size-10 place-items-center rounded-full text-white shadow-lg', productSection.selectedBadgeClassName || 'bg-[#111827]')}>
                      <Check aria-hidden="true" className="block shrink-0" size={18} />
                    </span>
                  ) : null}
                </div>
                <div className="grid gap-3 p-5">
                  {subtitle ? (
                    <span className={cn('text-xs font-black uppercase tracking-[0.12em]', theme.accentText)}>
                      {subtitle}
                    </span>
                  ) : null}
                  <h3 className={cn('text-lg font-black leading-tight', productSection.productTitleClassName || theme.heading)}>
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <strong className={cn('text-sm font-black', productSection.priceClassName || theme.accentText)}>
                      {item.price}
                    </strong>
                    {item.oldPrice ? <span className="text-sm text-neutral-400 line-through">{item.oldPrice}</span> : null}
                  </div>
                  <button
                    className={cn(
                      'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                      theme.focusRing,
                      isSelected ? theme.productButtonSelected : theme.productButtonIdle,
                    )}
                    onClick={() => onToggleCartItem(item)}
                    type="button"
                  >
                    {isSelected ? <Minus aria-hidden="true" className="block shrink-0" size={16} /> : <Plus aria-hidden="true" className="block shrink-0" size={16} />}
                    {isSelected ? 'Quitar del pedido' : 'Agregar al pedido'}
                  </button>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function OrderSummary({
  cartItems,
  cartTotal,
  checkout,
  hasItems,
  order,
  productLabel,
  productSection,
  theme,
  onClearCart,
  onOpenCheckout,
  onRemoveItem,
}) {
  return (
    <section className={cn('px-4 pb-20 sm:px-6 lg:px-8', order.className)} id={order.id}>
      <div className={cn('mx-auto mb-10 hidden max-w-[1160px] items-center gap-4 lg:flex', order.containerClassName)} aria-hidden="true">
        <span className={cn('h-px flex-1', order.dividerClassName || 'bg-neutral-200')} />
        <span className={cn('inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.12em]', order.pillClassName)}>
          <ShoppingBag aria-hidden="true" className="block shrink-0" size={14} />
          {order.pillLabel}
        </span>
        <span className={cn('h-px flex-1', order.dividerClassName || 'bg-neutral-200')} />
      </div>

      <div className={cn('mx-auto grid max-w-[1160px] gap-6 rounded-[2rem] border p-5 shadow-[0_26px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10', theme.border, theme.orderBackground, order.containerClassName)}>
        <div className="content-center">
          <Badge className={cn('items-center gap-2', order.badgeClassName)}>
            <ShoppingBag aria-hidden="true" className="block shrink-0" size={14} />
            {order.eyebrow}
          </Badge>
          <h2 className={cn('mt-5 text-4xl font-black leading-none sm:text-5xl', order.titleClassName || theme.heading)}>
            {order.title}
          </h2>
          <p className={cn('mt-5 text-base leading-8', order.descriptionClassName || theme.muted)}>
            {order.description}
          </p>
          <div className={cn('mt-7 grid gap-3 text-sm font-bold', order.benefitsClassName || theme.muted)}>
            {order.benefits.map((item) => (
              <div className="flex items-center gap-3" key={item}>
                <span className={cn('grid size-7 shrink-0 place-items-center rounded-full', order.benefitIconClassName)}>
                  <Check aria-hidden="true" className="block shrink-0" size={15} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <Card className={cn('rounded-[1.75rem] p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-5', theme.border, theme.cardBackground, order.cardClassName)}>
          <div className={cn('flex flex-wrap items-center justify-between gap-3 border-b pb-4', order.summaryDividerClassName || theme.border)}>
            <div>
              <span className={cn('text-xs font-black uppercase tracking-[0.12em]', order.selectionLabelClassName || theme.accentText)}>
                {order.selectionLabel}
              </span>
              <h3 className={cn('mt-1 text-2xl font-black', theme.heading)}>
                {hasItems ? `${cartItems.length} ${productLabel}` : order.emptyTitle}
              </h3>
            </div>
            {hasItems ? (
              <button
                className={cn('inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black transition', order.clearButtonClassName)}
                onClick={onClearCart}
                type="button"
              >
                <Trash2 aria-hidden="true" className="block shrink-0" size={15} />
                Vaciar
              </button>
            ) : null}
          </div>

          {hasItems ? (
            <div className="mt-4 grid gap-3">
              {cartItems.map((item) => (
                <div
                  className={cn('grid grid-cols-[72px_minmax(0,1fr)_auto] items-center gap-3 rounded-[1.25rem] border p-2', order.lineItemClassName)}
                  key={item.title}
                >
                  <img
                    className="size-[72px] rounded-[1rem] object-cover"
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <strong className={cn('block truncate text-sm font-black', theme.heading)}>{item.title}</strong>
                    {getProductSubtitle(item) ? (
                      <span className={cn('mt-1 block text-xs font-black uppercase tracking-[0.1em]', theme.accentText)}>
                        {getProductSubtitle(item)}
                      </span>
                    ) : null}
                    <span className={cn('mt-1 block text-sm font-black', order.priceClassName || theme.accentText)}>{item.price}</span>
                  </div>
                  <button
                    aria-label={`Quitar ${item.title} del pedido`}
                    className={cn('grid size-10 place-items-center rounded-full transition', order.removeButtonClassName)}
                    onClick={() => onRemoveItem(item.title)}
                    type="button"
                  >
                    <Trash2 aria-hidden="true" className="block shrink-0" size={16} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className={cn('mt-4 rounded-[1.5rem] border border-dashed p-6 text-center', order.emptyClassName)}>
              <span className={cn('mx-auto grid size-12 place-items-center rounded-full shadow-sm', order.emptyIconClassName)}>
                <ShoppingBag aria-hidden="true" className="block shrink-0" size={21} />
              </span>
              <p className={cn('mt-4 text-sm font-bold leading-6', order.emptyTextClassName || theme.muted)}>
                {order.emptyText}
              </p>
            </div>
          )}

          {order.showTotal ? (
            <div className={cn('mt-5 rounded-[1.35rem] p-4 text-white', order.totalClassName || theme.totalBackground)}>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-bold text-white/70">{order.totalLabel || 'Total referencial'}</span>
                <strong className="text-2xl font-black">{hasItems ? `${order.totalPrefix || 'Desde S/'} ${order.formatTotal ? order.formatTotal(cartTotal) : cartTotal.toFixed(2)}` : 'Por definir'}</strong>
              </div>
              <p className="mt-2 text-xs leading-5 text-white/60">
                {order.totalNote}
              </p>
            </div>
          ) : null}

          {hasItems ? (
            <Button
              className={cn('mt-4 w-full rounded-full', theme.checkoutButton)}
              onClick={onOpenCheckout}
              size="lg"
              type="button"
            >
              <WhatsAppIcon aria-hidden="true" className="block size-5 shrink-0" />
              {order.checkoutButtonLabel}
            </Button>
          ) : (
            <Button
              asChild
              className={cn('mt-4 w-full rounded-full', theme.checkoutButton)}
              size="lg"
            >
              <a href={`#${productSection.id}`}>
                <ShoppingBag aria-hidden="true" className="block size-5 shrink-0" />
                {order.emptyButtonLabel}
              </a>
            </Button>
          )}

          <p className={cn('mt-3 text-center text-xs font-bold leading-5', order.helperClassName || theme.muted)}>
            {checkout.helperText}
          </p>
        </Card>
      </div>
    </section>
  )
}

function CheckoutModal({ checkout, checkoutData, isReady, onChange, onClose, theme, whatsappHref }) {
  const districts = checkout.districts || defaultDistricts

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-[#050816]/72 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
    >
      <div className="max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/20 bg-white shadow-[0_30px_120px_rgba(2,6,23,0.35)]">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#dfe5f1] bg-white/95 p-5 backdrop-blur sm:p-6">
          <div>
            <Badge className={cn('border-[#dfe5f1] bg-[#f5f7fb]', theme.accentText)}>
              {checkout.areaLabel}
            </Badge>
            <h2 id="checkout-title" className={cn('mt-4 text-3xl font-black leading-none sm:text-4xl', checkout.modalTitleClassName || theme.heading)}>
              {checkout.modalTitle}
            </h2>
            <p className={cn('mt-3 text-sm font-medium leading-6', theme.muted)}>
              {checkout.modalDescription}
            </p>
          </div>
          <button
            aria-label="Cerrar formulario de pedido"
            className={cn('grid size-10 shrink-0 place-items-center rounded-full bg-[#f5f7fb] transition hover:bg-[#edf4ff]', theme.muted)}
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>

        <div className="grid gap-5 p-5 sm:p-6">
          <div className="rounded-[1.5rem] border border-[#dfe5f1] bg-[#f8fafc] p-4">
            <div className="flex gap-3">
              <span className={cn('grid size-10 shrink-0 place-items-center rounded-full text-white', checkout.noticeIconClassName || 'bg-[#0b63f6]')}>
                <MapPin aria-hidden="true" size={18} />
              </span>
              <div>
                <strong className={cn('block text-sm font-black', theme.heading)}>{checkout.noticeTitle}</strong>
                <p className={cn('mt-1 text-sm leading-6', theme.muted)}>
                  {checkout.noticeText}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <CheckoutField
              label="Nombre y apellido"
              name="fullName"
              onChange={onChange}
              placeholder="Ej. Antonio Salinas"
              theme={theme}
              value={checkoutData.fullName}
            />
            <CheckoutField
              inputMode="numeric"
              label="Número de WhatsApp"
              maxLength={9}
              name="phone"
              onChange={(field, value) => onChange(field, value.replace(/\D/g, '').slice(0, 9))}
              placeholder="9 dígitos"
              theme={theme}
              value={checkoutData.phone}
            />
            <div>
              <label className={cn('text-sm font-black', theme.heading)} htmlFor="district">
                Distrito
                <span className={cn('ml-1', theme.accentText)}>*</span>
              </label>
              <select
                className={cn('mt-2 min-h-12 w-full rounded-2xl border border-[#dfe5f1] bg-white px-4 py-3 text-sm font-bold outline-none transition focus:ring-4', theme.heading)}
                id="district"
                name="district"
                onChange={(event) => onChange('district', event.target.value)}
                value={checkoutData.district}
              >
                <option value="">Seleccionar distrito</option>
                {districts.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
            <CheckoutField
              label="Dirección"
              name="address"
              onChange={onChange}
              placeholder="Ej. Calle Los Álamos 123"
              theme={theme}
              value={checkoutData.address}
            />
            <div className="sm:col-span-2">
              <CheckoutField
                label="Referencia"
                name="reference"
                onChange={onChange}
                placeholder="Ej. Frente a parque, edificio azul, tienda 2"
                theme={theme}
                value={checkoutData.reference}
              />
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-[#050816] p-4 text-white">
            <div className="flex items-start gap-3">
              <ShoppingBag aria-hidden="true" className="mt-1 shrink-0 text-[#ffcf3f]" size={20} />
              <div>
                <strong className="block text-sm font-black">Mensaje organizado para WhatsApp</strong>
                <p className="mt-1 text-sm leading-6 text-white/64">
                  Se enviarán tus datos junto con los productos seleccionados para confirmar stock, total, delivery y forma de pago.
                </p>
              </div>
            </div>
          </div>

          {isReady ? (
            <Button asChild className={cn('rounded-full', theme.checkoutButton)} size="lg">
              <a href={whatsappHref} rel="noreferrer" target="_blank">
                <WhatsAppIcon aria-hidden="true" className="block size-5 shrink-0" />
                {checkout.finalButtonLabel}
              </a>
            </Button>
          ) : (
            <Button className="rounded-full bg-[#cbd5e1] text-[#475569] hover:bg-[#cbd5e1]" disabled size="lg" type="button">
              <WhatsAppIcon aria-hidden="true" className="block size-5 shrink-0" />
              {checkout.disabledText}
            </Button>
          )}
          <p className={cn('text-center text-xs font-bold leading-5', theme.muted)}>
            {checkout.paymentNote}
          </p>
        </div>
      </div>
    </div>
  )
}

function CheckoutField({ inputMode, label, maxLength, name, onChange, placeholder, theme, value }) {
  return (
    <div>
      <label className={cn('text-sm font-black', theme.heading)} htmlFor={name}>
        {label}
        <span className={cn('ml-1', theme.accentText)}>*</span>
      </label>
      <input
        className={cn('mt-2 min-h-12 w-full rounded-2xl border border-[#dfe5f1] bg-white px-4 py-3 text-sm font-bold outline-none transition placeholder:text-[#94a3b8] focus:ring-4', theme.heading)}
        id={name}
        inputMode={inputMode}
        maxLength={maxLength}
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

function SectionIntro({ description, eyebrow, headingClassName, mutedClassName, theme, title }) {
  return (
    <div className="max-w-3xl">
      <Badge className={cn('border-neutral-200 bg-white', theme.accentText)}>
        {eyebrow}
      </Badge>
      <h2 className={cn('mt-5 text-4xl font-black leading-none sm:text-5xl', headingClassName || theme.heading)}>
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-5 text-base leading-8', mutedClassName || theme.muted)}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2a9.86 9.86 0 0 0-8.48 14.9L2.2 22l5.23-1.33A9.94 9.94 0 1 0 12.04 2Zm0 1.78a8.15 8.15 0 0 1 0 16.3 8.27 8.27 0 0 1-4.15-1.12l-.3-.18-3.1.79.82-3.02-.2-.31a8.16 8.16 0 0 1 6.93-12.46Zm-3.3 4.37c-.18 0-.46.06-.7.32-.25.26-.92.9-.92 2.18 0 1.29.94 2.53 1.07 2.7.13.18 1.82 2.92 4.5 3.98 2.23.88 2.69.7 3.17.66.49-.05 1.57-.64 1.8-1.26.22-.62.22-1.15.15-1.26-.06-.11-.24-.18-.51-.31-.26-.13-1.56-.77-1.8-.86-.25-.09-.43-.13-.6.13-.18.27-.7.86-.85 1.04-.16.18-.31.2-.58.07-.26-.14-1.12-.42-2.14-1.33-.79-.7-1.32-1.57-1.47-1.84-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.83-1.98-.22-.53-.44-.45-.6-.46h-.52Z" />
    </svg>
  )
}
