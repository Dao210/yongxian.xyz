"use client"

import { useRef, useEffect, useState } from "react"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote: "我们实施的AI工作台彻底改变了我们的客户服务。响应时间减少了80%，客户满意度提高了35%。",
    author: "张明",
    position: "运营总监",
    company: "科技零售解决方案",
    avatar: "/images/testimonials/avatar-1.jpg",
  },
  {
    quote: "开始我们持怀疑态度，但投资回报率令人难以置信。我们的数字人力资源助理减少了60%的行政工作量。",
    author: "李伟",
    position: "人力资源经理",
    company: "成长浪潮咨询",
    avatar: "/images/testimonials/avatar-2.jpg",
  },
  {
    quote: "顾问支持非常出色。当我们需要调整时，他们帮助我们完善AI工作台，确保其完美适应我们的工作流程。",
    author: "王芳",
    position: "首席执行官",
    company: "创新制造",
    avatar: "/images/testimonials/avatar-3.jpg",
  },
]

export function TestimonialsSection() {
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
      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="text-2xl">💬</span>
            <span className="text-primary text-sm font-medium">客户评价</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            客户反馈
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            听听那些通过我们的 AI 工作台改变运营方式的企业怎么说
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-muted/30 rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-cyan-500/10 text-primary shadow-sm">
                <Quote className="h-8 w-8" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-foreground mb-6 flex-1 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground mb-1">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}，{testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
