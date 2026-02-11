'use client';

import { useRef, useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: '业务需求深度分析',
    description:
      '30分钟一对一深度沟通，全面了解您的业务流程、痛点和目标，挖掘 AI 工作台的最大价值点。',
    icon: '🔍',
  },
  {
    title: 'AI 工作台解决方案初步设计',
    description: '基于您的需求，提供定制化的 AI 工作台架构设计，包括功能规划、技术选型和实施路径。',
    icon: '🎨',
  },
  {
    title: '实施路线图规划建议',
    description:
      '制定清晰的分阶段实施计划，从 MVP 到完整落地，每个阶段的目标、时间和资源投入明确可控。',
    icon: '📍',
  },
  {
    title: 'ROI 投资回报分析',
    description:
      '基于行业案例和您的业务规模，预估 AI 工作台带来的效率提升和成本节约，量化投资回报。',
    icon: '📊',
  },
  {
    title: '技术可行性评估',
    description: '评估现有系统的集成难度，识别潜在技术风险，提供专业的规避和解决方案。',
    icon: '⚙️',
  },
  {
    title: '后续合作方案说明',
    description: '如果需要进一步合作，咨询费用可全额抵扣项目款项，让您的咨询投入物超所值。',
    icon: '💰',
  },
];

export function ServiceContent() {
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
    <section ref={sectionRef} className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-2xl">📋</span>
            <span className="text-primary text-sm font-medium">咨询内容</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            咨询包含什么
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            30 分钟深度咨询，为您提供全方位的 AI 工作台解决方案
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 text-4xl">{service.icon}</div>

              {/* Check badge */}
              <div className="mb-3">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>包含</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
