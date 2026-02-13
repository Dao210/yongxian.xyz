import type React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Noto_Serif_SC, ZCOOL_XiaoWei } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Providers } from '@/components/providers';

// 加载中文艺术字体
const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-serif-sc',
});

// 加载更艺术的中文字体
const zcoolXiaoWei = ZCOOL_XiaoWei({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-zcool-xiaowei',
});

// 保留英文字体作为备用
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// 结构化数据
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '涌现',
  url: 'https://yongxian.xyz',
  logo: 'https://yongxian.xyz/favicon.svg',
  description: '定制AI工作台，打造企业虚拟员工',
  sameAs: ['https://weibo.com/u/1968748251'],
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '涌现',
  url: 'https://yongxian.xyz',
  description: '定制AI工作台，打造企业虚拟员工',
};

export const metadata: Metadata = {
  // 标题配置
  title: {
    default: '涌现 | 定制AI工作台，打造企业虚拟员工',
    template: '%s | 涌现',
  },
  description:
    '涌现提供定制AI工作台服务，帮助企业打造AI虚拟员工，提升运营效率、降低人力成本。专业顾问一对一咨询服务，针对电商、制造业等行业提供个性化AI解决方案。',
  keywords: [
    'AI工作台',
    'AI助手',
    '企业自动化',
    '虚拟员工',
    '涌现',
    'AI咨询',
    '定制化AI解决方案',
    'AI数字化转型',
  ],

  // 应用信息
  applicationName: '涌现',
  category: 'technology',

  // 视口和主题
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0EA5E9' },
    { media: '(prefers-color-scheme: dark)', color: '#0C4A6E' },
  ],

  // 搜索引擎配置
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: 'https://yongxian.xyz',
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://yongxian.xyz',
    siteName: '涌现',
    title: '涌现 | 定制AI工作台，打造企业虚拟员工',
    description:
      '通过定制AI工作台提升企业能力，专业顾问全程支持。为电商、制造业等企业提供AI助手、虚拟员工解决方案。',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '涌现 | 定制AI工作台，打造企业虚拟员工',
    description: '通过定制AI工作台提升企业能力，专业顾问全程支持。',
  },

  // 图标 - 修复为实际存在的文件
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',

  // 其他
  other: {
    'msapplication-TileColor': '#0EA5E9',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSerifSC.variable} ${zcoolXiaoWei.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
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
  );
}
