import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, FileText, Calendar, Users, ShoppingBag, BarChart } from "lucide-react"

const solutions = [
  {
    title: "客户服务助手",
    description: "全天候处理客户咨询，提供即时回复，解决常见问题，并无缝转接复杂问题给人工客服。",
    icon: MessageSquare,
    benefits: ["减少80%的响应时间", "解决90%的常见问题", "提高35%的客户满意度"],
    image: "/images/customer-service.webp",
    link: "/solutions/customer-service",
  },
  {
    title: "智能文档处理",
    description: "自动提取、分类和处理各类业务文档，包括发票、合同、报告等，减少手动数据输入和错误。",
    icon: FileText,
    benefits: ["减少75%的文档处理时间", "提高95%的数据准确性", "节省60%的人工成本"],
    image: "/images/solutions/document-processor.jpg",
    link: "/solutions/document-processor",
  },
  {
    title: "销售支持助手",
    description: "协助销售团队管理线索、安排演示、准备提案，并提供产品信息和竞争对手分析。",
    icon: ShoppingBag,
    benefits: ["增加30%的销售效率", "提高25%的转化率", "减少40%的销售周期"],
    image: "/images/images/sales-assistant.jpg",
    link: "/solutions/sales-assistant",
  },
  {
    title: "数据分析助手",
    description: "自动收集、处理和分析业务数据，生成可视化报告和洞察，支持数据驱动决策。",
    icon: BarChart,
    benefits: ["节省70%的报告准备时间", "提供实时业务洞察", "支持预测性分析"],
    image: "/images/solutions/data-analyst.jpg",
    link: "/solutions/data-analyst",
  },
  {
    title: "日程管理助手",
    description: "智能管理会议、预约和提醒，协调多方日程，减少冲突和提高团队协作效率。",
    icon: Calendar,
    benefits: ["减少95%的日程冲突", "节省每周3小时的日程管理时间", "提高团队协作效率"],
    image: "/images/solutions/scheduling.jpg",
    link: "/solutions/scheduling",
  },
  {
    title: "人力资源助手",
    description: "自动化招聘流程、员工入职、培训跟踪和HR政策咨询，提高HR团队效率。",
    icon: Users,
    benefits: ["减少70%的HR行政工作", "加快50%的招聘流程", "提高员工满意度"],
    image: "/images/solutions/hr-assistant.jpg",
    link: "/solutions/hr-assistant",
  },
]

export function SolutionCards() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">核心解决方案</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            我们的AI工作台可以解决各种业务挑战，以下是我们最受欢迎的解决方案
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-sm border transition-all hover:shadow-md flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={solution.image || "/placeholder.svg?height=192&width=384"}
                  alt={solution.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={70}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <solution.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>

                <h4 className="text-sm font-semibold mb-2">主要优势：</h4>
                <ul className="mb-6 space-y-1">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link href={solution.link}>
                    <Button variant="outline" className="w-full bg-transparent">
                      了解详情
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
