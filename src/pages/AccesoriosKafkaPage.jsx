import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  BadgeCheck,
  Circle,
  Gem,
  Heart,
  Package,
  Scissors,
  ShoppingBag,
  Sparkles,
  Star,
} from 'lucide-react'

import { Badge, Button } from '../components/ui/primitives'
import { cn } from '../lib/utils'

const storeHref = '/accesorios-kafka/stores?id=6'

const heroImage =
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=86'

const collectionImage =
  'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1500&q=84'

const storeImage =
  'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1500&q=84'

const categories = [
  {
    title: 'Collares',
    description: 'Piezas para elevar looks simples con un punto de luz.',
    icon: Gem,
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Pulseras',
    description: 'Detalles fáciles de combinar para uso diario o regalo.',
    icon: Circle,
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Aretes',
    description: 'Modelos delicados y protagonistas para diferentes ocasiones.',
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Carteras y bolsos',
    description: 'Complementos prácticos para terminar un outfit con presencia.',
    icon: ShoppingBag,
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Accesorios para cabello',
    description: 'Piezas pequeñas para peinados limpios, casuales o más vestidos.',
    icon: Scissors,
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Sets de accesorios',
    description: 'Combinaciones listas para regalar o renovar tu joyero.',
    icon: Package,
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=84',
  },
]

const styleStories = [
  {
    title: 'Para elevar un básico',
    description: 'Un collar protagonista o aretes limpios pueden cambiar por completo una camisa blanca, un blazer o un vestido simple.',
  },
  {
    title: 'Para salir sin sobrepensar',
    description: 'Una cartera pequeña, una pulsera y un punto de brillo ayudan a cerrar el look sin hacerlo sentir recargado.',
  },
  {
    title: 'Para regalar con buen gusto',
    description: 'Los sets permiten resolver un detalle bonito con una presentación más pensada y fácil de elegir.',
  },
]

const featuredProducts = [
  {
    name: 'Collar Minimal',
    type: 'Collares',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Aretes de Luz',
    type: 'Aretes',
    image:
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Bolso de Día',
    type: 'Carteras y bolsos',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Set Elegante',
    type: 'Sets de accesorios',
    image:
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=84',
  },
]

const storeHighlights = [
  'Catálogo organizado por categoría',
  'Productos visuales para comparar rápido',
  'Carrito y consulta por WhatsApp',
]

export function AccesoriosKafkaPage() {
  const prefersReducedMotion = useReducedMotion()
  const lift = prefersReducedMotion ? {} : { whileTap: { scale: 0.99 } }

  return (
    <main className="min-h-svh bg-[#f8f1e6] text-[#1b1713]">
      <AccesoriosHeader />
      <AccesoriosHero lift={lift} />
      <AccesoriosCategories lift={lift} />
      <FeaturedCollection lift={lift} />
      <StyleSection lift={lift} />
      <FeaturedProducts lift={lift} />
      <StoreShowcase lift={lift} />
      <FinalCta lift={lift} />
      <AccesoriosFooter />
    </main>
  )
}

function AccesoriosHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#dacbb8]/80 bg-[#f8f1e6]/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label="Accesorios Kafka">
          <span className="grid size-10 place-items-center rounded-full bg-[#1b1713] text-sm font-black text-[#e7c98f]">
            AK
          </span>
          <span className="grid leading-tight">
            <strong className="text-sm font-black uppercase text-[#1b1713]">
              Accesorios Kafka
            </strong>
            <small className="text-xs font-medium text-[#75695d]">Boutique editorial</small>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold text-[#75695d] lg:flex" aria-label="Secciones Accesorios Kafka">
          <a className="transition hover:text-[#1b1713]" href="#categorias">
            Categorías
          </a>
          <a className="transition hover:text-[#1b1713]" href="#coleccion">
            Colección
          </a>
          <a className="transition hover:text-[#1b1713]" href="#estilo">
            Estilo
          </a>
          <a className="transition hover:text-[#1b1713]" href="#destacados">
            Destacados
          </a>
          <a className="transition hover:text-[#1b1713]" href={storeHref}>
            Tienda online
          </a>
        </nav>

        <Button asChild className="rounded-full bg-[#1b1713] text-white hover:bg-[#302820]">
          <a href={storeHref}>
            <ShoppingBag aria-hidden="true" className="size-4" />
            Ver tienda
          </a>
        </Button>
      </div>
    </header>
  )
}

