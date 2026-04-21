import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.18),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
}

export function HomePage() {
  const { t } = useLanguage()

  const approach = [
    { title: t('home.a1t'), body: t('home.a1b') },
    { title: t('home.a2t'), body: t('home.a2b') },
    { title: t('home.a3t'), body: t('home.a3b') },
  ]

  return (
    <div className="relative">
      <GridBackdrop />

      <section className="mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28">
        <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-400">
          {t('home.badge')}
        </p>
        <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-zinc-50 sm:text-5xl md:text-6xl md:leading-[1.08]">
          {t('home.heroTitle1')}
          <span className="block bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            {t('home.heroTitle2')}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {t('home.heroSub')}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/products/smeeting"
            className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white"
          >
            {t('home.ctaSmeeting')}
          </Link>
          <a
            href="https://github.com/YihanLi-erisaer/smeeting"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.06]"
          >
            {t('home.ctaGithub')}
          </a>
        </div>
      </section>

      <section
        id="products"
        className="scroll-mt-20 border-t border-white/[0.06] bg-zinc-950/50 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-medium tracking-tight text-zinc-100 sm:text-3xl">
              {t('home.productsTitle')}
            </h2>
            <p className="mt-3 text-zinc-500">{t('home.productsSub')}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/products/smeeting"
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-8 transition hover:border-white/[0.14] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-400/15" />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-wider text-emerald-400/90">
                  {t('home.cardLabel')}
                </p>
                <h3 className="mt-2 text-2xl font-medium text-zinc-50">smeeting</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">
                  {t('home.smeetingDesc')}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-zinc-200">
                  {t('home.viewDetails')}
                  <span aria-hidden className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </Link>

            <div className="flex flex-col justify-center rounded-2xl border border-dashed border-white/[0.1] bg-zinc-950/40 p-8 text-center">
              <p className="text-sm text-zinc-500">{t('home.comingTitle')}</p>
              <p className="mt-2 text-xs text-zinc-600">{t('home.comingSub')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-medium tracking-tight text-zinc-100 sm:text-3xl">
            {t('home.approachTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-500">
            {t('home.approachSub')}
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {approach.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <h3 className="font-medium text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
