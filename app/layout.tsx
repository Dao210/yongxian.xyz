import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Serif_SC, ZCOOL_XiaoWei } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Providers } from "@/components/providers"

// 加载中文艺术字体
const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-serif-sc",
})

// 加载更艺术的中文字体
const zcoolXiaoWei = ZCOOL_XiaoWei({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-zcool-xiaowei",
})

// 保留英文字体作为备用
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "涌现 | 为您的企业定制AI工作台",
  description: "通过定制AI工作台提升企业能力，专业顾问全程支持",
  keywords: ["AI工作台", "AI助手", "企业自动化", "虚拟员工", "涌现"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${notoSerifSC.variable} ${zcoolXiaoWei.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
