"use client"

import { useRef, useEffect, useState } from "react"

// Agent categories with their specialties
const agentCategories = [
  {
    id: "core",
    name: "核心能力",
    color: "from-cyan-400 to-blue-500",
    agents: [
      { name: "Code Agent", role: "代码生成与审查", icon: "💻" },
      { name: "Analyze Agent", role: "数据分析与洞察", icon: "📊" },
      { name: "Write Agent", role: "内容创作与编辑", icon: "✍️" },
    ],
  },
  {
    id: "professional",
    name: "专业领域",
    color: "from-purple-400 to-pink-500",
    agents: [
      { name: "Design Agent", role: "UI/UX 设计", icon: "🎨" },
      { name: "Marketing Agent", role: "营销策略", icon: "📢" },
      { name: "Finance Agent", role: "财务分析", icon: "💰" },
    ],
  },
  {
    id: "tools",
    name: "工具集成",
    color: "from-emerald-400 to-teal-500",
    agents: [
      { name: "API Agent", role: "接口调用与集成", icon: "🔌" },
      { name: "Data Agent", role: "数据处理与转换", icon: "🔄" },
      { name: "Workflow Agent", role: "工作流自动化", icon: "⚙️" },
    ],
  },
]

const stats = [
  { number: "60", label: "AI Agent", desc: "虚拟员工" },
  { number: "8", label: "能力域", desc: "全场景覆盖" },
  { number: "∞", label: "扩展性", desc: "持续进化" },
]

export function OurTeam() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
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

  const totalAgents = 60

  return (
    <section ref={sectionRef} className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
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
            <span className="text-2xl">🌟</span>
            <span className="text-primary font-medium">超级团队</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            纯钧 <span className="text-primary">+</span> {totalAgents} 个 Agent
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            一个人是起点，加上 AI 工具链成为无限可能。
            <br className="hidden md:block" />
            <span className="text-foreground font-semibold">60个虚拟员工</span>
            ，随时待命，各司其职。
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-purple-500">
                {stat.number}
              </div>
              <div className="text-foreground font-medium text-sm mt-1">{stat.label}</div>
              <div className="text-muted-foreground text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Main visual: Core + Agents constellation */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Center core: 纯钧 */}
          <div className="relative">
            {/* Orbital rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] pointer-events-none">
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-primary/5 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-16 rounded-full border border-primary/5 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            {/* Core avatar */}
            <div className="relative z-10 flex justify-center mb-12">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />

                {/* Avatar container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  {/* Rotating ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-20 animate-spin-slow" />

                  {/* Core */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl">🧑‍💻</div>
                      <div className="text-white font-bold text-xs md:text-sm mt-1">纯钧</div>
                    </div>
                  </div>

                  {/* Orbiting dots */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
                  </div>
                </div>

                {/* Connection lines to agents (decorative) */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" style={{ transform: "rotate(0deg)" }}>
                    <line x1="50%" y1="50%" x2="10%" y2="20%" stroke="url(#gradient1)" strokeWidth="1" opacity="0.2" />
                    <line x1="50%" y1="50%" x2="90%" y2="20%" stroke="url(#gradient1)" strokeWidth="1" opacity="0.2" />
                    <line x1="50%" y1="50%" x2="10%" y2="80%" stroke="url(#gradient1)" strokeWidth="1" opacity="0.2" />
                    <line x1="50%" y1="50%" x2="90%" y2="80%" stroke="url(#gradient1)" strokeWidth="1" opacity="0.2" />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(6,182,212)" stopOpacity="0" />
                        <stop offset="50%" stopColor="rgb(6,182,212)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="rgb(168,85,247)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Agent categories arranged around core */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {agentCategories.map((category, catIndex) => (
                <div
                  key={category.id}
                  className={`relative transition-all duration-500 delay-${catIndex * 200} ${
                    hoveredCategory && hoveredCategory !== category.id ? "opacity-40 scale-95" : "opacity-100 scale-100"
                  }`}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Category card */}
                  <div className="bg-background rounded-2xl p-6 shadow-sm border hover:border-primary/30 hover:shadow-md transition-all">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <span className="text-white text-lg">
                          {catIndex === 0 ? "⚡" : catIndex === 1 ? "🎯" : "🔧"}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{category.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {catIndex === 0 ? "20+" : catIndex === 1 ? "25+" : "15+"} 个 Agent
                        </p>
                      </div>
                    </div>

                    {/* Agent list */}
                    <div className="space-y-2">
                      {category.agents.map((agent, agentIndex) => (
                        <div
                          key={agentIndex}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group/agent"
                        >
                          <span className="text-xl group-hover/agent:scale-110 transition-transform">
                            {agent.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-foreground truncate">
                              {agent.name}
                            </div>
                            <div className="text-xs text-muted-foreground truncate">
                              {agent.role}
                            </div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-primary/50 group-hover/agent:bg-primary animate-pulse" />
                        </div>
                      ))}

                      {/* More indicator */}
                      <div className="text-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          +{catIndex === 0 ? "17 more" : catIndex === 1 ? "22 more" : "12 more"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-['ZCOOL_XiaoWei'] text-xl text-foreground mb-2">
            一个人，一支队伍
          </p>
          <p className="text-muted-foreground">
            AI Agent 不是工具，而是你的{" "}
            <span className="text-primary font-medium">虚拟团队</span>
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="mailto:hello@yongxian.xyz"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
            >
              <span>构建你的 AI 团队</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
