import { Link } from 'react-router-dom'
import { MarkdownPreview } from '../components/MarkdownPreview'
import privacyEn from '../legal/smeeting-privacy.en.md?raw'
import privacyZh from '../legal/smeeting-privacy.zh.md?raw'
import { useLanguage } from '../i18n/LanguageContext'

export function SmeetingPrivacyPage() {
  const { locale, t } = useLanguage()
  const source = locale === 'zh' || locale === 'zh-TW' ? privacyZh : privacyEn

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(52,211,153,0.12),transparent)]"
      />

      <div className="mx-auto w-full max-w-[min(100%,96rem)] px-4 py-10 sm:px-6 sm:py-14">
        <nav className="text-sm text-zinc-600 dark:text-zinc-500">
          <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
            {t('smeeting.crumbHome')}
          </Link>
          <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
          <Link to="/products/smeeting" className="hover:text-zinc-900 dark:hover:text-zinc-300">
            smeeting
          </Link>
          <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
          <span className="text-zinc-700 dark:text-zinc-400">{t('smeetingPrivacy.crumbCurrent')}</span>
        </nav>

        <header className="mt-8 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400/90">
            smeeting
          </p>
          <p className="mt-2 text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {t('smeetingPrivacy.title')}
          </p>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-500">{t('smeetingPrivacy.updated')}</p>
        </header>

        <div className="mt-8 w-full">
          <div className="flex min-h-full w-full flex-col rounded-2xl border border-zinc-200 bg-white dark:border-white/[0.08] dark:bg-zinc-950/60">
            <div className="border-b border-zinc-200 px-4 py-3 dark:border-white/[0.06]">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
                {t('smeetingPrivacy.panelLabel')}
              </p>
            </div>
            <div className="min-h-0 flex-1 overflow-auto px-4 py-4 lg:min-h-[min(70vh,36rem)]">
              <MarkdownPreview source={source} />
            </div>
          </div>
        </div>

        <p className="mt-8 text-center">
          <Link
            to="/products/smeeting"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            {t('smeetingPrivacy.backSmeeting')}
          </Link>
        </p>
      </div>
    </div>
  )
}
