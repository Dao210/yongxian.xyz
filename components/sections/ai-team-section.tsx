'use client';

import { useRef, useEffect, useState } from 'react';

const aiTeamMembers = [
  {
    id: 'sales',
    name: '销售AI员工',
    icon: '💼',
    description: '自动跟进客户线索，管理CRM，生成报价单',
    capabilities: ['线索挖掘', '客户跟进', 'CRM管理', '报价生成'],
  },
  {
    id: 'operation',
    name: '运营AI员工',
    icon: '📊',
    description: '自动化运营流程，数据分析，报表生成',
    capabilities: ['流程自动化', '数据分析', '报表生成', '内容排期'],
  },
  {
    id: 'development',
    name: '技术AI员工',
    icon: '💻',
    description: '编程开发，代码审查，自动化测试部署',
    capabilities: ['代码编写', 'Code Review', '测试编写', '部署发布'],
  },
  {
    id: 'hr',
    name: 'HR AI员工',
    icon: '👥',
    description: '简历筛选，面试安排，员工培训管理',
    capabilities: ['简历筛选', '面试安排', '培训管理', '员工问答'],
  },
];

export function AITeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30" id="ai-team">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: "var(--font-noto-serif), 'Noto Serif SC', serif" }}
          >
            你的AI团队
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            每个AI员工各司其职，协同工作，就像一支永不疲倦的专业团队
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {aiTeamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group p-6 rounded-2xl border border-border/50 bg-card hover:bg-muted/50 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {member.icon}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-foreground text-center mb-2">
                {member.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed">
                {member.description}
              </p>

              {/* Capabilities */}
              <div className="flex flex-wrap justify-center gap-2">
                {member.capabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-muted-foreground">按需组建，随时扩展——你的智能组织</p>
        </div>
      </div>
    </section>
  );
}
