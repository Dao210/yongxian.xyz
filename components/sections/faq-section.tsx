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
    question: '涌现 AI 工作台与 Dify/FastGPT/Coze 有什么区别？',
    answer:
      '涌现专为**中国企业**定制，核心优势：1)完全中文化界面，符合中国用户习惯（竞品多为英文或汉化不全）；2)支持私有化部署和国产化适配（飞腾、鲲鹏、麒麟、统信UOS）；3)提供一站式咨询+实施+运维服务，而非纯工具平台；4)优化提示词工程，节省30-50% Token成本；5)Skills调用和工作过程完全可视化。',
  },
  {
    question: '为什么不直接用 ChatGPT 或 Claude？',
    answer:
      '通用AI模型有三大局限：1)数据安全-企业敏感数据可能泄露给第三方；2)无法集成-不能访问CRM、ERP等内部系统；3)缺乏领域知识-不了解您的业务流程和专有术语。涌现AI工作台可私有化部署，集成企业知识库，在安全环境中运行，同时符合中国数据法规要求。',
  },
  {
    question: '私有化部署需要什么硬件配置？',
    answer:
      '基础配置：CPU 8核以上（推荐16核）、内存32GB+（推荐64GB）、存储500GB SSD。GPU可选用于本地模型加速。支持国产化平台：飞腾、鲲鹏、海光等CPU，麒麟、统信UOS等操作系统。',
  },
  {
    question: '数据会出境吗？符合中国法规吗？',
    answer:
      '完全合规。支持100%本地化部署，数据不出境。符合《数据安全法》《个人信息保护法》要求。可签署数据处理协议（DPA），支持等保三级认证咨询，支持国密SM2/SM3/SM4加密算法。',
  },
  {
    question: '部署需要多长时间？',
    answer:
      '根据复杂度：基础版（知识库问答）1-2周；标准版（简单工作流）2-4周；企业版（多系统集成）4-8周。包含：需求分析(1周)+环境搭建(2-3天)+开发配置(2-4周)+测试上线(1周)。',
  },
  {
    question: '除了实施费，还有哪些持续成本？',
    answer:
      '持续成本包括：API调用费（按实际调用量计费）、可选的运维服务费（按月/年订阅）、大版本升级费（可选）。预计中小企业月度成本在3000-10000元。我们提供免费咨询和POC验证，降低决策风险。',
  },
];

export function FAQSection() {
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

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-2xl">❓</span>
            <span className="text-primary text-sm font-medium">常见问题</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            常见问题
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            获取关于我们AI工作台的常见问题解答
          </p>
        </div>

        {/* FAQ Items */}
        <div
          className={`mx-auto max-w-3xl transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-border hover:border-primary/10 transition-all duration-500">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/50 last:border-0"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-cyan-500/10 text-primary font-medium text-xs">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-muted-foreground mb-4">还有其他问题？</p>
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            预约业务咨询
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.12;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
