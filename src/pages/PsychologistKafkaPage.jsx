import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  Clock3,
  HeartHandshake,
  MessageCircle,
  Moon,
  Quote,
  ShieldCheck,
  SunMedium,
  UserRoundCheck,
  Video,
} from 'lucide-react'

import { Badge, Button, Card } from '../components/ui/primitives'
import { cn } from '../lib/utils'

const whatsappNumber = '51928415698'
const whatsappMessage = encodeURIComponent(
  'Hola, quisiera agendar una primera sesión con Psicóloga Kafka. ¿Me pueden compartir disponibilidad?',
)

const focusAreas = [
  {
    icon: Moon,
    eyebrow: 'Terapia para ansiedad',
    title: 'Ansiedad y sobrepensamiento',
    description:
      'Para trabajar preocupación constante, tensión, pensamientos repetitivos y sensación de estar siempre alerta.',
  },
  {
    icon: HeartHandshake,
    eyebrow: 'Autoestima y vínculos',
    title: 'Límites y autoexigencia',
    description:
      'Para revisar la forma en que te hablas, lo que sostienes por miedo y los límites que necesitas construir.',
  },
  {
    icon: SunMedium,
    eyebrow: 'Cambios importantes',
    title: 'Duelo y etapas difíciles',
    description:
      'Para transitar pérdidas, rupturas o cambios de vida sin sentir que tienes que ordenarlo todo a solas.',
  },
]

const processSteps = [
  {
    label: '01',
    title: 'Primera sesión',
    description: 'Conversamos sobre lo que estás viviendo, tu historia reciente y lo que te gustaría trabajar.',
  },
  {
    label: '02',
    title: 'Objetivos claros',
    description: 'Definimos un foco de trabajo realista, respetando tus tiempos y necesidades.',
  },
  {
    label: '03',
    title: 'Proceso terapéutico',
    description: 'Trabajamos herramientas, patrones, emociones y decisiones con acompañamiento profesional.',
  },
  {
    label: '04',
    title: 'Seguimiento',
    description: 'Revisamos avances, ajustes y próximos pasos para que el proceso tenga sentido para ti.',
  },
]

const therapistHighlights = [
  'Ansiedad, estrés y sobrepensamiento',
  'Autoestima, límites y autoexigencia',
  'Duelos, rupturas y cambios importantes',
  'Relaciones, vínculos y dependencia emocional',
]

const therapistCredentials = [
  { value: '+8', label: 'años acompañando procesos individuales' },
  { value: 'TCC', label: 'herramientas cognitivas y conductuales' },
  { value: 'Online', label: 'sesiones privadas por videollamada' },
]

const firstSessionSteps = [
  {
    icon: MessageCircle,
    title: 'Cuéntame qué te trae a terapia',
    description: 'No necesitas llegar con un discurso listo. Empezamos por lo que hoy puedas poner en palabras.',
  },
  {
    icon: UserRoundCheck,
    title: 'Ordenamos lo más importante',
    description: 'Miramos juntos qué está pasando, qué se repite y qué te gustaría trabajar primero.',
  },
  {
    icon: Clock3,
    title: 'Definimos el siguiente paso',
    description: 'Sales con una idea clara de cómo sería el proceso y la frecuencia que puede ayudarte.',
  },
]

const testimonials = [
  {
    quote:
      'Sentí que podía hablar sin tener que justificar todo. La primera sesión me ayudó a ordenar lo que venía cargando.',
    author: 'Paciente adulta',
    context: 'Proceso por ansiedad',
  },
  {
    quote:
      'Me gustó que no fuera una conversación fría. Pude entender mejor mis límites y tomar decisiones con más calma.',
    author: 'Paciente adulta',
    context: 'Autoestima y vínculos',
  },
  {
    quote:
      'Llegué en una etapa difícil y encontré un espacio respetuoso, claro y muy humano para empezar a procesarlo.',
    author: 'Paciente adulta',
    context: 'Duelo y cambios',
  },
]

