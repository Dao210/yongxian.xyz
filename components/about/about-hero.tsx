"use client"

import { useRef, useEffect, useState } from "react"

export function AboutHero() {
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
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-muted/30"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />

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
          <div className="particle" style={{ left: "30%", top: "70%", "--delay": "2s" } as any} />
          <div className="particle" style={{ left: "70%", top: "80%", "--delay": "3s" } as any} />
          <div className="particle" style={{ left: "50%", top: "50%", "--delay": "4s" } as any} />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary text-sm font-medium">AI 工作台先行者</span>
          </div>

          {/* Main headline */}
          <h1
            className={`font-['ZCOOL_XiaoWei'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            从互联网老兵
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-purple-500">
              到 AI 工作台先行者
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            我们见证了互联网的黄金时代，亲历了 AI 的范式转移。
            <br className="hidden md:block" />
            现在，我们用 <span className="text-primary font-semibold">AI 工作台</span> 重新定义工作的方式。
          </p>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                10+
              </div>
              <div className="text-muted-foreground text-sm mt-1">年技术积累</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                2022
              </div>
              <div className="text-muted-foreground text-sm mt-1">All in AI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                ∞
              </div>
              <div className="text-muted-foreground text-sm mt-1">可能性探索</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs">向下滚动</span>
              <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
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
          opacity: 0.2;
          animation: float 6s ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
      `}</style>
    </section>
  )
}
