import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
        404
      </p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">
        {t('notFound.title')}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-zinc-400">{t('notFound.body')}</p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white"
      >
        {t('notFound.backHome')}
      </Link>
    </div>
  )
}
