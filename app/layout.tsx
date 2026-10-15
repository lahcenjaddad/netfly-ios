import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({ subsets: ['arabic', 'latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Netfly – أفلام ومسلسلات',
  description: 'شاهد الأفلام والمسلسلات على جهاز iPhone. ثبّت Netfly على الشاشة الرئيسية لتجربة تطبيق بملء الشاشة.',
  generator: 'v0.app',
  applicationName: 'Netfly',
  appleWebApp: {
    capable: true,
    title: 'Netfly',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: { telephone: false },
  icons: {
    icon: '/apple-icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark bg-black">
      <body className={`${cairo.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
