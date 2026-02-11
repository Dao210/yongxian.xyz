"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"

export function AboutCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-muted/30"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[200px]" />
        </div>
      </div>

      <div className="container relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
              <span className="text-4xl">🚀</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            准备好开启你的
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-purple-500">
              {" "}AI 工作台之旅
            </span>
            了吗？
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            无论你是想为团队定制 AI 工作台，还是想探索 AI 工具链的无限可能，
            我们都期待与你对话。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="mailto:hello@yongxian.xyz"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 rounded-full text-white font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                开始对话
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/"
              className="px-8 py-4 rounded-full text-foreground font-semibold text-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
            >
              返回首页
            </Link>
          </div>

          {/* Contact info */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
              <a
                href="mailto:hello@yongxian.xyz"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@yongxian.xyz
              </a>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                中国
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
