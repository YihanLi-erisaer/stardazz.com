import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function RoadmapPage() {
  const { t } = useLanguage()

  const items = [
    {
      phase: t('roadmap.phaseNow'),
      title: t('roadmap.nowTitle'),
      body: t('roadmap.nowBody'),
    },
    {
      phase: t('roadmap.phaseNext'),
      title: t('roadmap.nextTitle'),
      body: t('roadmap.nextBody'),
    },
    {
      phase: t('roadmap.phaseLater'),
      title: t('roadmap.laterTitle'),
      body: t('roadmap.laterBody'),
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <nav aria-label={t('a11y.breadcrumbNavigation')} className="text-sm text-zinc-600 dark:text-zinc-500">
        <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
          {t('roadmap.crumbHome')}
        </Link>
        <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
        <span className="text-zinc-700 dark:text-zinc-400">{t('roadmap.crumbCurrent')}</span>
      </nav>

      <header className="mt-8 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400/90">
          StarDazz
        </p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          {t('roadmap.title')}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t('roadmap.subtitle')}
        </p>
      </header>

      <section className="mt-12 grid gap-4">
        {items.map((item) => (
          <article
            key={item.phase}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-zinc-950/60 sm:p-8"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-600">
              {item.phase}
            </p>
            <h2 className="mt-3 text-xl font-medium text-zinc-900 dark:text-zinc-100">
              {item.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              {item.body}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-100/70 p-6 dark:border-white/[0.08] dark:bg-zinc-950/50 sm:p-8">
        <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{t('roadmap.followTitle')}</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t('roadmap.followBody')}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300"
          >
            {t('roadmap.blogCta')}
          </Link>
          <a
            href="https://github.com/YihanLi-erisaer/smeeting/releases"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
          >
            {t('roadmap.releasesCta')}
          </a>
        </div>
      </section>
    </div>
  )
}
