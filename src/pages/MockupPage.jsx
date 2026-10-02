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
import { ServicesSection } from '../components/sections/ServicesSection'
import { TeamSection } from '../components/sections/TeamSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { FeaturedProductsSection } from '../components/sections/FeaturedProductsSection'
import { WhatsAppSection } from '../components/sections/WhatsAppSection'

export function MockupPage({ mockup }) {
  return (
    <MockupShell mockup={mockup}>
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
