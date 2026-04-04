import type { Metadata } from 'next'
import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Cookie Policy | Optimize Works',
  description: 'Cookie policy for optimizeworks.net.',
  openGraph: {
    title: 'Cookie Policy | Optimize Works',
    description: 'Cookie policy for optimizeworks.net.',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A detailed cookie policy will be published here. For how we handle personal data, see our{' '}
            <Link href="/privacy-policy" className="text-brand-mid hover:text-brand-bright font-medium">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Questions:{' '}
            <a href="mailto:Info@optimizeworks.net" className="text-brand-mid hover:text-brand-bright font-medium">
              Info@optimizeworks.net
            </a>
          </p>
          <Link href="/" className="text-sm font-medium text-brand-mid hover:text-brand-bright">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
