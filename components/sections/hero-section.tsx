"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// 统计数据
const stats = [
  { value: "50+", label: "服务企业" },
  { value: "30+", label: "成功案例" },
  { value: "98%", label: "客户满意度" },
  { value: "24/7", label: "专家支持" },
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        <div className="particles">
          <div className="particle" style={{ left: "10%", top: "20%", "--delay": "0s" } as any} />
          <div className="particle" style={{ left: "80%", top: "30%", "--delay": "1s" } as any} />
          <div className="particle" style={{ left: "30%", top: "60%", "--delay": "2s" } as any} />
          <div className="particle" style={{ left: "70%", top: "40%", "--delay": "3s" } as any} />
          <div className="particle" style={{ left: "20%", top: "80%", "--delay": "4s" } as any} />
          <div className="particle" style={{ left: "90%", top: "70%", "--delay": "5s" } as any} />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            {/* Left: Text Content */}
            <div
              className={`flex flex-col gap-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-primary text-sm font-medium">AI 工作台专家</span>
              </div>

              {/* Main headline */}
              <h1
                className={`font-['ZCOOL_XiaoWei'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                为您的企业定制
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-purple-500">
                  专属 AI 工作台
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                让<span className="text-primary font-semibold">AI</span> 为您的业务创造真实价值。专业顾问全程支持，确保从需求到落地的每一步都精准高效。
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <Link href="/book-consultation">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all"
                  >
                    预约业务咨询
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 transition-all"
                  >
                    探索解决方案
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Image + Stats */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {/* Hero Image */}
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-digital-employee.jpg"
                  alt="AI工作台"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  priority
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-cyan-500/20 to-transparent" />
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-8 -right-8 left-8 right-0 lg:left-1/2 lg:bottom-12 grid grid-cols-2 gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg transition-all duration-500 hover:scale-105 hover:border-primary/30 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${1200 + index * 150}ms` }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
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

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.12; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: hsl(var(--primary));
          border-radius: 50%;
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-30px) translateX(15px); }
          50% { transform: translateY(-15px) translateX(-10px); }
          75% { transform: translateY(-40px) translateX(5px); }
        }
      `}</style>
    </section>
  )
}
