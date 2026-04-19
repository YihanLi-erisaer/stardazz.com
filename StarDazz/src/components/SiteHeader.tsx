import { Link, NavLink } from 'react-router-dom'

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm transition-colors',
    isActive
      ? 'text-zinc-100'
      : 'text-zinc-400 hover:text-zinc-200',
  ].join(' ')

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-baseline gap-2 font-medium tracking-tight text-zinc-100"
        >
          <span className="text-lg">StarDazz</span>
          <span className="hidden text-xs font-normal text-zinc-500 sm:inline">
            软件
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/" className={navClass} end>
            首页
          </NavLink>
          <Link
            to="/#products"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            产品
          </Link>
          <a
            href="https://github.com/YihanLi-erisaer/smeeting"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
