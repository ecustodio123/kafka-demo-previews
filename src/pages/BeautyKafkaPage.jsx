import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  BadgeCheck,
  Droplets,
  Gem,
  Leaf,
  Palette,
  Scissors,
  ShoppingBag,
  Sparkles,
  SprayCan,
} from 'lucide-react'

import { Badge, Button } from '../components/ui/primitives'
import { cn } from '../lib/utils'

const storeHref = '/beauty-kafka/stores?id=4'

const heroImage =
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=86'

const editorialImage =
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=84'

const storeImage =
  'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1400&q=86'

const categories = [
  {
    title: 'Skincare',
    description: 'Rutinas de limpieza, hidratación y cuidado diario.',
    icon: Droplets,
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Maquillaje',
    description: 'Bases, labiales, brochas y acabados para cada ocasión.',
    icon: Palette,
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Perfumes',
    description: 'Fragancias para regalar, descubrir o volver parte de tu rutina.',
    icon: SprayCan,
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Cuidado corporal',
    description: 'Texturas suaves para consentirte después del baño.',
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Cuidado capilar',
    description: 'Selección práctica para lavar, tratar y estilizar.',
    icon: Scissors,
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=84',
  },
  {
    title: 'Kits de belleza',
    description: 'Sets listos para regalar o renovar tu tocador.',
    icon: Gem,
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=84',
  },
]

const featuredProducts = [
  {
    name: 'Rutina Glow Diario',
    type: 'Skincare',
    price: 'Desde S/ 89',
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Labial Soft Rose',
    type: 'Maquillaje',
    price: 'Desde S/ 39',
    image:
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Body Ritual Set',
    type: 'Cuidado corporal',
    price: 'Desde S/ 119',
    image:
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=84',
  },
  {
    name: 'Fragancia Signature',
    type: 'Perfumes',
    price: 'Desde S/ 145',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=84',
  },
]

const shoppingSteps = [
  'Explora productos por categoría',
  'Guarda favoritos y arma tu carrito',
  'Finaliza tu pedido por WhatsApp',
]

export function BeautyKafkaPage() {
  const prefersReducedMotion = useReducedMotion()
  const lift = prefersReducedMotion ? {} : { whileTap: { scale: 0.99 } }

  return (
    <main className="min-h-svh bg-[#fbf3ef] text-[#241817]">
      <BeautyHeader />
      <BeautyHero lift={lift} />
      <BeautyCategories lift={lift} />
      <EditorialExperience />
      <FeaturedProducts lift={lift} />
      <StoreInvitation lift={lift} />
      <FinalCta lift={lift} />
      <BeautyFooter />
    </main>
  )
}

function BeautyHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#ead8d0]/80 bg-[#fbf3ef]/86 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label="Beauty Kafka">
          <span className="grid size-10 place-items-center rounded-full bg-[#241817] text-sm font-black text-[#f7ded6]">
            BK
          </span>
          <span className="grid leading-tight">
            <strong className="text-sm font-black tracking-[0.08em]">Beauty Kafka</strong>
            <small className="text-xs font-medium text-[#7c6560]">Cosmética editorial</small>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold text-[#7c6560] lg:flex" aria-label="Secciones Beauty Kafka">
          <a className="transition hover:text-[#241817]" href="#categorias">
            Categorías
          </a>
          <a className="transition hover:text-[#241817]" href="#editorial">
            Experiencia
          </a>
          <a className="transition hover:text-[#241817]" href="#destacados">
            Destacados
          </a>
          <a className="transition hover:text-[#241817]" href={storeHref}>
            Tienda online
          </a>
        </nav>

        <Button asChild className="rounded-full bg-[#241817] text-white hover:bg-[#3a2926]">
          <a href={storeHref}>
            <ShoppingBag aria-hidden="true" className="size-4" />
            Ver tienda
          </a>
        </Button>
      </div>
    </header>
  )
}

