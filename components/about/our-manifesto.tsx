"use client"

import { useRef, useEffect, useState } from "react"

const beliefs = [
  {
    number: "01",
    title: "AI 是伙伴，不是工具",
    description: "我们不把 AI 当作冰冷的工具，而是视为协作伙伴。它思考，我们决策；它执行，我们创造。这是人机共舞的新时代。",
    icon: "🤝",
  },
  {
    number: "02",
    title: "思考在云端，执行在本地",
    description: "AI 工作台是全链路的系统化解决方案。云端的大模型负责理解和规划，本地的工具链负责执行和落地，两者无缝协作。",
    icon: "🖥️",
  },
  {
    number: "03",
    title: "实践胜于空谈",
    description: "我们在真实业务中验证每一个假设。那些无法落地的概念，无论多么动听，都不是我们的追求。",
    icon: "🔥",
  },
]

export function OurManifesto() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-background"
    >
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-5xl md:text-6xl mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            ✦
          </span>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            我们的信仰
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            在 AI 的浪潮中，我们选择相信什么
          </p>
        </div>

        {/* Beliefs */}
        <div className="max-w-5xl mx-auto space-y-6">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative bg-muted/30 rounded-2xl p-8 md:p-10 hover:bg-muted/50 transition-colors border border-transparent hover:border-primary/10">
                {/* Number */}
                <div
                  className="absolute -top-3 -left-3 text-5xl md:text-6xl font-bold text-primary/5 select-none"
                >
                  {belief.number}
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                      {belief.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {belief.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < beliefs.length - 1 && (
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-primary/20 to-transparent my-3" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <blockquote className="font-['ZCOOL_XiaoWei'] text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
            "我们不预测未来，我们亲手构建它。"
          </blockquote>
          <p className="text-muted-foreground mt-4">— 涌现宣言</p>
        </div>
      </div>
    </section>
  )
}
