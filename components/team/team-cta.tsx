'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export function TeamCTA() {
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[200px]" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30">
              <span className="text-5xl">🦞</span>
            </div>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-noto-serif), 'Noto Serif SC', serif" }}
          >
            你的 AI 公司，随时待命。零配置。
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            智能体、技能和自动化预装完毕。免费额度即刻开始。
          </p>

          {/* CTA Button */}
          <Link href="/book-consultation">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-medium uppercase tracking-[0.08em] text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              免费试用 涌现 AI
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
                className="ml-2 h-5 w-5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
