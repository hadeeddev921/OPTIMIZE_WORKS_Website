'use client'

import Image from 'next/image'

import ScrollReveal from '@/components/ScrollReveal'
import { site } from '@/lib/content/site'

export default function AudienceSection() {
  const { audience } = site

  return (
    <section className="py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-mid mb-4">
            {audience.eyebrow}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
            {audience.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {audience.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audience.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100} className="h-full">
              <div
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-0.5 hover:border-brand-mid/20 hover:shadow-xl"
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-t-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-3 font-serif text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
