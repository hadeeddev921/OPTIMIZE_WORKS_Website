'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, ChevronRight, Menu } from 'lucide-react'

import HashLink from '@/components/HashLink'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { site } from '@/lib/content/site'

export default function Header() {
  const { primaryCta, secondary } = site.headerNav
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background pt-[env(safe-area-inset-top,0px)] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-2 py-3 sm:min-h-20 sm:gap-4 sm:py-0">
          <Link href="/" className="flex h-10 shrink-0 items-center sm:h-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clean-Logo.png-cMpEp9QiqzppD8oQGzfzPQooD29kFc.avif"
              alt="Optimize Works Logo"
              width={200}
              height={60}
              priority
              className="h-9 w-auto sm:h-12"
            />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-end gap-1.5 sm:gap-3 md:flex"
            aria-label="Main"
          >
            <div
              className={cn(
                'flex items-center rounded-full p-0 sm:p-1',
                'border border-border/70 bg-secondary/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]',
                'backdrop-blur-sm',
              )}
            >
              {secondary.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    'min-h-10 rounded-full px-2 text-xs font-medium sm:h-9 sm:min-h-9 sm:px-4 sm:text-sm',
                    'text-foreground/75 hover:text-foreground',
                    'hover:bg-background/90 shadow-sm',
                    'transition-colors duration-200',
                  )}
                  asChild
                >
                  <HashLink href={item.href}>{item.label}</HashLink>
                </Button>
              ))}
            </div>

            <Button
              variant="gradient"
              size="default"
              className={cn(
                'min-h-10 shrink-0 rounded-full px-3 sm:h-10 sm:min-h-10 sm:px-5',
                'text-xs font-semibold tracking-wide sm:text-sm',
                'ring-1 ring-inset ring-white/15 shadow-brand',
                'hover:brightness-[1.03] active:scale-[0.98]',
                'transition-[transform,filter] duration-150',
              )}
              asChild
            >
              <Link
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hidden lg:inline">{primaryCta.label}</span>
                <span className="lg:hidden">{primaryCta.shortLabel}</span>
              </Link>
            </Button>
          </nav>

          <Sheet modal={false} open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'min-h-10 min-w-10 shrink-0 rounded-full border border-border/70 bg-secondary/50 shadow-sm backdrop-blur-sm md:hidden',
                  'ring-1 ring-white/10 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  'hover:bg-secondary/60 hover:shadow-md hover:ring-brand-bright/25',
                  'motion-reduce:transition-none',
                )}
                aria-label="Open menu"
              >
                <Menu className="size-5 stroke-[1.5]" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              overlayClassName="bg-black/60 backdrop-blur-[2px]"
              closeClassName={cn(
                'rounded-full border border-border/60 bg-secondary/80 p-2 opacity-100',
                'hover:bg-background hover:opacity-100',
                'shadow-sm transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
              )}
              className={cn(
                'gap-0 border-l border-border/80',
                'bg-linear-to-b from-background via-background to-accent/15',
                'shadow-[inset_1px_0_0_rgba(255,255,255,0.08),-16px_0_48px_-12px_rgba(67,165,217,0.18),0_25px_50px_-12px_rgba(15,23,42,0.08)]',
                'backdrop-blur-xl',
                'px-0 pb-[max(1rem,env(safe-area-inset-bottom))] pt-0',
              )}
            >
              <div
                className={cn(
                  'relative flex min-h-full flex-1 flex-col overflow-hidden',
                  'before:pointer-events-none before:absolute before:inset-0 before:z-0',
                  'before:bg-[radial-gradient(ellipse_100%_55%_at_50%_-25%,rgba(67,165,217,0.14),transparent)]',
                )}
              >
                <SheetHeader className="relative z-10 space-y-1.5 border-0 px-7 pb-3 pt-14 text-left">
                  <SheetDescription className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    On this page
                  </SheetDescription>
                  <SheetTitle className="font-serif text-lg font-semibold tracking-tight text-foreground">
                    Navigate
                  </SheetTitle>
                </SheetHeader>
                <nav
                  className="relative z-10 flex flex-col px-7 pr-12 pb-6"
                  aria-label="Main"
                >
                  <div
                    className={cn(
                      'rounded-2xl border border-border/70 bg-secondary/40 p-1.5',
                      'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm',
                    )}
                  >
                    <div className="flex flex-col gap-0.5">
                      {secondary.map((item) => (
                        <HashLink
                          key={item.href}
                          href={item.href}
                          deferScrollMs={800}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'group flex min-h-12 items-center justify-between gap-3 rounded-xl px-4 py-3 text-[15px] font-medium tracking-tight',
                            'text-foreground/95 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                            'hover:bg-background/80 hover:text-foreground',
                            'active:scale-[0.99] motion-reduce:transition-none motion-reduce:active:scale-100',
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            className="size-4 shrink-0 text-muted-foreground/60 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                            aria-hidden
                          />
                        </HashLink>
                      ))}
                    </div>
                  </div>
                  <div
                    className="my-5 h-px w-full bg-linear-to-r from-transparent via-border/60 to-transparent"
                    aria-hidden
                  />
                  <div>
                    <Button
                      variant="gradient"
                      className={cn(
                        'w-full min-h-12 rounded-full font-semibold tracking-wide',
                        'ring-1 ring-inset ring-white/15 shadow-brand',
                        'hover:brightness-[1.03] active:scale-[0.98]',
                        'transition-[transform,filter] duration-150',
                      )}
                      asChild
                    >
                      <Link
                        href={primaryCta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>{primaryCta.shortLabel}</span>
                        <ArrowUpRight
                          className="size-4 shrink-0 opacity-90"
                          aria-hidden
                        />
                      </Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
