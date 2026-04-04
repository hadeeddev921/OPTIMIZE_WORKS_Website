'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToHash() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    if (pathname !== '/') return
    const hash = window.location.hash
    if (!hash || hash.length < 2) return

    const nav = performance.getEntriesByType(
      'navigation',
    )[0] as PerformanceNavigationTiming | undefined
    const isReload = nav?.type === 'reload'
    const isMobile = window.matchMedia('(max-width: 767px)').matches

    if (isReload && isMobile) {
      window.scrollTo(0, 0)
      window.history.replaceState(null, '', pathname || '/')
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
