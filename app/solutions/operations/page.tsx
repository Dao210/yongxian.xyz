import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, Workflow, Database, ClipboardList } from 'lucide-react';

export const metadata: Metadata = {
  title: '运营管理解决方案 | 涌现',
  description: '通过定制AI工作台优化运营流程，自动化数据处理，提升运营效率，降低人工成本。',
  alternates: {
    canonical: 'https://yongxian.xyz/solutions/operations',
  },
};

export default function OperationsSolution() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Link
        href="/solutions"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        ← 返回解决方案
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">运营管理AI解决方案</h1>
        <p className="text-xl text-muted-foreground mb-12">
          优化运营流程，自动化数据处理，提升运营效率
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border rounded-lg p-6">
            <Workflow className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">流程自动化</h3>
            <p className="text-muted-foreground">自动执行重复性任务，释放人力价值</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <Database className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">数据整合</h3>
            <p className="text-muted-foreground">多系统数据汇聚，统一分析和展示</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <FileText className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">报告生成</h3>
            <p className="text-muted-foreground">自动生成运营报告，实时监控关键指标</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <ClipboardList className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">任务管理</h3>
            <p className="text-muted-foreground">智能分配任务，跟踪执行进度</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">适用场景</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>日常运营数据收集和分析</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>跨系统数据同步和处理</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>运营报告和指标监控</span>
            </li>
          </ul>
        </section>

        <section className="bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">开始定制</h2>
          <p className="text-muted-foreground mb-6">免费评估您的运营需求，定制专属AI解决方案</p>
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
