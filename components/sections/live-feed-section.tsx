import Link from "next/link"
import { ProductGrid } from "@/components/products/product-grid"
import { FeedTabs } from "@/components/products/feed-tabs"

export function LiveFeedSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">live feed</h2>
          <Link href="/live-feed" className="text-sm font-medium hover:underline">
            View All
          </Link>
        </div>

        <FeedTabs />

        <ProductGrid />
      </div>
    </section>
  )
}
