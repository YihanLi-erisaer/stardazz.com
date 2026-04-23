import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../theme/ThemeContext'

export function ThemeToggle() {
  const { t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('theme.switchToLightAria') : t('theme.switchToDarkAria')}
      title={isDark ? t('theme.switchToLight') : t('theme.switchToDark')}
      className="inline-flex items-center gap-1 rounded-md border border-zinc-300/80 bg-zinc-100/90 px-2.5 py-1 text-xs font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-200/80 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:text-zinc-100"
    >
      {isDark ? (
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zm0-15a.75.75 0 01.75.75V6a.75.75 0 01-1.5 0V3.75A.75.75 0 0112 3zM4.22 5.28a.75.75 0 011.06 0L6.9 6.9A.75.75 0 015.84 7.96L4.22 6.34a.75.75 0 010-1.06zm12.88 12.88a.75.75 0 011.06 0l1.62 1.62a.75.75 0 01-1.06 1.06L17.1 19.22a.75.75 0 010-1.06zM3 12a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm15 0a.75.75 0 01.75-.75H21a.75.75 0 010 1.5h-2.25A.75.75 0 0118 12zM5.28 19.78a.75.75 0 010-1.06L6.9 17.1a.75.75 0 111.06 1.06l-1.62 1.62a.75.75 0 01-1.06 0zM17.1 6.9l1.62-1.62a.75.75 0 011.06 1.06L18.16 7.96A.75.75 0 1117.1 6.9zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
        </svg>
      ) : (
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.11 2.5a.75.75 0 00-.92.86 8.75 8.75 0 0010.43 10.43.75.75 0 00.86-.92A9.75 9.75 0 1112.11 2.5z" />
        </svg>
      )}
      <span>{isDark ? t('theme.light') : t('theme.dark')}</span>
    </button>
  )
}
