import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { IndustryTabs } from "@/components/solutions/industry-tabs"
import { SolutionCards } from "@/components/solutions/solution-cards"
import { CaseStudies } from "@/components/solutions/case-studies"
import { CustomizationProcess } from "@/components/solutions/customization-process"
import { SolutionsFAQ } from "@/components/solutions/solutions-faq"

export const metadata: Metadata = {
  title: "解决方案 | 涌现 - 为您的企业定制AI工作台",
  description: "为电商、制造业等不同行业提供定制AI工作台解决方案，解决具体业务挑战，提升效率和降低成本。",
}

export default function SolutionsPage() {
  return (
    <main className="pb-20">
      <SolutionsHero />
      <IndustryTabs />
      <SolutionCards />
      <CaseStudies />
      <CustomizationProcess />
      <SolutionsFAQ />

      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">准备好开始定制您的AI工作台了吗？</h2>
            <p className="text-lg text-muted-foreground mb-8">
              我们的顾问团队随时准备帮助您分析业务需求，设计最适合您企业的AI工作台解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg">预约业务咨询 (¥299)</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  联系销售团队
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
