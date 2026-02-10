"use client"

import type React from "react"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
        <Sparkles className="h-5 w-5" />
      </div>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-14 pl-10 pr-4 rounded-full text-lg shadow-lg"
        placeholder="Dream something up"
        aria-label="Search for products"
      />
      <p className="text-sm text-white/80 mt-2 text-center">Any product, any style</p>
    </form>
  )
}
