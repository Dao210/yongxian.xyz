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
    title: "工作台是未来",
    description: "聊天机器人只是过渡，AI 工作台才是终局。当 AI 成为你工作环境的一部分，真正的范式转移才会发生。",
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
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className={`inline-block text-6xl md:text-7xl mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            ✦
          </span>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-4xl sm:text-5xl md:text-6xl text-white mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            我们的信仰
          </h2>
          <p
            className={`text-xl text-slate-400 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
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
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-colors">
                {/* Number */}
                <div
                  className="absolute -top-4 -left-4 text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary/20 to-purple-500/20 select-none"
                >
                  {belief.number}
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-4xl">
                      {belief.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {belief.title}
                    </h3>
                    <p className="text-lg text-slate-400 leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < beliefs.length - 1 && (
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent my-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <blockquote className="font-['ZCOOL_XiaoWei'] text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            "我们不预测未来，我们亲手构建它。"
          </blockquote>
          <p className="text-slate-500 mt-4">— 涌现宣言</p>
        </div>
      </div>
    </section>
  )
}
