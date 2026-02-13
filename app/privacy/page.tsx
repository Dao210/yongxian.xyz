import type { Metadata } from 'next';
import { Logo } from '@/components/ui/logo';

export const metadata: Metadata = {
  title: '隐私政策 | 涌现',
  description: '涌现的隐私政策说明我们如何收集、使用和保护您的个人信息。',
  alternates: {
    canonical: 'https://yongxian.xyz/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <div className="mb-8 flex items-center gap-3">
        <Logo />
        <h1 className="text-3xl font-bold">隐私政策</h1>
      </div>

      <p className="text-sm text-muted-foreground mb-8">
        最后更新日期：{new Date().toLocaleDateString('zh-CN')}
      </p>

      <div className="prose prose-sky dark:prose-invert space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. 信息收集</h2>
          <p>涌现致力于保护您的隐私。我们仅收集必要的业务信息，包括但不限于：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>您提供的联系信息（姓名、邮箱、电话等）</li>
            <li>咨询过程中的业务需求信息</li>
            <li>网站使用情况数据（通过 Cookie 和分析工具）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. 信息使用</h2>
          <p>我们使用收集的信息用于：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>为您提供服务和咨询</li>
            <li>改进我们的产品和服务</li>
            <li>发送与您相关的业务信息</li>
            <li>遵守法律法规要求</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. 信息保护</h2>
          <p>
            我们采取适当的技术和组织措施来保护您的个人信息安全，防止未经授权的访问、披露、修改或销毁。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. 信息共享</h2>
          <p>我们不会向第三方出售、出租或以其他方式披露您的个人信息，除非：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>获得您的明确同意</li>
            <li>法律法规要求</li>
            <li>保护我们的权益和财产</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Cookie 使用</h2>
          <p>
            我们使用 Cookie 来改善用户体验和收集分析数据。您可以通过浏览器设置管理 Cookie 偏好。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. 您的权利</h2>
          <p>您有权：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>访问和查看您的个人信息</li>
            <li>更正不准确的信息</li>
            <li>要求删除您的个人信息</li>
            <li>撤回同意</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. 政策更新</h2>
          <p>我们可能会不时更新本隐私政策。更新后的政策将在本页面发布，请定期查看最新版本。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. 联系我们</h2>
          <p>
            如果您对本隐私政策有任何疑问或意见，请通过邮箱联系我们：
            <a href="mailto:hello@yongxian.xyz" className="text-sky-500 hover:underline">
              hello@yongxian.xyz
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
