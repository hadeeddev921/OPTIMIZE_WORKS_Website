'use client'

import Link, { type LinkProps } from 'next/link'
import { forwardRef, type MouseEvent } from 'react'
import { usePathname } from 'next/navigation'

type Props = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    deferScrollMs?: number
  }

const HashLink = forwardRef<HTMLAnchorElement, Props>(function HashLink(
  { href, onClick, deferScrollMs = 0, ...rest },
  ref,
) {
  const pathname = usePathname()
  const hrefString = typeof href === 'string' ? href : ''

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)
    if (e.defaultPrevented) return
    if (!hrefString.startsWith('/#')) return
    if (pathname !== '/') return
    const id = hrefString.slice(2)
    if (!id) return
    e.preventDefault()
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', hrefString)
    }, deferScrollMs)
  }

  return <Link ref={ref} href={href} onClick={handleClick} {...rest} />
})

export default HashLink
