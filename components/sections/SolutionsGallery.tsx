'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import { site } from '@/lib/content/site'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const idleDelay = 1.55

export default function SolutionsGallery() {
  const { solutions } = site
  const itemCount = solutions.items.length
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const grid = gridRef.current
      const header = headerRef.current
      if (!grid) return

      const cards = gsap.utils.toArray<HTMLElement>(
        grid.querySelectorAll('[data-solution-card]'),
      )
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      const finePointer = window.matchMedia('(pointer: fine)').matches

      if (reduced) {
        gsap.set(cards, { opacity: 1, y: 0, scale: 1 })
        if (header) {
          const els = header.querySelectorAll<HTMLElement>(
            '[data-solutions-line]',
          )
          gsap.set(els, { opacity: 1, y: 0 })
        }
        cards.forEach((card) => {
          const floatEl = card.querySelector(
            '[data-solution-float]',
          ) as HTMLElement | null
          const ken = card.querySelector(
            '[data-solution-ken]',
          ) as HTMLElement | null
          if (floatEl)
            gsap.set(floatEl, { x: 0, y: 0, scale: 1, rotation: 0, rotateZ: 0 })
          if (ken)
            gsap.set(ken, {
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              rotateZ: 0,
            })
        })
        return
      }

      if (header) {
        const lines = header.querySelectorAll<HTMLElement>(
          '[data-solutions-line]',
        )
        gsap.set(lines, { opacity: 0, y: 24 })
        gsap.to(lines, {
          opacity: 1,
          y: 0,
          duration: 1.12,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        })
      }

      gsap.set(cards, { opacity: 0, y: 48, scale: 0.98 })

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.28,
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      })

      const cleanups: Array<() => void> = []

      cards.forEach((card, i) => {
        const floatEl = card.querySelector(
          '[data-solution-float]',
        ) as HTMLElement | null
        const parallaxEl = card.querySelector(
          '[data-solution-parallax]',
        ) as HTMLElement | null
        const hoverEl = card.querySelector(
          '[data-solution-img-hover]',
        ) as HTMLElement | null
        const kenEl = card.querySelector(
          '[data-solution-ken]',
        ) as HTMLElement | null
        const tiltEl = card.querySelector(
          '[data-solution-tilt]',
        ) as HTMLElement | null

        if (kenEl) {
          gsap.set(kenEl, {
            scale: 1.09,
            transformOrigin: i === 2 ? '50% 50%' : '50% 100%',
          })
          gsap.to(kenEl, {
            scale: 1,
            duration: 1.65,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          })
        }

        if (floatEl && kenEl) {
          if (i === 0) {
            gsap.fromTo(
              kenEl,
              { x: -3, scale: 1 },
              {
                x: 3,
                scale: 1.035,
                duration: 4.5,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: idleDelay + i * 0.1,
              },
            )
          } else if (i === 1) {
            gsap.fromTo(
              floatEl,
              { y: 0, rotateZ: -2.5 },
              {
                y: 5,
                rotateZ: 2.5,
                duration: 4,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: idleDelay + i * 0.1,
              },
            )
          } else if (i === 2) {
            gsap.to(kenEl, {
              rotation: '+=360',
              duration: 110,
              ease: 'none',
              repeat: -1,
              delay: idleDelay + i * 0.1,
            })
          } else if (i === 3) {
            gsap
              .timeline({ repeat: -1, delay: idleDelay + i * 0.1 })
              .fromTo(
                floatEl,
                { y: 6 },
                { y: -14, duration: 1.62, ease: 'power2.in' },
              )
              .to(floatEl, { y: 6, duration: 1.35, ease: 'power2.out' })
          }
        }

        if (parallaxEl && i !== 2) {
          gsap.fromTo(
            parallaxEl,
            { y: 12 },
            {
              y: -12,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                scrub: 1.15,
                start: 'top bottom',
                end: 'bottom top',
              },
            },
          )
        }

        if (hoverEl) {
          const onEnter = () => {
            gsap.to(hoverEl, {
              scale: 1.03,
              y: -4,
              rotateZ: 1.2,
              duration: 0.88,
              ease: 'expo.out',
              overwrite: 'auto',
            })
          }
          const onLeaveHover = () => {
            gsap.to(hoverEl, {
              scale: 1,
              y: 0,
              rotateZ: 0,
              duration: 0.88,
              ease: 'expo.out',
              overwrite: 'auto',
            })
          }
          if (tiltEl && finePointer) {
            gsap.set(tiltEl, { rotateX: 0, rotateY: 0 })
            const rotateXTo = gsap.quickTo(tiltEl, 'rotateX', {
              duration: 0.75,
              ease: 'power3.out',
            })
            const rotateYTo = gsap.quickTo(tiltEl, 'rotateY', {
              duration: 0.75,
              ease: 'power3.out',
            })
            const onMove = (e: MouseEvent) => {
              const rect = card.getBoundingClientRect()
              const x = (e.clientX - rect.left) / rect.width - 0.5
              const y = (e.clientY - rect.top) / rect.height - 0.5
              rotateYTo(x * 11)
              rotateXTo(-y * 9)
            }
            const onLeave = () => {
              onLeaveHover()
              rotateXTo(0)
              rotateYTo(0)
            }
            card.addEventListener('mouseenter', onEnter)
            card.addEventListener('mousemove', onMove)
            card.addEventListener('mouseleave', onLeave)
            cleanups.push(() => {
              card.removeEventListener('mouseenter', onEnter)
              card.removeEventListener('mousemove', onMove)
              card.removeEventListener('mouseleave', onLeave)
            })
          } else {
            card.addEventListener('mouseenter', onEnter)
            card.addEventListener('mouseleave', onLeaveHover)
            cleanups.push(() => {
              card.removeEventListener('mouseenter', onEnter)
              card.removeEventListener('mouseleave', onLeaveHover)
            })
          }
        }
      })

      return () => {
        cleanups.forEach((fn) => fn())
      }
    },
    { scope: sectionRef, dependencies: [itemCount] },
  )

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [itemCount])

  return (
    <section ref={sectionRef} className="bg-background px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          id="solutions"
          className="mb-16 scroll-mt-4 text-center"
        >
          <p
            data-solutions-line
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-mid"
          >
            {solutions.eyebrow}
          </p>
          <h2
            data-solutions-line
            className="mb-4 font-serif text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl"
          >
            {solutions.title}
          </h2>
          <p
            data-solutions-line
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            {solutions.intro}
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {solutions.items.map((solution, i) => (
            <div
              key={solution.title}
              data-solution-card
              className={cn(
                'group overflow-hidden rounded-xl border border-border border-l-2 border-l-brand-bright bg-card shadow-sm',
                'transition-[box-shadow,border-color] duration-1000 ease-out',
                'hover:-translate-y-1 hover:border-brand-mid/40 hover:shadow-[0_12px_40px_-10px_rgba(67,165,217,0.26)] hover:ring-1 hover:ring-border/60',
              )}
            >
              <div className="relative h-44 w-full">
                <div className="relative mx-auto flex h-full max-w-[min(100%,14rem)] items-end justify-center px-6 pb-1 pt-6">
                  <div
                    data-solution-parallax
                    className="relative h-[calc(100%-0.5rem)] w-full origin-bottom"
                  >
                    <div
                      data-solution-frame
                      className="relative h-full w-full overflow-hidden"
                      style={{ perspective: 1200 }}
                    >
                      <div
                        data-solution-float
                        className="relative h-full w-full transform-3d"
                      >
                        <div
                          data-solution-tilt
                          className="relative h-full w-full will-change-transform transform-3d"
                        >
                          <div
                            data-solution-img-hover
                            className="relative h-full w-full transform-3d"
                          >
                            <div
                              data-solution-ken
                              className={cn(
                                'relative h-full w-full',
                                i === 2 ? 'origin-center' : 'origin-bottom',
                              )}
                            >
                              <Image
                                src={solution.image}
                                alt={solution.title}
                                fill
                                className="object-contain object-bottom"
                                sizes="(max-width: 768px) 100vw, 14rem"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-6">
                <p className="mb-2 text-sm font-semibold tabular-nums text-brand-mid">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                  {solution.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
