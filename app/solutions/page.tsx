import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SolutionsHero } from '@/components/solutions/solutions-hero';
import { IndustryTabs } from '@/components/solutions/industry-tabs';
import { SolutionCards } from '@/components/solutions/solution-cards';
import { CaseStudies } from '@/components/solutions/case-studies';
import { CustomizationProcess } from '@/components/solutions/customization-process';
import { SolutionsFAQ } from '@/components/solutions/solutions-faq';

export const metadata: Metadata = {
  title: '解决方案 | 涌现 - 为您的企业定制AI工作台',
  description:
    '为电商、制造业等不同行业提供定制AI工作台解决方案，解决具体业务挑战，提升效率和降低成本。',
  alternates: {
    canonical: 'https://yongxian.xyz/solutions',
  },
};

export default function SolutionsPage() {
  return (
    <main className="pb-20">
      <SolutionsHero />
      <IndustryTabs />
      <SolutionCards />
      <CaseStudies />
      <CustomizationProcess />
      <SolutionsFAQ />

      {/* CTA Section */}
      <section className="relative py-24 bg-muted/30 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          {/* Gradient mesh */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[200px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[200px]" />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
                <span className="text-4xl">🚀</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              准备好开始定制您的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-purple-500">
                {' '}
                AI 工作台
              </span>
              了吗？
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              我们的顾问团队随时准备帮助您分析业务需求，设计最适合您企业的 AI 工作台解决方案。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book-consultation">
                <button
                  type="button"
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 rounded-full text-white font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    预约业务咨询
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border hover:border-primary/50 hover:bg-primary/10"
                >
                  联系销售团队
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
