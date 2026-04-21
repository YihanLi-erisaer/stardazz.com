import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/messages'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current?.contains(e.target as Node)) return
      setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  const pick = (next: Locale) => {
    setLocale(next)
    setOpen(false)
  }

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('lang.menuAria')}
        onClick={(e) => {
          e.stopPropagation()
          setOpen((v) => !v)
        }}
        className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-zinc-100"
      >
        <span>{locale === 'zh' ? t('lang.zhShort') : t('lang.enShort')}</span>
        <svg
          className={`h-3.5 w-3.5 text-zinc-500 transition ${open ? 'rotate-180' : ''}`}
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

      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-[60] mt-1 min-w-[9.5rem] overflow-hidden rounded-lg border border-white/10 bg-zinc-900 py-1 shadow-xl shadow-black/40"
        >
          <li role="option" aria-selected={locale === 'zh'}>
            <button
              type="button"
              className={`flex w-full px-3 py-2 text-left text-sm transition hover:bg-white/[0.06] ${
                locale === 'zh' ? 'text-zinc-100' : 'text-zinc-400'
              }`}
              onClick={() => pick('zh')}
            >
              {t('lang.zh')}
            </button>
          </li>
          <li role="option" aria-selected={locale === 'en'}>
            <button
              type="button"
              className={`flex w-full px-3 py-2 text-left text-sm transition hover:bg-white/[0.06] ${
                locale === 'en' ? 'text-zinc-100' : 'text-zinc-400'
              }`}
              onClick={() => pick('en')}
            >
              {t('lang.en')}
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  )
}
