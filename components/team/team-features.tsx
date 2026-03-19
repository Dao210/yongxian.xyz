'use client';

import { useRef, useEffect, useState } from 'react';

const features = [
  {
    icon: '☁️',
    title: 'Drive',
    subtitle: 'Agent 专属持久化云盘',
    description:
      '每次运行都会写入同一个云端持久化工作区。文件、上下文和智能体记忆不会因重启而清零，任务可持续延续。',
  },
  {
    icon: '🖥️',
    title: 'ALL-IN-ONE 可视化界面',
    subtitle: 'Agent、网盘、浏览器、终端、Git',
    description:
      'Agent、网盘、浏览器、终端、Git 都在同一工作区里，让 AI 能在这里完成编程、调试与预览，不用来回切换界面。',
  },
  {
    icon: '🛠️',
    title: 'Agent Skills',
    subtitle: '安装社区技能包',
    description:
      '安装社区技能包，或自己创建——让智能体在几秒内获得新能力。从代码执行到领域专业知识，技能是智能体成长的方式。',
  },
  {
    icon: '💬',
    title: '多平台集成',
    subtitle: 'Discord、Telegram、Slack、WhatsApp',
    description: '长驻 Discord、Telegram、Slack 等平台——实时回复、分析、协助你的团队。',
    platforms: ['Discord', 'Telegram', 'Slack', 'WhatsApp', 'WeChat', 'Lark', 'Teams', 'Line'],
  },
  {
    icon: '🦞',
    title: '多智能体',
    subtitle: '一个工作区',
    description: '同时运行多只 AI 智能体——编码、分析、运维——全部从同一个控制台统一调度。',
  },
  {
    icon: '🌐',
    title: '浏览器自动化',
    subtitle: 'Agent 控制浏览器',
    description: '你的 AI 员工可以像人类一样操作浏览器——填写表单、点击按钮、滚动页面。',
  },
  {
    icon: '⏰',
    title: '定时自动化',
    subtitle: 'scheduled tasks',
    description: '设置定时任务，让 AI 员工在特定时间自动执行工作。',
  },
  {
    icon: '💻',
    title: '原生终端访问',
    subtitle: 'terminal',
    description: '直接在终端中运行命令，让 AI 执行开发、运维任务。',
  },
];

export function TeamFeatures() {
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
    <section ref={sectionRef} className="py-16 md:py-24" id="features">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontFamily: "var(--font-noto-serif), 'Noto Serif SC', serif" }}
          >
            功能特性
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            是什么功能让 AI 员工学习、记忆、进化。
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl border border-border/50 bg-card hover:bg-muted/30 transition-all duration-500 hover:border-primary/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50 + 300}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs text-primary mb-2">{feature.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Platform badges */}
              {feature.platforms && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                  {feature.platforms.map((platform, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
