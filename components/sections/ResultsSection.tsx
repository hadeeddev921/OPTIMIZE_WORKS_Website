'use client'

import { CircleCheck } from 'lucide-react'

import ScrollReveal from '@/components/ScrollReveal'
import { site } from '@/lib/content/site'

export default function ResultsSection() {
  const { results } = site

  return (
    <section className="bg-background px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mid mb-4">
            {results.eyebrow}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
            {results.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {results.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-border bg-secondary p-8 shadow-sm transition-[transform,box-shadow,border-color] duration-500 ease-out hover:border-brand-mid/20 hover:shadow-xl">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <CircleCheck className="size-5" strokeWidth={2.25} aria-hidden />
                </div>

                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
