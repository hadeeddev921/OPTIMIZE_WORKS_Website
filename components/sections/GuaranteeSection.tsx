'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { Fragment, useMemo, useRef } from 'react'

import { site } from '@/lib/content/site'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

function CursorSlot({ at }: { at: number }) {
  return (
    <span
      data-guarantee-cursor-at={at}
      aria-hidden
      className="inline-block h-[0.85em] w-[2.5px] translate-y-px align-middle opacity-0 motion-reduce:hidden"
    >
      <span className="block h-full w-full rounded-[1px] bg-primary-foreground animate-caret-blink" />
    </span>
  )
}

export default function GuaranteeSection() {
  const { guarantee } = site
  const sectionRef = useRef<HTMLElement>(null)
  const leadChars = useMemo(
    () => Array.from(guarantee.promiseLead),
    [guarantee.promiseLead],
  )

  useGSAP(
    () => {
      const root = sectionRef.current
      if (!root) return
      const charEls = root.querySelectorAll<HTMLElement>('[data-guarantee-char]')
      const cursorEls = root.querySelectorAll<HTMLElement>(
        '[data-guarantee-cursor-at]',
      )
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (reduced) {
        gsap.set(charEls, { opacity: 1, y: 0 })
        gsap.set(cursorEls, { opacity: 0, visibility: 'hidden' })
        return
      }
      if (charEls.length === 0) return

      const cursorStep = 0.065
      const charInDuration = 0.4
      const n = charEls.length
      const inSequenceEnd =
        n > 0 ? (n - 1) * cursorStep + charInDuration : 0

      const setActiveCursor = (index: number) => {
        cursorEls.forEach((c, j) => {
          gsap.set(c, { opacity: j === index ? 1 : 0, visibility: 'visible' })
        })
      }

      gsap.set(charEls, { opacity: 0, y: 10 })
      setActiveCursor(0)

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.65,
        scrollTrigger: {
          trigger: root,
          start: 'top 82%',
          end: 'bottom top',
          toggleActions: 'play pause resume pause',
        },
      })

      tl.add(() => {
        gsap.set(charEls, { opacity: 0, y: 10 })
        setActiveCursor(0)
      })

      for (let i = 0; i < n; i++) {
        tl.fromTo(
          charEls[i],
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: charInDuration,
            ease: 'power2.out',
          },
          i * cursorStep,
        )
      }

      for (let k = 0; k <= n; k++) {
        tl.call(() => setActiveCursor(k), [], k * cursorStep)
      }

      tl.to(
        cursorEls,
        { opacity: 0, duration: 0.14 },
        Math.max(0, inSequenceEnd - 0.02),
      )
      tl.to({}, { duration: 1.85 })
      tl.to(charEls, {
        opacity: 0,
        y: -10,
        duration: 0.32,
        stagger: { each: 0.028, from: 'end' },
        ease: 'power2.in',
      })
    },
    { scope: sectionRef, dependencies: [leadChars.length] },
  )

  return (
    <section
      ref={sectionRef}
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
            <span className="block">
              {leadChars.map((ch, i) => (
                <Fragment key={i}>
                  <CursorSlot at={i} />
                  <span
                    data-guarantee-char
                    className={cn(
                      'inline opacity-0 motion-reduce:opacity-100 motion-reduce:translate-y-0',
                      ch === ' ' && 'inline-block min-w-[0.25em]',
                    )}
                  >
                    {ch}
                  </span>
                </Fragment>
              ))}
              <CursorSlot at={leadChars.length} />
            </span>
            <span className="block text-primary-foreground font-bold mt-4">
              {guarantee.promiseEmphasis}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
