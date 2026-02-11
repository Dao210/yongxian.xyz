'use client';

import { useRef, useEffect, useState } from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

const trustPoints = [
  {
    icon: Award,
    title: '专业团队',
    description: '由拥有10年+互联网经验的 AI 专家亲自咨询，深度理解您的业务需求。',
  },
  {
    icon: Users,
    title: '丰富经验',
    description: '服务过电商、制造业、金融等 50+ 企业客户，积累了丰富的行业实践经验。',
  },
  {
    icon: TrendingUp,
    title: '可量化成果',
    description: '帮助客户平均提升 30%+ 效率，降低 40%+ 成本，数据可追踪、效果可验证。',
  },
];

export function WhyChooseUs() {
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
            <span className="text-2xl">💎</span>
            <span className="text-primary text-sm font-medium">为什么选择我们</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            值得信赖的合作伙伴
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            我们不仅提供技术咨询，更成为您 AI 转型路上的长期伙伴
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className={`group relative bg-muted/30 rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 text-primary shadow-sm">
                <point.icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
