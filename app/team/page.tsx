import type { Metadata } from 'next';
import { TeamHero } from '@/components/team/team-hero';
import { TeamDemo } from '@/components/team/team-demo';
import { TeamUseCases } from '@/components/team/team-use-cases';
import { TeamFeatures } from '@/components/team/team-features';
import { TeamCTA } from '@/components/team/team-cta';

export const metadata: Metadata = {
  title: 'AI 工作台 - 涌现 | 运营你的整个公司',
  description:
    'AI 员工全天候工作，永不离职。从你的云盘学习，随每个任务进化。同时运行多只 AI 智能体——编码、分析、运维——全部从同一个控制台统一调度。',
  alternates: {
    canonical: 'https://yongxian.xyz/team',
  },
};

export default function TeamPage() {
  return (
    <main>
      <TeamHero />
      <TeamDemo />
      <TeamUseCases />
      <TeamFeatures />
      <TeamCTA />
    </main>
  );
}
