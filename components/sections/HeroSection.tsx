'use client'

import Image from 'next/image'

import HashLink from '@/components/HashLink'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/content/site'

export default function HeroSection() {
  const { hero } = site

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Professional business workspace"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(11,27,50,0.12),transparent)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-bright/10 rounded-full opacity-40"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center motion-safe:animate-hero-in">
        <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-8">
          {hero.titleBefore}{' '}
          <span className="text-gradient-brand">{hero.titleGradient}</span>
          {' '}
          {hero.titleAfter}
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          {hero.lead}
        </p>

        <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          {hero.support}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="gradient" size="lg" asChild>
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.primaryCta.label}
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-xl" asChild>
            <HashLink href={hero.secondaryCta.href}>{hero.secondaryCta.label}</HashLink>
          </Button>
        </div>
      </div>
    </section>
  )
}
