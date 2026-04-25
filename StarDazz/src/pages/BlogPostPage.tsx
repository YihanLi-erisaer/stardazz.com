import { Link, useParams } from 'react-router-dom'
import { MarkdownPreview } from '../components/MarkdownPreview'
import { NotFoundPage } from './NotFoundPage'
import { getDevBlogPostBySlug } from '../content/devBlogPosts'
import { useLanguage } from '../i18n/LanguageContext'
import { localeToDateFormatLocale } from '../i18n/localeDisplay'
import type { Locale } from '../i18n/messages'

function formatBlogDate(iso: string, locale: Locale): string {
  const d = new Date(`${iso}T12:00:00`)
  try {
    return new Intl.DateTimeFormat(localeToDateFormatLocale(locale), {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(d)
  } catch {
    return iso
  }
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { locale, t } = useLanguage()
  const post = slug ? getDevBlogPostBySlug(slug) : undefined

  if (!post) {
    return <NotFoundPage />
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="text-sm text-zinc-600 dark:text-zinc-500">
        <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
          {t('blog.crumbHome')}
        </Link>
        <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
        <Link to="/blog" className="hover:text-zinc-900 dark:hover:text-zinc-300">
          {t('blog.crumbCurrent')}
        </Link>
        <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
        <span className="text-zinc-700 dark:text-zinc-400">{post.title[locale]}</span>
      </nav>

      <header className="mt-8 border-b border-zinc-200 pb-8 dark:border-white/[0.08]">
        <time
          dateTime={post.date}
          className="font-mono text-sm text-zinc-500 dark:text-zinc-500"
        >
          {formatBlogDate(post.date, locale)}
        </time>
        <h1 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          {post.title[locale]}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.excerpt[locale]}
        </p>
      </header>

      <div className="mt-10">
        <MarkdownPreview source={post.body[locale]} />
      </div>

      <p className="mt-12">
        <Link
          to="/blog"
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          ← {t('blog.backToBlog')}
        </Link>
      </p>
    </div>
  )
}
