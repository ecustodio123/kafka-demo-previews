import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  BadgePercent,
  Camera,
  Check,
  Clock3,
  Gift,
  Heart,
  MessageCircle,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  UserRound,
} from 'lucide-react'

import kafkaLogo from '../../assets/Kafka Logo.png'
import { Badge, Button, Card } from '../../components/ui/primitives'
import { cn } from '../../lib/utils'

const whatsappNumber = '51928415698'
const whatsappMessage = encodeURIComponent(
  'Hola, quiero enviar flores con Florería Kafka. ¿Me ayudan a elegir una opción disponible para hoy?',
)

const heroImage =
  'https://www.floridelux.ro/storage/app/uploads/public/69a/01a/e1c/thumb_123213_1200_0_0_0_auto.jpg'

const budgets = [
  {
    eyebrow: 'Hasta',
    price: 'S/ 99',
    detail: 'Detalles',
    href: '#favoritos',
    image: 'https://www.floreriabloom.com/cdn/shop/files/ramo-hortensias-rosadas-bloom.jpg?crop=center&height=220&v=1789690844&width=220',
  },
  {
    eyebrow: 'Entre',
    price: 'S/ 100-149',
    detail: 'Clásicos',
    href: '#favoritos',
    image: 'https://www.floreriabloom.com/cdn/shop/files/caja-5-tulipanes-multicolor-bloom-lima.jpg?crop=center&height=220&v=1789684157&width=220',
  },
  {
    eyebrow: 'Entre',
    price: 'S/ 150-199',
    detail: 'Box y ramos',
    href: '#favoritos',
    image: 'https://www.floreriabloom.com/cdn/shop/files/ramo-tulipanes-bloom.jpg?crop=center&height=220&v=1789751774&width=220',
  },
  {
    eyebrow: 'Desde',
    price: 'S/ 200',
    detail: 'Grandes gestos',
    href: '#favoritos',
    image: 'https://www.floreriabloom.com/cdn/shop/files/box-rosas-rojas-sin-lazo-bloom-lima-bloom.jpg?crop=center&height=220&v=1789686867&width=220',
  },
]

const flowerTypes = [
  {
    name: 'Envía hoy',
    icon: Clock3,
  },
  {
    name: 'Tulipanes',
    image: 'https://www.floreriabloom.com/cdn/shop/collections/tulipanes-lima-delivery-arreglos-floreria-bloom.jpg?crop=center&height=200&v=1775697763&width=200',
  },
  {
    name: 'Rosas',
    image: 'https://www.floreriabloom.com/cdn/shop/collections/rosas-lima-delivery-arreglos-floreria-bloom_0f42bccd-cbf5-48b9-ae7f-4502169223f4.jpg?crop=center&height=200&v=1755558513&width=200',
  },
  {
    name: 'Hortensias',
    image: 'https://www.floreriabloom.com/cdn/shop/collections/ramo-hortensias-lima-delivery-arreglos-floreria-bloom_4979e9b9-2553-4756-ba05-bf9ac4e1806f.jpg?crop=center&height=200&v=1755573154&width=200',
  },
  {
    name: 'Girasoles',
    image: 'https://www.floreriabloom.com/cdn/shop/collections/ramode1girasol_1.webp?crop=center&height=200&v=1755568851&width=200',
  },
  {
    name: 'Orquídeas',
    image: 'https://www.floreriabloom.com/cdn/shop/collections/plantas_orquidea.jpg?crop=center&height=200&v=1748277713&width=200',
  },
  {
    name: 'Rosas eternas',
    image: 'https://www.floreriabloom.com/cdn/shop/collections/rosas_preservadas_rosas.jpg?crop=center&height=200&v=1748277801&width=200',
  },
]

const bestSellers = [
  {
    title: 'Caja con 5 tulipanes',
    price: 'S/ 119',
    oldPrice: 'S/ 129',
    tag: 'Ahorra S/ 10',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Box con 12 rosas rojas',
    price: 'S/ 149',
    oldPrice: '',
    tag: 'Favorito',
    image: 'https://images.unsplash.com/photo-1690315478701-33744ce23a61?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Ramo de hortensias',
    price: 'S/ 79',
    oldPrice: '',
    tag: 'Detalle',
    image: 'https://images.pexels.com/photos/1916838/pexels-photo-1916838.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Mix floral Irina',
    price: 'S/ 149',
    oldPrice: 'S/ 169',
    tag: 'Ahorra S/ 20',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Ramo de 6 rosas',
    price: 'S/ 89',
    oldPrice: '',
    tag: 'Clásico',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Pack flores y globos',
    price: 'S/ 159',
    oldPrice: 'S/ 179',
    tag: 'Pack',
    image: 'https://images.unsplash.com/photo-1771085417618-c69f6209e540?auto=format&fit=crop&w=900&q=84',
  },
]

