'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// 统计数据
const stats = [
  { value: '50+', label: '服务企业' },
  { value: '30+', label: '成功案例' },
  { value: '98%', label: '客户满意度' },
  { value: '24/7', label: '专家支持' },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-muted/30"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[200px] animate-pulse-slow delay-1000" />

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

        {/* Floating particles - reduce for mobile */}
        <div className="particles">
          <div className="particle hidden sm:block" style={{ left: '10%', top: '20%' }} />
          <div className="particle hidden sm:block" style={{ left: '80%', top: '30%' }} />
          <div className="particle hidden sm:block" style={{ left: '30%', top: '60%' }} />
          {/* Additional particles for desktop only */}
          <div className="particle hidden sm:block" style={{ left: '70%', top: '40%' }} />
          <div className="particle hidden sm:block" style={{ left: '20%', top: '80%' }} />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 flex-1">
              <div
                className={`flex flex-col gap-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                {/* Main headline */}
                <h1
                  className={`font-['ZCOOL_XiaoWei'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  为您的企业定制
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-purple-500">
                    专属 AI 工作台
                  </span>
                </h1>

                {/* Subtitle */}
                <p
                  className={`text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  让<span className="text-primary font-semibold">AI</span>{' '}
                  为您的业务创造真实价值。专业顾问全程支持，确保从需求到落地的每一步都精准高效。
                </p>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-col gap-4 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  {/* Community Version Install Card */}
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-5 border border-border shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">💻</span>
                      <div>
                        <h3 className="font-semibold text-foreground">开源社区版</h3>
                        <p className="text-sm text-muted-foreground">
                          一键安装 YongXian AI 助手,在终端(Shell)执行下面的命令：
                        </p>
                      </div>
                    </div>
                    <div className="relative group">
                      <pre className="bg-slate-900 text-slate-100 rounded-lg p-3 text-sm overflow-x-auto font-mono">
                        <code>
                          curl -fsSL
                          https://raw.githubusercontent.com/Dao210/yongxian.xyz/tree/main/yongxianInstaller/install.sh
                          | bash
                        </code>
                      </pre>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            'curl -fsSL https://raw.githubusercontent.com/Dao210/yongxian.xyz/tree/main/yongxianInstaller/install.sh | bash'
                          )
                        }
                        className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors opacity-0 group-hover:opacity-100"
                        title="复制命令"
                      >
                        <svg
                          className="w-4 h-4 text-slate-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/book-consultation" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all"
                      >
                        预约业务咨询
                      </Button>
                    </Link>
                    <Link href="/solutions" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full bg-transparent hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 transition-all"
                      >
                        探索解决方案
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image + Stats */}
            <div className="order-1 lg:order-2 flex-1">
              <div
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                {/* Hero Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 lg:mb-0 aspect-[4/3]">
                  <Image
                    src="/images/hero-digital-employee.webp"
                    alt="AI工作台"
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw"
                    quality={85}
                    priority
                    className="object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-cyan-500/20 to-transparent" />
                </div>

                {/* Stats Cards - Mobile: Stack below, Desktop: Absolute positioning */}
                <div className="grid grid-cols-2 gap-4 lg:absolute lg:grid-cols-2 lg:gap-6 lg:-right-8 lg:bottom-12">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`bg-background/90 backdrop-blur-sm rounded-xl p-5 border border-border shadow-lg transition-all duration-500 hover:scale-105 hover:border-primary/30 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${1200 + index * 150}ms` }}
                    >
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        {stat.value}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
