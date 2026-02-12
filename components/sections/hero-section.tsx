'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// 统计数据（带 SVG 图标）
const stats = [
  {
    value: '50+',
    label: '服务企业',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M20 28 L44 28 L44 48 L20 48 Z"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 28 L24 22 L40 22 L40 28"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M32 16 L32 20" stroke="url(#gradient1)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 48 L32 54" stroke="url(#gradient1)" strokeWidth="2.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    value: '30+',
    label: '成功案例',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M32 18 L35 26 L44 26 L37 31 L40 40 L32 35 L24 40 L27 31 L20 26 L29 26 Z"
          stroke="url(#gradient2)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    value: '98%',
    label: '客户满意度',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#gradient3)"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
        <circle cx="32" cy="32" r="14" stroke="url(#gradient3)" strokeWidth="2.5" fill="none" />
        <circle cx="32" cy="28" r="2" fill="url(#gradient3)" />
        <path
          d="M26 36 Q32 42 38 36"
          stroke="url(#gradient3)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M24 26 L22 24 M40 26 L42 24"
          stroke="url(#gradient3)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    value: '24/7',
    label: '专家支持',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#gradient4)"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
        <circle cx="32" cy="32" r="16" stroke="url(#gradient4)" strokeWidth="2.5" fill="none" />
        <path d="M32 20 L32 26" stroke="url(#gradient4)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 38 L32 44" stroke="url(#gradient4)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 32 L26 32" stroke="url(#gradient4)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M38 32 L44 32" stroke="url(#gradient4)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="2" fill="url(#gradient4)" />
        <defs>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
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
          <div className="grid gap-12 lg:gap-24 items-center">
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
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '1000ms' }}
                >
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

            {/* Right: Image + Stats */}
            <div className="order-1 lg:order-2 flex-1">
              <div
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                {/* Hero Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 lg:mb-0">
                  <Image
                    src="/images/hero-digital-employee.jpg"
                    alt="AI工作台"
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw"
                    quality={85}
                    priority
                    className="object-cover w-full"
                    style={{ height: 'auto', minHeight: '300px' }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-cyan-500/20 to-transparent" />
                </div>

                {/* Stats Cards - Mobile: Stack below, Desktop: Absolute positioning */}
                <div className="grid grid-cols-2 gap-4 lg:absolute lg:grid-cols-2 lg:gap-6 lg:-right-8 lg:bottom-12">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border shadow-lg transition-all duration-500 hover:scale-105 hover:border-primary/30 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${1200 + index * 150}ms` }}
                    >
                      {/* Icon */}
                      <div className="w-10 h-10 mb-2 text-primary">{stat.icon}</div>
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
