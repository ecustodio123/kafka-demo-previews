import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  ExternalLink,
  Globe2,
  Heart,
  Layers3,
  MessageCircle,
  MousePointerClick,
  SearchCheck,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
} from 'lucide-react'

import { Badge, Button, Card, CardDescription, CardHeader, CardTitle } from '../components/ui/primitives'
import { mockups } from '../data/mockups'
import { cn } from '../lib/utils'

const publishedProjects = [
  {
    name: 'Surevia Group',
    category: 'Cargo Risk Management',
    url: 'https://sureviagroup.com/home',
    image: '/client-work/surevia.png',
    description:
      'Sitio corporativo para explicar gestión de riesgos de carga, coberturas y respaldo operativo con una presencia sobria.',
    result: 'Claridad comercial para un servicio técnico y de alto valor.',
    accent: 'from-sky-500/25 to-emerald-400/10',
  },
  {
    name: 'Cafe Siniestro',
    category: 'Contenido especializado',
    url: 'https://cafesiniestro.com/',
    image: '/client-work/cafe-siniestro.png',
    description:
      'Marca personal y plataforma de contenidos para convertir experiencia técnica en autoridad digital y conversación clara.',
    result: 'Una presencia editorial pensada para posicionar conocimiento.',
    accent: 'from-amber-400/25 to-rose-400/10',
  },
  {
    name: 'SUINTEC Peru',
    category: 'Soluciones industriales',
    url: 'https://suintecperu.com/',
    image: '/client-work/suintec.png',
    description:
      'Web comercial para ordenar bombas, motores, tableros y soluciones industriales con rutas simples hacia cotización.',
    result: 'Catálogo claro para abrir conversaciones de venta.',
    accent: 'from-blue-500/25 to-cyan-300/10',
  },
]

const capabilities = [
  {
    title: 'Tiendas online ligeras',
    description: 'Catálogo, búsqueda, favoritos, carrito y pedidos por WhatsApp para vender sin una operación pesada.',
    icon: ShoppingCart,
  },
  {
    title: 'Landing pages que venden',
    description: 'Estructura, jerarquía, copy y secciones pensadas para que el visitante entienda rápido y tome acción.',
    icon: MousePointerClick,
  },
  {
    title: 'Sitios corporativos',
    description: 'Páginas limpias para presentar servicios, clientes, procesos, confianza y canales de contacto.',
    icon: Globe2,
  },
  {
    title: 'Interfaces frontend',
    description: 'Experiencias responsive con componentes reutilizables, estados claros y una sensación premium.',
    icon: Layers3,
  },
  {
    title: 'WhatsApp y formularios',
    description: 'Flujos de contacto simples para que el cliente llegue con contexto y menos fricción.',
    icon: MessageCircle,
  },
  {
    title: 'SEO base',
    description: 'Títulos, estructura, metadata inicial y contenido escaneable para publicar con mejor punto de partida.',
    icon: SearchCheck,
  },
  {
    title: 'Publicación web',
    description: 'Sitios listos para desplegar, compartir y mantener sin prometer sistemas complejos innecesarios.',
    icon: ShieldCheck,
  },
]

const processSteps = [
  {
    label: '01',
    title: 'Ordenamos la idea',
    description: 'Definimos objetivo, público, oferta, secciones clave y tono visual antes de abrir el editor.',
  },
  {
    label: '02',
    title: 'Diseñamos para convertir',
    description: 'Construimos una página clara, responsive y atractiva, cuidando ritmo visual, fotos y llamados a la acción.',
  },
  {
    label: '03',
    title: 'Publicamos y afinamos',
    description: 'Dejamos el sitio listo para compartir, con ajustes finales de contenido, performance y contacto.',
  },
]

const signals = [
  'Diseño responsive desde el primer boceto',
  'Contenido breve, humano y fácil de escanear',
  'Componentes consistentes para crecer sin rehacer todo',
  'Enfoque frontend: visual, estructura, contacto y publicación',
]

const featuredMockupSlugs = [
  'floreria-kafka',
  'veterinaria-kafka',
  'veterinaria-kafka-2',
  'psicologa-kafka',
  'centro-de-conciliacion-kafka',
  'god-pack-store',
]

