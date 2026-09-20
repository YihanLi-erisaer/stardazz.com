import { Link } from 'react-router-dom'
import { Yt2biliBrandIcon } from '../components/Yt2biliBrandIcon'
import { useLanguage } from '../i18n/LanguageContext'

const GITHUB = 'https://github.com/YihanLi-erisaer/yt2bili'

export function Yt2biliPage() {
  const { t } = useLanguage()

  const features = [
    { title: t('yt2bili.f1t'), desc: t('yt2bili.f1d') },
    { title: t('yt2bili.f2t'), desc: t('yt2bili.f2d') },
    { title: t('yt2bili.f3t'), desc: t('yt2bili.f3d') },
    { title: t('yt2bili.f4t'), desc: t('yt2bili.f4d') },
  ]

  const steps = [
    t('yt2bili.s1'),
    t('yt2bili.s2'),
    t('yt2bili.s3'),
    t('yt2bili.s4'),
    t('yt2bili.s5'),
  ]

  const commands = [
    { cmd: 'python -m yt2bili setup', note: t('yt2bili.cSetup') },
    { cmd: 'python -m yt2bili login', note: t('yt2bili.cLogin') },
    { cmd: 'python -m yt2bili run URL --dry-run', note: t('yt2bili.cDryRun') },
    { cmd: 'python -m yt2bili run URL', note: t('yt2bili.cRun') },
    { cmd: 'python -m yt2bili run --file urls.txt -j 3', note: t('yt2bili.cBatch') },
    { cmd: 'python -m yt2bili retry VIDEO_ID', note: t('yt2bili.cRetry') },
  ]

  const modules = [
    { name: 'desktop/', body: t('yt2bili.mDesktop') },
    { name: 'desktop_worker.py', body: t('yt2bili.mWorker') },
    { name: 'scheduler.py', body: t('yt2bili.mScheduler') },
    { name: 'cli.py', body: t('yt2bili.mCli') },
    { name: 'pipeline.py', body: t('yt2bili.mPipeline') },
    { name: 'youtube.py', body: t('yt2bili.mYoutube') },
    { name: 'media.py', body: t('yt2bili.mMedia') },
    { name: 'translate.py', body: t('yt2bili.mTranslate') },
    { name: 'bili_upload.py', body: t('yt2bili.mUpload') },
  ]

  const defaults = [
    { item: t('yt2bili.dTid'), value: t('yt2bili.dTidV') },
    { item: t('yt2bili.dLine'), value: t('yt2bili.dLineV') },
    { item: t('yt2bili.dTags'), value: t('yt2bili.dTagsV') },
    { item: t('yt2bili.dMark'), value: t('yt2bili.dMarkV') },
    { item: t('yt2bili.dRes'), value: t('yt2bili.dResV') },
    { item: t('yt2bili.dJobs'), value: t('yt2bili.dJobsV') },
  ]

  const screenshots = [
    {
      src: '/yt2bili/tasks-dark.png',
      alt: t('yt2bili.screenshotTasksDarkAlt'),
      caption: t('yt2bili.screenshotTasksDarkCaption'),
      wide: true,
    },
    {
      src: '/yt2bili/account-dark.png',
      alt: t('yt2bili.screenshotAccountAlt'),
      caption: t('yt2bili.screenshotAccountCaption'),
      wide: false,
    },
    {
      src: '/yt2bili/tasks-light.png',
      alt: t('yt2bili.screenshotTasksLightAlt'),
      caption: t('yt2bili.screenshotTasksLightCaption'),
      wide: false,
    },
  ]

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(251,114,153,0.14),transparent)]"
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label={t('a11y.breadcrumbNavigation')} className="text-sm text-zinc-600 dark:text-zinc-500">
          <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
            {t('yt2bili.crumbHome')}
          </Link>
          <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
          <Link to="/products" className="hover:text-zinc-900 dark:hover:text-zinc-300">
            {t('nav.products')}
          </Link>
          <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
          <span className="text-zinc-700 dark:text-zinc-400">yt2bili</span>
        </nav>

        <div className="mt-10 max-w-3xl">
          <div className="mb-5">
            <Yt2biliBrandIcon sizeClassName="h-24 w-24 sm:h-28 sm:w-28" />
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-[#fb7299]">
            {t('yt2bili.label')}
          </p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            yt2bili
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-xs text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-950/30 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
            {t('yt2bili.desktopStatus')}
          </p>
          <p className="mt-4 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t('yt2bili.intro')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-2.5 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300"
            >
              {t('yt2bili.repo')}
            </a>
            <a
              href={`${GITHUB}#readme`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
            >
              {t('yt2bili.readme')}
            </a>
            <Link
              to="/blog/yt2bili-desktop-alpha-1"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
            >
              {t('yt2bili.devBlog')}
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
            >
              {t('yt2bili.roadmap')}
            </Link>
          </div>
          <div className="mt-8 max-w-2xl rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-4 dark:border-amber-500/20 dark:bg-amber-950/20 sm:px-5">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-400">
              {t('yt2bili.legal')}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 bg-zinc-100/60 py-16 dark:border-white/[0.06] dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 sm:text-2xl">
            {t('yt2bili.screenshotsTitle')}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            {t('yt2bili.screenshotsSub')}
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {screenshots.map((screenshot) => (
              <figure
                key={screenshot.src}
                className={screenshot.wide ? 'lg:col-span-2' : undefined}
              >
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-white/[0.08] dark:bg-zinc-950">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-zinc-600 dark:text-zinc-500">
                  {screenshot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 py-16 dark:border-white/[0.06] sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 sm:text-2xl">
            {t('yt2bili.pipelineTitle')}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-500">
            {t('yt2bili.pipelineSub')}
          </p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li
                key={step}
                className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-white/[0.06] dark:bg-white/[0.02]"
              >
                <p className="font-mono text-xs text-[#fb7299]">0{index + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="border-t border-zinc-200 bg-zinc-100/60 py-16 dark:border-white/[0.06] dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 sm:text-2xl">
            {t('yt2bili.featuresTitle')}
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-500">{t('yt2bili.featuresSub')}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.02]"
              >
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200 py-16 dark:border-white/[0.06] sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 sm:text-2xl">
            {t('yt2bili.cliTitle')}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-500">{t('yt2bili.cliSub')}</p>
          <ul className="mt-8 grid gap-3">
            {commands.map((row) => (
              <li
                key={row.cmd}
                className="flex flex-col gap-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.06] dark:bg-white/[0.02]"
              >
                <code className="font-mono text-sm text-zinc-800 dark:text-zinc-200">{row.cmd}</code>
                <span className="text-sm text-zinc-600 dark:text-zinc-500">{row.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200 bg-zinc-100/60 py-16 dark:border-white/[0.06] dark:bg-zinc-950/60 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 sm:text-2xl">
            {t('yt2bili.archTitle')}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-500">{t('yt2bili.archSub')}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <li
                key={mod.name}
                className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-white/[0.06] dark:bg-white/[0.02]"
              >
                <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400/90">{mod.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">{mod.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 sm:text-2xl">
          {t('yt2bili.defaultsTitle')}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-500">{t('yt2bili.defaultsSub')}</p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-white/[0.08]">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-zinc-100/80 text-zinc-600 dark:bg-zinc-950/80 dark:text-zinc-400">
              <tr>
                <th className="px-4 py-3 font-medium">{t('yt2bili.defaultsColItem')}</th>
                <th className="px-4 py-3 font-medium">{t('yt2bili.defaultsColValue')}</th>
              </tr>
            </thead>
            <tbody>
              {defaults.map((row) => (
                <tr key={row.item} className="border-t border-zinc-200 dark:border-white/[0.06]">
                  <td className="px-4 py-3 text-zinc-800 dark:text-zinc-200">{row.item}</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 dark:border-white/[0.08] dark:from-zinc-900/50 dark:to-zinc-950 sm:p-10">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{t('yt2bili.ossTitle')}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            {t('yt2bili.ossBody')}
          </p>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex font-mono text-sm text-[#fb7299] underline-offset-4 hover:underline"
          >
            {GITHUB}
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300">
            ← {t('yt2bili.backHome')}
          </Link>
        </div>
      </div>
    </div>
  )
}
