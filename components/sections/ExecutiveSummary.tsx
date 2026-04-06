'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

import { Button } from '@/components/ui/button'
import { site } from '@/lib/content/site'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export default function ExecutiveSummary() {
  const { whyOptimizeWorks } = site
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const root = sectionRef.current
      if (!root) return
      const lines = root.querySelectorAll<HTMLElement>('[data-why-line]')
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
      id={whyOptimizeWorks.id}
      className="scroll-mt-24 bg-background px-4 py-28 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          data-why-line
          className={cn(
            'mb-8 text-center font-serif text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl',
            'opacity-0',
          )}
        >
          {whyOptimizeWorks.title}
        </h2>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {whyOptimizeWorks.paragraphs.map((p, i) => (
            <p key={i} data-why-line className="opacity-0">
              {p}
            </p>
          ))}
        </div>
        <div
          data-why-line
          className="mt-10 flex justify-center opacity-0"
        >
          <Button variant="gradient" size="lg" asChild>
            <a href={whyOptimizeWorks.cta.href}>{whyOptimizeWorks.cta.label}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
