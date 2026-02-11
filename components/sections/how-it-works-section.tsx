'use client';

import { useRef, useEffect, useState } from 'react';
import { MessageSquare, Settings, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: '咨询',
    description: '我们首先了解您的业务需求，确定AI工作台可以为您创造价值的领域。',
    icon: MessageSquare,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    number: '02',
    title: '定制',
    description: '我们的团队根据您的特定需求和工作流程设计和开发定制AI工作台。',
    icon: Settings,
    color: 'from-blue-400 to-indigo-500',
  },
  {
    number: '03',
    title: '集成',
    description: '我们将AI工作台无缝集成到您现有的系统中，并培训您的团队如何与他们合作。',
    icon: Rocket,
    color: 'from-indigo-400 to-purple-500',
  },
  {
    number: '04',
    title: '持续升级',
    description: '我们的顾问提供持续支持，确保您的AI工作台随着业务需求的变化而发展。',
    icon: HeadphonesIcon,
    color: 'from-purple-400 to-pink-500',
  },
];

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            <span className="text-2xl">⚙️</span>
            <span className="text-primary text-sm font-medium">工作流程</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            简单四步，开启智能进化
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            我们简单的流程，帮助您的企业配备定制AI工作台
          </p>
        </div>

        {/* Progress Bar */}
        <div
          className={`mb-12 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        >
          <div className="relative h-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-full overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000"
              style={{
                width: isVisible ? '100%' : '0%',
                transitionDelay: '1200ms',
              }}
            />
            {/* Progress dots */}
            {steps.map((_, index) => (
              <div
                key={index}
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary transition-all duration-300"
                style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* Steps Cards - Horizontal Layout */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`group relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${800 + index * 150}ms`,
                  transform:
                    hoveredIndex !== null && hoveredIndex !== index
                      ? 'scale(0.95) opacity(0.6)'
                      : '',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glowing number badge */}
                <div className="absolute -top-3 -left-3">
                  <div
                    className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                    <span className="relative text-white font-bold text-sm">{step.number}</span>
                    {/* Pulse effect */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} animate-ping opacity-20`}
                    />
                  </div>
                </div>

                {/* Icon Container */}
                <div className="mb-5 mt-6">
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-[1px]`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-background/90" />
                    <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-primary/5 to-cyan-500/5 flex items-center justify-center">
                      <Icon
                        className={`w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                        style={{ color: `hsl(var(--primary))` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-['ZCOOL_XiaoWei'] text-xl md:text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-primary/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Arrow connector (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <svg
                        className="w-4 h-4 text-white"
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
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all"
          >
            开始您的智能进化
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
        @keyframes ping {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
