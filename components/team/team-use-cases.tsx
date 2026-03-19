'use client';

import { useRef, useEffect, useState } from 'react';

const useCases = [
  {
    icon: '🏛️',
    title: '整个公司',
    description: '调配不同 AI 智能体分别负责 HR、运营和销售。人类负责领导和管理 AI 员工队伍。',
  },
  {
    icon: '💼',
    title: '销售团队',
    description: '用 AI 销售智能体自动化线索开发、跟进和 CRM 管理。',
  },
  {
    icon: '💻',
    title: '独立开发者',
    description: '启动编程智能体、运行终端命令、在本地审查 PR。',
  },
  {
    icon: '🎨',
    title: '媒体与创作工作室',
    description: '自动化内容创作、社交媒体排期与 SEO 优化。',
  },
  {
    icon: '🧑‍💼',
    title: '行政团队',
    description: '用 AI 智能体替代所有部门。人类负责领导和管理 AI 员工队伍。',
  },
];

export function TeamUseCases() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30" id="use-cases">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: "var(--font-noto-serif), 'Noto Serif SC', serif" }}
          >
            使用场景
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            AI 员工全天候工作，永不离职，免费开始。他们从你的云盘学习，随每个任务进化。
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl border border-border/50 bg-card hover:bg-muted/50 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
