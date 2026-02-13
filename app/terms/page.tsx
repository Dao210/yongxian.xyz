import type { Metadata } from 'next';
import { Logo } from '@/components/ui/logo';

export const metadata: Metadata = {
  title: '服务条款 | 涌现',
  description: '涌现的服务条款规定了使用我们服务的条款和条件。',
  alternates: {
    canonical: 'https://yongxian.xyz/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <div className="mb-8 flex items-center gap-3">
        <Logo />
        <h1 className="text-3xl font-bold">服务条款</h1>
      </div>

      <p className="text-sm text-muted-foreground mb-8">
        最后更新日期：{new Date().toLocaleDateString('zh-CN')}
      </p>

      <div className="prose prose-sky dark:prose-invert space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. 接受条款</h2>
          <p>
            通过访问和使用涌现网站（yongxian.xyz）及我们的服务，您同意遵守本服务条款。如果您不同意这些条款，请不要使用我们的服务。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. 服务描述</h2>
          <p>涌现提供定制AI工作台服务，包括但不限于：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI工作台咨询</li>
            <li>定制化解决方案设计</li>
            <li>虚拟员工部署</li>
            <li>技术支持和培训</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. 用户责任</h2>
          <p>使用我们的服务时，您同意：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>提供准确、真实的信息</li>
            <li>不滥用我们的服务</li>
            <li>不进行任何违法活动</li>
            <li>保护您的账户安全</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. 知识产权</h2>
          <p>
            本网站的所有内容，包括但不限于文本、图片、标志、软件等，均受知识产权法保护。未经许可，您不得复制、修改或使用这些内容。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. 免责声明</h2>
          <p>
            我们按"现状"提供服务，不对其准确性、完整性或适用性做出任何明示或暗示的保证。我们不对使用本网站或服务造成的任何损失负责。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. 限制责任</h2>
          <p>
            在法律允许的最大范围内，我们对使用本服务造成的任何直接、间接、附带或后果性损害不承担责任。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. 争议解决</h2>
          <p>因本服务条款引起的争议应通过友好协商解决。协商不成的，应提交至有管辖权的法院处理。</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. 条款变更</h2>
          <p>
            我们保留随时修改本服务条款的权利。更新后的条款将在本页面发布，继续使用我们的服务即表示您接受变更后的条款。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. 联系我们</h2>
          <p>
            如果您对本服务条款有任何疑问，请通过邮箱联系我们：
            <a href="mailto:hello@yongxian.xyz" className="text-sky-500 hover:underline">
              hello@yongxian.xyz
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
