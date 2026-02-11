"use client"

import { useRef, useEffect, useState } from "react"

const steps = [
  {
    number: "01",
    title: "咨询",
    description: "我们首先了解您的业务需求，确定AI工作台可以为您创造价值的领域。",
    image: "/images/consultation.svg",
  },
  {
    number: "02",
    title: "定制",
    description: "我们的团队根据您的特定需求和工作流程设计和开发定制AI工作台。",
    image: "/images/customization.svg",
  },
  {
    number: "03",
    title: "集成",
    description: "我们将AI工作台无缝集成到您现有的系统中，并培训您的团队如何与他们合作。",
    image: "/images/integration.svg",
  },
  {
    number: "04",
    title: "持续升级",
    description: "我们的顾问提供持续支持，确保您的AI工作台随着业务需求的变化而发展。",
    image: "/images/support.svg",
  },
]

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0">
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
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="text-2xl">⚙️</span>
            <span className="text-primary text-sm font-medium">工作流程</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            简单四步，开启智能进化
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            我们简单的流程，帮助您的企业配备定制AI工作台
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid gap-8 items-center ${
                index % 2 === 0 ? "lg:grid-cols-[1fr,1.5fr]" : "lg:grid-cols-[1.5fr,1fr]"
              }`}
            >
              {/* Number */}
              <div
                className={`flex items-center justify-center text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className={`relative h-24 w-24 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
              >
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.image} />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                {index % 2 === 0 ? (
                  <div
                    className={`space-y-4 transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${600 + index * 200 + 200}ms` }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ) : (
                  <div
                    className={`space-y-4 transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${600 + index * 200 + 200}ms` }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