const occasions = [
  { title: 'Cumpleaños', icon: Gift, copy: 'Ramos alegres, globos y detalles listos para enviar hoy.' },
  { title: 'Amor', icon: Heart, copy: 'Rosas, tulipanes y cajas elegantes para decirlo bonito.' },
  { title: 'Graduación', icon: Sparkles, copy: 'Flores vibrantes para celebrar logros importantes.' },
  { title: 'Agradecer', icon: Check, copy: 'Detalles cálidos con tarjeta personalizada incluida.' },
]

const deliveryDistricts = [
  { district: 'San Isidro', price: 'S/ 15' },
  { district: 'Miraflores', price: 'S/ 20' },
  { district: 'Surco', price: 'S/ 25' },
  { district: 'San Borja', price: 'S/ 20' },
]

const benefits = [
  {
    icon: Sparkles,
    title: 'Flores frescas',
    text: 'Rosas, tulipanes, girasoles y hortensias seleccionadas para que el arreglo se vea impecable.',
  },
  {
    icon: Truck,
    title: 'Entrega hoy',
    text: 'Coordinamos entregas en Lima si haces tu pedido dentro del horario disponible.',
  },
  {
    icon: Gift,
    title: 'Tarjeta incluida',
    text: 'Tu dedicatoria se imprime y acompaña el detalle para que llegue completo.',
  },
  {
    icon: Camera,
    title: 'Foto final',
    text: 'Recibes confirmación visual cuando el arreglo llega a destino.',
  },
]

const reviews = [
  {
    quote: 'El ramo llegó dentro del horario y se veía igual de bonito que en la foto. La atención por WhatsApp fue rapidísima.',
    author: 'Carolina M.',
  },
  {
    quote: 'Me ayudaron a elegir por presupuesto y ocasión. Fue muy fácil resolver un regalo el mismo día.',
    author: 'Lorenzo C.',
  },
  {
    quote: 'Buena presentación, tarjeta incluida y confirmación de entrega. Volvería a pedir.',
    author: 'Cecilia S.',
  },
]

export function FloristBloomInspiredPage({ mockup }) {
  const prefersReducedMotion = useReducedMotion()
  const press = prefersReducedMotion ? {} : { whileTap: { scale: 0.98 } }
  const lift = prefersReducedMotion ? {} : { whileTap: { scale: 0.99 } }

  return (
    <main
      className="min-h-svh bg-[#fff8f4] text-[#2f2729]"
      style={{ fontFamily: '"Montserrat", Inter, ui-sans-serif, system-ui, sans-serif' }}
    >
      <Header mockup={mockup} press={press} />
      <Hero lift={lift} press={press} />
      <ShopByBudget lift={lift} />
      <BestSellers lift={lift} press={press} />
      <Occasions />
      <DeliveryFinder />
      <Benefits />
      <Reviews />
      <WelcomeAndAdvisor press={press} />
      <Footer mockup={mockup} />
      <FloatingWhatsApp press={press} />
    </main>
  )
}

