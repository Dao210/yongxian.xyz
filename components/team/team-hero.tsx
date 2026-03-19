'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export function TeamHero() {
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
      className="relative overflow-hidden pb-16 pt-20 md:pb-24 md:pt-28 bg-background"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground backdrop-blur-sm transition-all duration-1000 mb-8 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="mr-2 flex h-1.5 w-1.5 rounded-full bg-primary/60" />
            🎁 内测邀请阶段 — 完全免费 · AI 工作台解决方案
          </div>

          {/* Main heading */}
          <h1
            className={`mb-8 text-4xl font-normal tracking-tight text-foreground md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: "var(--font-noto-serif), 'Noto Serif SC', Georgia, serif" }}
          >
            开一家 AI 公司
          </h1>

          {/* Subtitle */}
          <div
            className={`mb-10 max-w-3xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-2">
              <span className="text-foreground font-light">AI Agents</span>
              <span className="text-primary ml-1">🦞</span>
            </div>
            <span className="text-muted-foreground font-light">
              涌现 AI 工作台，运营你的整个公司——真正把事情做完。
            </span>
          </div>

          {/* CTA Button */}
          <div
            className={`mb-16 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link href="/book-consultation">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.08em] text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                免费试用
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
