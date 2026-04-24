import { useTheme } from '../theme/ThemeContext'

type Props = {
  sizeClassName?: string
}

export function SmeetingBrandIcon({ sizeClassName = 'h-14 w-14' }: Props) {
  const { theme } = useTheme()
  const src = theme === 'dark' ? '/smeeting-icon-dark.png' : '/smeeting-icon-light.png'

  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-[1.9rem] border border-zinc-200 bg-[#eceef2] shadow-[0_6px_16px_-8px_rgba(0,0,0,0.35)] dark:border-zinc-800 dark:bg-[#090b12] ${sizeClassName}`}
    >
      <img
        src={src}
        alt="smeeting icon"
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
    </div>
  )
}
