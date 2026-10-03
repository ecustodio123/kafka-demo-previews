import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  ChevronRight,
  MapPin,
  Search,
  Sparkles,
  Truck,
} from 'lucide-react'

import { Badge, Button, Card } from '../components/ui/primitives'
import { PromoModal } from '../components/sections/PromoModal'
import { cn } from '../lib/utils'

const trustSignals = [
  { icon: Truck, title: 'Llega hoy', detail: 'Pedidos antes de las 6 p.m.' },
  { icon: MapPin, title: '40 distritos', detail: 'Lima Metropolitana y Callao' },
  { icon: Camera, title: 'Foto de entrega', detail: 'Confirmación al finalizar' },
]

const heroSlides = [
  {
    title: 'Caja Rose Kafka',
    eyebrow: 'Más pedido hoy',
    discount: '20% Dcto.',
    headline: 'Flores frescas para sorprender hoy.',
    copy: 'Cajas de rosas, ramos y detalles listos para enviar con dedicatoria y entrega coordinada por WhatsApp.',
    price: 'Desde S/149',
    image:
      'https://images.unsplash.com/photo-1690315478701-33744ce23a61?auto=format&fit=crop&w=1600&q=84',
    alt: 'Caja elegante de rosas rosadas',
  },
  {
    title: 'Ramo Primavera',
    eyebrow: 'Entrega el mismo día',
    discount: '15% Dcto.',
    headline: 'Un gesto bonito, sin complicarte.',
    copy: 'Elige el estilo, confirma el distrito y recibe opciones listas para comprar sin perder tiempo.',
    price: 'Desde S/119',
    image:
      'https://images.unsplash.com/photo-1560583035-79c3e11ae176?auto=format&fit=crop&w=1600&q=84',
    alt: 'Ramo floral rosado con flores frescas',
  },
  {
    title: 'Tulipanes Premium',
    eyebrow: 'Línea premium',
    discount: 'Promo limitada',
    headline: 'Cuando quieres que se vea especial.',
    copy: 'Tulipanes, rosas y acabados cuidados para regalos que necesitan una mejor primera impresión.',
    price: 'Desde S/195',
    image:
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1600&q=84',
    alt: 'Tulipanes rosados para regalo premium',
  },
]

const occasions = [
  {
    title: 'Cumpleaños',
    copy: 'Ramos alegres, globos y detalles dulces para enviar el mismo día.',
    image:
      'https://images.pexels.com/photos/6366721/pexels-photo-6366721.jpeg',
  },
  {
    title: 'Aniversarios',
    copy: 'Rosas, tulipanes y cajas elegantes para un gesto romántico.',
    image:
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Agradecer',
    copy: 'Flores frescas con una nota breve para decirlo bonito.',
    image:
      'https://images.pexels.com/photos/8503261/pexels-photo-8503261.jpeg',
  },
  {
    title: 'Condolencias',
    copy: 'Arreglos sobrios, delicados y coordinados con respeto.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJ7l3uU4t054RziSJtGnnkSZx7KMe204oQNvjzDDlmo1oZzo8TB9qRiI&s=10',
  },
]

const bestSellers = [
  {
    title: 'Box Rosas Kafka',
    price: 'S/ 149',
    oldPrice: 'S/ 189',
    tag: '20% Dcto.',
    image:
      'https://images.unsplash.com/photo-1690315478701-33744ce23a61?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Ramo Primavera',
    price: 'S/ 119',
    oldPrice: 'S/ 139',
    tag: '15% Dcto.',
    image:
      'https://images.pexels.com/photos/34312709/pexels-photo-34312709.jpeg',
  },
  {
    title: 'Tulipanes Premium',
    price: 'S/ 195',
    oldPrice: 'S/ 225',
    tag: 'Premium',
    image:
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Pack Cumple Feliz',
    price: 'S/ 159',
    oldPrice: 'S/ 179',
    tag: 'Pack ahorro',
    image:
      'https://images.unsplash.com/photo-1771085417618-c69f6209e540?auto=format&fit=crop&w=900&q=84',
  },
]

