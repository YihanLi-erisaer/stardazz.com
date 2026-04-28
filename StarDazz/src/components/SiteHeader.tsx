import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm transition-colors',
    isActive
      ? 'text-zinc-900 dark:text-zinc-100'
      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200',
  ].join(' ')

export function SiteHeader() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur-xl dark:border-white/[0.06] dark:bg-zinc-950/80">
      <div
        className={[
          'mx-auto flex min-h-14 max-w-6xl min-w-0 flex-nowrap items-center justify-between gap-3 overflow-x-auto overflow-y-hidden overscroll-x-contain px-4 sm:overflow-x-visible sm:px-6',
          /* Firefox：细滚动条，仅在有横向溢出时出现 */
          '[scrollbar-color:rgb(113_113_122)_rgb(203_213_225)] [scrollbar-width:thin] dark:[scrollbar-color:rgb(113_113_122)_rgb(39_39_42)]',
          /* WebKit：底部横向滚动条轨道与滑块 */
          '[&::-webkit-scrollbar]:h-1.5',
          '[&::-webkit-scrollbar-track]:bg-zinc-300/80 dark:[&::-webkit-scrollbar-track]:bg-zinc-800/80',
          '[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-500/90',
          '[&::-webkit-scrollbar-thumb]:hover:bg-zinc-400',
        ].join(' ')}
      >
        <div className="flex min-w-0 shrink-0 flex-nowrap items-center gap-x-2 sm:gap-x-3">
          <Link
            to="/"
            className="flex items-baseline gap-2 font-medium tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            <span className="text-lg">StarDazz</span>
            <span className="hidden text-xs font-normal text-zinc-500 dark:text-zinc-500 sm:inline">
              {t('nav.tagline')}
            </span>
          </Link>
          <a
            href="https://space.bilibili.com/23941395"
            target="_blank"
            rel="noreferrer"
            aria-label={t('nav.bilibiliAria')}
            className="inline-flex max-w-[11rem] items-center truncate rounded-md border border-[#FB7299]/35 bg-[#FB7299]/10 px-2 py-1 text-[11px] font-medium leading-none text-[#ffc1d4] transition hover:border-[#FB7299]/55 hover:bg-[#FB7299]/18 sm:max-w-none sm:px-2.5 sm:text-xs"
          >
            {t('nav.bilibili')}
          </a>
        </div>
        <nav aria-label={t('a11y.primaryNavigation')} className="flex shrink-0 items-center gap-4 sm:gap-6">
          <NavLink to="/" className={navClass} end>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/products" className={navClass}>
            {t('nav.products')}
          </NavLink>
          <NavLink to="/blog" className={navClass}>
            {t('nav.blog')}
          </NavLink>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <NavLink to="/about" className={navClass}>
              {t('nav.about')}
            </NavLink>
            <a
              href="https://github.com/YihanLi-erisaer"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              {t('nav.github')}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
