import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { MainNav } from "@/components/navigation/main-nav"
import { MobileMenu } from "@/components/navigation/mobile-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-artistic md:text-2xl">
              <span className="text-sky-500">涌</span>
              <span className="text-gray-800">现</span>
            </span>
          </Link>

          <MainNav className="hidden md:flex" />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block">
            <Button variant="ghost" size="sm">
              登录
            </Button>
          </Link>

          <Link href="/book-consultation">
            <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-md text-sm">预约咨询</Button>
          </Link>

          <MobileMenu className="md:hidden" />
        </div>
      </div>
    </header>
  )
}
