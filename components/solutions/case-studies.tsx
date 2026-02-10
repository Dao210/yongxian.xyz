import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "某电商平台客服效率提升300%",
    description:
      "通过部署客户服务AI工作台，该电商平台将客户响应时间从30分钟减少到2分钟，客户满意度提升35%，同时节省了60%的客服成本。",
    industry: "电子商务",
    results: ["客户响应时间减少93%", "客户满意度提升35%", "客服成本降低60%"],
    image: "/images/case-studies/ecommerce.jpg",
    link: "/case-studies/ecommerce",
  },
  {
    title: "制造企业减少停机时间40%",
    description:
      "通过部署设备监控AI工作台，该制造企业实现了预测性维护，减少了40%的意外停机时间，延长了设备寿命，并提高了20%的生产效率。",
    industry: "制造业",
    results: ["停机时间减少40%", "维护成本降低30%", "生产效率提高20%"],
    image: "/images/case-studies/manufacturing.jpg",
    link: "/case-studies/manufacturing",
  },
  {
    title: "物流公司优化配送路线节省15%燃油",
    description:
      "通过部署路线优化AI工作台，该物流公司实现了智能路线规划，减少了15%的燃油消耗，提高了20%的配送效率，并改善了客户满意度。",
    industry: "物流运输",
    results: ["燃油消耗减少15%", "配送效率提高20%", "客户满意度提升25%"],
    image: "/images/case-studies/logistics.jpg",
    link: "/case-studies/logistics",
  },
]

export function CaseStudies() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">客户成功案例</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            了解我们的AI工作台如何帮助各行业客户解决实际业务挑战
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-sm border transition-all hover:shadow-md flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={caseStudy.image || "/placeholder.svg?height=192&width=384"}
                  alt={caseStudy.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={70}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                {caseStudy.industry}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-4">{caseStudy.description}</p>

                <h4 className="text-sm font-semibold mb-2">关键成果：</h4>
                <ul className="mb-6 space-y-1">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link href={caseStudy.link}>
                    <Button variant="link" className="p-0 h-auto font-medium flex items-center gap-1">
                      查看详细案例 <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/case-studies">
            <Button>查看所有案例</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
