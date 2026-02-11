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
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="stars" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-['ZCOOL_XiaoWei'] text-5xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 mb-6 animate-shimmer">
            我们的历程
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            从 AI 觉醒的时刻，到工作台的未来
            <br />
            <span className="text-slate-500">每一步都算数</span>
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Glowing timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          {milestones.map((milestone, index) => (
            <div
              key={index}
              ref={(el) => (milestoneRefs.current[index] = el)}
              className={`relative mb-24 md:mb-32 transition-all duration-1000 ${
                index <= activeMilestone
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
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
                      className={`inline-block text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-br ${milestone.gradient} bg-clip-text text-transparent opacity-20 leading-none`}
                    >
                      {milestone.year}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3 md:justify-end">
                      <span className="text-5xl">{milestone.icon}</span>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                          {milestone.period}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
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
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                    {/* Center dot */}
                    <div
                      className={`relative w-6 h-6 rounded-full bg-gradient-to-br ${milestone.gradient} shadow-lg shadow-primary/50`}
                    >
                      <div className="absolute inset-1 rounded-full bg-white/50" />
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
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    <div
                      className={`relative w-4 h-4 rounded-full bg-gradient-to-br ${milestone.gradient}`}
                    >
                      <div className="absolute inset-0.5 rounded-full bg-white/50" />
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
        <div className="text-center mt-20 space-y-4">
          <p className="font-['ZCOOL_XiaoWei'] text-3xl text-white/90">
            故事还在继续...
          </p>
          <p className="text-slate-500">
            下一个章节，与你一起书写
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease-in-out infinite;
        }
        .stars {
          background-image: radial-gradient(2px 2px at 20px 30px, white, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 90px 40px, white, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 160px 120px, rgba(255,255,255,0.9), rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 230px 80px, white, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 300px 150px, rgba(255,255,255,0.7), rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 350px 60px, white, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 400px 100px, rgba(255,255,255,0.6), rgba(0,0,0,0));
          background-size: 450px 200px;
          background-position: 0 0, 40px 60px, 130px 270px;
          animation: twinkle 8s ease-in-out infinite alternate;
        }
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}
