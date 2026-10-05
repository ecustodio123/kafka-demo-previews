import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  CalendarDays,
  Cat,
  Check,
  Dog,
  HeartPulse,
  MapPin,
  MessageCircle,
  Microscope,
  Minus,
  PawPrint,
  Plus,
  Quote,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Siren,
  Stethoscope,
  Syringe,
  Trash2,
  Truck,
} from 'lucide-react'

import { Badge, Button, Card } from '../components/ui/primitives'
import { cn } from '../lib/utils'

const whatsappNumber = '51928415698'
const whatsappMessage = encodeURIComponent(
  'Hola, quiero agendar una cita para mi mascota en Veterinaria Kafka. ¿Me comparten horarios disponibles?',
)

const services = [
  {
    icon: Stethoscope,
    title: 'Consulta general',
    description: 'Revisamos a tu mascota con calma, resolvemos tus dudas y te damos indicaciones claras para casa.',
  },
  {
    icon: Syringe,
    title: 'Vacunas y desparasitación',
    description: 'Plan preventivo para cachorros, adultos y mascotas que necesitan refuerzos al día.',
  },
  {
    icon: Scissors,
    title: 'Baño y estética',
    description: 'Baños, corte higiénico, limpieza de oídos y cuidado del pelaje según cada mascota.',
  },
  {
    icon: HeartPulse,
    title: 'Emergencias',
    description: 'Atención prioritaria para vómitos, heridas, decaimiento, dolor o señales que no pueden esperar.',
  },
  {
    icon: Microscope,
    title: 'Laboratorio',
    description: 'Exámenes de apoyo para confirmar diagnósticos y elegir el tratamiento adecuado.',
  },
  {
    icon: ShieldCheck,
    title: 'Control preventivo',
    description: 'Chequeos periódicos para detectar a tiempo cambios de salud, peso o comportamiento.',
  },
]

const petProducts = [
  {
    title: 'Baño & corte',
    price: 'Desde S/ 39.90',
    tag: 'Más pedido',
    image:
      'https://images.pexels.com/photos/6131566/pexels-photo-6131566.jpeg',
  },
  {
    title: 'Consulta veterinaria',
    price: 'Desde S/ 34.90',
    tag: 'Cuidado',
    image:
      'https://images.pexels.com/photos/6235650/pexels-photo-6235650.jpeg',
  },
  {
    title: 'Correas y collares',
    price: 'Desde S/ 34.90',
    tag: 'Gatos y Perros',
    image:
      'https://images.pexels.com/photos/31131478/pexels-photo-31131478.jpeg',
  },
  {
    title: 'Juguetes resistentes',
    price: 'Desde S/ 19.90',
    tag: 'Diversión',
    image:
      'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=900&q=84',
  },
]

