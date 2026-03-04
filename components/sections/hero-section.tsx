'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
      className="relative min-h-[85vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-card pt-16 pb-8 sm:pb-0"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* 深色模式优化后的光晕 */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-primary-glow rounded-full blur-[150px] sm:blur-[200px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-primary-glow rounded-full blur-[150px] sm:blur-[200px] animate-pulse-slow delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-glow-soft rounded-full blur-[120px] sm:blur-[180px] animate-pulse-slow delay-1000" />

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

        {/* Enhanced floating particles with animation */}
        <div className="particles">
          <div
            className="particle animate-float"
            style={{ left: '10%', top: '20%', animationDelay: '0s' }}
          />
          <div
            className="particle animate-float"
            style={{ left: '85%', top: '25%', animationDelay: '1s' }}
          />
          <div
            className="particle animate-float"
            style={{ left: '25%', top: '65%', animationDelay: '2s' }}
          />
          <div
            className="particle animate-float hidden sm:block"
            style={{ left: '75%', top: '45%', animationDelay: '1.5s' }}
          />
          <div
            className="particle animate-float hidden sm:block"
            style={{ left: '15%', top: '80%', animationDelay: '0.5s' }}
          />
          <div
            className="particle animate-float hidden sm:block"
            style={{ left: '90%', top: '70%', animationDelay: '2.5s' }}
          />
          <div
            className="particle animate-float hidden md:block"
            style={{ left: '50%', top: '15%', animationDelay: '3s' }}
          />
          <div
            className="particle animate-float hidden md:block"
            style={{ left: '60%', top: '85%', animationDelay: '1.8s' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Text Content */}
            <div className="w-full">
              <div
                className={`flex flex-col gap-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                {/* Main headline */}
                <h1
                  className={`font-['ZCOOL_XiaoWei'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-center mb-0 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  为渴求成长的企业定制
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-purple-500">
                    专属 AI 工作台
                  </span>
                </h1>

                {/* Yongxian Image */}
                <div className="flex justify-center mt-0 mb-8">
                  <div
                    className={`relative transition-all duration-1000 ${
                      isVisible
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ transitionDelay: '700ms' }}
                  >
                    <Image
                      src="/yongxian.webp"
                      alt="涌现 AI - 专属 AI 工作台"
                      width={1000}
                      height={1000}
                      className="rounded-2xl shadow-2xl shadow-primary/20 animate-float-gentle max-w-full h-auto"
                      priority
                    />
                  </div>
                </div>

                {/* OpenClaw Badge */}
                <div
                  className={`flex justify-center my-4 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '900ms' }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border backdrop-blur-sm shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-sm font-medium text-foreground">
                      基于 OpenClaw 深度开发定制
                    </span>
                  </div>
                </div>

                {/* Subtitle */}
                <p
                  className={`text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-center mx-auto mb-12 max-w-2xl transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  <span className="text-primary font-semibold">AI</span>
                  赋能各业务板块，提升运营效率、优化管理流程，推动企业转型为以
                  <span className="text-primary font-semibold">AI</span>
                  驱动为主的新一代智能企业。
                </p>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-col gap-4 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  {/* Community Version Install Card */}
                  <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-5 border border-border shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">💻</span>
                      <div>
                        <h3 className="font-semibold text-foreground">一人公司免费开源版</h3>
                        <p className="text-sm text-muted-foreground">
                          一键免费安装一人公司涌现AI助手,在终端(Shell)执行下面的命令：
                        </p>
                      </div>
                    </div>
                    <div className="relative group">
                      <pre className="bg-slate-950 dark:bg-slate-900/50 text-slate-100 dark:text-slate-200 rounded-lg p-3 text-sm overflow-x-auto font-mono border border-border">
                        <code>
                          curl -fsSL
                          https://raw.githubusercontent.com/Dao210/yongxian.xyz/main/yongxianInstaller/install.sh
                          | bash
                        </code>
                      </pre>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            'curl -fsSL https://raw.githubusercontent.com/Dao210/yongxian.xyz/main/yongxianInstaller/install.sh | bash'
                          )
                        }
                        className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md transition-colors opacity-0 group-hover:opacity-100"
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
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/book-consultation" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        预约业务咨询
                      </Button>
                    </Link>
                    <Link href="/solutions" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full bg-card hover:bg-primary/5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        探索解决方案
                      </Button>
                    </Link>
                  </div>
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1500 {
          animation-delay: 1.5s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}
