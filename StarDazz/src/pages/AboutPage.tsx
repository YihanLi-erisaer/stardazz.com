import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function AboutPage() {
  const { t } = useLanguage()

  const highlights = [
    t('about.highlight1'),
    t('about.highlight2'),
    t('about.highlight3'),
  ]
  const stack = [
    t('about.stack1'),
    t('about.stack2'),
    t('about.stack3'),
    t('about.stack4'),
  ]
  const projects = [
    {
      title: 'smeeting',
      href: '/products/smeeting',
      body: t('about.projectSmeeting'),
    },
    {
      title: 'AI Client',
      href: 'https://github.com/YihanLi-erisaer/aiclient',
      body: t('about.projectAiClient'),
    },
    {
      title: 'Web Crawler and Data Analysis',
      href: 'https://github.com/YihanLi-erisaer/Elements-of-data-processing-webpage-crawler',
      body: t('about.projectCrawler'),
    },
  ]

  return (
    <div className="mx-auto w-full max-w-[min(100%,96rem)] px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label={t('a11y.breadcrumbNavigation')} className="text-sm text-zinc-600 dark:text-zinc-500">
        <Link to="/" className="hover:text-zinc-900 dark:hover:text-zinc-300">
          {t('about.crumbHome')}
        </Link>
        <span className="mx-2 text-zinc-500 dark:text-zinc-600">/</span>
        <span className="text-zinc-700 dark:text-zinc-400">{t('about.crumbCurrent')}</span>
      </nav>

      <header className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          {t('about.title')}
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-500">{t('about.subtitle')}</p>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-zinc-950/60 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-500 dark:text-emerald-400/90">
            {t('about.profileLabel')}
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
            {t('about.profileTitle')}
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t('about.profileBody')}
          </p>
          <ul className="mt-6 grid gap-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <aside className="rounded-2xl border border-zinc-200 bg-zinc-100/70 p-6 dark:border-white/[0.08] dark:bg-zinc-950/50 sm:p-8">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{t('about.currentTitle')}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t('about.currentBody')}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300"
            >
              {t('about.contactCta')}
            </Link>
            <a
              href="https://github.com/YihanLi-erisaer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/15 dark:bg-white/[0.03] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.06]"
            >
              GitHub
            </a>
          </div>
        </aside>
      </div>

      <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-zinc-950/60 sm:p-8">
        <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{t('about.stackTitle')}</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {stack.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-zinc-950/60 sm:p-8">
        <div className="max-w-2xl">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
            {t('about.projectsTitle')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            {t('about.projectsSub')}
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {projects.map((project) => {
            const isExternal = project.href.startsWith('http')
            const className =
              'block rounded-xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-300 hover:bg-zinc-100 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.04]'
            const content = (
              <>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                  {project.body}
                </p>
              </>
            )

            return isExternal ? (
              <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className={className}>
                {content}
              </a>
            ) : (
              <Link key={project.title} to={project.href} className={className}>
                {content}
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-100/70 p-6 dark:border-white/[0.08] dark:bg-zinc-950/50 sm:p-8">
        <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{t('about.educationTitle')}</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t('about.educationBody')}
        </p>
      </section>
    </div>
  )
}
