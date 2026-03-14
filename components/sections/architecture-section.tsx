'use client';

import { useRef, useEffect, useState } from 'react';
import {
  Layers,
  Zap,
  Database,
  MessageSquare,
  Settings,
  FileText,
  BarChart3,
  Users,
  LucideIcon,
} from 'lucide-react';

interface Skill {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface Agent {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

const architectureData: Agent[] = [
  {
    name: '营销Agent',
    description: '负责市场推广与客户互动',
    icon: MessageSquare,
    color: 'from-cyan-400 to-blue-500',
    skills: [
      { name: '内容创作', description: '自动生成营销文案', icon: Zap },
      { name: '社媒发布', description: '多平台一键发布', icon: Settings },
      { name: '数据分析', description: 'ROI追踪分析', icon: BarChart3 },
    ],
  },
  {
    name: '销售Agent',
    description: '管理销售流程与客户关系',
    icon: Users,
    color: 'from-blue-400 to-indigo-500',
    skills: [
      { name: '线索管理', description: '自动跟进潜在客户', icon: Database },
      { name: '报价生成', description: '智能报价单生成', icon: FileText },
      { name: '订单跟进', description: '全流程订单跟踪', icon: Settings },
    ],
  },
  {
    name: '运营Agent',
    description: '优化业务流程与资源配置',
    icon: Layers,
    color: 'from-indigo-400 to-purple-500',
    skills: [
      { name: '流程优化', description: '自动化工作流', icon: Settings },
      { name: '资源调度', description: '智能资源配置', icon: Database },
      { name: '效率分析', description: '运营数据洞察', icon: BarChart3 },
    ],
  },
];

export function ArchitectureSection() {
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
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
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
        {/* 渐变光晕 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] animate-pulse-slow" />
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
            <span className="text-2xl">🏗️</span>
            <span className="text-primary text-sm font-medium">架构设计</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            AI工作台 = Team
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            三层嵌套结构：Team → Agents → Skills，打造强大的企业级AI团队
          </p>
        </div>

        {/* 主架构图容器 */}
        <div className="relative bg-gradient-to-br from-primary/5 to-cyan-500/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-lg shadow-primary/10">
          {/* Team 层标签 */}
          <div className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-primary to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg">
            <Layers className="w-4 h-4 inline mr-1" />
            Team
          </div>

          {/* Agents 网格 */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {architectureData.map((agent, agentIndex) => {
              const AgentIcon = agent.icon;
              return (
                <div
                  key={agentIndex}
                  className={`relative bg-background/90 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${600 + agentIndex * 150}ms` }}
                >
                  {/* Agent 标签 */}
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground text-xs font-semibold rounded-full border border-border">
                    Agent
                  </div>

                  {/* Agent 标题 */}
                  <div className="flex items-start gap-4 mb-4 mt-2">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center shadow-md`}
                    >
                      <AgentIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-['ZCOOL_XiaoWei'] text-xl font-bold text-foreground">
                        {agent.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{agent.description}</p>
                    </div>
                  </div>

                  {/* Skills 列表 */}
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                      <div className="w-1 h-3 bg-gradient-to-b from-primary to-cyan-500 rounded-full" />
                      Skills
                    </div>
                    {agent.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skillIndex}
                          className="bg-muted/50 rounded-xl p-4 border border-border/50 hover:border-primary/20 hover:bg-muted transition-all group cursor-default"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <SkillIcon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground text-sm">
                                {skill.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {skill.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 底部说明 */}
          <div
            className={`mt-8 pt-6 border-t border-border/50 text-center transition-all duration-1000 delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <strong>1个 Team</strong>
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-2">
                <Database className="w-4 h-4 text-primary" />
                <strong>3+ Agents</strong>
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <strong>9+ Skills</strong>
              </span>
            </div>
          </div>
        </div>

        {/* 底部 CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all"
          >
            定制您的AI工作台
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
