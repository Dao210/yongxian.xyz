import { Milestone } from "@/components/ui/milestone"

export function OurJourney() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">我们的历程</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            从创立之初到现在，我们一直致力于帮助传统企业实现数字化转型
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Milestone
            year="2021"
            title="创立初心"
            description="涌现科技由一群来自阿里巴巴、腾讯、字节跳动等互联网大厂的技术专家创立。我们看到传统行业在数字化转型中面临的挑战，决定将我们在大厂积累的AI技术经验带给这些企业。"
          />

          <Milestone
            year="2022"
            title="产品雏形"
            description="我们开发了第一版智能搜索推荐系统，并与几家制造业和电商企业合作，验证了我们的解决方案。初期成果显著，客户反馈积极，这坚定了我们继续前进的决心。"
          />

          <Milestone
            year="2022"
            title="团队扩张"
            description="随着业务增长，我们扩大了团队规模，引入了更多来自互联网大厂的人才，增强了我们在AI、产品设计和行业解决方案方面的能力。"
          />

          <Milestone
            year="2023"
            title="技术突破"
            description="我们在大型语言模型应用和企业系统集成方面取得重大突破，应用AI的理解、分析和交互创新能力，为客户创造更大价值。"
          />

          <Milestone
            year="2023"
            title="行业拓展"
            description="我们将解决方案拓展到更多行业，包括物流、金融和专业服务，帮助更多传统企业实现数字化转型。"
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
