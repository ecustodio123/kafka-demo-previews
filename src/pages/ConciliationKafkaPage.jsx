import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  Clock,
  FileCheck,
  FileText,
  Handshake,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'

import { Badge, Button, Card } from '../components/ui/primitives'
import { cn } from '../lib/utils'

const whatsappNumber = '51928415698'
const whatsappMessage = encodeURIComponent(
  'Hola, quiero consultar sobre una conciliación extrajudicial. ¿Me pueden ayudar a revisar mi caso?',
)

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
]

const trustItems = [
  { icon: Clock, title: 'Atención clara', detail: 'Te explicamos si tu caso puede iniciar por conciliación.' },
  { icon: ShieldCheck, title: 'Proceso formal', detail: 'Solicitud, invitación y audiencia con información ordenada.' },
  { icon: MessageCircle, title: 'Consulta por WhatsApp', detail: 'Envíanos un resumen y te indicamos el siguiente paso.' },
]

const matters = [
  {
    icon: FileText,
    title: 'Deudas y obligaciones',
    description: 'Compromisos de pago, préstamos, servicios pendientes y acuerdos por dinero.',
  },
  {
    icon: Home,
    title: 'Alquileres y desalojos',
    description: 'Conflictos por arrendamiento, entrega de inmueble, pagos o permanencia en propiedad.',
  },
  {
    icon: Handshake,
    title: 'Contratos y acuerdos',
    description: 'Incumplimientos, compromisos entre partes y acuerdos que necesitan formalizarse.',
  },
  {
    icon: Users,
    title: 'Familia conciliable',
    description: 'Alimentos, régimen de visitas y otros temas familiares que correspondan conciliar.',
  },
  {
    icon: Scale,
    title: 'Bienes y divisiones',
    description: 'Acuerdos sobre bienes, entregas, repartos y obligaciones disponibles.',
  },
  {
    icon: Building2Icon,
    title: 'Conflictos civiles',
    description: 'Diferencias entre personas, negocios, vecinos o socios que buscan una salida formal.',
  },
]

const processSteps = [
  {
    label: '01',
    title: 'Cuéntanos qué ocurrió',
    description: 'Escuchamos el caso, identificamos a las partes y revisamos qué acuerdo buscas lograr.',
  },
  {
    label: '02',
    title: 'Revisamos si procede',
    description: 'Te indicamos si corresponde iniciar una conciliación y qué información necesitas reunir.',
  },
  {
    label: '03',
    title: 'Preparamos la solicitud',
    description: 'Ordenamos datos, domicilio de invitación, pedido principal y documentos de sustento.',
  },
  {
    label: '04',
    title: 'Se realiza la audiencia',
    description: 'Las partes participan en una reunión guiada para buscar un acuerdo claro y viable.',
  },
  {
    label: '05',
    title: 'Recibes el acta',
    description: 'El resultado queda registrado en el acta correspondiente, con acuerdo o sin acuerdo.',
  },
]

const documents = [
  'Documento de identidad de quien solicita.',
  'Datos completos y domicilio de la otra parte.',
  'Contratos, recibos, conversaciones o documentos de sustento.',
  'Resumen del problema y del acuerdo que deseas solicitar.',
]

const faq = [
  {
    question: '¿La conciliación reemplaza a un juicio?',
    answer:
      'No siempre. La conciliación permite intentar un acuerdo formal antes de iniciar o continuar acciones legales más largas.',
  },
  {
    question: '¿Qué pasa si la otra parte no asiste?',
    answer:
      'Se deja constancia del resultado de la invitación y se emite el documento que corresponda según el caso.',
  },
  {
    question: '¿Puedo consultar primero antes de iniciar?',
    answer:
      'Sí. Puedes contarnos brevemente qué ocurrió para orientarte sobre requisitos, documentos y siguiente paso.',
  },
  {
    question: '¿La atención puede ser virtual?',
    answer:
      'Depende de la materia, disponibilidad y condiciones aplicables. Primero revisamos el caso y los datos de las partes.',
  },
]