const veterinarians = [
  {
    name: 'Medicina interna',
    role: 'Consulta, prevención y seguimiento',
    focus: 'Chequeos, vacunas y controles para perros y gatos en cada etapa de vida.',
    schedule: 'Lun a Vie',
    highlight: 'Área principal',
    tags: ['Chequeos', 'Vacunas', 'Controles'],
    image:
      'https://images.pexels.com/photos/7469233/pexels-photo-7469233.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Urgencias y procedimientos',
    role: 'Atención prioritaria',
    focus: 'Evaluación rápida, curaciones, procedimientos menores y acompañamiento durante la recuperación.',
    schedule: 'Turnos de urgencia',
    highlight: 'Respuesta rápida',
    tags: ['Urgencias', 'Heridas', 'Recuperación'],
    image:
      'https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Piel, pelaje y gatos',
    role: 'Dermatología y manejo felino',
    focus: 'Alergias, piel sensible, caída de pelo y consultas tranquilas para gatos.',
    schedule: 'Mar, Jue y Sáb',
    highlight: 'Manejo felino',
    tags: ['Gatos', 'Piel', 'Alergias'],
    image:
      'https://images.pexels.com/photos/6234611/pexels-photo-6234611.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
]

const steps = [
  {
    icon: MessageCircle,
    title: 'Cuéntanos qué necesita',
    description: 'Escríbenos por WhatsApp con el nombre de tu mascota, edad, síntomas y horario ideal.',
  },
  {
    icon: CalendarDays,
    title: 'Reservamos la cita',
    description: 'Te confirmamos disponibilidad, costo referencial y si necesitas llevar algo a la consulta.',
  },
  {
    icon: Stethoscope,
    title: 'Atendemos y acompañamos',
    description: 'Sales con indicaciones claras y un canal para resolver dudas después de la visita.',
  },
]

const tips = [
  'Si deja de comer, vomita o está decaído, agenda una evaluación.',
  'Las vacunas se programan según edad, hábitos y exposición.',
  'El baño medicado debe elegirse según piel, pelaje e indicación veterinaria.',
]

const testimonials = [
  {
    quote: 'Me explicaron todo sin apuro y mi perrita salió mucho más tranquila. La reserva por WhatsApp fue rapidísima.',
    author: 'Tutora de Luna',
  },
  {
    quote: 'Llegamos por una urgencia y nos orientaron desde el primer mensaje. Se sintió ordenado y humano.',
    author: 'Familia de Rocky',
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
    href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
    icon: WhatsAppIcon,
  },
]

function getPriceNumber(price) {
  const match = price.match(/[\d.]+/)

  return match ? Number(match[0]) : 0
}

function formatProductOrderMessage(cartItems) {
  if (!cartItems.length) {
    return 'Hola, quiero comprar productos para mi mascota. ¿Me pueden ayudar con las opciones disponibles?'
  }

  const productList = cartItems
    .map((item, index) => `${index + 1}. ${item.title} - ${item.price}`)
    .join('\n')

  return `Hola, quiero confirmar mi pedido para mascota:\n\n${productList}\n\n¿Me ayudan con stock, total, delivery y forma de pago?`
}

export function VeterinaryKafkaPage({ mockup }) {
  const prefersReducedMotion = useReducedMotion()
  const lift = prefersReducedMotion ? {} : { whileHover: { y: -5 }, whileTap: { scale: 0.99 } }
  const [cartItems, setCartItems] = useState([])

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

  return (
    <main className="min-h-svh bg-[#f4fbf8] text-[#153a35]">
      <VeterinaryNotice />
      <VeterinaryHeader mockup={mockup} />
      <Hero lift={lift} />
      <TrustBar />
      <ServicesSection lift={lift} />
      <EmergencySection lift={lift} />
      <TeamSection lift={lift} />
      <PetShopSection cartItems={cartItems} lift={lift} onToggleCartItem={toggleCartItem} />
      <ProductOrderSection
        cartItems={cartItems}
        onClearCart={() => setCartItems([])}
        onRemoveItem={removeCartItem}
      />
      <HowItWorks />
      <TestimonialsSection lift={lift} />
      <BookingSection lift={lift} />
      <VeterinaryFooter mockup={mockup} />
      <FloatingWhatsApp lift={lift} />
    </main>
  )
}

function VeterinaryNotice() {
  return (
    <div className="bg-[#006b5f] px-4 py-2 text-center text-xs font-semibold text-white/86">
      Consultas, vacunas, baños y productos para perros y gatos. Reserva tu cita por WhatsApp.
    </div>
  )
}

function VeterinaryHeader({ mockup }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#dcece7]/80 bg-[#f4fbf8]/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-[min(1160px,calc(100%-32px))] items-center justify-between gap-4">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label={mockup.clientName}>
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#008576] text-white">
            <PawPrint aria-hidden="true" className="block shrink-0" size={21} />
          </span>
          <span className="grid leading-tight">
            <strong className="text-sm font-black text-[#153a35]">{mockup.clientName}</strong>
            <small className="text-xs font-medium text-[#6b817c]">Clínica veterinaria</small>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold text-[#617a74] lg:flex" aria-label="Secciones">
          <a className="transition hover:text-[#153a35]" href="#servicios">Servicios</a>
          <a className="transition hover:text-[#153a35]" href="#urgencias">Urgencias</a>
          <a className="transition hover:text-[#153a35]" href="#equipo">Veterinarios</a>
          <a className="transition hover:text-[#153a35]" href="#productos">Productos</a>
          <a className="transition hover:text-[#153a35]" href="#pedido-productos">Pedido</a>
          <a className="transition hover:text-[#153a35]" href="#reserva">Agenda</a>
        </nav>

        <Button asChild className="rounded-full bg-[#008576] text-white hover:bg-[#006b5f]">
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" className="block shrink-0" size={17} />
            Agendar
          </a>
        </Button>
      </div>
    </header>
  )
}

function Hero({ lift }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#edf9f5]" id="inicio">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_16%,rgba(255,159,67,0.16),transparent_30%),radial-gradient(circle_at_72%_18%,rgba(0,133,118,0.12),transparent_34%)]"
        aria-hidden="true"
      />
      <div className="grid min-h-[660px] lg:grid-cols-[minmax(0,0.82fr)_minmax(520px,1fr)]">
        <div className="relative z-10 grid content-center px-5 py-14 sm:px-8 lg:pl-[clamp(3rem,7vw,8rem)] lg:pr-10">
          <Badge className="items-center gap-2 border-[#d7eee7] bg-white/82 text-[#008576]">
            <PawPrint aria-hidden="true" className="block shrink-0" size={14} />
            Clínica veterinaria en Lima
          </Badge>
          <h1 className="mt-6 max-w-[720px] text-[2.85rem] font-black leading-[0.93] tracking-normal text-[#153a35] sm:text-6xl lg:text-7xl">
            Cuidamos a tu mascota como parte de tu familia.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#5e756f] sm:text-lg">
            Atención veterinaria para perros y gatos, con consultas claras, prevención, baño, productos y orientación
            rápida cuando algo te preocupa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#008576] text-white hover:bg-[#006b5f]">
              <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...lift}>
                Agendar cita
                <ArrowRight aria-hidden="true" className="block shrink-0" size={18} />
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-[#d7eee7] bg-white/86 text-[#153a35]">
              <motion.a href="#servicios" {...lift}>
                Ver servicios
              </motion.a>
            </Button>
          </div>

        </div>

        <motion.div
          className="relative min-h-[560px] overflow-hidden bg-[#00796b] shadow-[0_32px_95px_rgba(0,79,70,0.14)] lg:min-h-full lg:rounded-bl-[3rem]"
          {...lift}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover object-[46%_50%]"
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1500&q=84"
            alt="Perro feliz listo para una consulta veterinaria"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,121,107,0.18),rgba(0,121,107,0.02)_44%),linear-gradient(180deg,rgba(244,251,248,0.04),rgba(21,58,53,0.32))]" />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2 sm:left-8 sm:top-8">
            <Badge className="border-white/60 bg-white/92 text-[#008576]">Perros y gatos</Badge>
            <Badge className="border-[#ffd7a8] bg-[#ff9f43] text-white">Atención por WhatsApp</Badge>
          </div>
          <div className="absolute right-6 top-24 hidden size-28 overflow-hidden rounded-full border-[8px] border-white bg-white shadow-2xl sm:block lg:right-12 lg:top-32">
            <img
              className="size-full object-cover"
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=84"
              alt="Gato tranquilo durante una atención veterinaria"
              loading="lazy"
            />
          </div>
          <Card className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] border-white/70 bg-white/92 p-5 shadow-2xl backdrop-blur sm:bottom-8 sm:left-8 sm:right-auto sm:w-[380px]">
            <div className="flex items-start gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#e3f7f1] text-[#008576]">
                <Dog aria-hidden="true" className="block shrink-0" size={22} />
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-[0.12em] text-[#ff9f43]">
                  Recomendado este mes
                </span>
                <h2 className="mt-1 text-2xl font-black leading-tight text-[#153a35]">Chequeo preventivo</h2>
                <p className="mt-2 text-sm leading-6 text-[#5e756f]">
                  Revisión general, vacunas al día y recomendaciones para cuidar mejor su salud.
                </p>
              </div>
            </div>
          </Card>

          <div className="absolute bottom-8 right-8 hidden max-w-[250px] rounded-[1.5rem] border border-white/30 bg-[#006b5f]/88 p-4 text-white shadow-2xl backdrop-blur lg:block">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-white text-[#008576]">
                <Siren aria-hidden="true" className="block shrink-0" size={18} />
              </span>
              <div>
                <strong className="block text-sm">¿Algo no va bien?</strong>
                <span className="text-xs text-white/72">Escríbenos y te orientamos antes de venir.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = [
    { icon: Truck, title: 'Pet shop con delivery', detail: 'Alimentos, arena, shampoo y accesorios.' },
    { icon: MapPin, title: 'Atención en Lima', detail: 'Reservas por cita y orientación previa.' },
    { icon: Cat, title: 'Perros y gatos', detail: 'Manejo cuidadoso para cada temperamento.' },
  ]

  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1160px] gap-3 border-y border-[#d7eee7] py-5 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <div className="flex gap-3 py-2" key={item.title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#008576] shadow-sm">
                <Icon aria-hidden="true" className="block shrink-0" size={19} />
              </span>
              <div>
                <strong className="block text-sm text-[#153a35]">{item.title}</strong>
                <span className="mt-1 block text-sm leading-5 text-[#6b817c]">{item.detail}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function ServicesSection({ lift }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="servicios">
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          eyebrow="Cuidado completo"
          title="Todo lo importante para cuidar su salud en un solo lugar."
          description="Agenda consultas, vacunas, baños, controles y atención prioritaria con un equipo que te explica cada paso."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon

            return (
              <motion.article
                className="rounded-[1.5rem] border border-[#d7eee7] bg-[#f4fbf8] p-6 shadow-[0_18px_60px_rgba(0,79,70,0.06)]"
                key={item.title}
                {...lift}
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[#008576] shadow-sm">
                  <Icon aria-hidden="true" className="block shrink-0" size={22} />
                </span>
                <h3 className="mt-7 text-xl font-black leading-tight text-[#153a35]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5e756f]">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function EmergencySection({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="urgencias">
      <div className="mx-auto grid max-w-[1160px] overflow-hidden rounded-[2rem] bg-[#00796b] text-white shadow-[0_30px_90px_rgba(0,79,70,0.18)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid content-center gap-5 p-6 sm:p-10 lg:p-12">
          <Badge variant="dark" className="items-center gap-2 border-white/15 bg-white/10 text-white">
            <Siren aria-hidden="true" className="block shrink-0" size={14} />
            Urgencias veterinarias
          </Badge>
          <h2 className="text-4xl font-black leading-none sm:text-5xl">Cuando algo te preocupa, no lo dejes pasar.</h2>
          <p className="text-base leading-8 text-white/74">
            Si tu mascota está decaída, no come, vomita o tuvo un accidente, escríbenos para orientarte y coordinar
            una atención prioritaria.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-white text-[#00796b] hover:bg-white/90">
              <motion.a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, mi mascota necesita atención veterinaria urgente. ¿Me pueden orientar?')}`} rel="noreferrer" target="_blank" {...lift}>
                <WhatsAppIcon aria-hidden="true" className="block size-5 shrink-0" />
                Consultar ahora
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/15">
              <a href="#reserva">Agendar cita</a>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[360px]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.pexels.com/photos/7474550/pexels-photo-7474550.jpeg"
            alt="Veterinaria atendiendo a un perro en consulta"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,121,107,0.42),rgba(0,121,107,0.05))]" />
        </div>
      </div>
    </section>
  )
}

function TeamSection({ lift }) {
  const [leadVet, ...otherVets] = veterinarians

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="equipo">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionIntro
            eyebrow="Nuestro equipo"
            title="Veterinarios que atienden con criterio, calma y buen trato."
            description="Te escuchamos, revisamos a tu mascota y explicamos las opciones de cuidado para que tomes decisiones con seguridad."
          />
          <Button asChild variant="secondary" className="w-fit rounded-full border-[#d7eee7] bg-[#f4fbf8] text-[#153a35]">
            <a href="#reserva">Ver horarios</a>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            className="relative min-h-[620px] overflow-hidden rounded-[2rem] bg-[#153a35] text-white shadow-[0_30px_90px_rgba(0,79,70,0.16)]"
            {...lift}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover object-[50%_18%] opacity-88"
              src={leadVet.image}
              alt={leadVet.name}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,58,53,0.02),rgba(21,58,53,0.86)_78%)]" />
            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              <Badge className="border-white/24 bg-white/92 text-[#008576]">{leadVet.highlight}</Badge>
              <Badge className="border-[#ffd7a8] bg-[#ff9f43] text-white">{leadVet.schedule}</Badge>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="max-w-lg">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[#ffbd7a]">{leadVet.role}</p>
                <h3 className="mt-2 text-4xl font-black leading-none">{leadVet.name}</h3>
                <p className="mt-4 text-base leading-7 text-white/76">{leadVet.focus}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {leadVet.tags.map((tag) => (
                    <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-xs font-black text-white" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-[#d7eee7] bg-[#f4fbf8] p-6 shadow-[0_20px_70px_rgba(0,79,70,0.07)] lg:mr-4">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[#008576] shadow-sm">
                  <HeartPulse aria-hidden="true" className="block shrink-0" size={22} />
                </span>
                <div>
                  <h3 className="text-2xl font-black leading-tight text-[#153a35]">Atención pensada para que sepas qué hacer.</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5e756f]">
                    Desde el primer mensaje revisamos el motivo de consulta y te guiamos con el siguiente paso.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {['Explicación clara', 'Trato paciente', 'Seguimiento'].map((item) => (
                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-black text-[#153a35]" key={item}>
                    <Check aria-hidden="true" className="block shrink-0 text-[#008576]" size={15} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {otherVets.map((person) => (
            <motion.article
              className="grid gap-4 rounded-[1.75rem] border border-[#d7eee7] bg-white p-4 shadow-[0_20px_70px_rgba(0,79,70,0.07)] sm:grid-cols-[150px_minmax(0,1fr)]"
              key={person.name}
              {...lift}
            >
              <img
                className="h-full min-h-[190px] w-full rounded-[1.25rem] object-cover object-[50%_18%] sm:min-h-0"
                src={person.image}
                alt={person.name}
                loading="lazy"
              />
              <div className="content-center py-1">
                <span className="inline-flex rounded-full bg-[#e3f7f1] px-3 py-1 text-xs font-black text-[#008576]">
                  {person.highlight}
                </span>
                <h3 className="mt-3 text-2xl font-black leading-tight text-[#153a35]">{person.name}</h3>
                <p className="mt-1 text-sm font-black text-[#008576]">{person.role}</p>
                <p className="mt-3 text-sm leading-6 text-[#5e756f]">{person.focus}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {person.tags.map((tag) => (
                    <span className="rounded-full border border-[#d7eee7] bg-[#f4fbf8] px-3 py-1 text-xs font-bold text-[#5e756f]" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PetShopSection({ cartItems, lift, onToggleCartItem }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="productos">
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          eyebrow="Pet shop"
          title="Productos útiles para el cuidado diario de tu mascota."
          description="Elige lo que necesitas y envíanos tu pedido por WhatsApp. Confirmamos stock, total y delivery antes de cerrar la compra."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {petProducts.map((item) => {
            const isSelected = cartItems.some((cartItem) => cartItem.title === item.title)

            return (
              <motion.article
                className={cn(
                  'group overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_20px_70px_rgba(0,79,70,0.08)] transition',
                  isSelected ? 'border-[#008576] ring-4 ring-[#bceee2]' : 'border-[#d7eee7]',
                )}
                key={item.title}
                {...lift}
              >
                <div className="relative">
                  <img
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-black text-[#008576] shadow">
                    {item.tag}
                  </span>
                  {isSelected ? (
                    <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-[#008576] text-white shadow-lg">
                      <Check aria-hidden="true" className="block shrink-0" size={18} />
                    </span>
                  ) : null}
                </div>
                <div className="grid gap-3 p-5">
                  <h3 className="text-lg font-black text-[#153a35]">{item.title}</h3>
                  <p className="text-sm font-black text-[#ff7b1a]">{item.price}</p>
                  <button
                    className={cn(
                      'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008576] focus-visible:ring-offset-2',
                      isSelected
                        ? 'bg-[#153a35] text-white hover:bg-[#0d2b27]'
                        : 'border border-[#d7eee7] bg-[#f4fbf8] text-[#153a35] hover:border-[#008576]/35 hover:bg-white',
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

function ProductOrderSection({ cartItems, onClearCart, onRemoveItem }) {
  const hasItems = cartItems.length > 0
  const cartTotal = cartItems.reduce((total, item) => total + getPriceNumber(item.price), 0)
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formatProductOrderMessage(cartItems))}`

  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8" id="pedido-productos">
      <div className="mx-auto mb-10 hidden max-w-[1160px] items-center gap-4 lg:flex" aria-hidden="true">
        <span className="h-px flex-1 bg-[#d7eee7]" />
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d7eee7] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#008576]">
          <ShoppingBag aria-hidden="true" className="block shrink-0" size={14} />
          Tu pedido
        </span>
        <span className="h-px flex-1 bg-[#d7eee7]" />
      </div>

      <div className="mx-auto grid max-w-[1160px] gap-6 rounded-[2rem] border border-[#d7eee7] bg-white p-5 shadow-[0_26px_80px_rgba(0,79,70,0.08)] sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
        <div className="content-center">
          <Badge className="items-center gap-2 border-[#d7eee7] bg-[#f4fbf8] text-[#008576]">
            <ShoppingBag aria-hidden="true" className="block shrink-0" size={14} />
            Pedido por WhatsApp
          </Badge>
          <h2 className="mt-5 text-4xl font-black leading-none text-[#153a35] sm:text-5xl">
            Arma tu pedido y lo confirmamos por WhatsApp.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5e756f]">
            Selecciona productos del pet shop y envíanos la lista. Te confirmamos disponibilidad, promociones,
            delivery y forma de pago antes de preparar el pedido.
          </p>
          <div className="mt-7 grid gap-3 text-sm font-bold text-[#4f6963]">
            {['Pedido listo para enviar', 'Stock confirmado por WhatsApp', 'Recojo o delivery coordinado'].map((item) => (
              <div className="flex items-center gap-3" key={item}>
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#e3f7f1] text-[#008576]">
                  <Check aria-hidden="true" className="block shrink-0" size={15} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <Card className="rounded-[1.75rem] border-[#d7eee7] bg-[#f4fbf8] p-4 shadow-[0_20px_60px_rgba(0,79,70,0.08)] sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d7eee7] pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.12em] text-[#008576]">
                Tu selección
              </span>
              <h3 className="mt-1 text-2xl font-black text-[#153a35]">
                {hasItems ? `${cartItems.length} producto${cartItems.length > 1 ? 's' : ''}` : 'Aún no hay productos'}
              </h3>
            </div>
            {hasItems ? (
              <button
                className="inline-flex items-center gap-2 rounded-full border border-[#d7eee7] bg-white px-4 py-2 text-sm font-black text-[#5e756f] transition hover:text-[#008576]"
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
                  className="grid grid-cols-[72px_minmax(0,1fr)_auto] items-center gap-3 rounded-[1.25rem] border border-[#d7eee7] bg-white p-2"
                  key={item.title}
                >
                  <img
                    className="size-[72px] rounded-[1rem] object-cover"
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <strong className="block truncate text-sm font-black text-[#153a35]">{item.title}</strong>
                    <span className="mt-1 block text-sm font-black text-[#ff7b1a]">{item.price}</span>
                  </div>
                  <button
                    aria-label={`Quitar ${item.title} del pedido`}
                    className="grid size-10 place-items-center rounded-full bg-[#f4fbf8] text-[#5e756f] transition hover:bg-[#e3f7f1] hover:text-[#008576]"
                    onClick={() => onRemoveItem(item.title)}
                    type="button"
                  >
                    <Trash2 aria-hidden="true" className="block shrink-0" size={16} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-[1.5rem] border border-dashed border-[#b9ddd4] bg-white p-6 text-center">
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-[#e3f7f1] text-[#008576] shadow-sm">
                <ShoppingBag aria-hidden="true" className="block shrink-0" size={21} />
              </span>
              <p className="mt-4 text-sm font-bold leading-6 text-[#5e756f]">
                Agrega productos para preparar tu pedido y recibir confirmación por WhatsApp.
              </p>
            </div>
          )}

          <div className="mt-5 rounded-[1.35rem] bg-[#153a35] p-4 text-white">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-bold text-white/70">Total referencial</span>
              <strong className="text-2xl font-black">{hasItems ? `Desde S/ ${cartTotal.toFixed(2)}` : 'Por definir'}</strong>
            </div>
            <p className="mt-2 text-xs leading-5 text-white/60">
              El monto final se confirma por WhatsApp según presentación, stock, delivery y promociones vigentes.
            </p>
          </div>

          <Button
            asChild
            className="mt-4 w-full rounded-full bg-[#25d366] text-[#11351f] hover:bg-[#22c55e]"
            size="lg"
          >
            <a href={hasItems ? whatsappHref : '#productos'} rel={hasItems ? 'noreferrer' : undefined} target={hasItems ? '_blank' : undefined}>
              <WhatsAppIcon aria-hidden="true" className="block size-5 shrink-0" />
              {hasItems ? 'Confirmar pedido por WhatsApp' : 'Elegir productos'}
            </a>
          </Button>
        </Card>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="bg-[#153a35] px-4 py-20 text-white sm:px-6 lg:px-8" id="proceso">
      <div className="mx-auto grid max-w-[1160px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <Badge variant="dark" className="border-white/15 bg-white/10 text-white">
            Agenda fácil
          </Badge>
          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl">Reserva tu cita en tres pasos.</h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            Coordinamos por WhatsApp para conocer qué ocurre, separar un horario y preparar mejor la atención.
          </p>
        </div>

        <div className="grid gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <article className="grid gap-4 rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-5 sm:grid-cols-[64px_minmax(0,1fr)]" key={step.title}>
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white text-[#008576]">
                  <Icon aria-hidden="true" className="block shrink-0" size={22} />
                </span>
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-[#ffb66f]">Paso 0{index + 1}</span>
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

function TestimonialsSection({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Familias que confían"
            title="Historias de familias que llegaron con dudas y se fueron tranquilas."
            description="Cuando tu mascota no está bien, una respuesta clara y un trato amable hacen toda la diferencia."
          />
          <div className="mt-8 grid gap-3">
            {tips.map((tip) => (
              <div className="flex items-center gap-3 text-sm font-bold text-[#5e756f]" key={tip}>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-[#008576] shadow-sm">
                  <Check aria-hidden="true" className="block shrink-0" size={16} />
                </span>
                {tip}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {testimonials.map((item) => (
            <motion.article
              className="rounded-[1.75rem] border border-[#d7eee7] bg-white p-6 shadow-[0_20px_70px_rgba(0,79,70,0.08)]"
              key={item.author}
              {...lift}
            >
              <Quote aria-hidden="true" className="text-[#ff9f43]" size={28} />
              <p className="mt-4 text-lg font-bold leading-8 text-[#153a35]">“{item.quote}”</p>
              <span className="mt-5 block text-sm font-black text-[#008576]">{item.author}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookingSection({ lift }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="reserva">
      <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative hidden lg:block">
          <img
            className="h-[520px] w-full rounded-[2rem] object-cover shadow-[0_28px_90px_rgba(0,79,70,0.12)]"
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=84"
            alt="Perro sentado esperando su cita veterinaria"
            loading="lazy"
          />
          <span className="absolute bottom-6 left-6 rounded-full bg-white px-4 py-2 text-sm font-black text-[#008576] shadow-xl">
            Atención con cariño
          </span>
        </div>

        <Card className="rounded-[2rem] border-[#d7eee7] bg-[#f4fbf8] p-5 shadow-[0_26px_80px_rgba(0,79,70,0.1)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="content-center">
              <Badge className="items-center gap-2 border-[#d7eee7] bg-white text-[#008576]">
                <ShoppingBag aria-hidden="true" className="block shrink-0" size={14} />
                Agenda por WhatsApp
              </Badge>
              <h2 className="mt-5 text-4xl font-black leading-none text-[#153a35] sm:text-5xl">
                Agenda rápido y sin formularios largos.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#5e756f]">
                Envíanos el nombre de tu mascota, qué le ocurre y el horario que prefieres. Te responderemos con
                disponibilidad, costo referencial y recomendaciones previas.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#d7eee7] pb-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#25d366] text-white">
                  <WhatsAppIcon aria-hidden="true" className="block size-6 shrink-0" />
                </span>
                <div>
                  <strong className="block text-[#153a35]">Veterinaria Kafka</strong>
                  <span className="text-sm text-[#6b817c]">Atención por WhatsApp</span>
                </div>
              </div>
              <div className="grid gap-3 py-5">
                <ChatBubble from="client">Hola, quiero reservar una cita para mi gatito. Está decaído desde ayer.</ChatBubble>
                <ChatBubble>Claro. ¿Qué edad tiene, está comiendo y desde qué distrito nos escribes?</ChatBubble>
                <ChatBubble from="client">Tiene 3 años y hoy casi no comió.</ChatBubble>
                <ChatBubble>Te recomendamos evaluación hoy. Te comparto horarios disponibles.</ChatBubble>
              </div>
              <Button asChild className="w-full rounded-full bg-[#008576] text-white hover:bg-[#006b5f]" size="lg">
                <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...lift}>
                  <WhatsAppIcon aria-hidden="true" className="block size-5 shrink-0" />
                  Agendar por WhatsApp
                </motion.a>
              </Button>
            </div>
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
        'max-w-[86%] rounded-2xl px-4 py-3 text-sm font-medium leading-6',
        from === 'client'
          ? 'justify-self-end bg-[#008576] text-white'
          : 'justify-self-start bg-[#f4fbf8] text-[#4f6963]',
      )}
    >
      {children}
    </div>
  )
}

function VeterinaryFooter({ mockup }) {
  return (
    <footer className="bg-[#153a35] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1160px] gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a className="flex items-center gap-3 text-white no-underline" href="#inicio" aria-label={mockup.clientName}>
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-[#008576]">
              <PawPrint aria-hidden="true" className="block shrink-0" size={21} />
            </span>
            <span className="grid leading-tight">
              <strong className="text-sm font-black">{mockup.clientName}</strong>
              <small className="text-xs font-medium text-white/62">Salud, baño y pet shop</small>
            </span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
            Atención veterinaria, baños, productos y orientación por WhatsApp para cuidar mejor a perros y gatos.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.14em] text-white/42">Secciones</h3>
          <div className="mt-4 grid gap-3 text-sm font-bold text-white/70">
            <a className="transition hover:text-white" href="#servicios">Servicios</a>
            <a className="transition hover:text-white" href="#urgencias">Urgencias</a>
            <a className="transition hover:text-white" href="#equipo">Veterinarios</a>
            <a className="transition hover:text-white" href="#reserva">Agenda</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.14em] text-white/42">Contacto</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  aria-label={link.label}
                  className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white hover:text-[#008576]"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon aria-hidden="true" className="block size-5 shrink-0" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp({ lift }) {
  return (
    <motion.a
      className="fixed bottom-5 left-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white no-underline shadow-[0_18px_45px_rgba(37,211,102,0.34)] transition hover:bg-[#1fbd59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008576] focus-visible:ring-offset-2 sm:bottom-6 sm:left-6"
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

function SectionIntro({ dark = false, description, eyebrow, title }) {
  return (
    <div className="">
      <Badge className={cn(dark ? 'border-white/15 bg-white/10 text-white' : 'border-[#d7eee7] bg-white text-[#008576]')}>
        {eyebrow}
      </Badge>
      <h2 className={cn('mt-5 text-4xl font-black leading-none sm:text-5xl', dark ? 'text-white' : 'text-[#153a35]')}>
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-5 text-base leading-8', dark ? 'text-white/68' : 'text-[#5e756f]')}>
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
