"use client"

import { useEffect, useRef, useState } from "react"

const milestones = [
  {
    year: "2022",
    period: "年底",
    title: "新纪元开启",
    description: "ChatGPT 横空出世，我们敏锐感知到这场范式转移的震颤。AI 不再是实验室里的概念，而是触手可及的未来。在那个寒冷的冬天，我们决定All in AI。",
    icon: "🚀",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    year: "2023",
    period: "全年",
    title: "企业 AI 实践",
    description: "深入电商企业内部，我们亲历了 AI 业务落地的每一个坑。从提示词工程到工作流设计，从幻觉治理到效果评估——我们在真实战场中积累了第一手经验。",
    icon: "🏭",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    year: "2024",
    period: "探索",
    title: "一人公司实验",
    description: "我们验证了一个大胆的假设：一个人 + AI 工具链 = 一家公司。图像生成服务、工作流封装、SaaS 产品——每一次尝试都让我们更理解 AI 工作台的真正价值。",
    icon: "🔬",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    year: "2025",
    period: "现在",
    title: "AI 工作台时代",
    description: "Claude Code 的出现印证了我们的方向。AI 不再是聊天机器人，而是你的工作环境、你的协作伙伴、你的第二大脑。涌现，为你构建这个全新的工作世界。",
    icon: "✨",
    gradient: "from-emerald-400 to-teal-500",
  },
]

export function OurJourney() {
  const [activeMilestone, setActiveMilestone] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = milestoneRefs.current.findIndex(
              (ref) => ref === entry.target
            )
            if (index !== -1 && index > activeMilestone) {
              setActiveMilestone(index)
            }
          }
        })
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    )

    milestoneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [activeMilestone])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_50%)]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-['ZCOOL_XiaoWei'] text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            我们的历程
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            从 AI 觉醒的时刻，到工作台的未来
            <br />
            <span className="text-foreground/60">每一步都算数</span>
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

          {milestones.map((milestone, index) => (
            <div
              key={index}
              ref={(el) => {
                milestoneRefs.current[index] = el
              }}
              className={`relative mb-20 md:mb-28 transition-all duration-1000 ${
                index <= activeMilestone
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                  } ml-20 md:ml-0`}
                >
                  <div className="inline-block">
                    <span
                      className={`inline-block text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br ${milestone.gradient} bg-clip-text text-transparent opacity-15 leading-none`}
                    >
                      {milestone.year}
                    </span>
                  </div>

                  <div className="mt-3 space-y-3">
                    <div className="flex items-center gap-3 md:justify-end">
                      <span className="text-4xl">{milestone.icon}</span>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                          {milestone.period}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mt-2">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center marker */}
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2">
                  <div
                    className={`relative transition-all duration-700 ${
                          index <= activeMilestone
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
                    {/* Center dot */}
                    <div
                      className={`relative w-5 h-5 rounded-full bg-gradient-to-br ${milestone.gradient} shadow-md shadow-primary/30`}
                    >
                      <div className="absolute inset-1 rounded-full bg-white/70" />
                    </div>
                  </div>
                </div>

                {/* Mobile marker */}
                <div className="md:hidden absolute left-6 top-0">
                  <div
                    className={`relative transition-all duration-700 ${
                          index <= activeMilestone
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    <div
                      className={`relative w-3 h-3 rounded-full bg-gradient-to-br ${milestone.gradient}`}
                    >
                      <div className="absolute inset-0.5 rounded-full bg-white/70" />
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16 space-y-3">
          <p className="font-['ZCOOL_XiaoWei'] text-2xl text-foreground">
            故事还在继续...
          </p>
          <p className="text-muted-foreground">
            下一个章节，与你一起书写
          </p>
        </div>
      </div>
    </section>
  )
}