export function ConciliationKafkaPage({ mockup }) {
  const prefersReducedMotion = useReducedMotion()
  const lift = prefersReducedMotion ? {} : { whileHover: { y: -5 }, whileTap: { scale: 0.99 } }

  return (
    <main className="min-h-svh bg-[#f6f3ed] text-[#17211d]">
      <ConciliationNotice />
      <ConciliationHeader mockup={mockup} />
      <Hero lift={lift} />
      <TrustBar />
      <MattersSection lift={lift} />
      <ProcessSection />
      <DocumentsSection lift={lift} />
      <WhatsAppSection lift={lift} />
      <FaqSection />
      <FinalCta lift={lift} />
      <ConciliationFooter mockup={mockup} />
    </main>
  )
}

function ConciliationNotice() {
  return (
    <div className="bg-[#17211d] px-4 py-2 text-center text-xs font-semibold text-white/82">
      Atención para conciliación extrajudicial. Consulta tu caso antes de iniciar un proceso más largo.
    </div>
  )
}

function ConciliationHeader({ mockup }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#ded6c8]/80 bg-[#f6f3ed]/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-[min(1160px,calc(100%-32px))] items-center justify-between gap-4">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label={mockup.clientName}>
          <span className="grid size-11 place-items-center rounded-xl bg-[#17211d] text-sm font-black text-white">
            CK
          </span>
          <span className="grid leading-tight">
            <strong className="text-sm font-black text-[#17211d]">{mockup.clientName}</strong>
            <small className="text-xs font-medium text-[#68736d]">Conciliación extrajudicial</small>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold text-[#68736d] lg:flex" aria-label="Secciones">
          <a className="transition hover:text-[#17211d]" href="#casos">Casos</a>
          <a className="transition hover:text-[#17211d]" href="#proceso">Proceso</a>
          <a className="transition hover:text-[#17211d]" href="#documentos">Documentos</a>
          <a className="transition hover:text-[#17211d]" href="#preguntas">Preguntas</a>
        </nav>

        <Button asChild className="rounded-full bg-[#17211d] text-white hover:bg-[#26342f]">
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" size={17} />
            Consultar
          </a>
        </Button>
      </div>
    </header>
  )
}

function Hero({ lift }) {
  return (
    <section className="relative isolate overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-16" id="inicio">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_18%_10%,rgba(185,145,82,0.18),transparent_34%),radial-gradient(circle_at_86%_14%,rgba(20,93,75,0.14),transparent_30%)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-center">
        <div className="max-w-3xl">
          <Badge className="border-[#d7c7a7] bg-white/72 text-[#8a6428]">
            Centro de conciliación
          </Badge>
          <h1 className="mt-6 text-[2.75rem] font-black leading-[0.94] tracking-normal text-[#17211d] sm:text-6xl lg:text-7xl">
            Llega a un acuerdo sin alargar el conflicto.
          </h1>
          <p className="mt-6 text-base leading-8 text-[#5f6964] sm:text-lg">
            Te orientamos para iniciar una conciliación extrajudicial de forma clara, ordenada y con el respaldo
            de un proceso formal.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#17211d] text-white hover:bg-[#26342f]">
              <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...lift}>
                Consultar mi caso
                <ArrowRight aria-hidden="true" size={18} />
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-[#d8d0c2] bg-white/80 text-[#17211d]">
              <motion.a href="#proceso" {...lift}>
                Ver cómo funciona
              </motion.a>
            </Button>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            <HeroMetric value="Hoy" label="puedes enviar tu consulta" />
            <HeroMetric value="Formal" label="proceso con acta" />
            <HeroMetric value="Claro" label="pasos desde el inicio" />
          </div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_30px_90px_rgba(23,33,29,0.13)]"
          {...lift}
        >
          <img
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=84"
            alt="Reunión profesional para resolver un acuerdo"
          />
          <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/60 bg-white/92 p-5 shadow-2xl backdrop-blur">
            <div className="flex items-start gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e9f2ea] text-[#17211d]">
                <FileCheck aria-hidden="true" size={20} />
              </span>
              <div>
                <strong className="block text-lg font-black text-[#17211d]">Primera revisión del caso</strong>
                <p className="mt-2 text-sm leading-6 text-[#5f6964]">
                  Indícanos qué ocurrió, qué solicitas y a quién se debe invitar.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroMetric({ label, value }) {
  return (
    <div className="rounded-2xl border border-[#ded6c8] bg-white/78 p-4 shadow-sm">
      <strong className="block text-3xl font-black leading-none text-[#17211d]">{value}</strong>
      <span className="mt-2 block text-sm font-semibold leading-5 text-[#68736d]">{label}</span>
    </div>
  )
}

