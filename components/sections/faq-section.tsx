"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "什么是AI工作台？",
    answer:
      "AI工作台是一种AI驱动的助手，旨在执行企业内特定任务和工作流程。与通用聊天机器人不同，我们的AI工作台根据您的业务流程定制，可以安全访问您的系统，并从互动中不断学习以提高效率。",
  },
  {
    question: "实施AI工作台需要多长时间？",
    answer:
      "实施时间根据复杂程度而异，通常在2-4周之间。简单的AI工作台可以在一周内部署，而与多个系统集成的更复杂解决方案可能需要更长时间。",
  },
  {
    question: "如果我的AI工作台表现不如预期怎么办？",
    answer:
      "我们提供专门的顾问支持，确保您的AI工作台满足您的期望。如果您对性能不满意，我们的顾问将与您合作，完善和优化解决方案，直到满足您的需求。",
  },
  {
    question: "AI工作台能否与我们现有的系统集成？",
    answer:
      "是的，我们的AI工作台设计为可与各种业务系统集成，包括CRM平台、ERP系统、通信工具和自定义数据库。我们将在咨询阶段评估您当前的技术栈。",
  },
  {
    question: "AI工作台处理的数据安全吗？",
    answer:
      "安全是我们的首要任务。所有数据在传输和存储时都会加密，我们遵守行业数据保护标准。我们实施基于角色的访问控制，并可以签署自定义数据处理协议以满足您的特定要求。",
  },
  {
    question: "我可以期待什么样的投资回报率？",
    answer:
      "大多数客户在3-6个月内看到投资回报。我们的AI工作台通常将其处理的流程的运营成本降低30-50%，同时提高准确性和响应时间。在咨询期间，我们将根据您的特定用例提供定制的ROI预测。",
  },
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">常见问题</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">获取关于我们AI工作台的常见问题解答</p>
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
