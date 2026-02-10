import { CheckCircle } from "lucide-react"

const steps = [
  {
    title: "需求分析",
    description: "我们的顾问团队与您深入交流，了解您的业务流程、痛点和目标，确定AI工作台可以创造最大价值的领域。",
    points: ["详细业务流程梳理", "痛点和瓶颈识别", "ROI潜力评估", "优先级确定"],
  },
  {
    title: "解决方案设计",
    description: "基于需求分析，我们设计定制化的AI工作台解决方案，包括功能规划、系统集成方案和实施路线图。",
    points: ["功能和能力定义", "系统集成架构设计", "用户体验规划", "实施路线图制定"],
  },
  {
    title: "开发与训练",
    description: "我们的技术团队开发AI工作台，并使用您的业务数据进行训练，确保其能够准确理解和处理您的特定业务场景。",
    points: ["核心功能开发", "业务知识库建设", "场景化训练", "性能优化"],
  },
  {
    title: "集成与测试",
    description: "我们将AI工作台集成到您现有的系统中，并进行全面测试，确保其能够无缝运行并达到预期效果。",
    points: ["系统集成实施", "功能测试", "性能测试", "用户验收测试"],
  },
  {
    title: "部署与培训",
    description: "AI工作台正式上线，我们为您的团队提供全面培训，确保他们能够有效地与AI工作台协作。",
    points: ["生产环境部署", "团队培训", "操作手册提供", "初期使用支持"],
  },
  {
    title: "持续优化",
    description: "我们持续监控AI工作台的表现，收集反馈，并进行定期优化，确保其始终满足您不断变化的业务需求。",
    points: ["性能监控", "用户反馈收集", "定期优化更新", "新功能开发"],
  },
]

export function CustomizationProcess() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">定制流程</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            我们采用系统化的方法，确保为您开发的AI工作台完美契合您的业务需求
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>

              <p className="text-muted-foreground mb-4">{step.description}</p>

              <ul className="space-y-2">
                {step.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
