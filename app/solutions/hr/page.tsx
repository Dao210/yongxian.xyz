import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, FileCheck, Calendar, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: '人力资源解决方案 | 涌现',
  description: '通过定制AI工作台优化招聘流程，自动化筛选简历，提升人才匹配效率，降低招聘成本。',
  alternates: {
    canonical: 'https://yongxian.xyz/solutions/hr',
  },
};

export default function HRSolution() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Link
        href="/solutions"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        ← 返回解决方案
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">人力资源AI解决方案</h1>
        <p className="text-xl text-muted-foreground mb-12">
          优化招聘流程，自动化筛选简历，提升人才匹配效率
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border rounded-lg p-6">
            <Search className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">智能简历筛选</h3>
            <p className="text-muted-foreground">自动分析简历，精准匹配岗位需求</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <FileCheck className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">面试辅助</h3>
            <p className="text-muted-foreground">推荐面试问题，评估候选人匹配度</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <Calendar className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">流程管理</h3>
            <p className="text-muted-foreground">自动化面试安排，跟进候选人状态</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <GraduationCap className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">培训支持</h3>
            <p className="text-muted-foreground">个性化培训推荐，加速新人成长</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">适用场景</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>大规模招聘简历初筛</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>技术岗位候选人评估</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>HR流程效率提升</span>
            </li>
          </ul>
        </section>

        <section className="bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">开始定制</h2>
          <p className="text-muted-foreground mb-6">免费评估您的人力资源需求，定制专属AI解决方案</p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            预约咨询
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
