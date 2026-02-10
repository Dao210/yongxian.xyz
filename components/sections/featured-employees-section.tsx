import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, FileText, Calendar, Users } from "lucide-react"

const digitalEmployees = [
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
    title: "日程安排助理",
    description: "管理预约、会议和提醒，优化团队时间和可用性。",
    icon: Calendar,
    image: "/images/solutions/scheduling.jpg",
    link: "/solutions/scheduling",
  },
  {
    title: "人力资源助理",
    description: "通过智能自动化简化招聘、入职和员工支持流程。",
    icon: Users,
    image: "/images/hr-assistant.jpg",
    link: "/solutions/hr-assistant",
  },
]

export function FeaturedEmployeesSection() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">热门AI工作台</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            探索我们最受欢迎的AI工作台，他们正在帮助像您一样的企业
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {digitalEmployees.map((employee, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-sm border transition-all hover:shadow-md flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={employee.image || "/placeholder.svg"}
                  alt={employee.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={70}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <employee.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{employee.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{employee.description}</p>
                {employee.link.startsWith('http') ? (
                  <a href={employee.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full bg-transparent">
                      了解更多
                    </Button>
                  </a>
                ) : (
                  <Link href={employee.link}>
                    <Button variant="outline" className="w-full bg-transparent">
                      了解更多
                    </Button>
                  </Link>
                )}
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
