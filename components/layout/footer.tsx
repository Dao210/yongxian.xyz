import Link from "next/link"
import { Logo } from "@/components/ui/logo"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-xl font-artistic">
                <span className="text-sky-500">涌</span>
                <span className="text-gray-800">现</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">通过定制AI工作台提升企业能力，助力中小企业发展。</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">解决方案</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/customer-service" className="text-muted-foreground hover:text-foreground">
                  客户服务
                </Link>
              </li>
              <li>
                <Link href="/solutions/sales" className="text-muted-foreground hover:text-foreground">
                  销售支持
                </Link>
              </li>
              <li>
                <Link href="/solutions/operations" className="text-muted-foreground hover:text-foreground">
                  运营管理
                </Link>
              </li>
              <li>
                <Link href="/solutions/hr" className="text-muted-foreground hover:text-foreground">
                  人力资源
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">公司</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  加入我们
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">法律条款</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  服务条款
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie政策
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} 涌现. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}
