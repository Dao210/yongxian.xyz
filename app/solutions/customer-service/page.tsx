import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, MessageSquare, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: '客户服务解决方案 | 涌现',
  description: '通过定制AI工作台打造智能客服系统，24小时在线响应，提升客户满意度，降低人力成本。',
  alternates: {
    canonical: 'https://yongxian.xyz/solutions/customer-service',
  },
};

export default function CustomerServiceSolution() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Link
        href="/solutions"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        ← 返回解决方案
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">客户服务AI解决方案</h1>
        <p className="text-xl text-muted-foreground mb-12">
          打造24小时智能客服系统，提升客户满意度，降低人力成本
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border rounded-lg p-6">
            <Clock className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">24小时在线</h3>
            <p className="text-muted-foreground">
              AI客服全天候待命，即时响应客户咨询，不遗漏任何商机
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <MessageSquare className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">多轮对话</h3>
            <p className="text-muted-foreground">理解上下文，处理复杂问题，提供准确答案</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <Users className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">无缝转接</h3>
            <p className="text-muted-foreground">复杂问题自动转接人工，提供完整服务记录</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <Zap className="w-12 h-12 text-sky-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">快速部署</h3>
            <p className="text-muted-foreground">基于企业知识库快速训练，两周内上线使用</p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">适用场景</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>电商售前咨询、订单查询、售后支持</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>SaaS产品使用指南和故障排查</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-500 mt-1">•</span>
              <span>企业常见问题自动应答</span>
            </li>
          </ul>
        </section>

        <section className="bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">开始定制</h2>
          <p className="text-muted-foreground mb-6">免费评估您的客服需求，定制专属AI解决方案</p>
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
