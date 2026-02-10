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
  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            热门AI工作台
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            探索我们最受欢迎的AI工作台，他们正在帮助像您一样的企业
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {digitalEmployees.map((employee, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-sm border transition-all hover:shadow-md flex flex-col"
            >
              <div className="relative h-40">
                <Image
                  src={employee.image || "/placeholder.svg"}
                  alt={employee.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={70}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <employee.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">{employee.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 flex-1">
                  {employee.description}
                </p>
                <LinkButton href={employee.link}>
                  <Button variant="outline" className="w-full bg-transparent">
                    了解更多
                  </Button>
                </LinkButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/solutions">
            <Button size="lg">查看所有解决方案</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
