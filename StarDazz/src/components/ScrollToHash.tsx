import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to #id when the location hash changes (e.g. /#products). */
export function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    if (!id) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash, pathname])

  return null
}
