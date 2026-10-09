import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  Package,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Swords,
} from 'lucide-react'

import { CommerceRedirectSection } from '../components/commerce/CommerceRedirectSection'
import { Badge, Button, Card } from '../components/ui/primitives'
import { cn } from '../lib/utils'

const whatsappNumber = '51939718145'
const logoSrc = '/brand/godpackstore-logo.jpg'
const facebookUrl = 'https://www.facebook.com/Godpackstore/?ref=NONE_xav_ig_profile_page_web#'
const instagramUrl = 'https://www.instagram.com/godpackstore.peru/'
const whatsappMessage = encodeURIComponent(
  'Hola, quiero consultar stock de cartas y productos TCG en Godpackstore. ¿Me pueden ayudar?',
)

const categories = [
  {
    label: 'Pokémon',
    detail: 'Sobres, ETB, tins y cartas sueltas',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/37743086/pexels-photo-37743086.png',
    imageAlt: 'Cartas coleccionables de Pokémon sobre una mesa',
  },
  {
    label: 'Yu-Gi-Oh!',
    detail: 'Productos sellados, staples y colección',
    icon: Swords,
    image: 'https://images.pexels.com/photos/7809125/pexels-photo-7809125.jpeg',
    imageAlt: 'Cartas de juego coleccionables listas para revisar',
  },
  {
    label: 'Magic',
    detail: 'Boosters & packs',
    icon: BadgeCheck,
    image: 'https://lamazmorratcg.com/wp-content/uploads/2024/10/Magic-The-Gathering.jpg',
    imageAlt: 'Cartas coleccionables para jugadores de TCG',
  },
  {
    label: 'Accesorios',
    detail: 'Protectores, álbumes y cajas deck',
    icon: ShieldCheck,
    image: 'https://images.pexels.com/photos/9661254/pexels-photo-9661254.jpeg',
    imageAlt: 'Accesorios para proteger cartas coleccionables',
  },
]

const heroCards = [
  {
    title: 'Pokémon 151',
    rarity: 'Set buscado',
    tone: 'from-[#f9d65c] via-[#f9a826] to-[#111827]',
  },
  {
    title: 'Yu-Gi-Oh! 25th',
    rarity: 'Colección',
    tone: 'from-[#2b2f77] via-[#8b5cf6] to-[#020617]',
  },
  {
    title: 'One Piece OP',
    rarity: 'Preventa',
    tone: 'from-[#0ea5e9] via-[#2563eb] to-[#020617]',
  },
]

const featuredProducts = [
  {
    title: 'Booster pack Pokémon',
    game: 'Pokémon TCG',
    price: 'Consultar stock',
    tag: 'Más pedido',
    accent: '#f9b81f',
    image: 'https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/181/PMP20001499599/full_image-1.jpeg',
  },
  {
    title: 'Cartas sueltas Yu-Gi-Oh!',
    game: 'Yu-Gi-Oh!',
    price: 'Desde S/ 5',
    tag: 'Singles',
    accent: '#2f7df6',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Vz946sd-vyg5DoOCfGkzVcZHwHuxMWwRhEIpxuqNX751eYhjTJqY7coo&s=10',
  },
  {
    title: 'Accesorios Ultra Pro',
    game: 'Protección',
    price: 'Desde S/ 12',
    tag: 'Accesorios',
    accent: '#9dff3a',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuPaR6KyWWqp6HN8fOBQdEB0MPEdVCDATmWmjCsoh9uq2r9AnYKPWpCY&s=10',
  },
  {
    title: 'Preventa TCG',
    game: 'Nuevos lanzamientos',
    price: 'Separación disponible',
    tag: 'Preventa',
    accent: '#ffcf3f',
    image: 'https://i5.walmartimages.com/seo/Pok-mon-Trading-Card-Games-XY-Evolutions-Sealed-Booster-Box-36-Packs-Per-Box_b6f942d6-673e-49f1-ac4d-1ed8d230538d.5bd7f24dcbde3249d23c36ee3d244fcf.jpeg',
  },
]

