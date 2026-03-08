'use client';

import { useRef, useEffect, useState } from 'react';
import { CheckCircle2, GitBranch, Languages, Shield, Coins, Puzzle, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// 对比数据定义
const comparisonData = [
  {
    icon: GitBranch,
    title: '产品基础',
    yongxian: '基于 OpenClaw 深度开发',
    openclaw: '需自行配置和部署',
  },
  {
    icon: Languages,
    title: '语言和界面',
    yongxian: '完全中文化，符合中国用户习惯',
    openclaw: '英文界面，需自行汉化',
    highlight: true,
  },
  {
    icon: Shield,
    title: '安全性',
    yongxian: '企业级安全加固，数据加密存储',
    openclaw: '需自行配置安全策略',
    highlight: true,
  },
  {
    icon: Coins,
    title: 'Token 使用效率',
    yongxian: '优化提示词，节省 30-50% Token',
    openclaw: '未优化的标准 Token 消耗',
    highlight: true,
  },
  {
    icon: Puzzle,
    title: 'Skills 调用方式',
    yongxian: '可视化拖拽配置，无需编码',
    openclaw: '需编写 JSON 配置文件',
    highlight: true,
  },
  {
    icon: Eye,
    title: '工作过程可见性',
    yongxian: '实时可视化智能体工作过程',
    openclaw: '命令行输出，难以追踪',
    highlight: true,
  },
];

export function ComparisonSection() {
  // IntersectionObserver 动画
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
      {/* 背景装饰 - 点状图案 */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* 动画渐变光晕 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-2xl">⚖️</span>
            <span className="text-primary text-sm font-medium">产品对比</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            为何选择涌现 AI 工作台
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            基于 OpenClaw 深度开发，专为中国企业打造
          </p>
        </div>

        {/* 对比卡片 - 双栏布局 */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* 涌现 AI 工作台卡片 */}
          <div
            className={`relative bg-gradient-to-br from-primary/5 to-cyan-500/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/30 shadow-lg shadow-primary/10 transition-all duration-700 hover:scale-[1.02] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {/* 推荐标签 */}
            <div className="absolute -top-3 right-6">
              <Badge className="bg-gradient-to-r from-primary to-cyan-500 text-white border-0 shadow-md">
                推荐选择
              </Badge>
            </div>

            {/* 标题 */}
            <div className="mb-6 pb-6 border-b border-primary/20">
              <h3 className="font-['ZCOOL_XiaoWei'] text-2xl md:text-3xl font-bold text-foreground mb-2">
                涌现 AI 工作台
              </h3>
              <p className="text-sm text-muted-foreground">专为 中国企业 定制的 AI 解决方案</p>
            </div>

            {/* 优势列表 */}
            <div className="space-y-5">
              {comparisonData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex gap-4 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">{item.title}</div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item.yongxian}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* OpenClaw 卡片 */}
          <div
            className={`relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border transition-all duration-700 hover:border-border ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {/* 标题 */}
            <div className="mb-6 pb-6 border-b border-border">
              <h3 className="font-['ZCOOL_XiaoWei'] text-2xl md:text-3xl font-bold text-muted-foreground mb-2">
                OpenClaw
              </h3>
              <p className="text-sm text-muted-foreground">开源 AI 框架基础版本</p>
            </div>

            {/* 对比列表 */}
            <div className="space-y-5">
              {comparisonData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex gap-4 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${1000 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-muted-foreground mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.openclaw}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 底部 CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1400ms' }}
        >
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all"
          >
            立即体验涌现 AI 工作台
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
