import { Zap, TrendingUp, Clock, Shield } from "lucide-react"

const benefits = [
  {
    title: "提高效率",
    description: "自动化重复性任务和工作流程，让您的团队专注于更高价值的活动。",
    icon: Zap,
  },
  {
    title: "增强生产力",
    description: "AI工作台全天候工作，无需休息，确保业务持续运营。",
    icon: TrendingUp,
  },
  {
    title: "节约成本",
    description: "降低运营成本，同时保持或提高服务质量和响应时间。",
    icon: Clock,
  },
  {
    title: "专家支持",
    description: "我们的顾问确保您的AI工作台满足您的期望和业务需求。",
    icon: Shield,
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">企业收益</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            我们的AI工作台帮助中小企业以更少的资源实现更多目标
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