const singles = [
  { title: 'Charizard EX', game: 'Pokémon', rarity: 'Ultra Rare', price: 'Desde S/ 18', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6lYFLXAVSlsVcuGsbBACWuzHFmV_n_nFQqXTO4uUNStwMAoiXO0X4I6f&s=10' },
  { title: 'Blue-Eyes White Dragon', game: 'Yu-Gi-Oh!', rarity: 'Secret Rare', price: 'Desde S/ 35', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtv6WZOU6IAw7YfLPwy0r33AQ-yVWFn3waOMGlW4HF0K1-gx75XAf6BE&s=10' },
  { title: 'Monkey D. Luffy', game: 'One Piece', rarity: 'Alt Art', price: 'Desde S/ 20', img: 'https://i.ebayimg.com/images/g/ljgAAOSw2eFi2Ysa/s-l1200.jpg' },
  { title: 'Pikachu Promo', game: 'Pokémon', rarity: 'Promo', price: 'Desde S/ 40', img: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P10387_158-85893_01.jpg' },
  { title: 'Staples competitivas', game: 'Yu-Gi-Oh!', rarity: 'Deck ready', price: 'Desde S/ 8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuOeEoP7ZIDBhnEVXpbs5ShTg70r4fuj2dq5DS0s0Mw&s=10' },
  { title: 'Energías y trainers', game: 'Pokémon', rarity: 'Play set', price: 'Desde S/ 3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDNpWY3AMciKQQT10MRInp-ScpCVgs-UXqo8f-KoCt6TaggYZwfs6rRw&s=10' },
]

const steps = [
  {
    title: 'Busca tu producto',
    description: 'Cuéntanos si necesitas sobres, cajas, cartas sueltas, accesorios o una preventa específica.',
    icon: Search,
  },
  {
    title: 'Confirmamos stock',
    description: 'Validamos edición, idioma, estado, precio y disponibilidad antes de preparar tu pedido.',
    icon: BadgeCheck,
  },
  {
    title: 'Recoge o coordina envío',
    description: 'Puedes visitar la tienda en Surco o consultar opciones de delivery según disponibilidad.',
    icon: Package,
  },
]

const reasons = [
  'Cartas originales y productos sellados.',
  'Stock para jugadores, coleccionistas y regalos.',
  'Preventas y novedades anunciadas por redes.',
  'Atención por WhatsApp antes de cerrar la compra.',
]

const testimonials = [
  {
    quote:
      'Encontré cartas para completar mi deck y me ayudaron a revisar opciones según presupuesto. La atención fue rápida.',
    author: 'Jugador local',
  },
  {
    quote:
      'Compré sobres y protectores para regalo. Me confirmaron stock por WhatsApp y pude coordinar recojo sin problema.',
    author: 'Cliente coleccionista',
  },
]

export function GodPackStorePage({ mockup }) {
  const prefersReducedMotion = useReducedMotion()
  const lift = prefersReducedMotion ? {} : { whileTap: { scale: 0.99 } }

  return (
    <main className="min-h-svh bg-[#f5f7fb] text-[#09111f]">
      <TopNotice />
      <Header mockup={mockup} />
      <Hero lift={lift} />
      <TrustStrip />
      <CategoriesSection lift={lift} />
      <CommerceRedirectSection
        className="bg-white"
        containerClassName="max-w-[1180px]"
        description="Consulta packs, cartas y accesorios desde una tienda con búsqueda, favoritos, carrito y salida por WhatsApp. La landing queda como vitrina de marca y la compra vive en el módulo e-commerce."
        eyebrow="Productos destacados"
        id="productos"
        note="Perfecto para validar stock cambiante sin duplicar carrito dentro de cada demo."
        products={featuredProducts}
        secondaryHref={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        secondaryLabel="Consultar stock"
        title="Explora productos TCG y arma el pedido desde la tienda online."
        theme={{
          badge: 'border-[#dfe5f1] bg-[#f5f7fb] text-[#0b63f6]',
          card: 'border-[#dfe5f1] bg-white',
          description: 'text-[#64748b]',
          heading: 'uppercase text-[#09111f]',
          note: 'text-[#64748b]',
          price: 'text-[#d18f00]',
          primaryButton: 'bg-[#0b63f6] text-white hover:bg-[#084fc9]',
          productTitle: 'uppercase text-[#09111f]',
          secondaryButton: 'border-[#dfe5f1] bg-[#f5f7fb] text-[#09111f] hover:bg-white',
          tag: 'bg-[#ffcf3f] text-[#09111f]',
        }}
      />
      <SinglesSection lift={lift} />
      <HowToBuySection />
      <StoreSection lift={lift} />
      <TestimonialsSection lift={lift} />
      <FinalCta lift={lift} />
      <Footer mockup={mockup} />
      <FloatingWhatsApp lift={lift} />
    </main>
  )
}

function TopNotice() {
  return (
    <div className="bg-[#050816] px-4 py-2 text-center text-xs font-black uppercase tracking-[0.12em] text-[#ffcf3f]">
      Cartas originales, productos sellados y preventas TCG en Lima
    </div>
  )
}

function Header({ mockup }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#dfe5f1] bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label={mockup.clientName}>
          <img
            className="size-12 rounded-2xl border border-[#f3cf4a] bg-[#050816] object-cover shadow-sm"
            src={logoSrc}
            alt=""
            aria-hidden="true"
          />
          <span className="grid leading-tight">
            <strong className="text-sm font-black uppercase tracking-[0.08em] text-[#09111f]">{mockup.clientName}</strong>
            <small className="text-xs font-bold text-[#64748b]">Pokémon, Yu-Gi-Oh! y más</small>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-black text-[#5e6b82] lg:flex" aria-label="Secciones">
          <a className="transition hover:text-[#09111f]" href="#categorias">Categorías</a>
          <a className="transition hover:text-[#09111f]" href="#productos">Productos</a>
          <a className="transition hover:text-[#09111f]" href="#singles">Cartas</a>
          <a className="transition hover:text-[#09111f]" href="#tienda">Tienda</a>
          <a className="transition hover:text-[#09111f]" href="/tiendas-prueba">Comprar online</a>
        </nav>

        <Button asChild className="rounded-full bg-[#0b63f6] text-white hover:bg-[#084fc9]">
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" className="block shrink-0" size={17} />
            Consultar
          </a>
        </Button>
      </div>
    </header>
  )
}

function Hero({ lift }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#050816] text-white" id="inicio">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(11,99,246,0.44),transparent_32%),radial-gradient(circle_at_72%_22%,rgba(255,207,63,0.28),transparent_30%),linear-gradient(135deg,#050816_0%,#09111f_54%,#0b1e4a_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-24 -z-10 h-px bg-gradient-to-r from-transparent via-[#ffcf3f]/70 to-transparent" aria-hidden="true" />

      <div className="grid min-h-[700px] lg:grid-cols-[minmax(0,0.92fr)_minmax(520px,1fr)]">
        <div className="grid content-center px-5 py-16 sm:px-8 lg:pl-[clamp(3rem,7vw,8rem)] lg:pr-10">
          <Badge className="items-center gap-2 border-[#ffcf3f]/40 bg-[#ffcf3f]/10 text-[#ffdf74]">
            <Sparkles aria-hidden="true" className="block shrink-0" size={14} />
            Tienda TCG en Lima
          </Badge>
          <h1 className="mt-6 text-[3.05rem] font-black uppercase leading-[0.9] tracking-normal sm:text-6xl lg:text-7xl">
            TODO PARA TU PRÓXIMA JUGADA.
          </h1>
          <p className="mt-6 max-w-xl text-base font-medium leading-8 text-white/72 sm:text-lg">
            Encuentra sobres, productos sellados, cartas sueltas, accesorios y preventas de Pokémon,
            Yu-Gi-Oh!, One Piece y otros TCG.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#ffcf3f] text-[#111827] hover:bg-[#f7bd18]">
              <motion.a href="#productos" {...lift}>
                Ver productos
                <ArrowRight aria-hidden="true" className="block shrink-0" size={18} />
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-white/16 bg-white/10 text-white hover:bg-white/15">
              <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...lift}>
                Consultar stock
              </motion.a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              ['Original', 'Cartas y sellados'],
              ['Preventa', 'Lanzamientos'],
              ['Surco', 'Recojo en tienda'],
            ].map(([value, label]) => (
              <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-4" key={value}>
                <strong className="block text-lg font-black text-[#ffcf3f]">{value}</strong>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.1em] text-white/54">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative min-h-[560px] overflow-hidden bg-[#0b63f6] lg:min-h-full lg:rounded-bl-[3rem]"
          {...lift}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.26),transparent_32%),linear-gradient(160deg,#0b63f6_0%,#061026_72%)]" />
          <div className="absolute left-6 top-6 z-10 flex flex-wrap gap-2">
            <Badge className="border-white/35 bg-white/92 text-[#0b63f6]">Packs</Badge>
            <Badge className="border-[#ffcf3f] bg-[#ffcf3f] text-[#111827]">Booster</Badge>
          </div>

          <div className="absolute inset-x-0 top-[18%] mx-auto flex w-[min(520px,88vw)] justify-center gap-4 sm:gap-6">
            {heroCards.map((card, index) => (
              <motion.div
                className={cn(
                  'relative h-[330px] w-[210px] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/28 bg-gradient-to-br p-4 shadow-[0_30px_90px_rgba(0,0,0,0.34)]',
                  card.tone,
                  index === 0 && '-rotate-6',
                  index === 1 && 'z-10 mt-10 scale-105',
                  index === 2 && 'rotate-6',
                )}
                key={card.title}
                {...lift}
              >
                <div className="absolute inset-3 rounded-[1.25rem] border border-white/25" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-white/92 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#111827]">
                      {card.rarity}
                    </span>
                    <h2 className="mt-5 text-3xl font-black uppercase leading-none">{card.title}</h2>
                  </div>
                  <div className="grid gap-3">
                    <img
                      className="mx-auto size-24 rounded-full border-[6px] border-white bg-[#050816] object-cover"
                      src={logoSrc}
                      alt=""
                      aria-hidden="true"
                    />
                    <div className="rounded-2xl bg-white px-4 py-3 text-center text-[#09111f]">
                      <strong className="block text-xl font-black uppercase leading-none">Godpack</strong>
                      <span className="mt-1 block text-[0.7rem] font-black uppercase tracking-[0.14em] text-[#64748b]">
                        Store Perú
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Card className="absolute bottom-6 left-5 right-5 rounded-[1.75rem] border-white/25 bg-white/92 p-5 shadow-2xl sm:left-auto sm:right-8 sm:w-[390px]">
            <div className="flex items-start gap-3">
              {/* <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#0b63f6] text-white">
                <Gem aria-hidden="true" className="block shrink-0" size={22} />
              </span> */}
              <div>
                <span className="text-xs font-black uppercase tracking-[0.12em] text-[#0b63f6]">
                  Stock y preventas
                </span>
                <h2 className="mt-1 text-2xl font-black leading-tight text-[#09111f]">Pregunta antes de comprar</h2>
                <p className="mt-2 text-sm leading-6 text-[#5f6d85]">
                  Te confirmamos edición, idioma, precio y disponibilidad por WhatsApp.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function TrustStrip() {
  const items = [
    { icon: Store, title: 'Recojo en tienda', detail: 'Av. Primavera 2261, Santiago de Surco.' },
    { icon: Clock3, title: 'Lun a sábado', detail: 'Atención de 11 a.m. a 9 p.m.' },
    { icon: ShieldCheck, title: 'Cartas originales', detail: 'Productos sellados y cartas para colección.' },
  ]

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1180px] gap-3 border-y border-[#dfe5f1] py-5 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <div className="flex gap-3 py-2" key={item.title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#0b63f6] shadow-sm">
                <Icon aria-hidden="true" className="block shrink-0" size={19} />
              </span>
              <div>
                <strong className="block text-sm text-[#09111f]">{item.title}</strong>
                <span className="mt-1 block text-sm leading-5 text-[#64748b]">{item.detail}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function CategoriesSection({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="categorias">
      <div className="mx-auto max-w-[1180px]">
        <SectionIntro
          eyebrow="Categorías"
          title="Todo para jugar, coleccionar y proteger tus cartas."
          description="Separa productos sellados, completa tu colección o arma tu deck con cartas y accesorios listos para consultar por WhatsApp."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => {
            const Icon = item.icon

            return (
              <motion.article
                className="group overflow-hidden rounded-[1.5rem] border border-[#dfe5f1] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
                key={item.label}
                {...lift}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={item.image}
                    alt={item.imageAlt}
                    loading="eager" decoding="async"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.08),rgba(5,8,22,0.68))]" />
                  <span className="absolute left-4 top-4 grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[#0b63f6] shadow-lg">
                    <Icon aria-hidden="true" className="block shrink-0" size={22} />
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#ffcf3f] px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-[#09111f]">
                    Stock rotativo
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black leading-tight text-[#09111f]">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#64748b]">{item.detail}</p>
                  <a className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0b63f6]" href="#productos">
                    Ver opciones
                    <ChevronRight aria-hidden="true" className="block shrink-0" size={16} />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SinglesSection({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="singles">
      <div className="mx-auto max-w-[1180px]">
        <SectionIntro
          eyebrow="Cartas sueltas"
          title="Completa tu colección o mejora tu deck."
          description="Consulta cartas específicas, rarezas, promos, staples y opciones para jugar o coleccionar. El stock se confirma por WhatsApp."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {singles.map((card, index) => (
            <motion.article
              className="grid min-h-[210px] overflow-hidden rounded-[1.6rem] border border-[#dfe5f1] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] sm:grid-cols-[130px_minmax(0,1fr)]"
              key={`${card.title}-${card.rarity}`}
              {...lift}
            >
              <div className={cn(
                'relative grid place-items-center p-4 text-white',
                index % 3 === 0 && 'bg-[#0b63f6]',
                index % 3 === 1 && 'bg-[#111827]',
                index % 3 === 2 && 'bg-[#d18f00]',
              )}>
                <div className="w-26 rounded-xl border border-white/34 bg-white/12 p-2 shadow-xl">
                <img src={card.img} alt={card.title} />
                  {/* <div className="h-full rounded-lg border border-white/24 bg-white/18 p-2">
                    <Star aria-hidden="true" className="mx-auto mt-2" size={20} />
                    <span className="mt-8 block text-center text-[0.58rem] font-black uppercase tracking-[0.12em]">Rare card</span>
                  </div> */}
                </div>
              </div>
              <div className="grid content-center p-5">
                <span className="text-xs font-black uppercase tracking-[0.12em] text-[#0b63f6]">{card.game}</span>
                <h3 className="mt-2 text-xl font-black leading-tight text-[#09111f]">{card.title}</h3>
                <p className="mt-2 text-sm font-bold text-[#64748b]">{card.rarity}</p>  
                <div className="mt-5 flex items-center justify-between gap-3">
                  <strong className="text-sm font-black text-[#d18f00]">{card.price}</strong>
                  <a
                    className="inline-flex items-center gap-1 text-sm font-black text-[#0b63f6]"
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, quiero consultar por la carta ${card.title} de ${card.game}. ¿La tienen disponible?`)}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Consultar
                    <ChevronRight aria-hidden="true" size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowToBuySection() {
  return (
    <section className="bg-[#050816] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <Badge variant="dark" className="border-white/15 bg-white/10 text-white">
            Compra simple
          </Badge>
          <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl">Consulta, separa y recoge.</h2>
          <p className="mt-5 text-base leading-8 text-white/68">
            Te ayudamos a ubicar productos, confirmar stock y coordinar la compra sin perder tiempo entre mensajes sueltos.
          </p>
        </div>

        <div className="grid gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <article className="grid gap-4 rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-5 sm:grid-cols-[64px_minmax(0,1fr)]" key={step.title}>
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#ffcf3f] text-[#111827]">
                  <Icon aria-hidden="true" className="block shrink-0" size={22} />
                </span>
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-[#ffcf3f]">Paso 0{index + 1}</span>
                  <h3 className="mt-2 text-2xl font-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">{step.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StoreSection({ lift }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="tienda">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          className="relative min-h-[540px] overflow-hidden rounded-[2rem] bg-[#09111f] p-6 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)]"
          {...lift}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(11,99,246,0.48),transparent_36%),linear-gradient(145deg,#09111f,#050816)]" />
          <div className="relative z-10 flex h-full min-h-[492px] flex-col justify-between">
            <div>
              <Badge className="border-[#ffcf3f]/40 bg-[#ffcf3f]/12 text-[#ffdf74]">Visítanos</Badge>
              <h2 className="mt-6 text-5xl font-black uppercase leading-none">Tienda física en Surco.</h2>
              <p className="mt-5 max-w-md text-base leading-8 text-white/68">
                Ven por productos sellados, cartas sueltas, preventas y accesorios para proteger tu colección.
              </p>
            </div>

            <div className="grid gap-3">
              <InfoRow icon={MapPin} title="Av. Primavera 2261" detail="Piso 2, tiendas 202, 204 y 212 - CC Full Market" />
              <InfoRow icon={CalendarDays} title="Lunes a sábado" detail="11 a.m. a 9 p.m." />
              <InfoRow icon={MessageCircle} title="WhatsApp" detail="+51 939 718 145" />
            </div>
          </div>
        </motion.div>

        <div>
          <SectionIntro
            eyebrow="Por qué elegirnos"
            title="Una tienda para jugadores y coleccionistas."
            description="Si estás buscando un sobre para abrir, una carta puntual para tu deck o accesorios para guardar tu colección, te ayudamos a elegir mejor."
          />
          <div className="mt-8 grid gap-3">
            {reasons.map((reason) => (
              <div className="flex items-center gap-3 rounded-2xl border border-[#dfe5f1] bg-[#f5f7fb] p-4 text-sm font-black text-[#334155]" key={reason}>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-[#0b63f6] shadow-sm">
                  <Check aria-hidden="true" className="block shrink-0" size={16} />
                </span>
                {reason}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-[#0b63f6] text-white hover:bg-[#084fc9]" size="lg">
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank">
                Consultar por WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" className="rounded-full border-[#dfe5f1] bg-white text-[#09111f]" size="lg">
              <a href={instagramUrl} rel="noreferrer" target="_blank">Ver Instagram</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ detail, icon: Icon, title }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/12 bg-white/[0.06] p-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ffcf3f] text-[#111827]">
        <Icon aria-hidden="true" className="block shrink-0" size={18} />
      </span>
      <div>
        <strong className="block text-sm">{title}</strong>
        <span className="mt-1 block text-sm leading-5 text-white/60">{detail}</span>
      </div>
    </div>
  )
}

function TestimonialsSection({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Comunidad TCG"
            title="Comprar cartas también es parte de la experiencia."
            description="El buen stock importa, pero también importa recibir una respuesta clara cuando buscas una carta, una expansión o un regalo."
          />
        </div>

        <div className="grid gap-4">
          {testimonials.map((item) => (
            <motion.article
              className="rounded-[1.75rem] border border-[#dfe5f1] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
              key={item.author}
              {...lift}
            >
              <Star aria-hidden="true" className="fill-[#ffcf3f] text-[#ffcf3f]" size={28} />
              <p className="mt-4 text-lg font-bold leading-8 text-[#09111f]">“{item.quote}”</p>
              <span className="mt-5 block text-sm font-black text-[#0b63f6]">{item.author}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta({ lift }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[2rem] bg-[#0b63f6] text-white shadow-[0_30px_90px_rgba(11,99,246,0.22)] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid content-center gap-5 p-6 sm:p-10 lg:p-12">
          <Badge className="border-white/24 bg-white/12 text-white">
            Ready to pull
          </Badge>
          <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">¿Buscas una carta o producto específico?</h2>
          <p className="text-base leading-8 text-white/74">
            Escríbenos el nombre, expansión o foto de referencia. Te ayudamos a revisar disponibilidad y alternativas.
          </p>
          <Button asChild size="lg" className="w-fit rounded-full bg-[#ffcf3f] text-[#111827] hover:bg-[#f7bd18]">
            <motion.a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, estoy buscando una carta o producto TCG específico. ¿Me pueden ayudar?')}`} rel="noreferrer" target="_blank" {...lift}>
              Consultar ahora
              <ArrowRight aria-hidden="true" className="block shrink-0" size={18} />
            </motion.a>
          </Button>
        </div>

        <div className="relative min-h-[320px] bg-[#050816]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,207,63,0.28),transparent_36%)]" />
          <div className="absolute inset-0 grid place-items-center">
            <img
              className="size-44 rounded-[2rem] border-4 border-[#ffcf3f] bg-[#050816] object-cover shadow-2xl"
              src={logoSrc}
              alt="Godpackstore"
              loading="eager" decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ mockup }) {
  return (
    <footer className="bg-[#050816] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a className="flex items-center gap-3 text-white no-underline" href="#inicio" aria-label={mockup.clientName}>
            <img
              className="size-12 rounded-2xl border border-[#ffcf3f] bg-[#050816] object-cover"
              src={logoSrc}
              alt=""
              aria-hidden="true"
            />
            <span className="grid leading-tight">
              <strong className="text-sm font-black uppercase tracking-[0.08em]">{mockup.clientName}</strong>
              <small className="text-xs font-medium text-white/62">Trading cards y accesorios</small>
            </span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
            Tienda TCG para comprar sobres, productos sellados, cartas sueltas, accesorios y preventas.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.14em] text-white/42">Secciones</h3>
          <div className="mt-4 grid gap-3 text-sm font-bold text-white/70">
            <a className="transition hover:text-white" href="#categorias">Categorías</a>
            <a className="transition hover:text-white" href="#productos">Productos</a>
            <a className="transition hover:text-white" href="#singles">Cartas</a>
            <a className="transition hover:text-white" href="#tienda">Tienda</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.14em] text-white/42">Redes</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              aria-label="Instagram"
              className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white hover:text-[#0b63f6]"
              href={instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon aria-hidden="true" className="block size-5 shrink-0" />
            </a>
            <a
              aria-label="Facebook"
              className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white hover:text-[#0b63f6]"
              href={facebookUrl}
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon aria-hidden="true" className="block size-5 shrink-0" />
            </a>
            <a
              aria-label="WhatsApp"
              className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white hover:text-[#25d366]"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon aria-hidden="true" className="block size-5 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp({ lift }) {
  return (
    <motion.a
      className="fixed bottom-5 left-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white no-underline shadow-[0_18px_45px_rgba(37,211,102,0.34)] transition hover:bg-[#1fbd59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63f6] focus-visible:ring-offset-2 sm:bottom-6 sm:left-6"
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      rel="noreferrer"
      target="_blank"
      {...lift}
      aria-label="Escribir por WhatsApp"
    >
      <WhatsAppIcon aria-hidden="true" className="block size-7 shrink-0" />
    </motion.a>
  )
}

function SectionIntro({ description, eyebrow, title }) {
  return (
    <div className="">
      <Badge className="border-[#dfe5f1] bg-white text-[#0b63f6]">
        {eyebrow}
      </Badge>
      <h2 className="mt-5 text-4xl font-black uppercase leading-none text-[#09111f] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#64748b]">
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

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.95 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 9h3V6h-3c-2.38 0-4 1.62-4 4v2H7v3h3v7h3v-7h3.2l.8-3h-4v-2c0-.62.38-1 1-1Z" />
    </svg>
  )
}