function TrustBar() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1160px] gap-3 border-y border-[#ded6c8] py-5 sm:grid-cols-3">
        {trustItems.map((item) => {
          const Icon = item.icon

          return (
            <div className="flex gap-3 py-2" key={item.title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#17211d] shadow-sm">
                <Icon aria-hidden="true" size={19} />
              </span>
              <div>
                <strong className="block text-sm text-[#17211d]">{item.title}</strong>
                <span className="mt-1 block text-sm leading-5 text-[#68736d]">{item.detail}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function MattersSection({ lift }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="casos">
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          eyebrow="Casos frecuentes"
          title="Conflictos que pueden resolverse con un acuerdo formal."
          description="Revisamos tu situación, identificamos si es materia conciliable y te indicamos qué información necesitas para iniciar."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {matters.map((item) => {
            const Icon = item.icon

            return (
              <motion.article
                className="rounded-[1.75rem] border border-[#ded6c8] bg-[#f6f3ed] p-6 shadow-[0_20px_60px_rgba(23,33,29,0.07)]"
                key={item.title}
                {...lift}
              >
                <span className="grid size-12 place-items-center rounded-full bg-white text-[#8a6428] shadow-sm">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <h3 className="mt-7 text-2xl font-black leading-tight text-[#17211d]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#68736d]">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="proceso">
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          eyebrow="Cómo funciona"
          title="Un proceso ordenado desde la primera consulta."
          description="Desde el primer contacto sabrás qué se revisa, qué documentos presentar y cómo avanzar con la solicitud."
        />

        <div className="mt-10 grid gap-8 rounded-[2rem] border border-[#ded6c8] bg-white p-4 shadow-[0_24px_80px_rgba(23,33,29,0.08)] sm:p-6 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:p-8">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <img
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/4.25]"
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=84"
              alt="Documentos y reunión para iniciar una conciliación"
              loading="lazy"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.25rem] border border-white/55 bg-white/92 p-4 shadow-xl backdrop-blur">
              <Badge className="border-[#d7c7a7] bg-[#f6f3ed] text-[#8a6428]">
                <FileCheck aria-hidden="true" size={14} />
                Solicitud ordenada
              </Badge>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#4e5a54]">
                Datos completos, documentos de sustento y comunicación formal para convocar a la otra parte.
              </p>
            </div>
          </div>

          <div className="relative grid gap-4">
            <span className="absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-[#ded6c8] sm:block" aria-hidden="true" />
            {processSteps.map((step, index) => (
              <article
                className="relative grid gap-4 rounded-[1.35rem] border border-[#ded6c8] bg-white p-5 shadow-sm sm:grid-cols-[64px_minmax(0,1fr)] sm:items-start"
                key={step.title}
              >
                <span
                  className={cn(
                    'z-10 grid size-14 place-items-center rounded-full border bg-white text-sm font-black shadow-sm',
                    index === 0 ? 'border-[#b8904c] text-[#8a6428]' : 'border-[#d8d0c2] text-[#8a6428]',
                  )}
                >
                  {step.label}
                </span>
                <div>
                  <h3 className="text-2xl font-black leading-tight text-[#17211d]">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#68736d]">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DocumentsSection({ lift }) {
  return (
    <section className="bg-[#17211d] px-4 py-20 text-white sm:px-6 lg:px-8" id="documentos">
      <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div>
          <SectionIntro
            dark
            eyebrow="Antes de iniciar"
            title="Ten a la mano los datos básicos de tu caso."
            description="No necesitas usar términos legales. Con información clara podemos revisar mejor la situación y preparar la solicitud con más precisión."
          />
          <div className="mt-8 grid gap-3">
            {documents.map((item) => (
              <div className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/76" key={item}>
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-white text-[#17211d]">
                  <Check aria-hidden="true" size={15} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <motion.div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-3" {...lift}>
          <img
            className="aspect-[4/3] w-full rounded-[1.45rem] object-cover"
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=84"
            alt="Documentos listos para iniciar una solicitud"
            loading="lazy"
          />
          <div className="grid gap-3 p-5">
            <Badge variant="dark" className="border-white/15 bg-white/10">
              <CalendarDays aria-hidden="true" size={14} />
              Documentos claros
            </Badge>
            <p className="text-sm leading-6 text-white/70">
              Si tienes contratos, recibos, mensajes o constancias, envíalos para revisar mejor el alcance de tu solicitud.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WhatsAppSection({ lift }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="whatsapp">
      <div className="mx-auto grid max-w-[1160px] gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Consulta inicial"
            title="Escríbenos y recibe orientación para dar el primer paso."
            description="Envíanos un resumen del conflicto, los datos de la otra parte y los documentos que tengas. Te ayudamos a ordenar la consulta."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#17211d] text-white hover:bg-[#26342f]">
              <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...lift}>
                <MessageCircle aria-hidden="true" size={18} />
                Consultar por WhatsApp
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-[#d8d0c2] bg-[#f6f3ed] text-[#17211d]">
              <motion.a href="#preguntas" {...lift}>
                Ver preguntas frecuentes
              </motion.a>
            </Button>
          </div>
        </div>

        <Card className="rounded-[2rem] border-[#ded6c8] bg-[#f6f3ed] p-4 shadow-[0_30px_90px_rgba(23,33,29,0.1)]">
          <div className="rounded-[1.5rem] bg-white p-4">
            <div className="flex items-center gap-3 border-b border-[#ded6c8] pb-4">
              <span className="grid size-11 place-items-center rounded-full bg-[#e9f2ea] text-[#17211d]">
                <MessageCircle aria-hidden="true" size={20} />
              </span>
              <div>
                <strong className="block text-[#17211d]">Orientación por WhatsApp</strong>
                <span className="text-sm text-[#68736d]">Atención para iniciar con claridad</span>
              </div>
            </div>

            <div className="grid gap-3 py-5">
              <ChatBubble from="client">Hola, tengo un problema por una deuda pendiente. Quiero saber si puedo conciliar.</ChatBubble>
              <ChatBubble>Claro. Indícanos el monto, desde cuándo está pendiente y si tienes documento o conversación de sustento.</ChatBubble>
              <ChatBubble from="client">Tengo contrato y mensajes. También sé el domicilio de la otra persona.</ChatBubble>
              <ChatBubble>Perfecto. Con esa información podemos orientarte sobre cómo iniciar la solicitud.</ChatBubble>
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
        'max-w-[84%] rounded-2xl px-4 py-3 text-sm font-medium leading-6',
        from === 'client'
          ? 'justify-self-end bg-[#17211d] text-white'
          : 'justify-self-start bg-[#f6f3ed] text-[#4e5a54]',
      )}
    >
      {children}
    </div>
  )
}

function FaqSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="preguntas">
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          eyebrow="Preguntas frecuentes"
          title="Lo que necesitas saber antes de iniciar."
          description="Aclaramos las dudas más frecuentes sobre requisitos, asistencia de la otra parte, documentos y modalidad de atención."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faq.map((item) => (
            <article className="rounded-[1.5rem] border border-[#ded6c8] bg-white p-6 shadow-sm" key={item.question}>
              <h3 className="text-xl font-black leading-tight text-[#17211d]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#68736d]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta({ lift }) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8" id="contacto">
      <div className="mx-auto max-w-[1160px] overflow-hidden rounded-[2rem] bg-[#17211d] text-white shadow-[0_30px_90px_rgba(23,33,29,0.22)]">
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.72fr] lg:p-12">
          <div>
            <Badge variant="dark" className="border-white/15 bg-white/10">
              Primer paso
            </Badge>
            <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl">
              Da el primer paso con información clara.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              Escríbenos con una breve descripción del caso. Revisaremos qué datos hacen falta y te orientaremos
              sobre cómo iniciar una solicitud de conciliación.
            </p>
          </div>
          <div className="grid content-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-white text-[#17211d] hover:bg-white/90">
              <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...lift}>
                Consultar mi caso
                <ArrowRight aria-hidden="true" size={18} />
              </motion.a>
            </Button>
            <div className="grid gap-2 text-sm font-semibold text-white/62">
              <span className="inline-flex items-center gap-2">
                <Phone aria-hidden="true" size={15} />
                WhatsApp de atención
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" size={15} />
                Atención presencial o virtual según disponibilidad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ConciliationFooter({ mockup }) {
  return (
    <footer className="border-t border-[#ded6c8] bg-white px-4 py-10 text-sm text-[#68736d] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label={mockup.clientName}>
            <span className="grid size-11 place-items-center rounded-xl bg-[#17211d] text-sm font-black text-white">
              CK
            </span>
            <span className="grid leading-tight">
              <strong className="text-base font-black text-[#17211d]">{mockup.clientName}</strong>
              <small className="text-sm font-medium text-[#68736d]">
                Conciliación extrajudicial
              </small>
            </span>
          </a>
          <p className="mt-4 max-w-xl leading-7">
            Te ayudamos a revisar tu caso, ordenar la información inicial y conocer los pasos para solicitar
            una conciliación extrajudicial.
          </p>
          <p className="mt-3 max-w-xl text-xs leading-6 text-[#87918c]">
            La orientación inicial depende de la información enviada, la materia consultada y la disponibilidad del centro.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:justify-items-end">
          <div className="grid gap-3">
            <span className="text-xs font-black uppercase tracking-[0.12em] text-[#8a6428]">
              Secciones
            </span>
            <a className="font-bold text-[#68736d] no-underline transition hover:text-[#17211d]" href="#casos">Casos frecuentes</a>
            <a className="font-bold text-[#68736d] no-underline transition hover:text-[#17211d]" href="#proceso">Proceso</a>
            <a className="font-bold text-[#68736d] no-underline transition hover:text-[#17211d]" href="#documentos">Documentos</a>
            <a className="font-bold text-[#68736d] no-underline transition hover:text-[#17211d]" href="#preguntas">Preguntas</a>
          </div>

          <div className="grid gap-3 lg:justify-items-end">
            <span className="text-xs font-black uppercase tracking-[0.12em] text-[#8a6428]">
              Contacto
            </span>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#17211d] px-5 py-3 font-black text-white no-underline transition hover:bg-[#26342f]"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" size={17} />
              WhatsApp
            </a>
            <span className="inline-flex items-center gap-2 font-semibold text-[#68736d]">
              <MapPin aria-hidden="true" size={15} />
              Atención presencial o virtual
            </span>
            <div className="mt-2 flex flex-wrap gap-2 lg:justify-end">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#ded6c8] bg-[#f6f3ed] px-4 py-2 font-black text-[#17211d] no-underline transition hover:-translate-y-0.5 hover:border-[#8a6428]/40 hover:bg-white"
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" className="size-4 text-[#8a6428]" />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
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

function SectionIntro({ dark = false, description, eyebrow, title }) {
  return (
    <div>
      <Badge
        className={cn(
          'gap-2',
          dark
            ? 'border-white/15 bg-white/10 text-white'
            : 'border-[#d7c7a7] bg-white/78 text-[#8a6428]',
        )}
      >
        <BadgeCheck aria-hidden="true" size={14} />
        {eyebrow}
      </Badge>
      <h2 className={cn('mt-5 text-4xl font-black leading-none sm:text-5xl', dark ? 'text-white' : 'text-[#17211d]')}>
        {title}
      </h2>
      <p className={cn('mt-5 text-base leading-8', dark ? 'text-white/70' : 'text-[#68736d]')}>
        {description}
      </p>
    </div>
  )
}

function Building2Icon({ size = 20, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={size} height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
      <path d="M6 12H4a2 2 0 0 0-2 2v8" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  )
}
