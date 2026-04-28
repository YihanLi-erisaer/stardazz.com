import { Link } from 'react-router-dom'
import { getDevBlogPostsSorted } from '../content/devBlogPosts'
import { useLanguage } from '../i18n/LanguageContext'
import { localeToDateFormatLocale } from '../i18n/localeDisplay'
import type { Locale } from '../i18n/messages'

function formatBlogDate(iso: string, locale: Locale): string {
  const d = new Date(`${iso}T12:00:00`)
  try {
    return new Intl.DateTimeFormat(localeToDateFormatLocale(locale), {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(d)
  } catch {
    return iso
  }
}

export function BlogPage() {
  const { locale, t } = useLanguage()
  const posts = getDevBlogPostsSorted()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <nav aria-label={t('a11y.breadcrumbNavigation')} className="text-sm text-zinc-600 dark:text-zinc-500">
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

      <ul className="mt-10 flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <article className="rounded-2xl border border-zinc-200 bg-white transition hover:border-zinc-300 dark:border-white/[0.08] dark:bg-zinc-950/60 dark:hover:border-white/[0.14]">
              <Link
                to={`/blog/${post.slug}`}
                className="block p-6 no-underline outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950"
              >
                <time
                  dateTime={post.date}
                  className="font-mono text-xs text-zinc-500 dark:text-zinc-500"
                >
                  {formatBlogDate(post.date, locale)}
                </time>
                <h2 className="mt-2 text-xl font-medium text-zinc-900 dark:text-zinc-100">
                  {post.title[locale]}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                  {post.excerpt[locale]}
                </p>
                <span className="mt-4 inline-flex text-sm font-medium text-emerald-600 dark:text-emerald-400/95">
                  {t('blog.readMore')}
                  <span aria-hidden className="ml-1">
                    →
                  </span>
                </span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
