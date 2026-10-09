import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  Check,
  Clock3,
  Dog,
  HeartPulse,
  MapPin,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  ShoppingBag,
  Siren,
  Sparkles,
  Stethoscope,
  Syringe,
} from 'lucide-react'

import { Badge, Button, Card } from '../../components/ui/primitives'

const whatsappNumber = '51928415698'
const whatsappMessage = encodeURIComponent(
  'Hola, quiero agendar una cita para mi mascota en Veterinaria Kafka. ¿Me ayudan con los horarios disponibles?',
)

const services = [
  {
    icon: Stethoscope,
    title: 'Consulta veterinaria',
    text: 'Evaluamos a tu mascota con calma, resolvemos tus dudas y te damos indicaciones claras para casa.',
    price: 'Desde S/ 35',
  },
  {
    icon: Syringe,
    title: 'Vacunas y desparasitación',
    text: 'Plan preventivo según edad, estilo de vida y controles pendientes para perros y gatos.',
    price: 'Plan a medida',
  },
  {
    icon: Sparkles,
    title: 'Baño y estética',
    text: 'Baños, corte higiénico, limpieza de oídos y cuidado del pelaje con trato paciente y seguro.',
    price: 'Desde S/ 40',
  },
  {
    icon: Siren,
    title: 'Atención prioritaria',
    text: 'Orientación rápida ante vómitos, heridas, dolor, decaimiento o cambios que no pueden esperar.',
    price: 'Escríbenos',
  },
]

const proofItems = [
  { icon: ShieldCheck, label: 'Diagnóstico claro', detail: 'Te explicamos cada paso' },
  { icon: Clock3, label: 'Agenda simple', detail: 'Reserva por WhatsApp' },
  { icon: MapPin, label: 'Atención en Lima', detail: 'Con cita previa' },
  { icon: ShoppingBag, label: 'Pet shop', detail: 'Productos y accesorios' },
]

const productItems = [
  {
    title: 'Baño y corte',
    tag: 'Más pedido',
    image: 'https://images.pexels.com/photos/6131566/pexels-photo-6131566.jpeg',
  },
  {
    title: 'Consulta preventiva',
    tag: 'Prevención',
    image: 'https://images.pexels.com/photos/6235650/pexels-photo-6235650.jpeg',
  },
  {
    title: 'Juguetes y accesorios',
    tag: 'Pet shop',
    image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=900&q=84',
  },
]

const steps = [
  {
    title: 'Cuéntanos sobre tu mascota',
    text: 'Nombre, edad, síntomas y desde cuándo notaste el cambio.',
  },
  {
    title: 'Te orientamos con criterio',
    text: 'Te indicamos si conviene consulta, atención prioritaria o control preventivo.',
  },
  {
    title: 'Reservamos y hacemos seguimiento',
    text: 'Sales con indicaciones claras y un canal abierto para resolver dudas.',
  },
]

const faqs = [
  {
    question: '¿Puedo consultar antes de ir?',
    answer: 'Sí. Escríbenos por WhatsApp y te orientamos para saber si corresponde cita, atención prioritaria o seguimiento.',
  },
  {
    question: '¿Atienden perros y gatos?',
    answer: 'Sí. La atención está pensada para perros y gatos, con manejo cuidadoso según edad y temperamento.',
  },
  {
    question: '¿También venden productos?',
    answer: 'Sí. Puedes consultar alimentos, accesorios y productos del pet shop, y coordinar disponibilidad por WhatsApp.',
  },
]

const testimonials = [
  {
    quote: 'Nos explicaron todo con paciencia. Mi perrita salió tranquila y sabíamos exactamente qué hacer en casa.',
    author: 'Tutora de Moka',
  },
  {
    quote: 'Escribí por WhatsApp, me orientaron rápido y pudimos separar una cita el mismo día.',
    author: 'Familia de Bruno',
  },
]

export function VeterinaryKafkaPage2({ mockup }) {
  const prefersReducedMotion = useReducedMotion()
  const press = prefersReducedMotion ? {} : { whileTap: { scale: 0.98 } }

  return (
    <main
      className="min-h-svh bg-[#f0fdfa] text-[#134e4a]"
      style={{ fontFamily: '"Nunito Sans", Inter, ui-sans-serif, system-ui, sans-serif' }}
    >
      <TopBar />
      <Header mockup={mockup} />
      <Hero press={press} />
      <ProofStrip />
      <Services press={press} />
      <CarePath />
      <Emergency press={press} />
      <PetShop press={press} />
      <Testimonials />
      <Faq />
      <FinalCta press={press} />
      <Footer mockup={mockup} />
      <FloatingWhatsApp press={press} />
    </main>
  )
}

