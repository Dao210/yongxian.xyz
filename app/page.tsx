import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { AITeamSection } from '@/components/sections/ai-team-section';
import { ComparisonSection } from '@/components/sections/comparison-section';
import { BenefitsSection } from '@/components/sections/benefits-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { ArchitectureSection } from '@/components/sections/architecture-section';
import { FeaturedEmployeesSection } from '@/components/sections/featured-employees-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ConsultationSection } from '@/components/sections/consultation-section';
import { FAQSection } from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: '涌现 | 构建智能组织，让AI为你工作',
  description:
    '涌现帮助你构建智能组织，组建AI团队。AI数字员工各司其职，协同工作，让企业运营自动化。专业顾问一对一咨询服务。',
  alternates: {
    canonical: 'https://yongxian.xyz',
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AITeamSection />
      <ComparisonSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ArchitectureSection />
      <FeaturedEmployeesSection />
      <TestimonialsSection />
      <ConsultationSection />
      <FAQSection />
    </main>
  );
}
