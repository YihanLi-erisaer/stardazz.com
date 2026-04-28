import { Link } from 'react-router-dom'
import { SmeetingBrandIcon } from '../components/SmeetingBrandIcon'
import { useLanguage } from '../i18n/LanguageContext'

export function ProductsPage() {
  const { t } = useLanguage()

  const principles = [
    { title: t('products.p1t'), body: t('products.p1b') },
    { title: t('products.p2t'), body: t('products.p2b') },
    { title: t('products.p3t'), body: t('products.p3b') },
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
            {t('products.crumbHome')}
          </Link>
          <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
          <span className="text-zinc-700 dark:text-zinc-400">{t('products.crumbCurrent')}</span>
        </nav>

        <header className="mt-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400/90">
            {t('products.label')}
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            {t('products.title')}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t('products.subtitle')}
          </p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <Link
            to="/products/smeeting"
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 transition hover:border-zinc-300 dark:border-white/[0.08] dark:from-zinc-900/80 dark:to-zinc-950 dark:hover:border-white/[0.14]"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-400/15" />
            <div className="relative">
              <SmeetingBrandIcon sizeClassName="h-20 w-20" />
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400/90">
                {t('products.featuredLabel')}
              </p>
              <h2 className="mt-2 text-2xl font-medium text-zinc-900 dark:text-zinc-50">smeeting</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-400">
                {t('products.smeetingBody')}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {t('products.viewProduct')}
                <span aria-hidden className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </div>
          </Link>

          <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-100/60 p-8 dark:border-white/[0.1] dark:bg-zinc-950/50">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-600">
              {t('products.nextLabel')}
            </p>
            <h2 className="mt-3 text-xl font-medium text-zinc-900 dark:text-zinc-100">
              {t('products.nextTitle')}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              {t('products.nextBody')}
            </p>
            <Link
              to="/roadmap"
              className="mt-6 inline-flex text-sm font-medium text-emerald-600 underline-offset-4 hover:text-emerald-500 hover:underline dark:text-emerald-400/95 dark:hover:text-emerald-300"
            >
              {t('products.roadmapLink')} →
            </Link>
          </div>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.02]"
            >
              <h2 className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                {item.body}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
