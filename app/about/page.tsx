import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { OurMission } from "@/components/about/our-mission"
import { OurTeam } from "@/components/about/our-team"
import { OurValues } from "@/components/about/our-values"
import { OurJourney } from "@/components/about/our-journey"
import { JoinUs } from "@/components/about/join-us"

export const metadata: Metadata = {
  title: "关于我们 | 涌现 - 为您的企业定制AI工作台",
  description: "涌现的使命、团队和价值观。我们致力于帮助传统行业通过AI工作台实现数字化转型。",
}

export default function AboutPage() {
  return (
    <main className="pb-20">
      <AboutHero />
      <OurMission />
      <OurTeam />
      <OurValues />
      <OurJourney />
      <JoinUs />
    </main>
  )
}
