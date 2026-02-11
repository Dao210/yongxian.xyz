import type { Metadata } from 'next';
import { ConsultationHero } from '@/components/book-consultation/consultation-hero';
import { WhyChooseUs } from '@/components/book-consultation/why-choose-us';
import { ServiceContent } from '@/components/book-consultation/service-content';
import { BookingProcess } from '@/components/book-consultation/booking-process';
import { ContactSection } from '@/components/book-consultation/contact-section';

export const metadata: Metadata = {
  title: '预约咨询 | 涌现 - AI工作台定制服务',
  description:
    '30分钟一对一专业咨询，帮您分析业务需求，设计定制化AI工作台解决方案。咨询费用¥299，可抵扣项目费用。',
  keywords: ['AI工作台咨询', 'AI咨询', 'AI解决方案', 'AI定制服务'],
};

export default function BookConsultationPage() {
  return (
    <main>
      <ConsultationHero />
      <WhyChooseUs />
      <ServiceContent />
      <BookingProcess />
      <ContactSection />
    </main>
  );
}
