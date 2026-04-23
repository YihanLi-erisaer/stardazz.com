import { useLanguage } from '../i18n/LanguageContext'

export function SkipToMainLink() {
  const { t } = useLanguage()

  return (
    <a
      href="#main-content"
      className={[
        'fixed left-4 top-0 z-[200] -translate-y-full rounded-b-md',
        'bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 shadow-lg',
        'transition-transform duration-200 ease-out',
        'focus-visible:translate-y-0 focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2',
        'focus-visible:ring-offset-zinc-950',
      ].join(' ')}
    >
      {t('a11y.skipToMain')}
    </a>
  )
}