const steps = [
  {
    icon: Search,
    title: 'Elige la ocasión',
    copy: 'Filtra por cumpleaños, amor, agradecimiento, condolencias o entrega hoy.',
  },
  {
    icon: CalendarDays,
    title: 'Personaliza el gesto',
    copy: 'Agrega dedicatoria, distrito, horario y detalles extra como globos o chocolates.',
  },
  {
    icon: WhatsAppIcon,
    title: 'Confirma por WhatsApp',
    copy: 'Validamos disponibilidad, costo de envío y enviamos foto al terminar la entrega.',
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kafka.tech1/',
    icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/kafkatech',
    icon: FacebookIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/51928415698?text=Hola%2C%20quiero%20consultar%20por%20un%20arreglo%20floral.',
    icon: WhatsAppIcon,
  },
]

export function FloristKafkaPage({ mockup }) {
  const prefersReducedMotion = useReducedMotion()
  const lift = prefersReducedMotion ? {} : { whileHover: { y: -5 }, whileTap: { scale: 0.99 } }

  return (
    <div className="min-h-svh bg-[#fff8f4] text-[#243a31]">
      <PromoModal promo={mockup.optionalSections?.promo} slug={mockup.slug} />
      <FloristNotice />
      <FloristHeader />
      <main>
        <Hero lift={lift} />
        <TrustBar />
        <BestSellers lift={lift} />
        <Occasions lift={lift} />
        <HowToOrder />
        <CareAndWhatsApp />
        <FinalCall />
      </main>
      <FloristFooter />
    </div>
  )
}

function FloristNotice() {
  return (
    <div className="bg-[#243a31] px-4 py-2 text-center text-xs font-medium text-white/82">
      Envíos disponibles hoy en Lima. Escríbenos por WhatsApp y te ayudamos a elegir el arreglo ideal.
    </div>
  )
}

function FloristHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#eadbd5]/80 bg-[#fff8f4]/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-[min(1160px,calc(100%-32px))] items-center justify-between gap-4">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label="Florería Kafka">
          <span className="grid size-11 place-items-center rounded-full bg-[#243a31] text-lg font-black text-white">
            K
          </span>
          <span className="grid leading-tight">
            <strong className="text-sm font-black text-[#243a31]">Florería Kafka</strong>
            <small className="text-xs font-medium text-[#8a6d68]">Flores a domicilio en Lima</small>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-bold text-[#6f5b58] lg:flex" aria-label="Secciones">
          <a className="transition hover:text-[#243a31]" href="#catalogo">Más pedidos</a>
          <a className="transition hover:text-[#243a31]" href="#ocasiones">Ocasiones</a>
          <a className="transition hover:text-[#243a31]" href="#pedido">Cómo pedir</a>
          <a className="transition hover:text-[#243a31]" href="#whatsapp">WhatsApp</a>
        </nav>
        <Button asChild className="rounded-full bg-[#243a31] text-white hover:bg-[#1b2d25]">
          <a href="#whatsapp">Pedir ahora</a>
        </Button>
      </div>
    </header>
  )
}

