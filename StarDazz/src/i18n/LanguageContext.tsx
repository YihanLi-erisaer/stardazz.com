import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  defaultLocale,
  getMessage,
  messages,
  type Locale,
} from './messages'

const STORAGE_KEY = 'stardazz-locale'

function readStoredLocale(): Locale {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'zh' || v === 'en') return v
  } catch {
    /* private mode / blocked storage */
  }
  return defaultLocale
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (path: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const t = useCallback(
    (path: string) =>
      getMessage(messages[locale] as unknown as Record<string, unknown>, path),
    [locale],
  )

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
  }, [locale])

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

/* Hook is intentionally co-located with the provider; splitting only triggers more boilerplate. */
// eslint-disable-next-line react-refresh/only-export-components -- allow useLanguage export
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
