'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, Users, BarChart, DollarSign, Megaphone } from 'lucide-react';

const solutions = [
  {
    title: '营销助手',
    description: '智能营销活动策划与执行，自动化广告投放优化，数据分析驱动增长决策，提升营销ROI。',
    icon: Megaphone,
    benefits: ['自动化营销活动策划', '广告投放智能优化', '数据分析驱动增长'],
    image: '/营销助手20260203.webp',
    link: 'https://52tuan.com/marketing',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: '法务助手',
    description:
      '合同审核与合规审查智能自动化，NDA分级风险评估，法律咨询标准化回复，提升法务效率。',
    icon: FileText,
    benefits: ['合同审核自动化', 'NDA分级风险评估', '法律咨询标准化'],
    image: '/法务助手20260209.webp',
    link: 'https://52tuan.com/legal',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    title: '财务助手',
    description: '智能发票处理与费用管理，自动化财务报表生成，现金流预测与风险预警，提升财务效率。',
    icon: DollarSign,
    benefits: ['智能发票处理', '自动化财务报表', '现金流预测预警'],
    image: '/财务助手20260210.webp',
    link: 'https://52tuan.com/finance',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    title: '数据分析助手',
    description: '自动收集、处理和分析业务数据，生成可视化报告和洞察，支持数据驱动决策。',
    icon: BarChart,
    benefits: ['节省70%的报告准备时间', '提供实时业务洞察', '支持预测性分析'],
    image: '/images/solutions/data-analyst.jpg',
    link: '/solutions/data-analyst',
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: '日程管理助手',
    description: '智能管理会议、预约和提醒，协调多方日程，减少冲突和提高团队协作效率。',
    icon: Calendar,
    benefits: ['减少95%的日程冲突', '节省每周3小时的日程管理时间', '提高团队协作效率'],
    image: '/images/solutions/scheduling.jpg',
    link: '/solutions/scheduling',
    color: 'from-pink-400 to-rose-500',
  },
  {
    title: '人力资源助手',
    description: '自动化招聘流程、员工入职、培训跟踪和HR政策咨询，提高HR团队效率。',
    icon: Users,
    benefits: ['减少70%的HR行政工作', '加快50%的招聘流程', '提高员工满意度'],
    image: '/images/solutions/hr-assistant.jpg',
    link: '/solutions/hr-assistant',
    color: 'from-emerald-400 to-teal-500',
  },
];

export function SolutionCards() {
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
            <span className="text-2xl">⚡</span>
            <span className="text-primary text-sm font-medium">核心能力</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            核心解决方案
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            我们的 AI 工作台可以解决各种业务挑战，以下是我们最受欢迎的解决方案
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Decorative number */}
              <div
                className={`absolute -top-3 -right-3 text-6xl md:text-7xl font-bold bg-gradient-to-br ${solution.color} bg-clip-text text-transparent opacity-10 select-none`}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={solution.image || '/placeholder.svg?height=192&width=384'}
                  alt={solution.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={70}
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 text-primary shadow-sm">
                  <solution.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{solution.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {solution.description}
                </p>

                {/* Benefits */}
                <div className="mb-6 space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div
                        className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${solution.color}`}
                      />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  {solution.link.startsWith('http') ? (
                    <a
                      href={solution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="outline"
                        className="w-full bg-transparent hover:bg-primary/10 hover:border-primary/30 group/btn"
                      >
                        了解详情
                        <svg
                          className="ml-2 w-4 h-4 inline-block group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Button>
                    </a>
                  ) : (
                    <Link href={solution.link}>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent hover:bg-primary/10 hover:border-primary/30 group/btn"
                      >
                        了解详情
                        <svg
                          className="ml-2 w-4 h-4 inline-block group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
