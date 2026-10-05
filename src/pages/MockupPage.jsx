import { MockupShell } from '../components/layout/MockupShell'
import { AboutSection } from '../components/sections/AboutSection'
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection'
import { ContactSection } from '../components/sections/ContactSection'
import { CtaSection } from '../components/sections/CtaSection'
import { FaqSection } from '../components/sections/FaqSection'
import { FeatureSection } from '../components/sections/FeatureSection'
import { HeroSection } from '../components/sections/HeroSection'
import { OnlineServicesSection } from '../components/sections/OnlineServicesSection'
import { OccasionsSection } from '../components/sections/OccasionsSection'
import { PhotoCarouselSection } from '../components/sections/PhotoCarouselSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { PromoModal } from '../components/sections/PromoModal'
import { ServicesSection } from '../components/sections/ServicesSection'
import { TeamSection } from '../components/sections/TeamSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { FeaturedProductsSection } from '../components/sections/FeaturedProductsSection'
import { WhatsAppSection } from '../components/sections/WhatsAppSection'
import { ConciliationKafkaPage } from './ConciliationKafkaPage'
import { FloristKafkaPage } from './FloristKafkaPage'
import { GodPackStorePage } from './GodPackStorePage'
import { PsychologistKafkaPage } from './PsychologistKafkaPage'
import { VeterinaryKafkaPage } from './VeterinaryKafkaPage'

export function MockupPage({ mockup }) {
  if (mockup.slug === 'god-pack-store') {
    return <GodPackStorePage mockup={mockup} />
  }

  if (mockup.slug === 'veterinaria-kafka') {
    return <VeterinaryKafkaPage mockup={mockup} />
  }

  if (mockup.slug === 'floreria-kafka') {
    return <FloristKafkaPage mockup={mockup} />
  }

  if (mockup.slug === 'centro-de-conciliacion-kafka') {
    return <ConciliationKafkaPage mockup={mockup} />
  }

  if (mockup.slug === 'psicologa-kafka') {
    return <PsychologistKafkaPage mockup={mockup} />
  }

  return (
    <MockupShell mockup={mockup}>
      <PromoModal promo={mockup.optionalSections?.promo} slug={mockup.slug} />
      <HeroSection preview={mockup} />
      <AboutSection about={mockup.about} />
      <PhotoCarouselSection gallery={mockup.gallery} />
      <BeforeAfterSection beforeAfter={mockup.optionalSections?.beforeAfter} />
      <OccasionsSection occasions={mockup.optionalSections?.occasions} />
      <FeaturedProductsSection featured={mockup.optionalSections?.featured} />
      <ServicesSection services={mockup.services} heading={mockup.optionalSections?.offer} />
      <OnlineServicesSection onlineServices={mockup.optionalSections?.onlineServices} />
      <ProcessSection process={mockup.optionalSections?.process} />
      <FeatureSection feature={mockup.optionalSections?.feature} />
      <TeamSection team={mockup.optionalSections?.team} />
      <WhatsAppSection whatsapp={mockup.optionalSections?.whatsapp} />
      <TestimonialsSection clientName={mockup.clientName} />
      <FaqSection faq={mockup.optionalSections?.faq} />
      <ContactSection contact={mockup.contact} />
      <CtaSection preview={mockup} />
    </MockupShell>
  )
}
