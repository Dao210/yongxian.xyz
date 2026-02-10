import { Heart, Shield, Zap, RefreshCw, Users, Lightbulb } from "lucide-react"

const values = [
  {
    title: "客户至上",
    description: "我们始终将客户需求放在首位，深入理解客户业务，提供真正解决问题的解决方案。",
    icon: Heart,
  },
  {
    title: "技术赋能",
    description: "我们相信技术的力量，致力于将最先进的AI技术转化为实用的业务工具。",
    icon: Zap,
  },
  {
    title: "持续创新",
    description: "我们不断探索新技术和新方法，持续改进我们的产品和服务。",
    icon: RefreshCw,
  },
  {
    title: "诚信透明",
    description: "我们在所有业务往来中保持诚信和透明，建立长期互信的客户关系。",
    icon: Shield,
  },
  {
    title: "协作共赢",
    description: "我们与客户建立紧密的合作关系，共同成长，实现互利共赢。",
    icon: Users,
  },
  {
    title: "简化复杂",
    description: "我们致力于将复杂技术简化，让数字化转型变得简单易行。",
    icon: Lightbulb,
  },
]

export function OurValues() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">我们的价值观</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            这些核心价值观指导我们的日常工作和决策，确保我们始终专注于为客户创造最大价值。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