function TopBar() {
  return (
    <div className="bg-[#0f766e] px-4 py-2 text-center text-xs font-black uppercase tracking-[0.16em] text-white">
      Consulta veterinaria, vacunas, baños y pet shop para perros y gatos
    </div>
  )
}

function Header({ mockup }) {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-[#99f6e4] bg-[#f0fdfa]/94 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-[min(1220px,calc(100%-32px))] items-center justify-between gap-4">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label={mockup.clientName}>
          <span className="grid size-12 place-items-center rounded-[1.35rem] border-[3px] border-[#134e4a] bg-white text-[#0d9488] shadow-[5px_5px_0_#99f6e4]">
            <PawPrint aria-hidden="true" size={22} />
          </span>
          <span className="grid leading-tight">
            <strong
              className="text-base text-[#134e4a]"
              style={{ fontFamily: '"Varela Round", Nunito Sans, sans-serif' }}
            >
              {mockup.clientName}
            </strong>
            <small className="text-xs font-bold text-[#475569]">Clínica veterinaria y pet care</small>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-black text-[#134e4a] lg:flex" aria-label="Secciones">
          <a className="transition hover:text-[#0d9488]" href="#servicios">Servicios</a>
          <a className="transition hover:text-[#0d9488]" href="#proceso">Cómo funciona</a>
          <a className="transition hover:text-[#0d9488]" href="#productos">Pet shop</a>
          <a className="transition hover:text-[#0d9488]" href="#faq">Preguntas</a>
        </nav>

        <Button asChild className="rounded-full bg-[#ea580c] text-white shadow-[4px_4px_0_#fed7aa] hover:bg-[#c2410c]">
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" size={18} />
            Agendar
          </a>
        </Button>
      </div>
    </header>
  )
}

function Hero({ press }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f0fdfa]" id="inicio">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[#ccfbf1]" aria-hidden="true" />
      <div className="mx-auto grid min-h-[720px] w-[min(1220px,calc(100%-32px))] gap-8 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-16">
        <div>
          <Badge className="border-[3px] border-[#99f6e4] bg-white text-[#0f766e] shadow-none">
            Veterinaria de confianza en Lima
          </Badge>
          <h1
            className="mt-6 max-w-2xl text-[3.2rem] leading-[0.96] tracking-[-0.02em] text-[#134e4a] sm:text-6xl lg:text-7xl"
            style={{ fontFamily: '"Varela Round", Nunito Sans, sans-serif' }}
          >
            Cuidamos a tu mascota con atención clara, cercana y profesional.
          </h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-[#475569]">
            Consultas, vacunas, baños, estética y pet shop en un solo lugar. Escríbenos por WhatsApp y te ayudamos a elegir la atención que tu mascota necesita.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#ea580c] px-7 text-white shadow-[5px_5px_0_#fed7aa] hover:bg-[#c2410c]">
              <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...press}>
                Agendar por WhatsApp
                <ArrowRight aria-hidden="true" size={18} />
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-[3px] border-[#0d9488] bg-white px-7 text-[#0f766e] shadow-[5px_5px_0_#99f6e4]">
              <motion.a href="#servicios" {...press}>
                Ver servicios
              </motion.a>
            </Button>
          </div>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {['Orientación rápida', 'Trato cuidadoso', 'Citas por WhatsApp'].map((item) => (
              <div className="rounded-[1.25rem] border-[3px] border-[#99f6e4] bg-white p-3 text-sm font-black text-[#134e4a]" key={item}>
                <Check aria-hidden="true" className="mb-2 text-[#16a34a]" size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute inset-0 rotate-[-2deg] rounded-[2.5rem] border-[4px] border-[#134e4a] bg-[#14b8a6] shadow-[12px_12px_0_#99f6e4]" />
          <img
            className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-[2rem] object-cover"
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1500&q=84"
            alt="Dos perros felices al aire libre"
          />
          <Card className="absolute bottom-6 left-6 right-6 rounded-[1.75rem] border-[3px] border-[#134e4a] bg-white p-5 shadow-[7px_7px_0_#fed7aa] sm:right-auto sm:w-[360px]">
            <div className="flex items-start gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#ffedd5] text-[#ea580c]">
                <HeartPulse aria-hidden="true" size={24} />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ea580c]">Recomendado</p>
                <h2 className="mt-1 text-xl font-black text-[#134e4a]">Chequeo preventivo</h2>
                <p className="mt-2 text-sm leading-6 text-[#475569]">
                  Ideal si notas cambios en su apetito, energía, piel o comportamiento.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function ProofStrip() {
  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto grid max-w-[1220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofItems.map((item) => {
          const Icon = item.icon

          return (
            <div className="flex items-center gap-3 rounded-[1.5rem] border-[3px] border-[#ccfbf1] bg-[#f0fdfa] p-4" key={item.label}>
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[#0d9488]">
                <Icon aria-hidden="true" size={22} />
              </span>
              <div>
                <strong className="block text-[#134e4a]">{item.label}</strong>
                <span className="text-sm font-semibold text-[#475569]">{item.detail}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Services({ press }) {
  return (
    <section className="bg-[#f0fdfa] px-4 py-20" id="servicios">
      <div className="mx-auto max-w-[1220px]">
        <SectionHeading
          eyebrow="Servicios veterinarios"
          title="Atención para cada etapa y necesidad."
          text="Desde un control preventivo hasta una consulta por síntomas, te ayudamos a tomar decisiones a tiempo y con información clara."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon

            return (
              <motion.article
                className="rounded-[1.75rem] border-[3px] border-[#99f6e4] bg-white p-5 shadow-[8px_8px_0_#ccfbf1]"
                key={item.title}
                {...press}
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-[#ccfbf1] text-[#0f766e]">
                  <Icon aria-hidden="true" size={25} />
                </span>
                <h3 className="mt-6 text-xl font-black text-[#134e4a]">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#475569]">{item.text}</p>
                <div className="mt-5 rounded-full bg-[#ffedd5] px-4 py-2 text-sm font-black text-[#ea580c]">
                  {item.price}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CarePath() {
  return (
    <section className="bg-white px-4 py-20" id="proceso">
      <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Cómo funciona"
            title="De la duda a la cita en tres pasos."
            text="Sabemos que cuando algo cambia en tu mascota aparecen dudas. Por eso te guiamos desde el primer mensaje hasta la atención en consulta."
          />
          <div className="mt-8 rounded-[2rem] border-[3px] border-[#134e4a] bg-[#134e4a] p-6 text-white">
            <Dog aria-hidden="true" size={34} />
            <p className="mt-4 text-xl font-black leading-8">
              Si notas cambios en su conducta, apetito o energía, consultar a tiempo puede marcar la diferencia.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {steps.map((step, index) => (
            <article className="grid gap-4 rounded-[1.75rem] border-[3px] border-[#99f6e4] bg-[#f0fdfa] p-5 sm:grid-cols-[72px_minmax(0,1fr)]" key={step.title}>
              <span className="grid size-16 place-items-center rounded-2xl border-[3px] border-[#134e4a] bg-white text-xl font-black text-[#134e4a]">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-2xl font-black text-[#134e4a]">{step.title}</h3>
                <p className="mt-2 font-semibold leading-7 text-[#475569]">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Emergency({ press }) {
  return (
    <section className="bg-[#14b8a6] px-4 py-20">
      <div className="mx-auto grid max-w-[1220px] overflow-hidden rounded-[2rem] border-[4px] border-[#134e4a] bg-white shadow-[10px_10px_0_#0f766e] lg:grid-cols-[1fr_0.85fr]">
        <div className="grid content-center p-6 sm:p-10">
          <Badge className="border-[3px] border-[#fed7aa] bg-[#ffedd5] text-[#ea580c] shadow-none">
            Atención prioritaria
          </Badge>
          <h2 className="mt-5 text-4xl font-black leading-none text-[#134e4a] sm:text-5xl">
            Señales que necesitan atención rápida.
          </h2>
          <p className="mt-5 max-w-xl font-semibold leading-8 text-[#475569]">
            Si tu mascota no come, vomita, está decaída, tiene dolor o sufrió un accidente, escríbenos para orientarte y coordinar la atención adecuada.
          </p>
          <Button asChild className="mt-8 w-fit rounded-full bg-[#ea580c] text-white shadow-[5px_5px_0_#fed7aa] hover:bg-[#c2410c]" size="lg">
            <motion.a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola, mi mascota necesita atención veterinaria urgente. ¿Me pueden orientar?')}`} rel="noreferrer" target="_blank" {...press}>
              Escribir ahora
              <ArrowRight aria-hidden="true" size={18} />
            </motion.a>
          </Button>
        </div>
        <img
          className="h-full min-h-[360px] w-full object-cover"
          src="https://images.pexels.com/photos/7474550/pexels-photo-7474550.jpeg"
          alt="Veterinaria atendiendo a un perro"
          loading="eager" decoding="async"
        />
      </div>
    </section>
  )
}

function PetShop({ press }) {
  return (
    <section className="bg-[#f0fdfa] px-4 py-20" id="productos">
      <div className="mx-auto max-w-[1220px]">
        <SectionHeading
          eyebrow="Pet shop"
          title="Todo lo esencial para su cuidado diario."
          text="Encuentra servicios de estética, controles preventivos, juguetes, accesorios y productos seleccionados para perros y gatos."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {productItems.map((item) => (
            <motion.article
              className="overflow-hidden rounded-[2rem] border-[3px] border-[#99f6e4] bg-white shadow-[8px_8px_0_#ccfbf1]"
              key={item.title}
              {...press}
            >
              <img className="aspect-[4/3] w-full object-cover" src={item.image} alt={item.title} loading="eager" decoding="async" />
              <div className="p-5">
                <span className="rounded-full bg-[#ffedd5] px-3 py-1 text-xs font-black text-[#ea580c]">{item.tag}</span>
                <h3 className="mt-4 text-2xl font-black text-[#134e4a]">{item.title}</h3>
                <a className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#134e4a] px-4 py-2 text-sm font-black text-white" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, quiero consultar por ${item.title} en Veterinaria Kafka.`)}`} rel="noreferrer" target="_blank">
                  Consultar disponibilidad <ArrowRight aria-hidden="true" size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-[#134e4a] px-4 py-20 text-white">
      <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <Badge className="border-white/20 bg-white/10 text-white shadow-none">Confianza</Badge>
          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl">La confianza empieza con una buena explicación.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <article className="rounded-[1.75rem] bg-white p-6 text-[#134e4a]" key={item.author}>
              <p className="text-lg font-black leading-8">“{item.quote}”</p>
              <span className="mt-5 block text-sm font-black text-[#0d9488]">{item.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="bg-white px-4 py-20" id="faq">
      <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Preguntas rápidas"
          title="Resolvemos tus dudas antes de reservar."
          text="Queremos que sepas qué esperar, cuándo escribirnos y cómo preparar la visita de tu mascota."
        />
        <div className="grid gap-4">
          {faqs.map((item) => (
            <article className="rounded-[1.5rem] border-[3px] border-[#ccfbf1] bg-[#f0fdfa] p-5" key={item.question}>
              <h3 className="text-xl font-black text-[#134e4a]">{item.question}</h3>
              <p className="mt-2 font-semibold leading-7 text-[#475569]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta({ press }) {
  return (
    <section className="bg-[#ccfbf1] px-4 py-20">
      <div className="mx-auto grid max-w-[1220px] gap-6 rounded-[2rem] border-[4px] border-[#134e4a] bg-white p-6 shadow-[10px_10px_0_#99f6e4] lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
        <div>
          <h2 className="text-4xl font-black leading-none text-[#134e4a] sm:text-5xl">Agenda una atención pensada para tu mascota.</h2>
          <p className="mt-4 max-w-2xl font-semibold leading-8 text-[#475569]">
            Cuéntanos qué necesita y te ayudamos a separar el horario más conveniente.
          </p>
        </div>
        <Button asChild size="lg" className="rounded-full bg-[#ea580c] px-8 text-white shadow-[5px_5px_0_#fed7aa] hover:bg-[#c2410c]">
          <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...press}>
            Agendar por WhatsApp
            <ArrowRight aria-hidden="true" size={18} />
          </motion.a>
        </Button>
      </div>
    </section>
  )
}

function Footer({ mockup }) {
  return (
    <footer className="bg-[#134e4a] px-4 py-10 text-white">
      <div className="mx-auto flex max-w-[1220px] flex-col justify-between gap-6 md:flex-row md:items-center">
        <a className="flex items-center gap-3 text-white no-underline" href="#inicio" aria-label={mockup.clientName}>
          <span className="grid size-11 place-items-center rounded-2xl bg-white text-[#0d9488]">
            <PawPrint aria-hidden="true" size={21} />
          </span>
          <span>
            <strong className="block">{mockup.clientName}</strong>
            <small className="text-white/70">Clínica, reservas y pet shop</small>
          </span>
        </a>
        <div className="flex flex-wrap gap-3 text-sm font-black text-white/80">
          <a href="#servicios">Servicios</a>
          <a href="#productos">Pet shop</a>
          <a href="#faq">Preguntas</a>
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
      className="fixed bottom-5 left-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white no-underline shadow-[5px_5px_0_#bbf7d0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#134e4a] focus-visible:ring-offset-2 sm:bottom-6 sm:left-6 lg:hidden"
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      rel="noreferrer"
      target="_blank"
      {...press}
    >
      <MessageCircle aria-hidden="true" size={26} />
    </motion.a>
  )
}

function SectionHeading({ eyebrow, text, title }) {
  return (
    <div className="max-w-3xl">
      <Badge className="border-[3px] border-[#99f6e4] bg-white text-[#0f766e] shadow-none">{eyebrow}</Badge>
      <h2
        className="mt-5 text-4xl leading-[1.02] tracking-[-0.02em] text-[#134e4a] sm:text-5xl"
        style={{ fontFamily: '"Varela Round", Nunito Sans, sans-serif' }}
      >
        {title}
      </h2>
      <p className="mt-4 text-base font-semibold leading-8 text-[#475569]">{text}</p>
    </div>
  )
}
