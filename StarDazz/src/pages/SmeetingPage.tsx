import { Link } from 'react-router-dom'
import { SmeetingAppUiDemo } from '../components/SmeetingAppUiDemo'
import { SmeetingBrandIcon } from '../components/SmeetingBrandIcon'
import { useLanguage } from '../i18n/LanguageContext'

const GITHUB = 'https://github.com/YihanLi-erisaer/smeeting'
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.stardazz.smeeting'

export function SmeetingPage() {
  const { t } = useLanguage()

  const features = [
    { title: t('smeeting.f1t'), desc: t('smeeting.f1d') },
    { title: t('smeeting.f2t'), desc: t('smeeting.f2d') },
    { title: t('smeeting.f3t'), desc: t('smeeting.f3d') },
    { title: t('smeeting.f4t'), desc: t('smeeting.f4d') },
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
          <Link to="/products" className="hover:text-zinc-900 dark:hover:text-zinc-300">
            {t('nav.products')}
          </Link>
          <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
          <span className="text-zinc-700 dark:text-zinc-400">smeeting</span>
        </nav>

        <div className="mt-10 max-w-3xl">
          <div className="mb-5">
            <SmeetingBrandIcon sizeClassName="h-24 w-24 sm:h-28 sm:w-28" />
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400/90">
            {t('smeeting.label')}
          </p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            smeeting
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t('smeeting.intro')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={PLAY_STORE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-2.5 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300"
            >
              {t('smeeting.playStore')}
            </a>
            <a
              href={`${GITHUB}/releases/latest/download/app-release.apk`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-medium 
                text-zinc-50 bg-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 transition hover:bg-gray-800 dark:hover:bg-gray-300"
            >
              {t('smeeting.downloadRelease')}
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-6 py-2.5 text-sm 
                font-medium text-zinc-50 bg-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 transition hover:bg-gray-800 dark:hover:bg-gray-300"
              >
              {t('smeeting.repo')}
            </a>
            <a
              href={`${GITHUB}#readme`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-2.5 
                text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 
                dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
            >
              {t('smeeting.readme')}
            </a>
            <Link
              to="/products/smeeting/support"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
            >
              {t('smeeting.support')}
            </Link>
          </div>
          <div className="mt-8 max-w-2xl rounded-xl border border-zinc-200 bg-zinc-100/70 px-4 py-4 dark:border-white/[0.08] dark:bg-zinc-950/50 sm:px-5">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t('smeeting.privacyTeaser')}
            </p>
            <Link
              to="/products/smeeting/privacy"
              className="mt-3 inline-flex text-sm font-medium text-emerald-400/95 underline-offset-4 hover:text-emerald-300 hover:underline"
            >
              {t('smeeting.privacyLink')} →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 py-16 dark:border-white/[0.06] sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 sm:text-2xl">
            {t('smeeting.demoTitle')}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-500">{t('smeeting.demoSub')}</p>
          <div className="mt-10 flex justify-center sm:mt-12">
            <SmeetingAppUiDemo />
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 bg-zinc-100/60 py-16 dark:border-white/[0.06] dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 sm:text-2xl">
            {t('smeeting.featuresTitle')}
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-500">{t('smeeting.featuresSub')}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.02]"
              >
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                  {f.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 
          p-8 dark:border-white/[0.08] dark:from-zinc-900/50 dark:to-zinc-950 sm:p-10">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{t('smeeting.ossTitle')}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            {t('smeeting.ossBody')}
          </p>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex font-mono text-sm text-emerald-400/90 underline-offset-4 hover:text-emerald-300 hover:underline"
          >
            {GITHUB}
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300">
            ← {t('smeeting.backHome')}
          </Link>
        </div>
      </div>
    </div>
  )
}