function BeautyHero({ lift }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#ead8d0]" id="inicio">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_12%,rgba(231,165,174,0.35),transparent_32%),linear-gradient(135deg,#fbf3ef_0%,#f2d9d2_44%,#d7a8a1_100%)]" />

      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 py-12 md:py-16 lg:min-h-[650px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div className="max-w-2xl" {...lift}>
          <Badge className="border-[#e3b9b1] bg-white/60 text-[#7a4543]">
            Beauty store demo
          </Badge>
          <h1 className="mt-6 text-[3.15rem] font-black leading-[0.9] tracking-normal text-[#241817] sm:text-6xl lg:text-[4.9rem] xl:text-[5.35rem]">
            Belleza curada para comprar sin ruido.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#604b47] sm:text-lg">
            Una tienda visual para cosmética, skincare y regalos beauty: categorías claras,
            productos protagonistas y pedidos listos para continuar por WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#241817] px-7 text-white hover:bg-[#3a2926]">
              <a href={storeHref}>
                <ShoppingBag aria-hidden="true" className="size-4" />
                Explorar tienda online
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full border-[#e3c4bb] bg-white/60 text-[#241817] hover:bg-white"
            >
              <a href="#categorias">
                Ver categorías
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </Button>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {['Catálogo visual', 'Favoritos', 'Pedido por WhatsApp'].map((item) => (
              <div className="rounded-2xl border border-white/60 bg-white/48 px-4 py-3 text-sm font-black text-[#4b3430] backdrop-blur" key={item}>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/65 bg-white/28 p-3 shadow-[0_36px_100px_rgba(99,52,48,0.18)] backdrop-blur"
          {...lift}
        >
          <img
            className="h-full min-h-[476px] w-full rounded-[1.55rem] object-cover object-[54%_50%]"
            src={heroImage}
            alt="Productos de maquillaje premium sobre fondo rosado"
            decoding="async"
          />
          <div className="absolute inset-x-7 bottom-7 rounded-[1.5rem] border border-white/55 bg-white/82 p-5 text-[#241817] shadow-[0_22px_70px_rgba(36,24,23,0.16)] backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9c5c58]">
              Edición de temporada
            </p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <h2 className="max-w-[15rem] text-3xl font-black leading-none">
                Sets beauty listos para regalar.
              </h2>
              <span className="rounded-full bg-[#241817] px-4 py-2 text-sm font-black text-white">
                20% Dcto.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function BeautyCategories({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="categorias">
      <div className="mx-auto max-w-[1180px]">
        <BeautyIntro
          eyebrow="Categorías"
          title="Una vitrina ordenada para comprar por rutina, ocasión o antojo."
          description="La experiencia está pensada para que el visitante encuentre rápido lo que busca y pase a la tienda con intención de compra."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon

            return (
              <motion.a
                className="group grid min-h-[360px] content-between overflow-hidden rounded-[1.75rem] border border-[#ead8d0] bg-white text-inherit no-underline shadow-[0_24px_70px_rgba(99,52,48,0.08)] outline-none transition hover:-translate-y-1 hover:shadow-[0_30px_88px_rgba(99,52,48,0.13)] focus-visible:ring-2 focus-visible:ring-[#241817]"
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
                  <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-white/88 text-[#9c5c58] shadow-sm backdrop-blur">
                    <Icon aria-hidden="true" size={19} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-black leading-tight">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6f5954]">{category.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#241817]">
                    Ver en tienda
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

function EditorialExperience() {
  return (
    <section className="bg-[#241817] px-4 py-20 text-white sm:px-6 lg:px-8" id="editorial">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-82"
            src={editorialImage}
            alt="Editorial de belleza con maquillaje y productos cosméticos"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,24,23,0.08),rgba(36,24,23,0.72))]" />
          <div className="absolute inset-x-6 bottom-6">
            <Badge variant="dark" className="border-white/20 bg-white/12">
              Look editorial
            </Badge>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-none sm:text-5xl">
              Belleza que se entiende desde la primera pantalla.
            </h2>
          </div>
        </div>

        <div>
          <BeautyIntro
            dark
            eyebrow="Experiencia de compra"
            title="Menos catálogo frío, más guía visual para elegir mejor."
            description="Una marca beauty necesita mostrar textura, color y estilo. Por eso esta landing acompaña la tienda con composición editorial, navegación simple y CTAs visibles sin sentirse insistentes."
          />
          <div className="mt-8 grid gap-3">
            {shoppingSteps.map((step, index) => (
              <div className="grid grid-cols-[52px_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4" key={step}>
                <span className="grid size-12 place-items-center rounded-full bg-white text-[#241817] text-sm font-black">
                  0{index + 1}
                </span>
                <span className="text-base font-black">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProducts({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="destacados">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <BeautyIntro
            eyebrow="Productos destacados"
            title="Piezas visuales que abren el apetito de compra."
            description="Una selección de referencia para demostrar cómo se vería un catálogo beauty con precio, categoría y entrada directa a la tienda."
          />
          <Button asChild variant="secondary" className="w-fit rounded-full border-[#e3c4bb] bg-white text-[#241817]">
            <a href={storeHref}>
              Ver tienda completa
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <motion.a
              className="group overflow-hidden rounded-[1.75rem] border border-[#ead8d0] bg-white text-inherit no-underline shadow-[0_22px_70px_rgba(99,52,48,0.08)] outline-none transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(99,52,48,0.14)] focus-visible:ring-2 focus-visible:ring-[#241817]"
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
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#9c5c58]">
                  {product.type}
                </span>
                <h3 className="mt-2 text-xl font-black leading-tight">{product.name}</h3>
                <p className="mt-2 text-sm font-black text-[#9c5c58]">{product.price}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoreInvitation({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="tienda">
      <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[2.25rem] border border-[#ead8d0] bg-white shadow-[0_34px_110px_rgba(99,52,48,0.1)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid content-center p-6 sm:p-10 lg:p-12">
          <Badge className="border-[#e3b9b1] bg-[#fbf3ef] text-[#7a4543]">
            Tienda online
          </Badge>
          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl">
            Del deseo al pedido, con menos pasos y más belleza visual.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#6f5954]">
            La tienda permite explorar productos, filtrar categorías, guardar favoritos y enviar
            una consulta por WhatsApp con el pedido mejor ordenado.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#241817] px-8 text-white hover:bg-[#3a2926]">
              <motion.a href={storeHref} {...lift}>
                Explorar tienda online
                <ArrowRight aria-hidden="true" size={18} />
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-[#e3c4bb] bg-[#fbf3ef] text-[#241817] hover:bg-white">
              <motion.a href="#destacados" {...lift}>
                Ver destacados
              </motion.a>
            </Button>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={storeImage}
            alt="Productos de skincare y belleza organizados para tienda online"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(36,24,23,0.44))]" />
          <div className="absolute bottom-6 left-6 right-6 grid gap-3 rounded-[1.5rem] border border-white/30 bg-white/80 p-4 backdrop-blur">
            {['Búsqueda por categoría', 'Favoritos y carrito', 'Checkout por WhatsApp'].map((item) => (
              <div className="flex items-center gap-3 text-sm font-black text-[#241817]" key={item}>
                <span className="grid size-8 place-items-center rounded-full bg-[#241817] text-white">
                  <BadgeCheck aria-hidden="true" size={15} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCta({ lift }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] bg-[#d9aea8] p-6 text-[#241817] sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge className="border-white/50 bg-white/45 text-[#7a4543]">
              Beauty Kafka
            </Badge>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none sm:text-5xl">
              Una tienda beauty debe sentirse tan cuidada como los productos que vende.
            </h2>
          </div>
          <div className="grid gap-3 sm:min-w-[300px]">
            <Button asChild size="lg" className="rounded-full bg-[#241817] text-white hover:bg-[#3a2926]">
              <motion.a href={storeHref} {...lift}>
                Explorar tienda online
                <ShoppingBag aria-hidden="true" className="size-4" />
              </motion.a>
            </Button>
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/45 bg-white/35 px-6 text-sm font-black text-[#241817] no-underline transition hover:bg-white/50" href="#inicio">
              Volver al inicio
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function BeautyFooter() {
  return (
    <footer className="border-t border-[#ead8d0] bg-[#241817] px-4 py-10 text-sm text-white/68 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <strong className="block text-base font-black text-white">Beauty Kafka</strong>
          <p className="mt-2 max-w-xl leading-6">
            Demo conceptual para marcas de cosmética, skincare y belleza que quieren vender online con una experiencia visual premium.
          </p>
        </div>
        <a className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-black text-white no-underline transition hover:bg-white/10" href={storeHref}>
          Ver tienda
          <ArrowRight aria-hidden="true" size={16} />
        </a>
      </div>
    </footer>
  )
}

function BeautyIntro({ dark = false, description, eyebrow, title }) {
  return (
    <div className="max-w-3xl">
      <Badge
        className={cn(
          'gap-2',
          dark
            ? 'border-white/15 bg-white/10 text-white'
            : 'border-[#e3b9b1] bg-white/70 text-[#7a4543]',
        )}
      >
        <Leaf aria-hidden="true" size={14} />
        {eyebrow}
      </Badge>
      <h2 className={cn('mt-5 text-4xl font-black leading-none sm:text-5xl', dark ? 'text-white' : 'text-[#241817]')}>
        {title}
      </h2>
      <p className={cn('mt-5 max-w-2xl text-base leading-8', dark ? 'text-white/68' : 'text-[#6f5954]')}>
        {description}
      </p>
    </div>
  )
}
