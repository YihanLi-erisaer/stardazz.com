import { useTheme } from '../theme/ThemeContext'
import iconDark from '../assets/brand/smeeting-dark.jpg'
import iconLight from '../assets/brand/smeeting-light.jpg'

type Props = {
  sizeClassName?: string
}

export function SmeetingBrandIcon({ sizeClassName = 'h-14 w-14' }: Props) {
  const { theme } = useTheme()
  const src = theme === 'dark' ? iconDark : iconLight

  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-[1.9rem] border border-zinc-200 bg-[#eceef2] shadow-[0_6px_16px_-8px_rgba(0,0,0,0.35)] dark:border-zinc-800 dark:bg-[#090b12] ${sizeClassName}`}
    >
      <img
        src={src}
        alt="smeeting icon"
        width={256}
        height={256}
        className="h-full w-full object-cover object-center"
        decoding="async"
      />
    </div>
  )
}
