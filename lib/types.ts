export interface Product {
  id: number
  image: string
  likes: number
  description: string
  price?: number
  category?: string
}

export interface Category {
  name: string
  href: string
}
