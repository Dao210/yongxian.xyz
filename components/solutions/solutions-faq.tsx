"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "AI工作台能解决哪些具体的业务问题？",
    answer:
      "AI工作台可以解决多种业务挑战，包括但不限于：客户服务自动化（减少响应时间，提高客户满意度），文档处理（自动提取和处理数据，减少手动输入），销售支持（线索管理，提案准备），数据分析（自动生成报告和洞察），日程管理（减少冲突，提高效率），以及人力资源流程自动化（简化招聘和入职）。我们可以根据您的具体业务需求定制解决方案。",
  },
  {
    question: "AI工作台如何与我们现有的系统集成？",
    answer:
      "我们的AI工作台设计为可与各种业务系统无缝集成，包括CRM、ERP、电商平台、客服系统、HR系统等。我们使用API接口、webhook和自定义连接器实现集成，确保数据能够安全、高效地在系统间流动。在实施前，我们会进行详细的系统评估，制定最佳集成方案，并确保整个过程对您的业务运营影响最小。",
  },
  {
    question: "定制AI工作台需要多长时间？",
    answer:
      "定制周期取决于解决方案的复杂度和集成需求。简单的AI工作台（如基础客服助手）通常可在2-4周内完成，而复杂的解决方案（如跨多系统的智能业务流程自动化）可能需要6-12周。在需求分析阶段，我们会提供详细的时间线估计，并在整个过程中保持透明沟通，确保项目按时交付。",
  },
  {
    question: "我们的数据安全如何得到保障？",
    answer:
      "数据安全是我们的首要优先级。我们采用多层次安全架构，包括端到端加密、严格的访问控制、定期安全审计和合规认证。所有数据处理都符合相关法规要求，如有需要，我们可以签署定制的数据处理协议。此外，我们可以部署在您的私有云或本地环境中，进一步增强数据安全性。",
  },
  {
    question: "AI工作台的定制和维护成本如何？",
    answer:
      "我们提供灵活的定价模式，包括一次性实施费用和基于使用量的月度订阅。具体成本取决于解决方案的复杂度、集成需求和预期使用量。根据我们的经验，大多数客户在3-6个月内实现投资回报，通过自动化和效率提升节省的成本远超过实施成本。我们会在咨询阶段提供详细的成本分析和ROI预测。",
  },
  {
    question: "如何确保AI工作台能够准确理解和处理我们的业务场景？",
    answer:
      "我们采用多阶段训练方法确保准确性：首先，我们使用您的业务数据和文档建立专属知识库；然后，通过场景化训练提高理解能力；接着，进行大量测试和验证；最后，部署后持续学习和优化。我们的AI工作台采用先进的自然语言处理技术，能够理解上下文和行业专业术语，并且会随着使用不断学习和改进。",
  },
]

export function SolutionsFAQ() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">常见问题</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">关于AI工作台解决方案的常见问题解答</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
