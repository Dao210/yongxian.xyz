"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  isLiked: boolean
  onLike: () => void
}

export function ProductCard({ product, isLiked, onLike }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Link href={`/products/${product.id}`} className="block aspect-square relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.description}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="absolute top-2 left-2 z-10 flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 hover:bg-white"
          onClick={(e) => {
            e.preventDefault()
            onLike()
          }}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
          <span className="sr-only">{isLiked ? "Unlike" : "Like"}</span>
        </Button>
        <span className="text-xs font-medium text-white drop-shadow-md">{product.likes + (isLiked ? 1 : 0)}</span>
      </div>

      <div className="absolute top-2 right-2 z-10">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/80 hover:bg-white">
          <MoreHorizontal className="h-4 w-4 text-gray-700" />
          <span className="sr-only">More options</span>
        </Button>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="line-clamp-2 text-xs text-white">{product.description}</p>
      </div>
    </div>
  )
}
