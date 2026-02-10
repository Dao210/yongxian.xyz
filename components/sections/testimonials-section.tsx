import Image from "next/image"
import { Quote } from "lucide-react"

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
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">客户评价</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            听听那些通过我们的AI工作台改变运营方式的企业怎么说
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md flex flex-col"
            >
              <div className="mb-4 text-primary">
                <Quote className="h-8 w-8" />
              </div>
              <p className="text-foreground mb-6 flex-1 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}，{testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
