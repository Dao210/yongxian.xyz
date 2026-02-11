'use client';

import { useRef, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'AI工作台能解决哪些具体的业务问题？',
    answer:
      'AI工作台可以解决多种业务挑战，包括但不限于：客户服务自动化（减少响应时间，提高客户满意度），文档处理（自动提取和处理数据，减少手动输入），销售支持（线索管理，提案准备），数据分析（自动生成报告和洞察），日程管理（减少冲突，提高效率），以及人力资源流程自动化（简化招聘和入职）。我们可以根据您的具体业务需求定制解决方案。',
  },
  {
    question: 'AI工作台如何与我们现有的系统集成？',
    answer:
      '我们的AI工作台设计为可与各种业务系统无缝集成，包括CRM、ERP、电商平台、客服系统、HR系统等。我们使用API接口、webhook和自定义连接器实现集成，确保数据能够安全、高效地在系统间流动。在实施前，我们会进行详细的系统评估，制定最佳集成方案，并确保整个过程对您的业务运营影响最小。',
  },
  {
    question: '定制AI工作台需要多长时间？',
    answer:
      '定制周期取决于解决方案的复杂度和集成需求。简单的AI工作台（如基础客服助手）通常可在2-4周内完成，而复杂的解决方案（如跨多系统的智能业务流程自动化）可能需要6-12周。在需求分析阶段，我们会提供详细的时间线估计，并在整个过程中保持透明沟通，确保项目按时交付。',
  },
  {
    question: '我们的数据安全如何得到保障？',
    answer:
      '数据安全是我们的首要优先级。我们采用多层次安全架构，包括端到端加密、严格的访问控制、定期安全审计和合规认证。所有数据处理都符合相关法规要求，如有需要，我们可以签署定制的数据处理协议。此外，我们可以部署在您的私有云或本地环境中，进一步增强数据安全性。',
  },
  {
    question: 'AI工作台的定制和维护成本如何？',
    answer:
      '我们提供灵活的定价模式，包括一次性实施费用和基于使用量的月度订阅。具体成本取决于解决方案的复杂度、集成需求和预期使用量。根据我们的经验，大多数客户在3-6个月内实现投资回报，通过自动化和效率提升节省的成本远超过实施成本。我们会在咨询阶段提供详细的成本分析和ROI预测。',
  },
  {
    question: '如何确保AI工作台能够准确理解和处理我们的业务场景？',
    answer:
      '我们采用多阶段训练方法确保准确性：首先，我们使用您的业务数据和文档建立专属知识库；然后，通过场景化训练提高理解能力；接着，进行大量测试和验证；最后，部署后持续学习和优化。我们的AI工作台采用先进的自然语言处理技术，能够理解上下文和行业专业术语，并且会随着使用不断学习和改进。',
  },
];

export function SolutionsFAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-background overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-2xl">💡</span>
            <span className="text-primary text-sm font-medium">常见问题</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            您可能想知道
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            关于 AI 工作台解决方案的常见问题解答
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`mx-auto max-w-3xl transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-muted/30 rounded-2xl border border-border p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border last:border-0"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-5 [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Additional help CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-muted-foreground mb-4">没有找到您需要的答案？</p>
          <a
            href="mailto:hello@yongxian.xyz"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            联系我们的团队
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
