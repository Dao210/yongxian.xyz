"use client"

import { useRef, useEffect, useState } from "react"

const skills = [
  { name: "AI 工作台架构", level: 95, color: "from-cyan-400 to-blue-500" },
  { name: "企业级系统集成", level: 90, color: "from-blue-400 to-indigo-500" },
  { name: "工作流自动化", level: 92, color: "from-indigo-400 to-purple-500" },
  { name: "提示词工程", level: 88, color: "from-purple-400 to-pink-500" },
  { name: "全栈开发", level: 85, color: "from-pink-400 to-rose-500" },
]

const beliefs = [
  {
    icon: "🎯",
    title: "专注大于广度",
    desc: "AI 工作台是未来，把一件事做到极致",
  },
  {
    icon: "🔥",
    title: "实战胜于理论",
    desc: "真实业务场景中的坑，才是最宝贵的经验",
  },
  {
    icon: "⚡",
    title: "速度就是优势",
    desc: "AI 时代，快速迭代比完美规划更重要",
  },
]

export function OurTeam() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
      className="relative py-24 bg-muted/30"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-2xl">👤</span>
            <span className="text-primary font-medium">超级个体</span>
          </div>
          <h2 className="font-['ZCOOL_XiaoWei'] text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            创始人
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            一个人，加上 AI 工具链
            <br />
            <span className="text-foreground font-semibold">就是一个团队的力量</span>
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Avatar & Info */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              {/* Avatar card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative bg-background rounded-2xl p-8 shadow-lg border">
                  <div className="flex items-start gap-6">
                    {/* Avatar placeholder with artistic design */}
                    <div className="relative w-28 h-28 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full animate-spin-slow opacity-20" />
                      <div className="absolute inset-2 bg-gradient-to-br from-muted to-muted-foreground/10 rounded-full flex items-center justify-center">
                        <span className="text-5xl">🧑‍💻</span>
                      </div>
                      {/* Orbiting dots */}
                      <div className="absolute inset-0 animate-spin-slow">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">纯钧</h3>
                      <p className="text-primary font-medium mb-3">创始人 & AI 工作台架构师</p>
                      <p className="text-muted-foreground leading-relaxed">
                        10年 AI 系统开发经验，从互联网大厂到独立探索。
                        2022年 ChatGPT 发布后，All in AI，
                        深信 AI 工作台是未来的工作方式。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Beliefs */}
              <div className="grid sm:grid-cols-3 gap-4">
                {beliefs.map((belief, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-xl p-5 shadow-sm border hover:border-primary/50 transition-colors"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-3xl mb-2 block">{belief.icon}</span>
                    <h4 className="text-foreground font-semibold mb-1">{belief.title}</h4>
                    <p className="text-sm text-muted-foreground">{belief.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Skills */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {/* Skills */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border">
                <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span>⚡</span>
                  <span>核心能力</span>
                </h4>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                            isVisible ? "w-full" : "w-0"
                          }`}
                          style={{ transitionDelay: `${500 + index * 150}ms` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-6 text-center">
                <p className="text-muted-foreground mb-2">想要一起探索 AI 工作台的无限可能？</p>
                <a
                  href="mailto:hello@yongxian.xyz"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <span>联系我</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16 space-y-4">
          <p className="font-['ZCOOL_XiaoWei'] text-xl text-foreground">
            不是一个人在战斗
          </p>
          <p className="text-muted-foreground">
            AI 是我的伙伴，工具链是我的武器，<br className="sm:hidden" />
            而你，可能是下一个同行者
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  )
}
