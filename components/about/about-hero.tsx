import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-primary/10 py-20 md:py-28">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            助力企业<span className="text-primary">AI升级</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            我们曾是互联网的老兵，现在是AI工作台先行者，
            通过定制AI工作台帮助企业提升效率、降低成本、完成企业范式转换。
          </p>
        </div>
      </div>

      <div className="mt-12 relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
        {/* Only render the Image if we have a valid src */}
        <Image
          src="/images/about/team-banner.jpg"
          alt="涌现智能科技团队"
          fill
          width="100vw"
          quality={85}
          priority
          className="object-cover"
        />
      </div>
    </section>
  )
}
