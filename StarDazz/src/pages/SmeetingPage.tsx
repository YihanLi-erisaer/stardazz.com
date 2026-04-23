import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const GITHUB = 'https://github.com/YihanLi-erisaer/smeeting'

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
        <nav className="text-sm text-zinc-500">
          <Link to="/" className="hover:text-zinc-300">
            {t('smeeting.crumbHome')}
          </Link>
          <span className="mx-2 text-zinc-600">/</span>
          <span className="text-zinc-400">smeeting</span>
        </nav>

        <div className="mt-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400/90">
            {t('smeeting.label')}
          </p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight text-zinc-50 sm:text-5xl">
            smeeting
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-zinc-400">
            {t('smeeting.intro')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${GITHUB}/releases/latest/download/app-release.apk`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white"
            >
              {t('smeeting.downloadRelease')}
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white"
            >
              {t('smeeting.repo')}
            </a>
            <a
              href={`${GITHUB}#readme`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              {t('smeeting.readme')}
            </a>
          </div>
          <div className="mt-8 max-w-2xl rounded-xl border border-white/[0.08] bg-zinc-950/50 px-4 py-4 sm:px-5">
            <p className="text-sm leading-relaxed text-zinc-400">
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

      <div className="border-t border-white/[0.06] bg-zinc-950/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-medium text-zinc-100 sm:text-2xl">
            {t('smeeting.featuresTitle')}
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-500">{t('smeeting.featuresSub')}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <h3 className="font-medium text-zinc-100">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {f.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/50 to-zinc-950 p-8 sm:p-10">
          <h2 className="text-lg font-medium text-zinc-100">{t('smeeting.ossTitle')}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500">
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
          <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-300">
            ← {t('smeeting.backHome')}
          </Link>
        </div>
      </div>
    </div>
  )
}
