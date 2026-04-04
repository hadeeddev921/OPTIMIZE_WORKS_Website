import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Optimize Works - Reducing Cost-to-Serve',
  description: 'Strategic operational consulting for service-led organizations. Proven methods to reduce cost-to-serve and unlock capacity.',
  openGraph: {
    title: 'Optimize Works - Reducing Cost-to-Serve',
    description:
      'Strategic operational consulting for service-led organizations. Proven methods to reduce cost-to-serve and unlock capacity.',
    type: 'website',
    locale: 'en_GB',
  },
  icons: {
    icon: [{ url: '/Clean-Logo.png', type: 'image/png' }],
    apple: '/Clean-Logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