function Hero({ lift }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = heroSlides[activeSlide]

  return (
    <section className="relative isolate overflow-hidden px-4 py-6 sm:px-6 lg:px-8 lg:py-5" id="inicio">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_18%_10%,rgba(238,143,165,0.20),transparent_34%),radial-gradient(circle_at_86%_12%,rgba(132,204,22,0.12),transparent_30%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1160px]">
        <motion.article
          className="relative min-h-[740px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_30px_90px_rgba(80,40,35,0.13)] sm:min-h-[680px] lg:min-h-[560px] lg:rounded-[2.25rem]"
          {...lift}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover lg:object-[58%_50%]"
            src={slide.image}
            alt={slide.alt}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,58,49,0.78),rgba(36,58,49,0.34)_48%,rgba(36,58,49,0.08)),linear-gradient(0deg,rgba(36,58,49,0.34),transparent_44%)] lg:bg-[linear-gradient(90deg,rgba(36,58,49,0.86),rgba(36,58,49,0.56)_38%,rgba(36,58,49,0.14)_70%,rgba(36,58,49,0.04)),linear-gradient(0deg,rgba(36,58,49,0.38),transparent_58%)]" />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4 sm:p-6">
            <div className="flex flex-wrap gap-2">
              <Badge className="border-white/30 bg-white/88 text-[#9b5264]">
                {slide.eyebrow}
              </Badge>
              <Badge className="border-[#f6c4cf] bg-[#9b5264] text-white">
                {slide.discount}
              </Badge>
            </div>
            <span className="whitespace-nowrap rounded-full border border-white/40 bg-white/88 px-4 py-2 text-sm font-black text-[#243a31] shadow-lg backdrop-blur">
              {slide.price}
            </span>
          </div>

          <div className="absolute inset-x-4 bottom-4 grid gap-5 sm:inset-x-6 sm:bottom-6 lg:left-10 lg:right-auto lg:bottom-44 lg:max-w-[690px]">
            <div className="text-white">
              <h1 className="text-[2.35rem] font-black leading-[0.92] sm:text-6xl lg:text-7xl">
                {slide.headline}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/82 sm:text-lg">
                {slide.copy}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-white text-[#243a31] hover:bg-white/90">
                  <motion.a href="#catalogo" {...lift}>
                    Ver más pedidos
                    <ArrowRight aria-hidden="true" size={18} />
                  </motion.a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full border-white/25 bg-white/14 text-white hover:bg-white/18"
                >
                  <motion.a href="#whatsapp" {...lift}>
                    <WhatsAppIcon aria-hidden="true" className="size-4" />
                    Consultar por WhatsApp
                  </motion.a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 rounded-[1.5rem] border border-white/24 bg-white/18 p-2 backdrop-blur-md lg:hidden">
              {heroSlides.map((item, index) => (
                <button
                  className={cn(
                    'grid gap-2 rounded-[1.1rem] p-2 text-center text-white transition lg:grid-cols-[64px_minmax(0,1fr)] lg:items-center lg:gap-3 lg:text-left',
                    activeSlide === index ? 'bg-white text-[#243a31]' : 'hover:bg-white/14',
                  )}
                  key={item.title}
                  onClick={() => setActiveSlide(index)}
                  type="button"
                >
                  <img
                    className="h-14 w-full rounded-xl object-cover lg:size-16"
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                  />
                  <span className="grid gap-1">
                    <strong className="text-xs leading-tight lg:text-sm">{item.title}</strong>
                    <small className={cn('hidden font-black sm:block', activeSlide === index ? 'text-[#9b5264]' : 'text-white/72')}>
                      {item.price}
                    </small>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="absolute inset-x-10 bottom-8 hidden rounded-[1.75rem] border border-white/24 bg-white/14 p-2 shadow-2xl backdrop-blur-md lg:grid lg:grid-cols-3 lg:gap-2" aria-label="Selección de arreglos destacados">
            {heroSlides.map((item, index) => (
              <button
                aria-label={`Ver ${item.title}`}
                className={cn(
                  'group grid grid-cols-[72px_minmax(0,1fr)] items-center gap-3 rounded-[1.35rem] border p-2 text-left outline-none ring-offset-2 ring-offset-[#243a31] transition focus-visible:ring-2 focus-visible:ring-white',
                  activeSlide === index
                    ? 'border-white bg-white text-[#243a31]'
                    : 'border-white/18 bg-white/8 text-white hover:bg-white/16',
                )}
                key={item.title}
                onClick={() => setActiveSlide(index)}
                type="button"
              >
                <img
                  className="size-[72px] rounded-[1rem] object-cover transition duration-500 group-hover:scale-105"
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <strong className="block truncate text-sm font-black leading-tight">{item.title}</strong>
                  <small className={cn('mt-1 block text-xs font-black', activeSlide === index ? 'text-[#9b5264]' : 'text-white/74')}>
                    {item.price}
                  </small>
                  <span className={cn('mt-2 inline-flex rounded-full px-2.5 py-1 text-[0.65rem] font-black', activeSlide === index ? 'bg-[#fff0f4] text-[#9b5264]' : 'bg-white/14 text-white/82')}>
                    {item.discount}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1160px] gap-3 border-y border-[#eadbd5] py-5 sm:grid-cols-3">
        {trustSignals.map((item) => {
          const Icon = item.icon

          return (
            <div className="flex gap-3 py-2" key={item.title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#243a31] shadow-sm">
                <Icon aria-hidden="true" size={19} />
              </span>
              <div>
                <strong className="block text-sm text-[#243a31]">{item.title}</strong>
                <span className="mt-1 block text-sm leading-5 text-[#715f5b]">{item.detail}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function BestSellers({ lift }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="catalogo">
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          eyebrow="Los más elegidos"
          title="Arreglos listos para enviar hoy o programar con calma."
          description="Un catálogo breve ayuda a decidir rápido: foto clara, precio visible, descuento y una acción directa para consultar disponibilidad."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((item) => (
            <motion.article
              className="group overflow-hidden rounded-[1.75rem] border border-[#eadbd5] bg-[#fff8f4] shadow-[0_22px_70px_rgba(80,40,35,0.08)]"
              key={item.title}
              {...lift}
            >
              <div className="relative overflow-hidden">
                <img
                  className="aspect-[4/4.7] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-black text-[#9b5264] shadow">
                  {item.tag}
                </span>
              </div>
              <div className="grid gap-3 p-5">
                <h3 className="text-xl font-black leading-tight text-[#243a31]">{item.title}</h3>
                <div className="flex items-center gap-2">
                  <strong className="text-lg text-[#9b5264]">{item.price}</strong>
                  {item.oldPrice ? <span className="text-sm text-[#9e8c88] line-through">{item.oldPrice}</span> : null}
                </div>
                <a className="inline-flex items-center gap-2 text-sm font-black text-[#243a31] no-underline" href="#whatsapp">
                  Consultar disponibilidad
                  <ChevronRight aria-hidden="true" size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Occasions({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="ocasiones">
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          eyebrow="Elige por ocasión"
          title="Cuando no sabes que ramo elegir, empieza por el momento."
          description="Cumpleaños, aniversarios, agradecimientos o condolencias: encuentra una opción pensada para cada ocasión y consúltanos disponibilidad al momento."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((item) => (
            <motion.a
              className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] text-white no-underline shadow-[0_24px_75px_rgba(80,40,35,0.12)]"
              href="#catalogo"
              key={item.title}
              {...lift}
            >
              <img className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" src={item.image} alt={item.title} loading="lazy" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.05),rgba(20,20,20,0.72))]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-2xl font-black leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/80">{item.copy}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowToOrder() {
  return (
    <section className="bg-[#243a31] px-4 py-20 text-white sm:px-6 lg:px-8" id="pedido">
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          dark
          eyebrow="Cómo pedir en 3 pasos"
          title="Elige tu arreglo, personalízalo y confirma la entrega por WhatsApp."
          description="Comprar flores debe ser simple: escoge una opción, cuéntanos los detalles de la entrega y recibe confirmación rápida sin formularios largos."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <article className="rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-6" key={step.title}>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-full bg-white text-[#243a31]">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <span className="text-sm font-black text-white/35">0{index + 1}</span>
                </div>
                <h3 className="mt-12 text-2xl font-black leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{step.copy}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CareAndWhatsApp() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="whatsapp">
      <div className="mx-auto grid max-w-[1160px] gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Asesoría rápida"
            title="Si no sabes qué enviar, te recomendamos 3 opciones."
            description="Cuéntanos la ocasión, el distrito y tu presupuesto. Te enviamos alternativas bonitas y disponibles para que elijas con confianza."
          />
          <div className="mt-8 grid gap-3">
            {['Flores frescas seleccionadas', 'Dedicatoria impresa incluida', 'Foto cuando llega a destino'].map((item) => (
              <div className="flex items-center gap-3 text-sm font-bold text-[#4c5b50]" key={item}>
                <span className="grid size-7 place-items-center rounded-full bg-[#eaf3df] text-[#243a31]">
                  <Check aria-hidden="true" size={15} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <Card className="rounded-[2rem] border-[#eadbd5] bg-white p-4 shadow-[0_30px_90px_rgba(80,40,35,0.1)]">
          <div className="rounded-[1.5rem] bg-[#f1f8ec] p-4">
            <div className="flex items-center gap-3 border-b border-[#dbe8d3] pb-4">
              <span className="grid size-11 place-items-center rounded-full bg-[#25d366] text-white">
                <WhatsAppIcon aria-hidden="true" className="size-6" />
              </span>
              <div>
                <strong className="block text-[#243a31]">WhatsApp Kafka</strong>
                <span className="text-sm text-[#66805f]">En línea · respondemos en breve</span>
              </div>
            </div>
            <div className="grid gap-3 py-5">
              <ChatBubble from="client">Hola, quiero enviar flores hoy por cumpleaños. Estoy en San Borja.</ChatBubble>
              <ChatBubble>Claro. Dime presupuesto y si deseas algo alegre, romántico o elegante.</ChatBubble>
              <ChatBubble from="client">Algo alegre, aprox S/150, con dedicatoria.</ChatBubble>
              <ChatBubble>Te paso 3 opciones con envío hoy y tarjeta incluida.</ChatBubble>
            </div>
            <Button asChild className="w-full rounded-full bg-[#243a31] text-white hover:bg-[#1b2d25]">
              <a href="#contacto">
                <WhatsAppIcon aria-hidden="true" className="size-4" />
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

function ChatBubble({ children, from = 'brand' }) {
  return (
    <div
      className={cn(
        'max-w-[82%] rounded-2xl px-4 py-3 text-sm font-medium leading-6',
        from === 'client'
          ? 'justify-self-end bg-[#243a31] text-white'
          : 'justify-self-start bg-white text-[#4f6258] shadow-sm',
      )}
    >
      {children}
    </div>
  )
}

function FinalCall() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="contacto">
      <div className="mx-auto max-w-[1160px] overflow-hidden rounded-[2rem] bg-[#243a31] text-white shadow-[0_30px_90px_rgba(36,58,49,0.22)]">
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-12">
          <div>
            <Badge variant="dark" className="border-white/15 bg-white/10">
              Flores Kafka
            </Badge>
            <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl">
              Elige el detalle, escribe la dedicatoria y coordinamos la entrega.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              Haz tu pedido con tiempo o resuelve un regalo para hoy. Te ayudamos a elegir flores frescas,
              preparar una dedicatoria bonita y coordinar la entrega sin complicarte.
            </p>
          </div>
          <div className="grid content-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-white text-[#243a31] hover:bg-white/90">
              <a href="#catalogo">
                Ver arreglos disponibles
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/15">
              <a href="#whatsapp">
                <WhatsAppIcon aria-hidden="true" className="size-4" />
                Pedir ayuda para elegir
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloristFooter() {
  return (
    <footer className="border-t border-[#eadbd5] bg-white px-4 py-10 text-sm text-[#715f5b] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label="Florería Kafka">
            <span className="grid size-11 place-items-center rounded-full bg-[#243a31] text-lg font-black text-white">
              K
            </span>
            <span className="grid leading-tight">
              <strong className="text-base font-black text-[#243a31]">Florería Kafka</strong>
              <small className="text-sm font-medium text-[#8a6d68]">
                Flores frescas, detalles y entregas a domicilio en Lima.
              </small>
            </span>
          </a>
          <p className="mt-4 max-w-xl leading-7">
            Escríbenos para consultar disponibilidad, coordinar una dedicatoria o pedir ayuda para elegir el arreglo ideal.
          </p>
        </div>

        <div className="grid gap-3 sm:justify-items-end">
          <span className="text-xs font-black uppercase tracking-[0.12em] text-[#9b5264]">
            Síguenos y cotiza
          </span>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#eadbd5] bg-[#fff8f4] px-4 py-2 font-black text-[#243a31] no-underline transition hover:-translate-y-0.5 hover:border-[#9b5264]/35 hover:bg-white"
                  href={item.href}
                  key={item.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon aria-hidden="true" className="size-4 text-[#9b5264]" />
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

function SectionIntro({ dark = false, description, eyebrow, title }) {
  return (
    <div className="">
      <Badge
        className={cn(
          'gap-2 mb-2',
          dark
            ? 'border-white/15 bg-white/10 text-white'
            : 'border-[#f1c9d3] bg-[#fff8f4] text-[#9b5264]',
        )}
      >
        <Sparkles aria-hidden="true" size={14} />
        {eyebrow}
      </Badge>
      <h2 className={cn('mt-5 text-4xl font-black leading-none sm:text-5xl', dark ? 'text-white' : 'text-[#243a31]')}>
        {title}
      </h2>
      <p className={cn('mt-5 text-base leading-8', dark ? 'text-white/70' : 'text-[#715f5b]')}>
        {description}
      </p>
    </div>
  )
}

function InstagramIcon({ size = 20, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      focusable="false"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ size = 20, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} focusable="false" {...props}>
      <path d="M14.2 8.45V6.9c0-.75.5-.93.86-.93h2.18V2.13L14.23 2.1c-3.35 0-4.1 2.5-4.1 4.1v2.25H7.5v3.95h2.63V22h4.07v-9.6h2.93l.39-3.95H14.2Z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 20, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      focusable="false"
      {...props}
    >
      <path d="M19.05 4.91A9.8 9.8 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91a9.84 9.84 0 0 0-2.91-7.01Zm-7.01 15.25h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.4c0-4.54 3.69-8.23 8.24-8.23a8.19 8.19 0 0 1 5.82 2.42 8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  )
}
