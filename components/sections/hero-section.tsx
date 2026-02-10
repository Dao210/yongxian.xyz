import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-24 lg:py-32">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              定制您的<span className="text-primary">AI工作台</span>，开启智能进化
            </h1>
            <p className="text-xl text-muted-foreground">
              为您的团队配备专属AI助手，满足特定需求。专业顾问全程支持，确保效果。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/book-consultation">
                <Button size="lg" className="w-full sm:w-auto">
                  预约业务咨询
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  探索解决方案
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/hero-digital-employee.jpg"
              alt="AI工作台界面"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
