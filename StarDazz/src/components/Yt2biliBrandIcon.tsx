import { useTheme } from '../theme/ThemeContext'
import iconDark from '../assets/brand/screator-dark.jpg'
import iconLight from '../assets/brand/screator-light.jpg'

type Props = {
  sizeClassName?: string
}

export function Yt2biliBrandIcon({ sizeClassName = 'h-14 w-14' }: Props) {
  const { theme } = useTheme()

  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-[1.9rem] border border-zinc-200 bg-[#f8f7fb] shadow-[0_6px_16px_-8px_rgba(0,0,0,0.35)] dark:border-zinc-800 dark:bg-zinc-900 ${sizeClassName}`}
    >
      <img
        src={theme === 'dark' ? iconDark : iconLight}
        alt=""
        aria-hidden
        width={256}
        height={256}
        decoding="async"
        className="h-full w-full object-cover"
      />
      <span className="sr-only">screator</span>
    </div>
  )
}
