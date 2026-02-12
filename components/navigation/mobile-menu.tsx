'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, MessageSquare, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

// 移动端导航链接配置
const mobileLinks = [
  {
    category: '主要',
    icon: Home,
    links: [
      { name: '首页', href: '/' },
      { name: '解决方案', href: '/solutions' },
      { name: '关于我们', href: '/about' },
    ],
  },
  {
    category: '支持',
    icon: MessageSquare,
    links: [
      { name: '预约咨询', href: '/book-consultation' },
      { name: '联系我们', href: 'mailto:hello@yongxian.xyz' },
    ],
  },
];

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="菜单"
            className="hover:bg-primary/10 active:scale-95 transition-all duration-200"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[85vw] max-w-[400px]">
          <SheetHeader className="border-b border-border/50">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-left">导航菜单</SheetTitle>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>向右滑动</span>
                <X className="h-4 w-4" />
              </div>
            </div>
          </SheetHeader>

          <nav className="mt-6 flex flex-col gap-6">
            {mobileLinks.map((section) => (
              <div key={section.category} className="space-y-3">
                {/* 分类标题 */}
                <div className="flex items-center gap-2 px-2">
                  <section.icon className="h-4 w-4 text-primary" strokeWidth={2} />
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {section.category}
                  </h3>
                </div>

                {/* 链接列表 */}
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 active:scale-95"
                    >
                      {link.name}
                      {link.href.startsWith('mailto:') && (
                        <span className="ml-auto">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 7.89a1 1 1 0 0121 12c-1 1 0-16 9 16-5.5 5.5 0 0-3 3-4 5-4 4 0 0-.01.01-.01.01.01z"
                            />
                          </svg>
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* 底部提示 */}
          <div className="mt-6 px-4 py-3 border-t border-border/50">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Info className="h-4 w-4 flex-shrink-0" />
              <p>点击菜单项或外部区域关闭</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
