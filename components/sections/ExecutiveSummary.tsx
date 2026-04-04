'use client'

import { Button } from '@/components/ui/button'
import { site } from '@/lib/content/site'

export default function ExecutiveSummary() {
  const { whyOptimizeWorks } = site

  return (
    <section
      id={whyOptimizeWorks.id}
      className="scroll-mt-24 bg-background px-4 py-28 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
          {whyOptimizeWorks.title}
        </h2>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {whyOptimizeWorks.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="gradient" size="lg" asChild>
            <a href={whyOptimizeWorks.cta.href}>{whyOptimizeWorks.cta.label}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
