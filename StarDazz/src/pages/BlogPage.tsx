import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function BlogPage() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="text-sm text-zinc-600 dark:text-zinc-500">
        <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
          {t('blog.crumbHome')}
        </Link>
        <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
        <span className="text-zinc-700 dark:text-zinc-400">{t('blog.crumbCurrent')}</span>
      </nav>

      <header className="mt-8 max-w-3xl">
        <h1 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          {t('blog.title')}
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-500">{t('blog.subtitle')}</p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-zinc-950/60">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400/90">
            {t('blog.tagUpdate')}
          </p>
          <h2 className="mt-3 text-xl font-medium text-zinc-900 dark:text-zinc-100">
            {t('blog.post1Title')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            {t('blog.post1Body')}
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-zinc-950/60">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400/90">
            {t('blog.tagRoadmap')}
          </p>
          <h2 className="mt-3 text-xl font-medium text-zinc-900 dark:text-zinc-100">
            {t('blog.post2Title')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            {t('blog.post2Body')}
          </p>
        </article>
      </section>
    </div>
  )
}
