"use client"

import { Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Hero() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.jpg')" }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">create unique, custom pieces with AI</h1>
        <p className="text-xl text-white/90 mb-8">designed by you & AI, crafted by skilled artisans</p>

        <div className="w-full max-w-xl relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Sparkles className="h-5 w-5 text-yellow-400" />
          </div>
          <Input className="h-14 pl-10 pr-4 rounded-full text-lg shadow-lg" placeholder="Dream something up" />
          <p className="text-sm text-white/80 mt-2 text-center">Any product, any style</p>
        </div>
      </div>
    </section>
  )
}
