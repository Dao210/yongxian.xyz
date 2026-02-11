import { Milestone } from "@/components/ui/milestone"

export function OurJourney() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">我们的历程</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            从互联网老兵到AI工作台先行者，我们始终专注于用技术解决企业实际问题
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Milestone
            year="2021"
            title="创立初心"
            description="涌现科技由资深技术专家创立。我们在实践中看到企业对AI技术的真实需求，决定将积累的技术经验转化为实用的AI工作台解决方案。"
          />

          <Milestone
            year="2022"
            title="产品雏形"
            description="我们开发了第一版AI工作台原型，与制造业和电商企业合作验证方案。初期成果显著，客户反馈积极，这坚定了我们继续前进的决心。"
          />

          <Milestone
            year="2022"
            title="团队扩张"
            description="随着业务增长，我们扩大了团队规模，引入了更多在AI、产品设计和行业解决方案方面有深入实践的人才。"
          />

          <Milestone
            year="2023"
            title="技术突破"
            description="我们在大型语言模型应用和企业系统集成方面取得重大突破，应用AI的理解、分析和交互创新能力，为客户创造更大价值。"
          />

          <Milestone
            year="2023"
            title="行业拓展"
            description="我们将解决方案拓展到物流、金融和专业服务等领域，帮助更多企业完成AI升级。"
          />

          <Milestone
            year="2024"
            title="全新平台"
            description="我们推出全新的涌现科技平台，提供更强大、更灵活的AI工作台定制能力，进一步降低企业采用AI技术的门槛。"
            isLast={true}
          />
        </div>
      </div>
    </section>
  )
}
