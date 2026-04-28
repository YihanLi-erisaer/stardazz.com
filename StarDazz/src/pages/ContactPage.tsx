import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function ContactPage() {
  const { t } = useLanguage()

  const topics = [
    t('contact.topic1'),
    t('contact.topic2'),
    t('contact.topic3'),
    t('contact.topic4'),
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <nav aria-label={t('a11y.breadcrumbNavigation')} className="text-sm text-zinc-600 dark:text-zinc-500">
        <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
          {t('contact.crumbHome')}
        </Link>
        <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
        <span className="text-zinc-700 dark:text-zinc-400">{t('contact.crumbCurrent')}</span>
      </nav>

      <header className="mt-8 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400/90">
          StarDazz
        </p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          {t('contact.title')}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t('contact.subtitle')}
        </p>
      </header>

      <section className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-zinc-950/60 sm:p-8">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{t('contact.emailTitle')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            {t('contact.emailBody')}
          </p>
          <a
            href="mailto:stardazz@163.com"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300"
          >
            stardazz@163.com
          </a>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-100/70 p-6 dark:border-white/[0.08] dark:bg-zinc-950/50 sm:p-8">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{t('contact.topicsTitle')}</h2>
          <ul className="mt-5 grid gap-3">
            {topics.map((topic) => (
              <li
                key={topic}
                className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-zinc-300"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-zinc-950/60 sm:p-8">
        <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{t('contact.linksTitle')}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://github.com/YihanLi-erisaer"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
          >
            GitHub
          </a>
          <a
            href="https://space.bilibili.com/23941395"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
          >
            Bilibili
          </a>
          <Link
            to="/products/smeeting/support"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
          >
            {t('contact.supportLink')}
          </Link>
        </div>
      </section>
    </div>
  )
}
