import type { Metadata } from 'next'
import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Optimize Works',
  description: 'Terms of Service for Optimize Works Ltd.',
  openGraph: {
    title: 'Terms of Service | Optimize Works',
    description: 'Terms of Service for Optimize Works Ltd.',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Full terms of service content will be published here. For enquiries, contact{' '}
            <a href="mailto:Info@optimizeworks.net" className="text-brand-mid hover:text-brand-bright font-medium">
              Info@optimizeworks.net
            </a>
            .
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
