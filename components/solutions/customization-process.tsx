'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: '需求分析',
    description:
      '我们的顾问团队与您深入交流，了解您的业务流程、痛点和目标，确定AI工作台可以创造最大价值的领域。',
    points: ['详细业务流程梳理', '痛点和瓶颈识别', 'ROI潜力评估', '优先级确定'],
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: '解决方案设计',
    description:
      '基于需求分析，我们设计定制化的AI工作台解决方案，包括功能规划、系统集成方案和实施路线图。',
    points: ['功能和能力定义', '系统集成架构设计', '用户体验规划', '实施路线图制定'],
    color: 'from-blue-400 to-indigo-500',
  },
  {
    title: '开发与训练',
    description:
      '我们的技术团队开发AI工作台，并使用您的业务数据进行训练，确保其能够准确理解和处理您的特定业务场景。',
    points: ['核心功能开发', '业务知识库建设', '场景化训练', '性能优化'],
    color: 'from-indigo-400 to-purple-500',
  },
  {
    title: '集成与测试',
    description:
      '我们将AI工作台集成到您现有的系统中，并进行全面测试，确保其能够无缝运行并达到预期效果。',
    points: ['系统集成实施', '功能测试', '性能测试', '用户验收测试'],
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: '部署与培训',
    description: 'AI工作台正式上线，我们为您的团队提供全面培训，确保他们能够有效地与AI工作台协作。',
    points: ['生产环境部署', '团队培训', '操作手册提供', '初期使用支持'],
    color: 'from-pink-400 to-rose-500',
  },
  {
    title: '持续优化',
    description:
      '我们持续监控AI工作台的表现，收集反馈，并进行定期优化，确保其始终满足您不断变化的业务需求。',
    points: ['性能监控', '用户反馈收集', '定期优化更新', '新功能开发'],
    color: 'from-emerald-400 to-teal-500',
  },
];

export function CustomizationProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => sectionObserver.disconnect();
  }, []);

  useEffect(() => {
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1 && index > activeStep) {
              setActiveStep(index);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) stepObserver.observe(ref);
    });

    return () => stepObserver.disconnect();
  }, [activeStep]);

  return (
    <section ref={sectionRef} className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-2xl">🔄</span>
            <span className="text-primary text-sm font-medium">实施流程</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            定制流程
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            我们采用系统化的方法，确保为您开发的 AI 工作台完美契合您的业务需求
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className={`relative mb-16 md:mb-24 transition-all duration-1000 ${
                index <= activeStep ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12 items-center`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  } ml-20 md:ml-0`}
                >
                  {/* Step number badge */}
                  <div
                    className={`inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-sm mb-3 shadow-md shadow-primary/20`}
                  >
                    {index + 1}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>

                  {/* Points */}
                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Center marker */}
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2">
                  <div
                    className={`relative transition-all duration-700 ${
                      index <= activeStep ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
                    {/* Center dot */}
                    <div
                      className={`relative w-5 h-5 rounded-full bg-gradient-to-br ${step.color} shadow-lg shadow-primary/30`}
                    >
                      <div className="absolute inset-1.5 rounded-full bg-white/80" />
                    </div>
                  </div>
                </div>

                {/* Mobile marker */}
                <div className="md:hidden absolute left-8 top-0 -translate-x-1/2">
                  <div
                    className={`relative transition-all duration-700 ${
                      index <= activeStep ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    <div
                      className={`relative w-4 h-4 rounded-full bg-gradient-to-br ${step.color}`}
                    >
                      <div className="absolute inset-1 rounded-full bg-white/80" />
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link href="/book-consultation">
            <button
              type="button"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                开始定制您的 AI 工作台
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