const faq = [
  {
    question: '¿Cómo sé si necesito terapia?',
    answer:
      'No necesitas esperar a estar en crisis. Si algo te pesa, se repite o afecta tu bienestar, conversar con una profesional puede ayudarte a entenderlo mejor.',
  },
  {
    question: '¿Qué pasa en la primera sesión?',
    answer:
      'La primera sesión sirve para conocernos, revisar qué estás viviendo y definir si este espacio terapéutico puede ayudarte.',
  },
  {
    question: '¿La terapia online funciona?',
    answer:
      'Sí, puede ser una alternativa efectiva cuando cuentas con un espacio privado, conexión estable y disposición para sostener el proceso.',
  },
  {
    question: '¿Cada cuánto debo asistir?',
    answer:
      'La frecuencia se define según tu situación, objetivos y disponibilidad. En muchos casos se inicia con sesiones semanales.',
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
]

export function PsychologistKafkaPage({ mockup }) {
  const prefersReducedMotion = useReducedMotion()
  const lift = prefersReducedMotion ? {} : { whileHover: { y: -5 }, whileTap: { scale: 0.99 } }

  return (
    <main className="min-h-svh bg-[#fbf8ff] text-[#282238]">
      <PsychNotice />
      <PsychHeader mockup={mockup} />
      <Hero lift={lift} />
      <TrustBar />
      <FocusSelector lift={lift} />
      <AboutTherapist lift={lift} />
      <ProcessSection />
      <FirstSessionSection lift={lift} />
      <WhatsAppSection lift={lift} />
      <FaqSection />
      <TestimonialsSection lift={lift} />
      <FinalCta lift={lift} />
      <PsychFooter mockup={mockup} />
      <FloatingWhatsApp lift={lift} />
    </main>
  )
}

function PsychNotice() {
  return (
    <div className="bg-[#4c3f6f] px-4 py-2 text-center text-xs font-semibold text-white/84">
      Psicoterapia para adultos. Atención online y acompañamiento profesional desde un espacio seguro.
    </div>
  )
}

function PsychHeader({ mockup }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#eadff7]/80 bg-[#fbf8ff]/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-[min(1160px,calc(100%-32px))] items-center justify-between gap-4">
        <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label={mockup.clientName}>
          <span className="grid size-11 place-items-center rounded-2xl bg-[#4c3f6f] text-sm font-black text-white">
            Ψ
          </span>
          <span className="grid leading-tight">
            <strong className="text-sm font-black text-[#282238]">{mockup.clientName}</strong>
            <small className="text-xs font-medium text-[#7d748a]">Psicoterapia online</small>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold text-[#7d748a] lg:flex" aria-label="Secciones">
          <a className="transition hover:text-[#282238]" href="#trabajamos">Qué trabajamos</a>
          <a className="transition hover:text-[#282238]" href="#sobre-mi">Sobre mí</a>
          <a className="transition hover:text-[#282238]" href="#proceso">Proceso</a>
          <a className="transition hover:text-[#282238]" href="#preguntas">Preguntas</a>
        </nav>

        <Button asChild className="rounded-full bg-[#4c3f6f] text-white hover:bg-[#3f345e]">
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" size={17} />
            Agendar
          </a>
        </Button>
      </div>
    </header>
  )
}

function Hero({ lift }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#c8b8e4]" id="inicio">
      <motion.article
        className="relative overflow-hidden text-[#282238]"
        {...lift}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_82%_32%,rgba(255,255,255,0.26),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid min-h-[560px] w-[min(1240px,calc(100%-32px))] gap-8 py-10 sm:py-14 lg:grid-cols-[1fr_420px] lg:items-center lg:py-20">
          <div className="relative z-10 max-w-[640px]">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#4c3f6f]/70">
              Psicoterapia online
            </span>
            <h1 className="mt-5 font-serif text-[2.65rem] font-semibold italic leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Psicología positiva para volver a ti.
            </h1>
            <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-white/86 sm:text-lg">
              Reconoce lo que sientes, ordena lo que pesa y empieza un proceso terapéutico acompañado, sin exigirte tener todo resuelto.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Button asChild size="lg" className="rounded-md bg-white px-7 text-[#4c3f6f] hover:bg-white/90">
                <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...lift}>
                  <MessageCircle aria-hidden="true" size={18} />
                  Hablemos
                </motion.a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-md border-white/25 bg-white/12 px-7 text-white hover:bg-white/18"
              >
                <motion.a href="#trabajamos" {...lift}>
                  Ver terapias
                  <ArrowRight aria-hidden="true" size={18} />
                </motion.a>
              </Button>
            </div>
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-[390px] place-items-center lg:justify-self-end">
            <div className="absolute -inset-6 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
            <div className="relative grid size-[280px] overflow-hidden rounded-full border-[10px] border-white/76 bg-white/20 shadow-[0_28px_90px_rgba(76,63,111,0.2)] sm:size-[340px] lg:size-[380px]">
              <img
                className="size-full object-cover object-[50%_15%]"
                src="https://images.pexels.com/photos/10041258/pexels-photo-10041258.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Retrato profesional de la psicóloga Valeria Mendoza"
              />
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  )
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, title: 'Confidencialidad', detail: 'Un espacio cuidado para hablar con libertad.' },
    { icon: Video, title: 'Sesiones online', detail: 'Atención por videollamada desde donde estés.' },
    { icon: CalendarDays, title: 'Agenda flexible', detail: 'Coordinamos horarios según disponibilidad.' },
  ]

  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1160px] gap-3 border-y border-[#e8ddf5] py-5 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <div className="flex gap-3 py-2" key={item.title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#6d55a3] shadow-sm">
                <Icon aria-hidden="true" size={19} />
              </span>
              <div>
                <strong className="block text-sm text-[#282238]">{item.title}</strong>
                <span className="mt-1 block text-sm leading-5 text-[#7d748a]">{item.detail}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function FocusSelector({ lift }) {
  return (
    <section className="bg-white px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14" id="trabajamos">
      <div className="mx-auto max-w-[1160px]">
        <div className="mx-auto text-center [&_p]:mx-auto">
          <SectionIntro
            eyebrow="Terapias principales"
            title="Empieza por lo que hoy necesita más calma."
            description="Tres enfoques claros para iniciar terapia sin sentir que tienes que explicarlo todo desde el primer día."
          />
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {focusAreas.map((item) => {
            const Icon = item.icon

            return (
              <motion.article
                className="group flex min-h-[330px] flex-col rounded-[1.75rem] border border-[#e6dcf5] bg-[#fbf8ff] p-6 shadow-[0_20px_60px_rgba(76,63,111,0.07)] transition"
                key={item.title}
                {...lift}
              >
                <span className="grid size-14 place-items-center rounded-full bg-white text-[#6d55a3] shadow-sm transition group-hover:bg-[#f0e8ff]">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <span className="mt-7 text-xs font-black uppercase tracking-[0.14em] text-[#8b6ad6]">
                  {item.eyebrow}
                </span>
                <h3 className="mt-3 text-2xl font-black leading-tight text-[#282238]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#7d748a]">{item.description}</p>
                <a
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#4c3f6f] no-underline"
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  Consultar esta terapia
                  <ArrowRight aria-hidden="true" size={16} />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AboutTherapist({ lift }) {
  return (
    <section className="bg-[#4c3f6f] px-4 py-20 text-white sm:px-6 lg:px-8" id="sobre-mi">
      <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08] p-3" {...lift}>
          <img
            className="aspect-[4/4.4] w-full rounded-[1.5rem] object-cover"
            src="https://images.pexels.com/photos/10041258/pexels-photo-10041258.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Retrato profesional de la psicóloga Valeria Mendoza"
            loading="lazy"
          />
          <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/50 bg-white/92 p-5 text-[#282238] shadow-2xl backdrop-blur">
            <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8b6ad6]">
              Psicóloga clínica
            </span>
            <strong className="mt-2 block text-2xl font-black leading-tight">Lic. Valeria Mendoza</strong>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#6f657c]">
              Terapia individual para adultos que quieren entenderse mejor y recuperar calma.
            </p>
          </div>
        </motion.div>

        <div>
          <SectionIntro
            dark
            eyebrow="Sobre mí"
            title="Soy Valeria, y mi trabajo es ayudarte a ponerle nombre a lo que te pesa."
            description="Detrás de Psicóloga Kafka hay un espacio terapéutico pensado para adultos que viven ansiedad, autoexigencia, duelos, estrés o dificultades en sus vínculos. Mi forma de trabajo combina escucha clínica, objetivos claros y herramientas prácticas para que la terapia se sienta cercana, respetuosa y útil."
          />
          <div className="mt-7 rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-5">
            <p className="text-base font-semibold leading-8 text-white/82">
              Puedo acompañarte si sientes que tu mente no descansa, si te cuesta poner límites, si estás atravesando
              una pérdida o si repites formas de relacionarte que ya no quieres sostener.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {therapistCredentials.map((item) => (
              <div className="rounded-[1.25rem] border border-white/12 bg-white/[0.08] p-4" key={item.value}>
                <strong className="block text-3xl font-black leading-none text-white">{item.value}</strong>
                <span className="mt-2 block text-xs font-semibold leading-5 text-white/68">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {therapistHighlights.map((item) => (
              <div className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/78" key={item}>
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-white text-[#4c3f6f]">
                  <Check aria-hidden="true" size={15} />
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

function ProcessSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="proceso">
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          eyebrow="Cómo trabajo"
          title="Empezar terapia puede ser más simple de lo que imaginas."
          description="El proceso se construye contigo. Avanzamos paso a paso, con claridad, cuidado y objetivos que tengan sentido para tu momento."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article className="rounded-[1.5rem] border border-[#e6dcf5] bg-white p-6 shadow-sm" key={step.title}>
              <span className="text-sm font-black text-[#8b6ad6]">{step.label}</span>
              <h3 className="mt-5 text-2xl font-black leading-tight text-[#282238]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#7d748a]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection({ lift }) {
  return (
    <section className="border-y border-[#eadff7] bg-[#fbf8ff] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1160px]">
        <div className="mx-auto text-center [&_p]:mx-auto">
          <SectionIntro
            eyebrow="Historias reales, identidad protegida"
            title="Lo que cambia cuando tienes un espacio para escucharte."
            description="Testimonios anónimos que muestran cómo puede sentirse empezar un proceso acompañado, con calma y sin juicios."
          />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <motion.article
              className="flex min-h-[290px] flex-col rounded-[1.75rem] border border-[#e6dcf5] bg-white p-6 shadow-[0_20px_60px_rgba(76,63,111,0.07)]"
              key={item.quote}
              {...lift}
            >
              <span className="grid size-12 place-items-center rounded-full bg-[#f0e8ff] text-[#6d55a3] shadow-sm">
                <Quote aria-hidden="true" size={20} />
              </span>
              <p className="mt-7 text-lg font-black leading-8 text-[#282238]">
                “{item.quote}”
              </p>
              <div className="mt-auto pt-7">
                <strong className="block text-sm font-black text-[#282238]">{item.author}</strong>
                <span className="mt-1 block text-sm font-semibold text-[#8b6ad6]">{item.context}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FirstSessionSection({ lift }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1160px]">
        <div className="mx-auto text-center [&_p]:mx-auto">
          <SectionIntro
            eyebrow="Tu primera sesión"
            title="Un primer encuentro claro, tranquilo y sin presión."
            description="La primera sesión está pensada para conocernos, entender qué estás viviendo y decidir juntos si este espacio es adecuado para ti."
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <motion.div
          className="overflow-hidden rounded-[2rem] border border-[#e6dcf5] bg-[#fbf8ff] p-4 shadow-[0_24px_80px_rgba(76,63,111,0.08)]"
          {...lift}
        >
          <div className="relative flex min-h-[520px] overflow-hidden rounded-[1.5rem] bg-[#4c3f6f] p-6 text-white">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-38"
              src="https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sesión terapéutica online en un ambiente tranquilo"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(40,34,56,0.82),rgba(40,34,56,0.34))]" />
            <div className="relative flex flex-1 flex-col justify-between">
              <Badge variant="dark" className="w-fit border-white/15 bg-white/12">
                Primera sesión
              </Badge>
              <div>
                <h2 className="text-4xl font-black leading-none sm:text-5xl">
                  No tienes que saber por dónde empezar.
                </h2>
                <p className="mt-5 max-w-md text-base font-semibold leading-8 text-white/78">
                  Ese también puede ser el primer tema de conversación.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    ['50 min', 'duración aproximada'],
                    ['Online', 'desde un lugar privado'],
                    ['1:1', 'atención individual'],
                  ].map(([value, label]) => (
                    <div className="rounded-2xl border border-white/18 bg-white/12 p-4 backdrop-blur" key={value}>
                      <strong className="block text-2xl font-black leading-none">{value}</strong>
                      <span className="mt-2 block text-xs font-bold leading-5 text-white/70">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4">
            {firstSessionSteps.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  className="grid gap-4 rounded-[1.5rem] border border-[#e6dcf5] bg-[#fbf8ff] p-5 shadow-sm sm:grid-cols-[64px_minmax(0,1fr)]"
                  key={item.title}
                  {...lift}
                >
                  <span className="grid size-14 place-items-center rounded-full bg-white text-[#6d55a3] shadow-sm">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.14em] text-[#8b6ad6]">
                      Paso 0{index + 1}
                    </span>
                    <h3 className="mt-2 text-xl font-black leading-tight text-[#282238]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#7d748a]">{item.description}</p>
                  </div>
                </motion.article>
              )
            })}

          <div className="mt-6 flex items-start gap-3 rounded-[1.5rem] border border-[#e6dcf5] bg-white p-5">
            <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-[#f0e8ff] text-[#4c3f6f]">
              <Check aria-hidden="true" size={16} />
            </span>
            <p className="text-sm font-bold leading-7 text-[#5f536f]">
              Puedes conectarte desde un espacio privado. La sesión dura aproximadamente 50 minutos y la conversación es confidencial.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

function FloatingWhatsApp({ lift }) {
  return (
    <motion.a
      className="fixed bottom-5 left-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white no-underline shadow-[0_18px_45px_rgba(37,211,102,0.34)] transition hover:bg-[#1fbd59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4c3f6f] focus-visible:ring-offset-2 sm:bottom-6 sm:left-6"
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      rel="noreferrer"
      target="_blank"
      aria-label="Escribir por WhatsApp"
      title="Escribir por WhatsApp"
      {...lift}
    >
      <WhatsAppIcon aria-hidden="true" className="size-6" />
    </motion.a>
  )
}

function WhatsAppIcon({ size = 20, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} focusable="false" {...props}>
      <path d="M19.05 4.91A9.88 9.88 0 0 0 12.02 2 9.97 9.97 0 0 0 3.4 16.98L2 22l5.16-1.35A9.96 9.96 0 0 0 12.01 22h.01A9.98 9.98 0 0 0 22 12.04a9.9 9.9 0 0 0-2.95-7.13Zm-7.03 15.4h-.01a8.26 8.26 0 0 1-4.2-1.15l-.3-.18-3.06.8.82-2.98-.2-.31a8.27 8.27 0 1 1 6.95 3.82Zm4.53-6.2c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.65.8-.8.96-.15.17-.3.19-.55.07-.25-.13-1.05-.39-2-1.24a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.3.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.6c.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.16-.48-.28Z" />
    </svg>
  )
}

function WhatsAppSection({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="agenda">
      <div className="mx-auto grid max-w-[1160px] gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Agenda por WhatsApp"
            title="Pregunta por disponibilidad sin llenar formularios largos."
            description="Puedes escribir con una frase simple. Coordinamos modalidad, horario y el primer encuentro terapéutico."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-[#4c3f6f] text-white hover:bg-[#3f345e]">
              <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...lift}>
                <MessageCircle aria-hidden="true" size={18} />
                Escribir por WhatsApp
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full border-[#e5d9f4] bg-white text-[#282238]">
              <motion.a href="#preguntas" {...lift}>
                Ver preguntas frecuentes
              </motion.a>
            </Button>
          </div>
        </div>

        <Card className="rounded-[2rem] border-[#e6dcf5] bg-[#fbf8ff] p-4 shadow-[0_30px_90px_rgba(76,63,111,0.1)]">
          <div className="rounded-[1.5rem] bg-white p-4">
            <div className="flex items-center gap-3 border-b border-[#eadff7] pb-4">
              <span className="grid size-11 place-items-center rounded-full bg-[#f0e8ff] text-[#4c3f6f]">
                <MessageCircle aria-hidden="true" size={20} />
              </span>
              <div>
                <strong className="block text-[#282238]">Agenda con Psicóloga Kafka</strong>
                <span className="text-sm text-[#7d748a]">Coordinamos tu primera sesión</span>
              </div>
            </div>

            <div className="grid gap-3 py-5">
              <ChatBubble from="client">Hola, quisiera empezar terapia. Estoy pasando por ansiedad y me gustaría saber horarios.</ChatBubble>
              <ChatBubble>Hola. Gracias por escribir. Podemos revisar disponibilidad y contarte cómo sería la primera sesión.</ChatBubble>
              <ChatBubble from="client">¿La atención puede ser online?</ChatBubble>
              <ChatBubble>Sí, las sesiones son por videollamada y duran aproximadamente 50 minutos.</ChatBubble>
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
          ? 'justify-self-end bg-[#4c3f6f] text-white'
          : 'justify-self-start bg-[#fbf8ff] text-[#5f536f]',
      )}
    >
      {children}
    </div>
  )
}

function FaqSection() {
  return (
    <section className="bg-white px-4 pb-16 pt-20 sm:px-6 lg:px-8" id="preguntas">
      <div className="mx-auto max-w-[1160px]">
        <SectionIntro
          eyebrow="Preguntas frecuentes"
          title="Antes de agendar tu primera sesión."
          description="Algunas dudas son muy comunes cuando una persona está por empezar terapia. Puedes preguntar todo lo que necesites antes de reservar."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faq.map((item) => (
            <article className="rounded-[1.5rem] border border-[#e6dcf5] bg-[#fbf8ff] p-6 shadow-sm" key={item.question}>
              <h3 className="text-xl font-black leading-tight text-[#282238]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#7d748a]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta({ lift }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1160px] overflow-hidden rounded-[2rem] bg-[#4c3f6f] text-white shadow-[0_30px_90px_rgba(76,63,111,0.22)]">
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.72fr] lg:p-12">
          <div>
            <Badge variant="dark" className="border-white/15 bg-white/10">
              Primer paso
            </Badge>
            <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl">
              Puedes empezar desde donde estás.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
              Si algo se siente pesado, confuso o repetitivo, podemos conversarlo en un espacio profesional,
              confidencial y sin juicios.
            </p>
          </div>
          <div className="grid content-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-white text-[#4c3f6f] hover:bg-white/90">
              <motion.a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} rel="noreferrer" target="_blank" {...lift}>
                Agendar primera sesión
                <ArrowRight aria-hidden="true" size={18} />
              </motion.a>
            </Button>
            <p className="text-sm font-semibold leading-6 text-white/62">
              Si estás en una situación de emergencia o riesgo, busca ayuda inmediata en servicios de emergencia de tu país.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PsychFooter({ mockup }) {
  return (
    <footer className="border-t border-[#e8ddf5] bg-white px-4 py-10 text-sm text-[#7d748a] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <a className="flex items-center gap-3 no-underline" href="#inicio" aria-label={mockup.clientName}>
            <span className="grid size-11 place-items-center rounded-2xl bg-[#4c3f6f] text-sm font-black text-white">
              Ψ
            </span>
            <span className="grid leading-tight">
              <strong className="text-base font-black text-[#282238]">{mockup.clientName}</strong>
              <small className="text-sm font-medium text-[#7d748a]">
                Psicoterapia online para adultos
              </small>
            </span>
          </a>
          <p className="mt-4 max-w-xl leading-7">
            Un espacio de acompañamiento psicológico para comprender lo que estás viviendo y construir herramientas
            con calma, respeto y confidencialidad.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:justify-items-end">
          <div className="grid gap-3">
            <span className="text-xs font-black uppercase tracking-[0.12em] text-[#8b6ad6]">
              Secciones
            </span>
            <a className="font-bold text-[#7d748a] no-underline transition hover:text-[#282238]" href="#trabajamos">Qué trabajamos</a>
            <a className="font-bold text-[#7d748a] no-underline transition hover:text-[#282238]" href="#sobre-mi">Sobre mí</a>
            <a className="font-bold text-[#7d748a] no-underline transition hover:text-[#282238]" href="#proceso">Proceso</a>
            <a className="font-bold text-[#7d748a] no-underline transition hover:text-[#282238]" href="#preguntas">Preguntas</a>
          </div>

          <div className="grid gap-3 lg:justify-items-end">
            <span className="text-xs font-black uppercase tracking-[0.12em] text-[#8b6ad6]">
              Contacto
            </span>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#4c3f6f] px-5 py-3 font-black text-white no-underline transition hover:bg-[#3f345e]"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" size={17} />
              WhatsApp
            </a>
            <div className="mt-2 flex flex-wrap gap-2 lg:justify-end">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#e6dcf5] bg-[#fbf8ff] px-4 py-2 font-black text-[#282238] no-underline transition hover:-translate-y-0.5 hover:border-[#8b6ad6]/40 hover:bg-white"
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" className="size-4 text-[#8b6ad6]" />
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

function SectionIntro({ dark = false, description, eyebrow, title }) {
  return (
    <div>
      <Badge
        className={cn(
          'gap-2',
          dark
            ? 'border-white/15 bg-white/10 text-white'
            : 'border-[#dccbf4] bg-white/78 text-[#6d55a3]',
        )}
      >
        <BadgeCheck aria-hidden="true" size={14} />
        {eyebrow}
      </Badge>
      <h2 className={cn('mt-5 text-4xl font-black leading-none sm:text-5xl', dark ? 'text-white' : 'text-[#282238]')}>
        {title}
      </h2>
      <p className={cn('mt-5 text-base leading-8', dark ? 'text-white/72' : 'text-[#7d748a]')}>
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
