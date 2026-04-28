import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const GITHUB = 'https://github.com/YihanLi-erisaer/smeeting'
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.stardazz.smeeting'

export function SmeetingSupportPage() {
  const { t } = useLanguage()

  const installOptions = [
    {
      title: t('smeetingSupport.playTitle'),
      body: t('smeetingSupport.playBody'),
      href: PLAY_STORE,
      label: t('smeetingSupport.playCta'),
    },
    {
      title: t('smeetingSupport.apkTitle'),
      body: t('smeetingSupport.apkBody'),
      href: `${GITHUB}/releases/latest/download/app-release.apk`,
      label: t('smeetingSupport.apkCta'),
    },
    {
      title: t('smeetingSupport.githubTitle'),
      body: t('smeetingSupport.githubBody'),
      href: `${GITHUB}/issues`,
      label: t('smeetingSupport.githubCta'),
    },
  ]

  const faqs = [
    { q: t('smeetingSupport.q1'), a: t('smeetingSupport.a1') },
    { q: t('smeetingSupport.q2'), a: t('smeetingSupport.a2') },
    { q: t('smeetingSupport.q3'), a: t('smeetingSupport.a3') },
    { q: t('smeetingSupport.q4'), a: t('smeetingSupport.a4') },
    { q: t('smeetingSupport.q5'), a: t('smeetingSupport.a5') },
  ]

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(52,211,153,0.12),transparent)]"
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label={t('a11y.breadcrumbNavigation')} className="text-sm text-zinc-600 dark:text-zinc-500">
          <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
            {t('smeeting.crumbHome')}
          </Link>
          <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
          <Link to="/products/smeeting" className="hover:text-zinc-900 dark:hover:text-zinc-300">
            smeeting
          </Link>
          <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
          <span className="text-zinc-700 dark:text-zinc-400">{t('smeetingSupport.crumbCurrent')}</span>
        </nav>

        <header className="mt-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400/90">
            smeeting
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            {t('smeetingSupport.title')}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t('smeetingSupport.subtitle')}
          </p>
        </header>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {installOptions.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/[0.08] dark:bg-zinc-950/60 dark:hover:border-white/[0.14] dark:hover:bg-white/[0.02]"
            >
              <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                {item.body}
              </p>
              <span className="mt-5 inline-flex text-sm font-medium text-emerald-600 dark:text-emerald-400/95">
                {item.label} →
              </span>
            </a>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-zinc-950/60 sm:p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
              {t('smeetingSupport.faqTitle')}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              {t('smeetingSupport.faqSub')}
            </p>
          </div>
          <div className="mt-8 divide-y divide-zinc-200 dark:divide-white/[0.08]">
            {faqs.map((item) => (
              <article key={item.q} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-100/70 p-6 dark:border-white/[0.08] dark:bg-zinc-950/50 sm:p-8">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
            {t('smeetingSupport.contactTitle')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t('smeetingSupport.contactBody')}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${GITHUB}/issues`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300"
            >
              {t('smeetingSupport.openIssue')}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
            >
              {t('smeetingSupport.emailLink')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