function Header({ mockup, press }) {
  return (
    <header className="sticky top-0 z-40 bg-[#963452] text-white">
      <div className="mx-auto flex min-h-[92px] w-[min(1780px,calc(100%-48px))] items-center justify-between gap-6">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label={mockup.clientName}>
          <span className="grid h-16 w-32 place-items-center rounded-full bg-white/95 px-4 shadow-[0_14px_36px_rgba(58,19,32,0.16)]">
            <img className="h-auto w-full" src={kafkaLogo} alt={mockup.clientName} />
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-black text-white lg:flex" aria-label="Navegación principal">
          <a className="inline-flex items-center gap-2 transition hover:text-[#ffd978]" href="#favoritos">
            <span className="size-2 rounded-full bg-[#49d493]" />
            Envía Hoy
          </a>
          <a className="transition hover:text-[#ffd978]" href="#ocasion">Ocasiones</a>
          <a className="transition hover:text-[#ffd978]" href="#favoritos">Flores</a>
          <a className="text-[#ffd978] transition hover:text-white" href="#presupuesto">Ofertas</a>
          <a className="transition hover:text-[#ffd978]" href="#favoritos">Globos</a>
          <a className="transition hover:text-[#ffd978]" href="#delivery">Regalos</a>
        </nav>

        <div className="flex items-center gap-3">
          <a className="hidden size-11 place-items-center rounded-full text-white transition hover:bg-white/10 sm:grid" href="#favoritos" aria-label="Buscar">
            <Search aria-hidden="true" size={21} />
          </a>
          <a className="hidden size-11 place-items-center rounded-full text-white transition hover:bg-white/10 sm:grid" href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" aria-label="Cuenta">
            <UserRound aria-hidden="true" size={21} />
          </a>
          <motion.a
            aria-label="WhatsApp"
            className="grid size-11 place-items-center rounded-full text-white no-underline transition hover:bg-white/10"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            rel="noreferrer"
            target="_blank"
            {...press}
          >
            <ShoppingBag aria-hidden="true" size={21} />
          </motion.a>
        </div>
      </div>
    </header>
  )
}

function Hero({ lift, press }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#c8a596]" id="inicio">
      <div className="absolute left-[16%] top-8 hidden h-28 w-48 rotate-[24deg] rounded-[50%] border border-white/35 border-b-0 border-r-0 lg:block" aria-hidden="true" />
      <div className="absolute bottom-10 left-[11%] hidden h-28 w-64 rotate-[18deg] rounded-[50%] border border-white/28 border-t-0 lg:block" aria-hidden="true" />
      <img
        className="absolute bottom-0 right-0 z-0 h-[56%] w-full object-cover object-[50%_42%] opacity-70 sm:h-full sm:w-[62%] sm:object-cover sm:object-[46%_50%] sm:opacity-100 lg:w-[58%]"
        src={heroImage}
        alt="Mujer sonriendo con tulipanes rosados"
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(151,107,96,0.68),rgba(199,165,150,0.54)_38%,rgba(199,165,150,0.08)_64%,rgba(199,165,150,0))]" aria-hidden="true" />

      <div className="relative z-10 mx-auto min-h-[660px] w-[min(1780px,calc(100%-48px))] py-16 sm:min-h-[690px] lg:min-h-[660px]">
        <motion.div
          className="grid min-h-[540px] max-w-[700px] content-center text-white sm:pl-[12%]"
          {...lift}
        >
          <p className="text-xs font-black uppercase tracking-[0.34em] text-white">Primavera en Lima</p>
          <h1 className="mt-6 max-w-2xl text-[3.4rem] font-black leading-[0.92] tracking-normal sm:text-6xl lg:text-[5.25rem]">
            Llegó la <span className="font-serif italic font-normal text-[#ffd978]">primavera</span>
            <br />
            a Lima
          </h1>
          <div className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white/18 px-4 py-2 text-sm font-black text-white backdrop-blur">
            <span className="grid size-4 place-items-center rounded-full bg-[#49d493]">
              <span className="size-1.5 rounded-full bg-white" />
            </span>
            Pide antes de las 6 p. m. y llega hoy
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="rounded-full bg-[#8f2e4f] px-8 text-white shadow-none hover:bg-[#782541]">
              <motion.a href="#favoritos" {...press}>
                Enviar flores hoy
              </motion.a>
            </Button>
            <a className="inline-flex min-h-12 items-center font-black text-white no-underline underline-offset-8 hover:underline" href="#presupuesto">
              Ver todo el catálogo
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ShopByBudget({ lift }) {
  return (
    <section className="bg-white px-4 pb-12 pt-7 sm:px-6 lg:px-8" id="presupuesto">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex gap-6 overflow-x-auto pb-8 pt-1 md:justify-center md:overflow-visible">
          {flowerTypes.map((item) => {
            const Icon = item.icon

            return (
              <a className="group grid w-[96px] shrink-0 justify-items-center gap-3 text-center text-[#2f2729] no-underline" href="#favoritos" key={item.name}>
                <span className={cn(
                  'grid size-[96px] place-items-center rounded-xl border-[3px] bg-[#fff8f4] transition',
                  Icon ? 'border-[#2a9d72] bg-[#eef8f1]' : 'border-[#efd4d2]',
                )}>
                  {Icon ? (
                    <Icon aria-hidden="true" className="text-[#209467]" size={31} />
                  ) : (
                    <img className="size-full rounded-xl object-cover" src={item.image} alt={item.name} loading="eager" decoding="async" />
                  )}
                </span>
                <strong className="text-sm font-black leading-tight">{item.name}</strong>
              </a>
            )
          })}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8f2e4f]">A tu medida</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f2729] sm:text-4xl">
              Elige por <span className="font-black text-[#7c2d49]">presupuesto</span>
            </h2>
          </div>
          <a className="hidden border-b border-[#8f2e4f] pb-1 text-sm font-black text-[#8f2e4f] no-underline sm:inline-flex" href="#favoritos">
            Ver todas
          </a>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {budgets.map((item) => (
            <motion.a
              className="group grid min-h-[96px] grid-cols-[76px_minmax(0,1fr)_20px] items-center gap-4 rounded-[1rem] bg-[#f8efed] p-3 text-[#2f2729] no-underline transition hover:bg-[#fff8f4]"
              href={item.href}
              key={item.price}
              {...lift}
            >
              <img className="size-[76px] rounded-full object-cover" src={item.image} alt="" loading="eager" decoding="async" />
              <span className="min-w-0">
                <small className="block text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#9f8a8f]">{item.eyebrow}</small>
                <strong className="mt-0.5 block text-2xl font-black leading-none text-[#7c2d49]">{item.price}</strong>
                <span className="mt-1 block text-sm font-semibold text-[#6e5b61]">{item.detail}</span>
              </span>
              <span className="text-xl font-black text-[#b98a96] transition">›</span>
            </motion.a>
          ))}
        </div>

        <a className="mt-6 inline-flex border-b border-[#8f2e4f] pb-1 text-sm font-black text-[#8f2e4f] no-underline sm:hidden" href="#favoritos">
          Ver todas
        </a>
      </div>
    </section>
  )
}

