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
    question: '什么是AI工作台？',
    answer:
      'AI工作台是一种AI驱动的助手，旨在执行企业内特定任务和工作流程。与通用聊天机器人不同，我们的AI工作台根据您的业务流程定制，可以安全访问您的系统，并从互动中不断学习以提高效率。',
  },
  {
    question: '实施AI工作台需要多长时间？',
    answer:
      '实施时间根据复杂程度而异，通常在2-4周之间。简单的AI工作台可以在一周内部署，而与多个系统集成的更复杂解决方案可能需要更长时间。',
  },
  {
    question: '如果我的AI工作台表现不如预期怎么办？',
    answer:
      '我们提供专门的顾问支持，确保您的AI工作台满足您的期望。如果您对性能不满意，我们的顾问将与您合作，完善和优化解决方案，直到满足您的需求。',
  },
  {
    question: 'AI工作台能否与我们现有的系统集成？',
    answer:
      '是的，我们的AI工作台设计为可与各种业务系统集成，包括CRM平台、ERP系统、通信工具和自定义数据库。我们将在咨询阶段评估您当前的技术栈。',
  },
  {
    question: 'AI工作台处理的数据安全吗？',
    answer:
      '安全是我们的首要任务。所有数据在传输和存储时都会加密，我们遵守行业数据保护标准。我们实施基于角色的访问控制，并可以签署自定义数据处理协议以满足您的特定要求。',
  },
  {
    question: '我可以期待什么样的投资回报率？',
    answer:
      '大多数客户在3-6个月内看到投资回报。我们的AI工作台通常将其处理的流程的运营成本降低30-50%，同时提高准确性和响应时间。在咨询期间，我们将根据您的特定用例提供定制的ROI预测。',
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
