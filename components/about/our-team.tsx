"use client"

import { useRef, useEffect, useState } from "react"

const skills = [
  { name: "AI 工作台架构", level: 95, color: "from-cyan-400 to-blue-500" },
  { name: "企业级系统集成", level: 90, color: "from-blue-400 to-indigo-500" },
  { name: "工作流自动化", level: 92, color: "from-indigo-400 to-purple-500" },
  { name: "提示词工程", level: 88, color: "from-purple-400 to-pink-500" },
  { name: "全栈开发", level: 85, color: "from-pink-400 to-rose-500" },
]

const experiences = [
  { company: "阿里巴巴", role: "AI 平台架构", period: "深耕大型 AI 系统建设" },
  { company: "蚂蚁金服", role: "智能业务落地", period: "金融场景 AI 应用实践" },
  { company: "独立探索", role: "一人公司实验", period: "验证 AI 工具链的无限可能" },
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
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-2xl">👤</span>
            <span className="text-primary font-medium">超级个体</span>
          </div>
          <h2 className="font-['ZCOOL_XiaoWei'] text-5xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-purple-400 mb-6">
            创始人
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            一个人，加上 AI 工具链
            <br />
            <span className="text-white/90">就是一个团队的力量</span>
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
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
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    {/* Avatar placeholder with artistic design */}
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full animate-spin-slow opacity-20" />
                      <div className="absolute inset-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                        <span className="text-6xl">🧑‍💻</span>
                      </div>
                      {/* Orbiting dots */}
                      <div className="absolute inset-0 animate-spin-slow">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-1">纯钧</h3>
                      <p className="text-primary font-medium mb-3">创始人 & AI 工作台架构师</p>
                      <p className="text-slate-400 leading-relaxed">
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
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-5 hover:border-primary/50 transition-colors"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-3xl mb-2 block">{belief.icon}</span>
                    <h4 className="text-white font-semibold mb-1">{belief.title}</h4>
                    <p className="text-sm text-slate-500">{belief.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Skills & Experience */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {/* Skills */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span>⚡</span>
                  <span>核心能力</span>
                </h4>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
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

              {/* Experience timeline */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span>🛤️</span>
                  <span>成长轨迹</span>
                </h4>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-6 pb-6 border-l-2 border-slate-800 last:pb-0 last:border-0"
                    >
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                      <h5 className="text-white font-semibold">{exp.company}</h5>
                      <p className="text-primary text-sm">{exp.role}</p>
                      <p className="text-slate-500 text-sm mt-1">{exp.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-6 text-center">
                <p className="text-slate-300 mb-2">想要一起探索 AI 工作台的无限可能？</p>
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
        <div className="text-center mt-20 space-y-4">
          <p className="font-['ZCOOL_XiaoWei'] text-2xl text-white/90">
            不是一个人在战斗
          </p>
          <p className="text-slate-500">
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
