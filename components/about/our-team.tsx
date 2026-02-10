import Image from "next/image"

const teamMembers = [
  {
    name: "纯钧",
    position: "创始人兼CEO",
    bio: "前阿里巴巴资深产品专家，拥有10年大规模AI系统开发经验。在创办涌现科技之前，他领导了多个企业级AI项目，帮助传统企业实现数字化转型，初衷是将先进AI技术民主化，让各行业企业都能受益。",
    experience: ["阿里巴巴", "蚂蚁金服"],
    image: "/placeholder.svg?height=256&width=256",
  },
  {
    name: "李伟",
    position: "技术总监",
    bio: "前腾讯高级工程师，专注于自然语言处理和机器学习。李伟在大型语言模型应用和企业级AI系统集成方面拥有丰富经验，曾主导开发多个智能客服和流程自动化系统。",
    experience: ["腾讯", "百度"],
    image: "/placeholder.svg?height=256&width=256",
  },
  {
    name: "王芳",
    position: "产品总监",
    bio: "前字节跳动产品经理，拥有丰富的B2B产品设计和用户体验优化经验。王芳擅长将复杂技术转化为易用的产品，确保我们的AI工作台解决方案既强大又直观易用。",
    experience: ["字节跳动", "网易"],
    image: "/placeholder.svg?height=256&width=256",
  },
  {
    name: "赵强",
    position: "解决方案架构师",
    bio: "前华为云解决方案专家，拥有15年企业级系统集成经验。赵强深入了解各行业业务流程和技术需求，擅长设计定制化的AI工作台解决方案，确保其与客户现有系统无缝集成。",
    experience: ["华为", "IBM"],
    image: "/placeholder.svg?height=256&width=256",
  },
]

export function OurTeam() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">我们的团队</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            涌现团队由来自互联网大厂的资深专家组成，拥有丰富的AI技术和行业经验。
            我们将这些经验带入涌现，致力于为传统行业创造切实可行的数字化解决方案。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-sm border transition-all hover:shadow-md flex flex-col"
            >
              <div className="relative h-64">
                <Image
                  src={member.image && member.image !== "" ? member.image : "/placeholder.svg"}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={75}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="mt-auto">
                  <h4 className="text-sm font-medium mb-2">曾就职于</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.experience.map((company, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {company}
                      </span>
                    ))}
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
