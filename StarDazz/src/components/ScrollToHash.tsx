import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/** Keeps route navigation at the expected scroll position. */
export function ScrollToHash() {
  const { hash, pathname } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    const pathnameChanged = previousPathname.current !== pathname
    previousPathname.current = pathname

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      if (pathnameChanged) {
        requestAnimationFrame(() => {
          document.getElementById('main-content')?.focus({ preventScroll: true })
        })
      }
      return
    }

    const id = hash.slice(1)
    if (!id) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash, pathname])

  return null
}
