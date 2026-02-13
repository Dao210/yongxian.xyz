import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart, Mail, Phone, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: '销售支持解决方案 | 涌现',
  description: '通过定制AI工作台打造智能销售助手，自动化客户跟进，提升转化率，优化销售流程。',
  alternates: {
    canonical: 'https://yongxian.xyz/solutions/sales',
  },
};

export default function SalesSolution() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Link
        href="/solutions"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        ← 返回解决方案
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">销售支持AI解决方案</h1>
        <p className="text-xl text-muted-foreground mb-12">
          打造智能销售助手，自动化客户跟进，提升转化率
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border rounded-lg p-6">
            <Target className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">智能获客</h3>
            <p className="text-muted-foreground">自动分析潜在客户，精准定位高价值目标</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <Mail className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">邮件自动化</h3>
            <p className="text-muted-foreground">个性化邮件跟进，提高打开率和回复率</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <Phone className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">话术辅助</h3>
            <p className="text-muted-foreground">实时推荐最佳话术，提高成单概率</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <BarChart className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">数据分析</h3>
            <p className="text-muted-foreground">销售漏斗分析，优化销售策略</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">适用场景</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>B2B销售线索挖掘和跟进</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>电商客户复购和推荐</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>销售团队效率提升</span>
            </li>
          </ul>
        </section>

        <section className="bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">开始定制</h2>
          <p className="text-muted-foreground mb-6">免费评估您的销售需求，定制专属AI解决方案</p>
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
