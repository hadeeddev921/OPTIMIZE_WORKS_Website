'use client'

import Image from 'next/image'

import { site } from '@/lib/content/site'

export default function GuaranteeSection() {
  const { guarantee } = site

  return (
    <section
      id={guarantee.id}
      className="relative scroll-mt-24 bg-gradient-brand px-4 py-28 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-bright/20 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="relative w-24 h-24 mb-8 ring-2 ring-white/25 rounded-full shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)]">
            <Image
              src="/guarantee-seal.jpg"
              alt="Guarantee seal"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="inline-block px-4 py-2 bg-primary/80 border border-white/20 rounded-full text-sm font-semibold text-primary-foreground">
            {guarantee.commitmentLabel}
          </div>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground text-center mb-8 leading-tight">
          {guarantee.title}
        </h2>

        <div className="bg-primary/50 border border-white/20 rounded-xl p-8 sm:p-12 text-center backdrop-blur-md shadow-inner">
          <p className="text-2xl sm:text-3xl font-serif text-primary-foreground leading-relaxed mb-6">
            <span className="block">{guarantee.promiseLead}</span>
            <span className="block text-primary-foreground font-bold mt-4">
              {guarantee.promiseEmphasis}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
