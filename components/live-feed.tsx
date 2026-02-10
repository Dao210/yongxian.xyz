"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample product data
const products = [
  {
    id: 1,
    image: "/products/product-1.jpg",
    likes: 7,
    description: "A golden dog charm pendant with detailed features",
  },
  {
    id: 2,
    image: "/products/product-2.jpg",
    likes: 7,
    description: "A dainty gold ring with a twisted 1.5mm band",
  },
  {
    id: 3,
    image: "/products/product-3.jpg",
    likes: 14,
    description: "Geometric pattern textile wall hanging in earthy tones",
  },
  {
    id: 4,
    image: "/products/product-4.jpg",
    likes: 23,
    description: "Gold disc earrings with subtle floral pattern",
  },
  {
    id: 5,
    image: "/products/product-5.jpg",
    likes: 4,
    description: "Gold vermeil shield-shaped signet ring with engraved letters",
  },
]

export default function LiveFeed() {
  const [activeTab, setActiveTab] = useState("editors-picks")
  const [likedProducts, setLikedProducts] = useState<number[]>([])

  const toggleLike = (productId: number) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId))
    } else {
      setLikedProducts([...likedProducts, productId])
    }
  }

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">live feed</h2>
          <Link href="/live-feed" className="text-sm hover:underline">
            View All
          </Link>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="editors-picks">Editor&apos;s picks</TabsTrigger>
            <TabsTrigger value="in-real-life">In real life</TabsTrigger>
            <TabsTrigger value="most-liked">Most-liked</TabsTrigger>
            <TabsTrigger value="most-recent">Most-recent</TabsTrigger>
            <TabsTrigger value="under-100">Under $100</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="relative group rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.description}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute top-2 left-2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/80 hover:bg-white rounded-full h-8 w-8"
                  onClick={() => toggleLike(product.id)}
                >
                  <Heart
                    className={`h-4 w-4 ${likedProducts.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-700"}`}
                  />
                  <span className="sr-only">Like</span>
                </Button>
                <span className="ml-1 text-xs font-medium text-white drop-shadow-md">
                  {product.likes + (likedProducts.includes(product.id) ? 1 : 0)}
                </span>
              </div>

              <div className="absolute top-2 right-2 z-10">
                <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white rounded-full h-8 w-8">
                  <MoreHorizontal className="h-4 w-4 text-gray-700" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-white">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
