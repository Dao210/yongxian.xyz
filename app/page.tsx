import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { ComparisonSection } from '@/components/sections/comparison-section';
import { BenefitsSection } from '@/components/sections/benefits-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { FeaturedEmployeesSection } from '@/components/sections/featured-employees-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ConsultationSection } from '@/components/sections/consultation-section';
import { FAQSection } from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: '涌现 | 定制AI工作台，打造企业虚拟员工',
  description:
    '涌现提供定制AI工作台服务，帮助企业打造AI虚拟员工，提升运营效率、降低人力成本。专业顾问一对一咨询服务，针对电商、制造业等行业提供个性化AI解决方案。',
  alternates: {
    canonical: 'https://yongxian.xyz',
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ComparisonSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedEmployeesSection />
      <TestimonialsSection />
      <ConsultationSection />
      <FAQSection />
    </main>
  );
}
