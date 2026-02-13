import type { Metadata } from 'next';
import { Logo } from '@/components/ui/logo';

export const metadata: Metadata = {
  title: 'Cookie 政策 | 涌现',
  description: '涌现的 Cookie 政策说明我们如何使用 Cookie 和类似技术。',
  alternates: {
    canonical: 'https://yongxian.xyz/cookies',
  },
};

export default function CookiesPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <div className="mb-8 flex items-center gap-3">
        <Logo />
        <h1 className="text-3xl font-bold">Cookie 政策</h1>
      </div>

      <p className="text-sm text-muted-foreground mb-8">
        最后更新日期：{new Date().toLocaleDateString('zh-CN')}
      </p>

      <div className="prose prose-sky dark:prose-invert space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. 什么是 Cookie？</h2>
          <p>
            Cookie
            是小型文本文件，存储在您的设备上，用于记录您的浏览偏好和活动。类似技术包括本地存储、Web
            信标等。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. 我们使用的 Cookie 类型</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">必要 Cookie</h3>
              <p>确保网站正常运行的基本功能，例如记住您的登录状态。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">功能 Cookie</h3>
              <p>记住您的偏好设置，提供更好的用户体验。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">分析 Cookie</h3>
              <p>帮助我们了解用户如何使用我们的网站，以便改进我们的服务。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">营销 Cookie</h3>
              <p>用于跟踪营销活动效果和提供相关广告。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. 第三方 Cookie</h2>
          <p>
            我们可能会使用第三方服务来帮助我们分析网站使用情况，例如 Google
            Analytics。这些服务可能会设置自己的 Cookie。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. 管理 Cookie</h2>
          <p>您可以通过浏览器设置来管理 Cookie：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>接受或拒绝 Cookie</li>
            <li>删除现有 Cookie</li>
            <li>查看已保存的 Cookie</li>
          </ul>
          <p className="mt-2">请注意，禁用 Cookie 可能会影响某些网站功能的正常使用。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Cookie 的更新</h2>
          <p>我们可能会不时更新本 Cookie 政策。更新后的政策将在本页面发布，请定期查看最新版本。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. 联系我们</h2>
          <p>
            如果您对本 Cookie 政策有任何疑问，请通过邮箱联系我们：
            <a href="mailto:hello@yongxian.xyz" className="text-sky-500 hover:underline">
              hello@yongxian.xyz
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
