import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { OurManifesto } from "@/components/about/our-manifesto"
import { OurTeam } from "@/components/about/our-team"
import { OurJourney } from "@/components/about/our-journey"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "关于涌现 | AI工作台先行者",
  description: "从互联网老兵到AI工作台先锋。我们通过定制AI工作台帮助企业提升效率、降低成本、完成范式转换。",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurManifesto />
      <OurTeam />
      <OurJourney />
      <AboutCTA />
    </main>
  )
}