function AccesoriosHero({ lift }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#dacbb8]" id="inicio">
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#f8f1e6_0%,#efe0ca_46%,#c4a66d_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] bg-[#1b1713] lg:block"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 py-12 md:py-16 lg:min-h-[690px] lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <motion.div className="max-w-2xl" {...lift}>
          <Badge className="border-[#d7c3a7] bg-white/58 text-[#604f3e]">
            Moda & accesorios
          </Badge>
          <h1 className="mt-6 max-w-3xl font-serif text-[3.6rem] font-semibold leading-[0.86] text-[#1b1713] sm:text-7xl lg:text-[6rem]">
            Los detalles definen tu estilo.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5449] sm:text-lg">
            Una boutique visual para descubrir collares, aretes, bolsos y sets pensados
            para acompañar tus looks con intención.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#1b1713] px-7 text-white hover:bg-[#302820]">
              <a href={storeHref}>
                <ShoppingBag aria-hidden="true" className="size-4" />
                Explorar colección
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full border-[#d7c3a7] bg-white/62 text-[#1b1713] hover:bg-white"
            >
              <a href="#estilo">
                Ver ideas de estilo
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative grid min-h-[520px] overflow-hidden rounded-[2rem] border border-white/50 bg-white/18 p-3 shadow-[0_36px_100px_rgba(59,45,29,0.18)] lg:rounded-none lg:border-[#e7c98f]/22 lg:bg-[#1b1713]"
          {...lift}
        >
          <img
            className="h-full min-h-[496px] w-full rounded-[1.55rem] object-cover object-[50%_50%] lg:rounded-none"
            src={heroImage}
            alt="Accesorios elegantes sobre superficie clara"
            decoding="async"
          />
          <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/24 bg-[#1b1713]/82 p-5 text-white backdrop-blur">
            <p className="text-xs font-black uppercase text-[#e7c98f]">Nueva colección</p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-[18rem] font-serif text-3xl font-semibold leading-none">
                Piezas pequeñas, presencia completa.
              </h2>
              <a
                className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-white px-4 text-sm font-black text-[#1b1713] no-underline transition hover:bg-[#f4eadb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7c98f]"
                href={storeHref}
              >
                Ir a tienda
                <ArrowRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AccesoriosCategories({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="categorias">
      <div className="mx-auto max-w-[1180px]">
        <AccesoriosIntro
          eyebrow="Categorías"
          title="Una colección ordenada para elegir sin perder el estilo."
          description="Cada categoría funciona como una puerta de entrada rápida hacia la tienda, manteniendo la experiencia limpia y visual."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon

            return (
              <motion.a
                className={cn(
                  'group relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-[#d9cab4] bg-[#1b1713] text-white no-underline outline-none transition hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#1b1713]',
                  index === 0 || index === 3 ? 'xl:row-span-2 xl:min-h-[500px]' : '',
                )}
                href={storeHref}
                key={category.title}
                {...lift}
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover opacity-86 transition duration-500 group-hover:scale-[1.03]"
                  src={category.image}
                  alt={category.title}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,23,19,0.08),rgba(27,23,19,0.78))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="grid size-11 place-items-center rounded-full bg-white text-[#1b1713] shadow-sm">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <h3 className="mt-5 font-serif text-4xl font-semibold leading-none">
                    {category.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/76">
                    {category.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#f5dcae]">
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

function FeaturedCollection({ lift }) {
  return (
    <section className="bg-[#1b1713] px-4 py-20 text-white sm:px-6 lg:px-8" id="coleccion">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10"
          {...lift}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={collectionImage}
            alt="Collares y accesorios organizados en una composición editorial"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,23,19,0),rgba(27,23,19,0.7))]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/18 bg-white/12 p-5 backdrop-blur">
            <p className="text-xs font-black uppercase text-[#f5dcae]">
              Colección destacada
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold leading-none">
              Accesorios que se sienten elegidos, no acumulados.
            </h2>
          </div>
        </motion.div>

        <div>
          <AccesoriosIntro
            dark
            eyebrow="Selección editorial"
            title="Una vitrina con ritmo de revista y camino directo a la compra."
            description="Para accesorios, la foto vende tanto como el texto. Por eso la landing privilegia composición, escala y contraste antes de saturar con demasiada información."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Mix & match', 'Combina piezas pequeñas sin perder limpieza visual.'],
              ['Look completo', 'Une bolso, aretes y collar desde una sola intención.'],
              ['Regalo fácil', 'Encuentra sets y opciones listas para consultar.'],
              ['Compra clara', 'Pasa del descubrimiento a la tienda online en un toque.'],
            ].map(([title, description]) => (
              <div
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5"
                key={title}
              >
                <span className="grid size-10 place-items-center rounded-full bg-[#e7c98f] text-[#1b1713]">
                  <BadgeCheck aria-hidden="true" size={17} />
                </span>
                <h3 className="mt-5 text-xl font-black leading-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/66">{description}</p>
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="mt-8 rounded-full bg-white px-7 text-[#1b1713] hover:bg-[#f4eadb]">
            <a href={storeHref}>
              Ver colección online
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function StyleSection({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="estilo">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <AccesoriosIntro
            eyebrow="Guía de estilo"
            title="Complementa tu look desde una idea, no desde una lista infinita."
            description="Una buena tienda de accesorios ayuda a imaginar cómo se usa cada pieza. Esta sección convierte inspiración en intención de compra."
          />

          <div className="grid gap-4">
            {styleStories.map((story, index) => (
              <motion.a
                className="group grid gap-5 rounded-[1.5rem] border border-[#d9cab4] bg-[#fffaf2] p-5 text-inherit no-underline transition hover:-translate-y-1 hover:border-[#b8955f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b1713] md:grid-cols-[88px_minmax(0,1fr)_auto] md:items-center"
                href={storeHref}
                key={story.title}
                {...lift}
              >
                <span className="grid size-16 place-items-center rounded-full bg-[#1b1713] font-serif text-2xl font-semibold text-[#e7c98f]">
                  0{index + 1}
                </span>
                <span>
                  <strong className="block font-serif text-3xl font-semibold leading-none text-[#1b1713]">
                    {story.title}
                  </strong>
                  <span className="mt-3 block text-sm leading-7 text-[#65584c]">
                    {story.description}
                  </span>
                </span>
                <span className="hidden size-11 place-items-center rounded-full border border-[#d9cab4] bg-white text-[#1b1713] transition group-hover:bg-[#1b1713] group-hover:text-white md:grid">
                  <ArrowRight aria-hidden="true" size={18} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProducts({ lift }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8" id="destacados">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <AccesoriosIntro
            eyebrow="Productos destacados"
            title="Una muestra visual para provocar el primer clic hacia la tienda."
            description="La tienda online concentra el catálogo completo. Aquí mostramos una vitrina breve, elegante y directa."
          />
          <Button asChild variant="secondary" className="w-fit rounded-full border-[#d7c3a7] bg-white text-[#1b1713]">
            <a href={storeHref}>
              Ver tienda completa
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <motion.a
              className="group overflow-hidden rounded-[1.5rem] border border-[#d9cab4] bg-[#fffaf2] text-inherit no-underline outline-none transition hover:-translate-y-1 hover:border-[#b8955f] focus-visible:ring-2 focus-visible:ring-[#1b1713]"
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
                <span className="text-xs font-black uppercase text-[#9a7a45]">
                  {product.type}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight">
                  {product.name}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#1b1713]">
                  Consultar en tienda
                  <ArrowRight aria-hidden="true" size={16} />
                </span>
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
      <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[2rem] border border-[#d9cab4] bg-[#fffaf2] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="grid content-center p-6 sm:p-10 lg:p-12">
          <Badge className="border-[#d7c3a7] bg-[#f8f1e6] text-[#745f40]">
            Tienda online
          </Badge>
          <h2 className="mt-5 max-w-xl font-serif text-5xl font-semibold leading-none sm:text-6xl">
            Tu colección lista para explorarse con calma.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#65584c]">
            Accesorios Kafka puede conectar la landing con una tienda donde el visitante
            revisa categorías, guarda favoritos, arma un carrito y continúa por WhatsApp.
          </p>
          <div className="mt-8 grid gap-3">
            {storeHighlights.map((item) => (
              <div className="flex items-center gap-3 text-sm font-black text-[#1b1713]" key={item}>
                <span className="grid size-8 place-items-center rounded-full bg-[#1b1713] text-[#e7c98f]">
                  <BadgeCheck aria-hidden="true" size={15} />
                </span>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#1b1713] px-8 text-white hover:bg-[#302820]">
              <motion.a href={storeHref} {...lift}>
                Descubrir tienda online
                <ArrowRight aria-hidden="true" size={18} />
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-[#d7c3a7] bg-white text-[#1b1713] hover:bg-[#f8f1e6]">
              <motion.a href="#destacados" {...lift}>
                Ver destacados
              </motion.a>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[460px] lg:min-h-[620px]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={storeImage}
            alt="Bolso elegante presentado como producto de boutique"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(27,23,19,0.58))]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/22 bg-white/82 p-5 text-[#1b1713] backdrop-blur">
            <p className="text-xs font-black uppercase text-[#745f40]">
              Catálogo conectado
            </p>
            <h3 className="mt-3 max-w-md font-serif text-4xl font-semibold leading-none">
              De la inspiración al pedido en pocos pasos.
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCta({ lift }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] bg-[#1b1713] p-6 text-white sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge variant="dark" className="border-white/15 bg-white/10 text-[#f5dcae]">
              Accesorios Kafka
            </Badge>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-none">
              Una boutique online que deja que el producto respire.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Ideal para presentar accesorios con una estética premium y guiar al visitante
              hacia una tienda clara, visual y lista para consultar.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full bg-white px-8 text-[#1b1713] hover:bg-[#f4eadb]">
            <motion.a href={storeHref} {...lift}>
              Explorar toda la colección
              <ArrowRight aria-hidden="true" size={18} />
            </motion.a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function AccesoriosFooter() {
  return (
    <footer className="border-t border-[#d9cab4] bg-[#f8f1e6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-6 text-sm text-[#65584c] md:flex-row md:items-center">
        <div>
          <strong className="block text-base font-black text-[#1b1713]">Accesorios Kafka</strong>
          <span className="mt-1 block">Demo conceptual para boutiques de moda y accesorios.</span>
        </div>
        <div className="flex flex-wrap gap-4 font-bold">
          <a className="transition hover:text-[#1b1713]" href="#categorias">
            Categorías
          </a>
          <a className="transition hover:text-[#1b1713]" href="#estilo">
            Estilo
          </a>
          <a className="transition hover:text-[#1b1713]" href={storeHref}>
            Tienda online
          </a>
        </div>
      </div>
    </footer>
  )
}

function AccesoriosIntro({ dark = false, eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <Badge
        className={cn(
          dark
            ? 'border-white/15 bg-white/10 text-[#f5dcae]'
            : 'border-[#d7c3a7] bg-white/62 text-[#745f40]',
        )}
        variant={dark ? 'dark' : 'default'}
      >
        {eyebrow}
      </Badge>
      <h2
        className={cn(
          'mt-5 font-serif text-4xl font-semibold leading-none sm:text-5xl',
          dark ? 'text-white' : 'text-[#1b1713]',
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'mt-5 max-w-2xl text-base leading-8',
          dark ? 'text-white/68' : 'text-[#65584c]',
        )}
      >
        {description}
      </p>
    </div>
  )
}
