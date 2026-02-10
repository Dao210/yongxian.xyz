import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "咨询",
    description: "我们首先了解您的业务需求，确定AI工作台可以为您创造价值的领域。",
    image: "/images/consultation.svg",
    isVector: true,
  },
  {
    number: "02",
    title: "定制",
    description: "我们的团队根据您的特定需求和工作流程设计和开发定制AI工作台。",
    image: "/images/customization.svg",
    isVector: true,
  },
  {
    number: "03",
    title: "集成",
    description: "我们将AI工作台无缝集成到您现有的系统中，并培训您的团队如何与他们合作。",
    image: "/images/integration.svg",
    isVector: true,
  },
  {
    number: "04",
    title: "持续升级",
    description: "我们的顾问提供持续支持，确保您的AI工作台随着业务需求的变化而发展。",
    image: "/images/support.svg",
    isVector: true,
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">工作流程</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            我们简单的流程，帮助您的企业配备定制AI工作台
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid gap-8 items-center ${
                index % 2 === 0 ? "lg:grid-cols-[1fr,1.5fr]" : "lg:grid-cols-[1.5fr,1fr]"
              }`}
            >
              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-primary">{step.number}</span>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
              <div
                className={`relative h-[300px] rounded-lg overflow-hidden shadow-lg ${
                  index % 2 === 1 ? "order-2 lg:order-1" : ""
                }`}
              >
                {step.isVector ? (
                  <div className="w-full h-full bg-white">
                    <object type="image/svg+xml" data={step.image} className="w-full h-full" aria-label={step.title}>
                      {step.title}
                    </object>
                  </div>
                ) : (
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
