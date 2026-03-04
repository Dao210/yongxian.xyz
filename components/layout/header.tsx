import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { MainNav } from '@/components/navigation/main-nav';
import { MobileMenu } from '@/components/navigation/mobile-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {/* 微妙的底部渐变线 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-artistic md:text-2xl">
              <span className="text-primary">涌</span>
              <span className="text-foreground">现</span>
            </span>
          </Link>

          <MainNav className="hidden md:flex" />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

          <Link href="/book-consultation" className="hidden sm:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
              预约咨询
            </Button>
          </Link>

          <MobileMenu className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
