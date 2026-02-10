import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SolutionsHero() {
  return (
    <section className="bg-primary/10 py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            为您的行业定制<span className="text-primary">AI工作台</span>解决方案
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            我们针对不同行业的具体挑战，提供量身定制的AI工作台解决方案，帮助您提高效率、降低成本并改善客户体验。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#industry-solutions">
              <Button size="lg">探索行业解决方案</Button>
            </Link>
            <Link href="/book-consultation">
              <Button variant="outline" size="lg">
                预约业务咨询
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
