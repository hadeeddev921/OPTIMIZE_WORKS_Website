'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useRef } from 'react'

import { Button } from '@/components/ui/button'
import { site } from '@/lib/content/site'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const { cta } = site
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const root = sectionRef.current
      if (!root) return
      const lines = root.querySelectorAll<HTMLElement>('[data-cta-line]')
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (reduced) {
        gsap.set(lines, { opacity: 1, y: 0 })
        return
      }
      gsap.set(lines, { opacity: 0, y: 36 })
      gsap.to(lines, {
        opacity: 1,
        y: 0,
        duration: 0.95,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root,
          start: 'top 82%',
          toggleActions: 'play reverse play reverse',
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      id={cta.id}
      className="relative scroll-mt-24 bg-secondary px-4 py-28 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-mid/25 to-transparent" />
      <div className="max-w-3xl mx-auto text-center pt-1">
        <p
          data-cta-line
          className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mid mb-4 opacity-0"
        >
          {cta.eyebrow}
        </p>
        <h2
          data-cta-line
          className={cn(
            'font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance tracking-tight',
            'opacity-0',
          )}
        >
          {cta.title}
        </h2>

        <p
          data-cta-line
          className="text-lg text-muted-foreground mb-10 opacity-0"
        >
          {cta.body}
        </p>

        <div className="flex flex-col items-center gap-4">
          <div data-cta-line className="opacity-0">
            <Button variant="gradient" size="lg" asChild>
              <a
                href={cta.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.primaryCta.label}
              </a>
            </Button>
          </div>
          <Link
            data-cta-line
            href={`mailto:${cta.email}`}
            className="text-sm font-medium text-brand-mid hover:text-brand-bright transition-colors opacity-0"
          >
            {cta.emailLinkLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
