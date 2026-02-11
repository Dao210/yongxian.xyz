import { Rocket, Lightbulb, Users, Target } from "lucide-react"

const missionPoints = [
  {
    title: "赋能企业AI升级",
    description: "我们致力于将先进的AI技术带入企业，帮助突破技术壁垒，完成范式转换。",
    icon: Rocket,
  },
  {
    title: "降低技术门槛",
    description: "我们简化复杂技术，让企业无需深厚技术背景也能轻松部署和使用AI工作台。",
    icon: Lightbulb,
  },
  {
    title: "人机协作新模式",
    description: "我们创造人机协作的新模式，让AI工作台处理重复性工作，使团队专注于创造性和决策性任务。",
    icon: Users,
  },
  {
    title: "可持续增长",
    description: "我们帮助企业建立可持续的增长模式，通过AI升级提高效率、降低成本并增强竞争力。",
    icon: Target,
  },
]

export function OurMission() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">我们的使命</h2>
          <p className="text-lg text-muted-foreground">
            涌现诞生于一个简单而强大的愿景：帮助企业通过AI工作台完成范式转换。
            我们看到许多企业面临效率瓶颈和成本压力，却缺乏资源来实施AI升级。
            我们的使命是通过定制AI工作台，为这些企业提供切实可行的解决方案。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {missionPoints.map((point, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
