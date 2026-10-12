import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  BadgeCheck,
  CakeSlice,
  Coffee,
  Gift,
  Heart,
  MessageCircle,
  Package,
  ShoppingBag,
  Sparkles,
  Star,
} from 'lucide-react'

import { Badge, Button } from '../components/ui/primitives'
import { cn } from '../lib/utils'

const storeHref = '/regalos-kafka/stores?id=5'

const heroImage =
  'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1600&q=86'

const momentsImage =
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1400&q=84'

const ecommerceImage =
  'https://images.unsplash.com/photo-1607344645866-009c320f6ef2?auto=format&fit=crop&w=1400&q=84'

const categories = [
  {
    title: 'Boxes sorpresa',
    description: 'Detalles combinados para regalar con una presentación cuidada.',
    icon: Package,
    image:
      'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Desayunos sorpresa',
    description: 'Un inicio de día especial con sabores, mensaje y empaque bonito.',
    icon: Coffee,
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Peluches',
    description: 'Complementos suaves para acompañar cumpleaños, aniversarios o disculpas.',
    icon: Heart,
    image:
      'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Tazas personalizadas',
    description: 'Regalos útiles con frases, nombres o detalles pensados para esa persona.',
    icon: Gift,
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Chocolates y dulces',
    description: 'Acompañamientos pequeños para hacer que el regalo se sienta completo.',
    icon: CakeSlice,
    image:
      'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Regalos románticos',
    description: 'Opciones cálidas para aniversarios, primeras sorpresas y fechas importantes.',
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=84',
  },
]

const moments = [
  {
    title: 'Cumpleaños',
    description: 'Un detalle alegre, fácil de elegir y listo para personalizar con mensaje.',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Aniversarios',
    description: 'Regalos románticos, boxes y complementos para decirlo con intención.',
    image:
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Sorpresas',
    description: 'Opciones pensadas para resolver un gesto bonito sin complicarte.',
    image:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=84',
  },
]

const featuredProducts = [
  {
    name: 'Box Dulce Detalle',
    type: 'Box sorpresa',
    price: 'Desde S/ 79',
    image:
      'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Desayuno Especial',
    type: 'Desayuno sorpresa',
    price: 'Desde S/ 95',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Taza con Mensaje',
    type: 'Personalizados',
    price: 'Desde S/ 35',
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Pack Romántico',
    type: 'Regalos románticos',
    price: 'Desde S/ 119',
    image:
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=84',
  },
]

const storeHighlights = [
  'Explora productos por ocasión',
  'Revisa precios antes de consultar',
  'Arma tu carrito y continúa por WhatsApp',
]

export function RegalosKafkaPage() {
  const prefersReducedMotion = useReducedMotion()
  const lift = prefersReducedMotion ? {} : { whileTap: { scale: 0.99 } }

  return (
    <main className="min-h-svh bg-[#fff4ed] text-[#2e1517]">
      <RegalosHeader />
      <RegalosHero lift={lift} />
      <RegalosCategories lift={lift} />
      <SpecialMoments lift={lift} />
      <FeaturedGifts lift={lift} />
      <StoreShowcase lift={lift} />
      <FinalCta lift={lift} />
      <RegalosFooter />
    </main>
  )
}

function RegalosHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#efd8cf]/85 bg-[#fff4ed]/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label="Regalos Kafka">
          <span className="grid size-10 place-items-center rounded-[1rem] bg-[#6f1d2a] text-sm font-black text-white">
            RK
          </span>
          <span className="grid leading-tight">
            <strong className="text-sm font-black tracking-[0.08em] text-[#2e1517]">
              Regalos Kafka
            </strong>
            <small className="text-xs font-medium text-[#8b6a62]">
              Detalles personalizados
            </small>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold text-[#8b6a62] lg:flex" aria-label="Secciones Regalos Kafka">
          <a className="transition hover:text-[#2e1517]" href="#categorias">
            Categorías
          </a>
          <a className="transition hover:text-[#2e1517]" href="#momentos">
            Momentos
          </a>
          <a className="transition hover:text-[#2e1517]" href="#destacados">
            Destacados
          </a>
          <a className="transition hover:text-[#2e1517]" href={storeHref}>
            Tienda online
          </a>
        </nav>

        <Button asChild className="rounded-full bg-[#6f1d2a] text-white hover:bg-[#591621]">
          <a href={storeHref}>
            <ShoppingBag aria-hidden="true" className="size-4" />
            Ver tienda
          </a>
        </Button>
      </div>
    </header>
  )
}

