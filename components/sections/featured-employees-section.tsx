"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, FileText, DollarSign, LucideIcon } from "lucide-react"

interface DigitalEmployee {
  title: string
  description: string
  icon: LucideIcon
  image: string
  link: string
}

const digitalEmployees: DigitalEmployee[] = [
  {
    title: "营销助手",
    description: "智能营销活动策划与执行，自动化广告投放优化，数据分析驱动增长决策，提升营销ROI。",
    icon: MessageSquare,
    image: "/营销助手20260203.webp",
    link: "https://52tuan.com/marketing",
  },
  {
    title: "法务助手",
    description: "合同审核与合规审查智能自动化，NDA分级风险评估，法律咨询标准化回复，提升法务效率。",
    icon: FileText,
    image: "/法务助手20260209.webp",
    link: "https://52tuan.com/legal",
  },
  {
    title: "财务助手",
    description: "智能发票处理与费用管理，自动化财务报表生成，现金流预测与风险预警，提升财务效率。",
    icon: DollarSign,
    image: "/财务助手20260210.webp",
    link: "https://52tuan.com/finance",
  },
]

function LinkButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isExternal = href.startsWith("http")

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {children}
      </a>
    )
  }

  return <Link href={href}>{children}</Link>
}

export function FeaturedEmployeesSection() {
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
            <span className="text-2xl">⚡</span>
            <span className="text-primary text-sm font-medium">热门AI工作台</span>
          </div>
          <h2
            className={`font-['ZCOOL_XiaoWei'] text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            热门AI工作台
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            探索我们最受欢迎的AI工作台，他们正在帮助像您一样的企业
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {digitalEmployees.map((employee, index) => (
            <div
              key={index}
              className={`group relative bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Decorative number */}
              <div
                className={`absolute -top-4 -left-4 text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${getGradientColor(index)} opacity-10 select-none`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={employee.image || "/placeholder.svg"}
                  alt={employee.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={70}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 text-primary shadow-sm">
                  <employee.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{employee.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">{employee.description}</p>

                {/* CTA */}
                <div className="mt-auto">
                  <LinkButton href={employee.link}>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent hover:bg-primary/10 hover:border-primary/30 group/btn transition-all"
                    >
                      了解详情
                      <svg
                        className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </LinkButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link href="/solutions">
            <Button size="lg" className="group">
              查看所有解决方案
              <svg
                className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Helper function to get gradient color based on index
function getGradientColor(index: number): string {
  const gradients = [
    "from-cyan-400 to-blue-500",
    "from-blue-400 to-indigo-500",
    "from-indigo-400 to-purple-500",
  ]
  return gradients[index % gradients.length]
}
