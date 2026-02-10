"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const categories = [
  { name: "Jewelry", href: "/categories/jewelry" },
  { name: "Home Decor", href: "/categories/home-decor" },
  { name: "Art", href: "/categories/art" },
  { name: "Fashion", href: "/categories/fashion" },
]

export function ExploreMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          Explore{" "}
          <ChevronDown
            className="h-4 w-4 transition-transform duration-200"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {categories.map((category) => (
          <DropdownMenuItem key={category.href} asChild>
            <Link href={category.href} className="w-full">
              {category.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
