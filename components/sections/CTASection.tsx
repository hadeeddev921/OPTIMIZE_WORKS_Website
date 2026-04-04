'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { site } from '@/lib/content/site'

export default function CTASection() {
  const { cta } = site

  return (
    <section
      id={cta.id}
      className="relative scroll-mt-24 bg-secondary px-4 py-28 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-mid/25 to-transparent" />
      <div className="max-w-3xl mx-auto text-center pt-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mid mb-4">
          {cta.eyebrow}
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance tracking-tight">
          {cta.title}
        </h2>

        <p className="text-lg text-muted-foreground mb-10">{cta.body}</p>

        <div className="flex flex-col items-center gap-4">
          <Button variant="gradient" size="lg" asChild>
            <a
              href={cta.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.primaryCta.label}
            </a>
          </Button>
          <Link
            href={`mailto:${cta.email}`}
            className="text-sm font-medium text-brand-mid hover:text-brand-bright transition-colors"
          >
            {cta.emailLinkLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
