"use client"

import { useState } from "react"
import { ProductCard } from "@/components/products/product-card"
import { products } from "@/lib/data/products"

export function ProductGrid() {
  const [likedProducts, setLikedProducts] = useState<number[]>([])

  const toggleLike = (productId: number) => {
    setLikedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isLiked={likedProducts.includes(product.id)}
          onLike={() => toggleLike(product.id)}
        />
      ))}
    </div>
  )
}
