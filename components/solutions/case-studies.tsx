'use client';

import { useRef, useEffect, useState } from 'react';

const caseStudies = [
  {
    title: '某电商平台客服效率提升 300%',
    description:
      '通过部署客户服务 AI 工作台，该电商平台将客户响应时间从 30 分钟减少到 2 分钟，客户满意度提升 35%，同时节省了 60% 的客服成本。',
    industry: '电子商务',
    results: [
      { text: '响应时间减少 93%', value: '93%' },
      { text: '满意度提升 35%', value: '35%' },
      { text: '成本降低 60%', value: '60%' },
    ],
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    title: '制造企业减少停机时间 40%',
    description:
      '通过部署设备监控 AI 工作台，该制造企业实现了预测性维护，减少了 40% 的意外停机时间，延长了设备寿命，并提高了 20% 的生产效率。',
    industry: '制造业',
    results: [
      { text: '停机时间减少 40%', value: '40%' },
      { text: '维护成本降低 30%', value: '30%' },
      { text: '生产效率提高 20%', value: '20%' },
    ],
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    title: '物流公司优化配送路线节省 15% 燃油',
    description:
      '通过部署路线优化 AI 工作台，该物流公司实现了智能路线规划，减少了 15% 的燃油消耗，提高了 20% 的配送效率，并改善了客户满意度。',
    industry: '物流运输',
    results: [
      { text: '燃油消耗减少 15%', value: '15%' },
      { text: '配送效率提高 20%', value: '20%' },
      { text: '满意度提升 25%', value: '25%' },
    ],
    gradient: 'from-purple-400 to-pink-500',
  },
];

export function CaseStudies() {
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
      {/* Subtle background */}
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
            <span className="text-2xl">📈</span>
            <span className="text-primary text-sm font-medium">成功案例</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            客户成功案例
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            了解我们的 AI 工作台如何帮助各行业客户解决实际业务挑战
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className={`group relative bg-muted/30 rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              {/* Industry badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-primary/20 text-primary text-xs font-medium shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  {caseStudy.industry}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                {caseStudy.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                {caseStudy.description}
              </p>

              {/* Results */}
              <div className="grid grid-cols-3 gap-2">
                {caseStudy.results.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <div
                      className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${caseStudy.gradient}`}
                    >
                      {result.value}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{result.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
