import { HeroSection } from "@/components/sections/hero-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { FeaturedEmployeesSection } from "@/components/sections/featured-employees-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ConsultationSection } from "@/components/sections/consultation-section"
import { FAQSection } from "@/components/sections/faq-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedEmployeesSection />
      <TestimonialsSection />
      <ConsultationSection />
      <FAQSection />
    </main>
  )
}
