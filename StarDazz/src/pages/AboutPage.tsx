import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { MarkdownPreview } from '../components/MarkdownPreview'
import { useLanguage } from '../i18n/LanguageContext'
import { getMessage, messages } from '../i18n/messages'

export function AboutPage() {
  const { t, locale } = useLanguage()
  const sample = useMemo(
    () =>
      getMessage(
        messages[locale] as unknown as Record<string, unknown>,
        'about.sampleMd',
      ),
    [locale],
  )

  const value = sample

  return (
    <div className="mx-auto w-full max-w-[min(100%,96rem)] px-4 py-10 sm:px-6 sm:py-14">
      <nav className="text-sm text-zinc-600 dark:text-zinc-500">
        <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
          {t('about.crumbHome')}
        </Link>
        <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
        <span className="text-zinc-700 dark:text-zinc-400">{t('about.crumbCurrent')}</span>
      </nav>

      <header className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          {t('about.title')}
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-500">{t('about.subtitle')}</p>
      </header>

      <div className="mt-6 w-full">
        <div className="flex min-h-full w-full flex-col rounded-2xl border border-zinc-200 bg-white dark:border-white/[0.08] dark:bg-zinc-950/60">
          <div className="border-b border-zinc-200 px-4 py-3 dark:border-white/[0.06]">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
              {t('about.previewLabel')}
            </p>
          </div>
          <div className="min-h-0 flex-1 overflow-auto px-4 py-4 lg:min-h-[min(70vh,36rem)]">
            {value.trim() ? (
              <MarkdownPreview source={value} />
            ) : (
              <p className="text-sm text-zinc-500 dark:text-zinc-600">{t('about.emptyPreview')}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
