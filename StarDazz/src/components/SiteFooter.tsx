import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-medium text-zinc-200">StarDazz</p>
          <p className="mt-1 text-sm text-zinc-500">{t('footer.blurb')}</p>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-2 text-sm text-zinc-500">
          <p className="text-sm font-medium">
            {t('footer.contact')}
          </p>
          <a
            href="mailto:stardazz@163.com"
            className="text-sm font-medium underline"
          >
            stardazz@163.com
          </a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
          <Link to="/" className="hover:text-zinc-300">
            {t('footer.home')}
          </Link>
          <Link to="/products/smeeting" className="hover:text-zinc-300">
            {t('footer.smeeting')}
          </Link>
        </div>
      </div>
      <div className="border-t border-white/[0.04] py-6 text-center text-xs text-zinc-600">
        © {year} StarDazz. {t('footer.copyright')}
      </div>
    </footer>
  )
}
