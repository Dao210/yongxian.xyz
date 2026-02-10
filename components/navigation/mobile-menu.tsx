"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// 修改移动端导航链接，移除价格和资源链接
const mobileLinks = [
  { name: "解决方案", href: "/solutions" },
  { name: "关于我们", href: "/about" },
  { name: "登录", href: "/login" },
]

interface MobileMenuProps {
  className?: string
}

export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={className}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="菜单">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left">菜单</SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-4">
            {mobileLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
                {link.name}
              </Link>
            ))}
            <Link
              href="/book-consultation"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-md bg-primary px-4 py-2 text-center text-primary-foreground"
            >
              预约业务咨询
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