const mockupFallbackImages = {
  'centro-de-conciliacion-kafka':
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=84',
  'floreria-kafka':
    'https://images.unsplash.com/photo-1690315478701-33744ce23a61?auto=format&fit=crop&w=1200&q=84',
  'floreria-kafka-2':
    'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1200&q=84',
  'god-pack-store':
    'https://images.pexels.com/photos/37743086/pexels-photo-37743086.png?auto=compress&cs=tinysrgb&w=1200',
  'psicologa-kafka':
    'https://images.pexels.com/photos/10041258/pexels-photo-10041258.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'veterinaria-kafka':
    'https://images.pexels.com/photos/6131566/pexels-photo-6131566.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'veterinaria-kafka-2':
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=84',
}

const featuredMockups = featuredMockupSlugs
  .map((slug) => mockups.find((mockup) => mockup.slug === slug))
  .filter(Boolean)

function getMockupImage(mockup) {
  return mockup.shareImage || mockup.hero?.image || mockupFallbackImages[mockup.slug]
}

export function HomePage() {
  const prefersReducedMotion = useReducedMotion()
  const lift = prefersReducedMotion ? {} : { whileTap: { scale: 0.99 } }

  return (
    <main className="min-h-svh bg-[#f7f7f4] text-neutral-950">
      <SiteHeader />
      <HeroSection lift={lift} />
      <ClientWorkSection lift={lift} />
      <EcommerceSection lift={lift} />
      <MockupsSection lift={lift} />
      <CapabilitiesSection />
      <ProcessSection />
      <FinalCta lift={lift} />
    </main>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-[#f7f7f4]/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
        <a className="flex items-center gap-3 no-underline" href="/" aria-label="Kafka Studio">
          <span className="grid size-10 place-items-center rounded-xl bg-neutral-950 text-sm font-black text-white">
            K
          </span>
          <span className="grid leading-tight">
            <strong className="text-sm font-extrabold">Kafka</strong>
            <small className="text-xs text-neutral-500">Frontend studio</small>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-600 md:flex" aria-label="Principal">
          <a className="transition hover:text-neutral-950" href="#clientes">
            Clientes
          </a>
          <a className="transition hover:text-neutral-950" href="#ecommerce">
            E-commerce
          </a>
          <a className="transition hover:text-neutral-950" href="#mockups">
            Demos
          </a>
          <a className="transition hover:text-neutral-950" href="#servicios">
            Servicios
          </a>
          <a className="transition hover:text-neutral-950" href="#proceso">
            Proceso
          </a>
        </nav>

        <Button asChild variant="secondary" className="hidden rounded-full md:inline-flex">
          <a href="#contacto">Conversemos</a>
        </Button>
      </div>
    </header>
  )
}

function HeroSection({ lift }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-[#f4f1eb] text-neutral-950">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_18%_18%,rgba(244,114,182,0.16),transparent_34%),radial-gradient(circle_at_78%_12%,rgba(20,184,166,0.12),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="mx-auto w-[min(1180px,calc(100%-32px))] py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="max-w-4xl">
            <Badge className="border-neutral-300 bg-white/76 text-neutral-800">
              Kafka Studio
            </Badge>
            <h1 className="mt-6 max-w-5xl text-[2.65rem] font-semibold leading-[0.94] sm:text-6xl lg:text-7xl">
              Webs que se sienten premium desde el primer vistazo.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
              Diseñamos landing pages y sitios corporativos para negocios que necesitan explicar
              mejor lo que venden, verse confiables y convertir visitas en conversaciones reales.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <motion.a href="#clientes" {...lift}>
                  Ver trabajos publicados
                  <ArrowRight aria-hidden="true" size={18} />
                </motion.a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-full bg-white/80">
                <motion.a href="#servicios" {...lift}>
                  Qué podemos construir
                </motion.a>
              </Button>
            </div>
          </div>

          <div className="hidden gap-3 lg:grid">
            <span className="text-xs font-semibold uppercase text-neutral-500">Enfoque Kafka</span>
            <HeroMetric value="3" label="clientes publicados online" />
            <HeroMetric value="100%" label="responsive y frontend" />
            <HeroMetric value="WA" label="contacto simple para vender" />
          </div>
        </div>

        <div className="mt-6 grid gap-3 lg:hidden">
          <span className="text-xs font-semibold uppercase text-neutral-500">Enfoque Kafka</span>
          <HeroMetric value="3" label="clientes publicados online" />
          <HeroMetric value="100%" label="responsive y frontend" />
          <HeroMetric value="WA" label="contacto simple para vender" />
        </div>
      </div>
    </section>
  )
}

function EcommerceSection({ lift }) {
  const commerceFeatures = [
    'Catálogo por categorías',
    'Búsqueda y filtros',
    'Favoritos',
    'Carrito de compras',
    'Diseño responsive',
    'Pedidos por WhatsApp',
  ]

  return (
    <section className="bg-neutral-950 px-4 py-20 text-white sm:px-6 lg:px-8" id="ecommerce">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div>
          <Badge variant="dark" className="border-white/15 bg-white/10">
            Nuevo servicio
          </Badge>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-none sm:text-5xl">
            Tu negocio merece más que una vitrina digital. Ahora también puedes vender online.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
            Estamos preparando tiendas online con catálogo, favoritos, carrito y pedidos por WhatsApp:
            una forma práctica de probar ventas digitales sin prometer pasarelas o sistemas pesados.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-white text-neutral-950 hover:bg-neutral-100">
              <motion.a href="/kafka-store" {...lift}>
                Probar tienda online
                <ArrowRight aria-hidden="true" size={18} />
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/15">
              <motion.a href="#mockups" {...lift}>
                Ver mockups por rubro
              </motion.a>
            </Button>
          </div>
        </div>

        <motion.div
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
          {...lift}
        >
          <div className="rounded-[1.5rem] bg-[#f8fafc] p-4 text-neutral-950">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-neutral-950 text-white">
                  <Store aria-hidden="true" size={20} />
                </span>
                <div>
                  <strong className="block">Kafka Commerce</strong>
                  <span className="text-sm text-neutral-500">Tienda reutilizable</span>
                </div>
              </div>
              <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700">WhatsApp checkout</Badge>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {commerceFeatures.map((feature) => (
                <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-3 text-sm font-semibold" key={feature}>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-neutral-950 text-white">
                    {feature === 'Favoritos' ? <Heart aria-hidden="true" size={15} /> : <BadgeCheck aria-hidden="true" size={15} />}
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MockupsSection({ lift }) {
  return (
    <section className="bg-[#f7f7f4] px-4 py-20 sm:px-6 lg:px-8" id="mockups">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Mockups conceptuales"
            title="Explora lo que podemos crear para tu negocio."
            description="Estas demos no son proyectos publicados para clientes reales: son plantillas comerciales para visualizar dirección estética, estructura y experiencia antes de cotizar."
          />
          <Button asChild variant="secondary" className="w-fit rounded-full">
            <a href="/kafka-store">
              Probar e-commerce
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredMockups.map((mockup) => (
            <motion.a
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white text-inherit no-underline shadow-[0_22px_70px_rgba(15,23,42,0.08)] outline-none transition focus-visible:ring-2 focus-visible:ring-neutral-950"
              href={`/${mockup.slug}`}
              key={mockup.slug}
              {...lift}
            >
              <div className="relative overflow-hidden bg-neutral-100">
                <img
                  className="aspect-[16/10] w-full object-cover"
                  src={getMockupImage(mockup)}
                  alt={`Vista previa conceptual para ${mockup.industry}`}
                  loading="eager" decoding="async"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-xs font-bold text-neutral-700 shadow-sm backdrop-blur">
                  Demo conceptual
                </span>
              </div>
              <div className="grid gap-4 p-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-400">
                    {mockup.industry}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight">{mockup.clientName}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{mockup.summary}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-neutral-950">
                  Ver demo
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

function HeroMetric({ label, value }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <strong className="block text-3xl font-semibold leading-none">{value}</strong>
      <span className="mt-2 block text-sm font-medium text-neutral-500">{label}</span>
    </div>
  )
}

function ClientWorkSection({ lift }) {
  return (
    <section className="relative -mt-8 px-4 pb-20 pt-16 sm:px-6 lg:px-8" id="clientes">
      <div className="mx-auto max-w-[1180px]">
        <SectionIntro
          eyebrow="Clientes reales"
          title="Proyectos publicados que ya están trabajando online."
          description="Cada caso tiene una necesidad distinta, pero el mismo criterio: ordenar la oferta, elevar la percepción de valor y facilitar el siguiente contacto."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {publishedProjects.map((project, index) => (
            <motion.a
              className="group block overflow-hidden rounded-3xl border border-neutral-200 bg-white text-inherit no-underline shadow-[0_22px_70px_rgba(15,23,42,0.08)] outline-none transition focus-visible:ring-2 focus-visible:ring-neutral-950"
              href={project.url}
              key={project.name}
              rel="noreferrer"
              target="_blank"
              {...lift}
            >
              <div className={cn('relative overflow-hidden bg-gradient-to-br p-3', project.accent)}>
                <img
                  className="aspect-[16/11] w-full rounded-2xl border border-white/60 object-cover shadow-2xl"
                  src={project.image}
                  alt={`Captura del sitio ${project.name}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="grid gap-4 p-6">
                <div className="flex items-center justify-between gap-4">
                  <Badge>{project.category}</Badge>
                  <ExternalLink className="shrink-0 text-neutral-400 transition group-hover:text-neutral-950" size={18} />
                </div>
                <div className="grid gap-2">
                  <h3 className="text-2xl font-semibold leading-tight">{project.name}</h3>
                  <p className="text-sm leading-6 text-neutral-600">{project.description}</p>
                </div>
                <p className="rounded-2xl bg-neutral-50 p-4 text-sm font-medium leading-6 text-neutral-800">
                  {project.result}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function CapabilitiesSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="servicios">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionIntro
              eyebrow="Qué hacemos"
              title="Frontend boutique para negocios que necesitan verse mejor ya."
              description="No prometemos sistemas gigantes. Nos enfocamos en lo que más mueve la aguja al inicio: diseño, estructura, responsive, contenido, contacto y publicación."
            />
            <div className="mt-8 grid gap-3">
              {signals.map((signal) => (
                <div className="flex gap-3 text-sm font-medium leading-6 text-neutral-700" key={signal}>
                  <BadgeCheck className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon

              return (
                <Card className="rounded-3xl shadow-none transition hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]" key={item.title}>
                  <CardHeader>
                    <span className="grid size-11 place-items-center rounded-2xl bg-neutral-950 text-white">
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="proceso">
      <div className="mx-auto max-w-[1180px]">
        <SectionIntro
          eyebrow="Proceso"
          title="Menos vueltas, más página publicada."
          description="Un flujo claro para pasar de idea suelta a una presencia digital que se puede compartir con clientes sin explicar demasiado."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {processSteps.map((step) => (
            <Card className="rounded-3xl bg-neutral-950 p-1 text-white shadow-[0_22px_70px_rgba(15,23,42,0.16)]" key={step.label}>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6">
                <span className="text-sm font-semibold text-white/48">{step.label}</span>
                <h3 className="mt-10 text-2xl font-semibold leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta({ lift }) {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8" id="contacto">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] bg-neutral-950 text-white shadow-[0_30px_90px_rgba(15,23,42,0.22)]">
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:p-12">
          <div>
            <Badge variant="dark" className="border-white/15 bg-white/10">
              Próximo proyecto
            </Badge>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-none sm:text-5xl">
              Una web que se vea como el negocio que quieres vender.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              Si ya tienes una oferta, una marca o una idea clara de cliente, podemos convertirla en
              una página simple, bonita y lista para publicar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-white text-neutral-950 hover:bg-neutral-100">
                <motion.a href="mailto:hola@kafkastudio.pe?subject=Quiero%20una%20web%20con%20Kafka" {...lift}>
                  Escribir a Kafka
                  <ArrowRight aria-hidden="true" size={18} />
                </motion.a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/15"
              >
                <motion.a href="#clientes" {...lift}>
                  Revisar casos
                </motion.a>
              </Button>
            </div>
          </div>

          <div className="grid content-between gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-white text-neutral-950">
                <Smartphone aria-hidden="true" size={20} />
              </span>
              <div>
                <strong className="block">Pensado para celular</strong>
                <span className="text-sm text-white/60">La primera impresión casi siempre ocurre ahí.</span>
              </div>
            </div>
            <div className="grid gap-3">
              {['Landing o sitio corporativo', 'WhatsApp, formularios y mapas', 'SEO base y publicación'].map((item) => (
                <div className="flex items-center justify-between rounded-2xl bg-white/8 px-4 py-3 text-sm" key={item}>
                  <span>{item}</span>
                  <ChevronRight aria-hidden="true" size={16} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionIntro({ description, eyebrow, title }) {
  return (
    <div className="max-w-3xl">
      <Badge className="gap-2">
        <Sparkles aria-hidden="true" size={14} />
        {eyebrow}
      </Badge>
      <h2 className="mt-5 text-4xl font-semibold leading-none sm:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">{description}</p>
    </div>
  )
}
