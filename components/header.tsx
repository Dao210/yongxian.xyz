"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isExploreOpen, setIsExploreOpen] = useState(false)

  return (
    <header className="flex items-center justify-between px-4 py-4 md:px-8">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Selful Logo" width={32} height={32} />
          <span className="text-2xl font-bold">Selful</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu open={isExploreOpen} onOpenChange={setIsExploreOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Explore <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <Link href="/categories/jewelry" className="w-full">
                  Jewelry
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/home-decor" className="w-full">
                  Home Decor
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/art" className="w-full">
                  Art
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/fashion" className="w-full">
                  Fashion
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/live-feed" className="text-foreground hover:text-foreground/80">
            Live Feed
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/sell" className="hidden md:block">
          <Button variant="ghost">Sell</Button>
        </Link>

        <Link href="/cart" aria-label="Shopping cart">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </Link>

        <Link href="/sign-in">
          <Button className="bg-yellow-300 hover:bg-yellow-400 text-black rounded-full">Sign In</Button>
        </Link>
      </div>
    </header>
  )
}
