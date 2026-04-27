import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/messages'

type MenuPos = { top: number; right: number }

function localeShortLabel(locale: Locale, t: (key: string) => string): string {
  if (locale === 'en') return t('lang.enShort')
  if (locale === 'zh-HK') return t('lang.zhHantShort')
  return t('lang.zhShort')
}

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [menuPos, setMenuPos] = useState<MenuPos | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  const updateMenuPos = () => {
    const el = buttonRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setMenuPos({ top: r.bottom + 4, right: window.innerWidth - r.right })
  }

  useLayoutEffect(() => {
    if (!open) return
    updateMenuPos()
    const onWin = () => updateMenuPos()
    window.addEventListener('resize', onWin)
    window.addEventListener('scroll', onWin, true)
    return () => {
      window.removeEventListener('resize', onWin)
      window.removeEventListener('scroll', onWin, true)
    }
  }, [open])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      const node = e.target as Node
      if (wrapRef.current?.contains(node) || menuRef.current?.contains(node)) return
      setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  const pick = (next: Locale) => {
    setLocale(next)
    setOpen(false)
  }

  const itemClass = (active: boolean) =>
    `flex w-full px-3 py-2 text-left text-sm transition hover:bg-zinc-100 dark:hover:bg-white/[0.06] ${
      active
        ? 'text-zinc-900 dark:text-zinc-100'
        : 'text-zinc-600 dark:text-zinc-400'
    }`

  const menu =
    open && menuPos ? (
      <ul
        ref={menuRef}
        role="listbox"
        style={{
          position: 'fixed',
          top: menuPos.top,
          right: menuPos.right,
          zIndex: 100,
        }}
        className="min-w-[9.5rem] overflow-hidden rounded-lg border border-zinc-200 bg-white py-1 shadow-xl shadow-zinc-400/20 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/40"
      >
        <li role="option" aria-selected={locale === 'zh'}>
          <button type="button" className={itemClass(locale === 'zh')} onClick={() => pick('zh')}>
            {t('lang.zh')}
          </button>
        </li>
        <li role="option" aria-selected={locale === 'zh-HK'}>
          <button
            type="button"
            className={itemClass(locale === 'zh-HK')}
            onClick={() => pick('zh-HK')}
          >
            {t('lang.zhHant')}
          </button>
        </li>
        <li role="option" aria-selected={locale === 'en'}>
          <button type="button" className={itemClass(locale === 'en')} onClick={() => pick('en')}>
            {t('lang.en')}
          </button>
        </li>
      </ul>
    ) : null

  return (
    <div className="relative" ref={wrapRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('lang.menuAria')}
        onClick={(e) => {
          e.stopPropagation()
          setOpen((v) => !v)
        }}
        className="inline-flex items-center gap-1 rounded-md border border-zinc-300/80 bg-zinc-100/90 px-2.5 py-1 text-xs font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-200/80 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-zinc-100"
      >
        <span>{localeShortLabel(locale, t)}</span>
        <svg
          className={`h-3.5 w-3.5 text-zinc-500 transition dark:text-zinc-500 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {typeof document !== 'undefined' && menu
        ? createPortal(
            menu,
            document.getElementById('floating-ui-root') ?? document.body,
          )
        : null}
    </div>
  )
}