function BestSellers({ lift, press }) {
  return (
    <section className="px-4 py-18 sm:px-6 lg:px-8" id="favoritos">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Favoritos de siempre" title="Los más pedidos." text="Productos visibles, precios claros y etiquetas de ahorro para reducir dudas antes del WhatsApp." />
          <Button asChild variant="secondary" className="w-fit rounded-full border-[#eadbd5] bg-white text-[#3a1320]">
            <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...press}>
              Pedir recomendación
            </motion.a>
          </Button>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((item, index) => (
            <motion.article className="group overflow-hidden rounded-[1.75rem] border border-[#eadbd5] bg-white shadow-[0_22px_70px_rgba(58,19,32,0.08)]" key={item.title} {...lift}>
              <div className="relative overflow-hidden">
                <img className="aspect-[4/4.5] w-full object-cover" src={item.image} alt={item.title} loading="eager" decoding="async" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-black text-[#ec7a83] shadow-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-[#3a1320] px-3 py-1 text-xs font-black text-white">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-[#3a1320]">{item.title}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <strong className="text-lg text-[#ec7a83]">{item.price}</strong>
                  {item.oldPrice ? <span className="text-sm font-bold text-[#9b8a8e] line-through">{item.oldPrice}</span> : null}
                </div>
                <a className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#3a1320] px-4 py-2 text-sm font-black text-white no-underline transition hover:bg-[#2b0f19]" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, quiero consultar disponibilidad de ${item.title} en Florería Kafka.`)}`} rel="noreferrer" target="_blank">
                  Consultar disponibilidad
                  <ArrowRight aria-hidden="true" size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Occasions() {
  return (
    <section className="bg-[#3a1320] px-4 py-18 text-white sm:px-6 lg:px-8" id="ocasion">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading dark eyebrow="Por ocasión" title="¿Qué estás celebrando?" text="La compra se siente más fácil cuando el catálogo habla el idioma del momento: cumpleaños, amor, graduación o agradecimiento." />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((item) => {
            const Icon = item.icon
            return (
              <a className="rounded-[1.5rem] border border-white/14 bg-white/[0.07] p-5 text-white no-underline transition hover:bg-white/12" href="#favoritos" key={item.title}>
                <span className="grid size-12 place-items-center rounded-full bg-white text-[#ec7a83]">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-white/70">{item.copy}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function DeliveryFinder() {
  const [query, setQuery] = useState('')
  const match = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return null
    return deliveryDistricts.find((item) => item.district.toLowerCase().includes(normalized))
  }, [query])

  return (
    <section className="bg-[#faf3f1] px-4 py-18 sm:px-6 lg:px-8" id="delivery">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Envío a domicilio" title="¿Cuánto cuesta el envío a tu distrito?" text="Consulta zonas frecuentes, costo referencial y cobertura antes de escribirnos. Confirmamos el horario disponible por WhatsApp." />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => {
              const Icon = item.icon
              return (
                <div className="flex gap-3 rounded-[1.25rem] bg-white p-4" key={item.title}>
                  <Icon aria-hidden="true" className="mt-0.5 shrink-0 text-[#ec7a83]" size={19} />
                  <div>
                    <strong className="block text-sm text-[#3a1320]">{item.title}</strong>
                    <span className="mt-1 block text-xs font-medium leading-5 text-[#735e63]">{item.text}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <Card className="rounded-[2rem] border-[#eadbd5] bg-white p-5 shadow-[0_24px_80px_rgba(58,19,32,0.1)]">
          <label className="text-sm font-black text-[#3a1320]" htmlFor="district">
            Escribe tu distrito
          </label>
          <div className="mt-3 flex min-h-14 items-center gap-3 rounded-full border border-[#eadbd5] bg-[#fff8f4] px-4">
            <Search aria-hidden="true" className="text-[#ec7a83]" size={20} />
            <input
              className="min-w-0 flex-1 bg-transparent text-base font-semibold text-[#3a1320] outline-none placeholder:text-[#a9969b]"
              id="district"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej: Lince, Miraflores, San Borja..."
              value={query}
            />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {deliveryDistricts.map((item) => (
              <button
                className="flex min-h-12 items-center justify-between rounded-[1rem] border border-[#eadbd5] bg-white px-4 text-left text-sm font-black text-[#3a1320] transition hover:border-[#ec7a83]/50 hover:bg-[#fff8f4]"
                key={item.district}
                onClick={() => setQuery(item.district)}
                type="button"
              >
                {item.district}
                <span className="text-[#ec7a83]">{item.price}</span>
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-[1.25rem] bg-[#3a1320] p-4 text-white">
            {match ? (
              <p className="font-bold">
                Delivery a {match.district}: <span className="text-[#ffd7df]">{match.price}</span>. Escríbenos para confirmar horario disponible.
              </p>
            ) : (
              <p className="font-bold">Llegamos a varios distritos de Lima y Callao. Si no ves el tuyo, consúltanos por WhatsApp.</p>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon
            return (
              <article className="rounded-[1.5rem] border border-[#eadbd5] bg-white p-5" key={item.title}>
                <Icon aria-hidden="true" className="text-[#ec7a83]" size={23} />
                <h3 className="mt-5 text-xl font-black text-[#3a1320]">{item.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-[#735e63]">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="bg-white px-4 py-18 sm:px-6 lg:px-8" id="reseñas">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
        <div>
          <Badge className="border-[#f3ccd3] bg-[#fff1f3] text-[#b14f62]">Reseñas verificadas</Badge>
          <h2 className="mt-5 text-4xl font-black leading-none text-[#3a1320] sm:text-5xl">Confianza antes de comprar.</h2>
          <div className="mt-6 flex items-baseline gap-3">
            <strong className="text-6xl font-black text-[#ec7a83]">4,9</strong>
            <span className="text-sm font-black text-[#735e63]">en Google</span>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((item) => (
            <article className="rounded-[1.5rem] border border-[#eadbd5] bg-[#fff8f4] p-5" key={item.author}>
              <div className="flex gap-1 text-[#e9b44c]" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star aria-hidden="true" fill="currentColor" key={index} size={15} />
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold leading-7 text-[#3a1320]">“{item.quote}”</p>
              <span className="mt-5 block text-xs font-black uppercase tracking-[0.12em] text-[#ec7a83]">{item.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WelcomeAndAdvisor({ press }) {
  return (
    <section className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1180px] gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="rounded-[2rem] border-[#eadbd5] bg-[#3a1320] p-6 text-white shadow-[0_24px_80px_rgba(58,19,32,0.18)]">
          <Badge variant="dark" className="border-white/18 bg-white/10">Cupón de bienvenida</Badge>
          <h2 className="mt-5 text-4xl font-black leading-none">S/ 10 en tu primera compra.</h2>
          <p className="mt-4 text-sm font-medium leading-7 text-white/72">
            Déjanos tu correo y recibe un código para tu primer pedido de flores, box o packs de regalo.
          </p>
          <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="email">Correo</label>
            <input
              className="min-h-12 rounded-full border border-white/18 bg-white/10 px-4 text-sm font-semibold text-white outline-none placeholder:text-white/45 focus:border-white"
              id="email"
              placeholder="tu@correo.com"
              type="email"
            />
            <Button className="rounded-full bg-white text-[#3a1320] hover:bg-white/90" type="submit">
              Quiero mi cupón
            </Button>
          </form>
        </Card>

        <Card className="rounded-[2rem] border-[#d8ead2] bg-[#f1f8ec] p-5 shadow-[0_24px_80px_rgba(36,58,49,0.1)]">
          <div className="flex items-center gap-3 border-b border-[#dbe8d3] pb-4">
            <span className="grid size-12 place-items-center rounded-full bg-[#25d366] text-white">
              <MessageCircle aria-hidden="true" size={24} />
            </span>
            <div>
              <strong className="block text-[#243a31]">¿No sabes cuál elegir?</strong>
              <span className="text-sm font-semibold text-[#66805f]">Te ayudamos por WhatsApp en pocos minutos</span>
            </div>
          </div>
          <div className="grid gap-3 py-5">
            <ChatBubble from="client">Hola, quiero enviar flores hoy. Presupuesto aprox. S/150.</ChatBubble>
            <ChatBubble>Claro. ¿Es cumpleaños, amor, agradecimiento u otra ocasión?</ChatBubble>
            <ChatBubble from="client">Cumpleaños, algo alegre y con dedicatoria.</ChatBubble>
            <ChatBubble>Te paso 3 opciones disponibles con delivery y tarjeta incluida.</ChatBubble>
          </div>
          <Button asChild className="w-full rounded-full bg-[#243a31] text-white hover:bg-[#1b2d25]">
            <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...press}>
              Que me recomienden por WhatsApp
            </motion.a>
          </Button>
        </Card>
      </div>
    </section>
  )
}

function ChatBubble({ children, from = 'brand' }) {
  return (
    <div
      className={cn(
        'max-w-[84%] rounded-2xl px-4 py-3 text-sm font-semibold leading-6',
        from === 'client'
          ? 'justify-self-end bg-[#243a31] text-white'
          : 'justify-self-start bg-white text-[#4f6258] shadow-sm',
      )}
    >
      {children}
    </div>
  )
}

function Footer({ mockup }) {
  return (
    <footer className="border-t border-[#eadbd5] bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-6 md:flex-row md:items-center">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label={mockup.clientName}>
          <span className="grid size-11 place-items-center rounded-full bg-[#ec7a83] text-base font-black text-white">F</span>
          <span>
            <strong className="block text-[#3a1320]">{mockup.clientName}</strong>
            <small className="font-semibold text-[#735e63]">Flores con delivery en Lima Metropolitana y Callao.</small>
          </span>
        </a>
        <div className="flex flex-wrap gap-3 text-sm font-black text-[#735e63]">
          <a href="#favoritos">Comprar</a>
          <a href="#ocasion">Ocasiones</a>
          <a href="#delivery">Delivery</a>
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp({ press }) {
  return (
    <motion.a
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 left-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white no-underline shadow-[0_16px_40px_rgba(37,211,102,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#243a31] focus-visible:ring-offset-2 lg:hidden"
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      rel="noreferrer"
      target="_blank"
      {...press}
    >
      <MessageCircle aria-hidden="true" size={26} />
    </motion.a>
  )
}

function SectionHeading({ dark = false, eyebrow, text, title }) {
  return (
    <div className="max-w-3xl">
      <Badge className={cn(dark ? 'border-white/18 bg-white/10 text-white' : 'border-[#f3ccd3] bg-[#fff1f3] text-[#b14f62]')}>
        <BadgePercent aria-hidden="true" size={14} />
        {eyebrow}
      </Badge>
      <h2 className={cn('mt-5 text-4xl font-black leading-none sm:text-5xl', dark ? 'text-white' : 'text-[#3a1320]')}>
        {title}
      </h2>
      {text ? <p className={cn('mt-4 text-base font-medium leading-8', dark ? 'text-white/70' : 'text-[#735e63]')}>{text}</p> : null}
    </div>
  )
}
