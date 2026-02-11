import Link from "next/link"
import { Button } from "@/components/ui/button"

export function JoinUs() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">加入我们的使命</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            我们正在寻找志同道合的伙伴，一起帮助企业完成AI升级。
            如果你热爱技术，渴望创造影响力，欢迎加入涌现科技团队。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button size="lg">查看职位机会</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                联系我们
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