function RegalosHero({ lift }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#efd8cf]" id="inicio">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(223,135,112,0.32),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(111,29,42,0.16),transparent_28%),linear-gradient(135deg,#fff4ed_0%,#f8d8ca_48%,#df9b85_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-5rem] top-28 -z-10 hidden h-56 w-56 rounded-full border border-white/60 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 right-[-3rem] -z-10 hidden h-36 w-36 rotate-12 rounded-[2rem] border border-white/55 lg:block"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 py-12 md:py-16 lg:min-h-[680px] lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <motion.div className="" {...lift}>
          <Badge className="border-[#efc7bc] bg-white/62 text-[#8c3542]">
            Regalos personalizados
          </Badge>
          <h1 className="mt-6 max-w-4xl text-[3.05rem] font-black leading-[0.9] tracking-normal text-[#2e1517] sm:text-6xl lg:text-[5.25rem]">
            Los mejores momentos merecen un detalle especial.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f4f49] sm:text-lg">
            Boxes, desayunos, tazas y detalles pensados para regalar con intención.
            Elige una categoría, revisa opciones y continúa tu pedido por WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#6f1d2a] px-7 text-white hover:bg-[#591621]">
              <a href={storeHref}>
                <ShoppingBag aria-hidden="true" className="size-4" />
                Explorar tienda online
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full border-[#efc7bc] bg-white/68 text-[#2e1517] hover:bg-white"
            >
              <a href="#momentos">
                Ver ideas para regalar
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </Button>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {['Boxes armados', 'Detalles personalizados', 'Pedido por WhatsApp'].map((item) => (
              <div className="rounded-2xl border border-white/65 bg-white/48 px-4 py-3 text-sm font-black text-[#563134] backdrop-blur" key={item}>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[520px] overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/30 p-3 shadow-[0_36px_100px_rgba(111,29,42,0.18)] backdrop-blur"
          {...lift}
        >
          <img
            className="h-full min-h-[496px] w-full rounded-[1.75rem] object-cover object-[52%_50%]"
            src={heroImage}
            alt="Caja de regalo premium con lazo y papel elegante"
            decoding="async"
          />
          <div className="absolute inset-x-7 bottom-7 rounded-[1.5rem] border border-white/58 bg-white/84 p-5 text-[#2e1517] shadow-[0_22px_70px_rgba(46,21,23,0.16)] backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9a4050]">
              Listo para elegir
            </p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-[17rem] text-3xl font-black leading-none">
                Arma un detalle con más intención.
              </h2>
              <a
                className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#2e1517] px-4 text-sm font-black text-white no-underline transition hover:bg-[#4a2025]"
                href={storeHref}
              >
                Ver tienda
                <ArrowRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function RegalosCategories({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="categorias">
      <div className="mx-auto max-w-[1180px]">
        <RegalosIntro
          eyebrow="Categorías"
          title="Encuentra el detalle según la persona, el momento y el mensaje."
          description="Una tienda de regalos necesita ordenar muchas ideas en pocas decisiones. Estas categorías ayudan a llegar rápido al detalle correcto."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon

            return (
              <motion.a
                className="group overflow-hidden rounded-[1.75rem] border border-[#efd8cf] bg-white text-inherit no-underline shadow-[0_24px_70px_rgba(111,29,42,0.08)] outline-none transition hover:-translate-y-1 hover:shadow-[0_30px_88px_rgba(111,29,42,0.13)] focus-visible:ring-2 focus-visible:ring-[#6f1d2a]"
                href={storeHref}
                key={category.title}
                {...lift}
              >
                <div className="relative overflow-hidden">
                  <img
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    src={category.image}
                    alt={category.title}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-white/90 text-[#8c3542] shadow-sm backdrop-blur">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-black leading-tight">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#765952]">{category.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#6f1d2a]">
                    Explorar categoría
                    <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SpecialMoments({ lift }) {
  return (
    <section className="bg-[#2e1517] px-4 py-20 text-white sm:px-6 lg:px-8" id="momentos">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <RegalosIntro
            dark
            eyebrow="Momentos especiales"
            title="Regalos que empiezan por una emoción, no por un producto."
            description="Cumpleaños, aniversarios y sorpresas tienen una intención distinta. Esta sección guía al visitante desde el momento hacia una compra más clara."
          />
          <div className="mt-8 grid gap-4">
            {moments.map((moment, index) => (
              <motion.a
                className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 text-white no-underline transition hover:bg-white/[0.1] sm:grid-cols-[116px_minmax(0,1fr)_auto] sm:items-center"
                href={storeHref}
                key={moment.title}
                {...lift}
              >
                <img
                  className="h-32 w-full rounded-[1rem] object-cover sm:size-[116px]"
                  src={moment.image}
                  alt={moment.title}
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#eab7aa]">
                    0{index + 1}
                  </span>
                  <strong className="mt-2 block text-2xl font-black leading-tight">
                    {moment.title}
                  </strong>
                  <span className="mt-2 block text-sm leading-6 text-white/68">
                    {moment.description}
                  </span>
                </span>
                <span className="hidden size-11 place-items-center rounded-full bg-white text-[#2e1517] sm:grid">
                  <ArrowRight aria-hidden="true" size={18} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            src={momentsImage}
            alt="Regalos envueltos para fechas especiales"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,21,23,0.04),rgba(46,21,23,0.7))]" />
          <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/18 bg-white/14 p-5 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffd9cf]">
              Detalles con intención
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-black leading-none">
              Una experiencia visual para elegir rápido y regalar mejor.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedGifts({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="destacados">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <RegalosIntro
            eyebrow="Productos destacados"
            title="Una muestra visual de regalos listos para despertar interés."
            description="La tienda real concentra el catálogo, precios y carrito. Esta sección funciona como vitrina breve para llevar al visitante hacia la compra."
          />
          <Button asChild variant="secondary" className="w-fit rounded-full border-[#efc7bc] bg-white text-[#2e1517]">
            <a href={storeHref}>
              Ver tienda completa
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <motion.a
              className="group overflow-hidden rounded-[1.75rem] border border-[#efd8cf] bg-white text-inherit no-underline shadow-[0_22px_70px_rgba(111,29,42,0.08)] outline-none transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(111,29,42,0.14)] focus-visible:ring-2 focus-visible:ring-[#6f1d2a]"
              href={storeHref}
              key={product.name}
              {...lift}
            >
              <img
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                src={product.image}
                alt={product.name}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <div className="p-5">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#9a4050]">
                  {product.type}
                </span>
                <h3 className="mt-2 text-xl font-black leading-tight">{product.name}</h3>
                <p className="mt-2 text-sm font-black text-[#9a4050]">{product.price}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoreShowcase({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="tienda">
      <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[2.25rem] border border-[#efd8cf] bg-white shadow-[0_34px_110px_rgba(111,29,42,0.1)] lg:grid-cols-[1fr_0.96fr]">
        <div className="relative min-h-[430px] lg:min-h-[560px]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={ecommerceImage}
            alt="Regalos y productos organizados para tienda online"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(46,21,23,0.5))]" />
          <div className="absolute bottom-6 left-6 right-6 grid gap-3 rounded-[1.5rem] border border-white/30 bg-white/82 p-4 backdrop-blur">
            {storeHighlights.map((item) => (
              <div className="flex items-center gap-3 text-sm font-black text-[#2e1517]" key={item}>
                <span className="grid size-8 place-items-center rounded-full bg-[#6f1d2a] text-white">
                  <BadgeCheck aria-hidden="true" size={15} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid content-center p-6 sm:p-10 lg:p-12">
          <Badge className="border-[#efc7bc] bg-[#fff4ed] text-[#8c3542]">
            E-commerce para regalos
          </Badge>
          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl">
            Catálogo, precios y carrito para que elegir sea más fácil.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#6f4f49]">
            El visitante puede explorar productos, revisar categorías, armar una selección y
            continuar la conversación por WhatsApp con más contexto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#6f1d2a] px-8 text-white hover:bg-[#591621]">
              <motion.a href={storeHref} {...lift}>
                Explorar tienda online
                <ArrowRight aria-hidden="true" size={18} />
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-[#efc7bc] bg-[#fff4ed] text-[#2e1517] hover:bg-white">
              <motion.a href="#destacados" {...lift}>
                Ver destacados
              </motion.a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCta({ lift }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] bg-[#6f1d2a] p-6 text-white shadow-[0_30px_90px_rgba(111,29,42,0.22)] sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge variant="dark" className="border-white/15 bg-white/10">
              Regalos Kafka
            </Badge>
            <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl">
              Convierte la duda de “qué le compro” en una experiencia fácil de elegir.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              Una landing así ayuda a presentar categorías, productos y rutas de compra sin
              recargar al visitante.
            </p>
          </div>
          <div className="grid gap-3 sm:min-w-[300px]">
            <Button asChild size="lg" className="rounded-full bg-white text-[#6f1d2a] hover:bg-[#fff4ed]">
              <motion.a href={storeHref} {...lift}>
                Explorar tienda online
                <ShoppingBag aria-hidden="true" className="size-4" />
              </motion.a>
            </Button>
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white no-underline transition hover:bg-white/15" href="#inicio">
              Volver al inicio
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function RegalosFooter() {
  return (
    <footer className="border-t border-[#efd8cf] bg-[#2e1517] px-4 py-10 text-sm text-white/68 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <strong className="block text-base font-black text-white">Regalos Kafka</strong>
          <p className="mt-2 max-w-xl leading-6">
            Demo conceptual para tiendas de regalos personalizados, boxes sorpresa y detalles especiales.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-black text-white no-underline transition hover:bg-white/10" href={storeHref}>
            Ver tienda
            <ArrowRight aria-hidden="true" size={16} />
          </a>
          <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-black text-white no-underline transition hover:bg-white/10" href="https://wa.me/51928415698" rel="noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" size={16} />
            Kafka
          </a>
        </div>
      </div>
    </footer>
  )
}

function RegalosIntro({ dark = false, description, eyebrow, title }) {
  return (
    <div className="">
      <Badge
        className={cn(
          'gap-2',
          dark
            ? 'border-white/15 bg-white/10 text-white'
            : 'border-[#efc7bc] bg-white/70 text-[#8c3542]',
        )}
      >
        <Star aria-hidden="true" size={14} />
        {eyebrow}
      </Badge>
      <h2 className={cn('mt-5 text-4xl font-black leading-none sm:text-5xl', dark ? 'text-white' : 'text-[#2e1517]')}>
        {title}
      </h2>
      <p className={cn('mt-5 max-w-2xl text-base leading-8', dark ? 'text-white/68' : 'text-[#6f4f49]')}>
        {description}
      </p>
    </div>
  )
}
