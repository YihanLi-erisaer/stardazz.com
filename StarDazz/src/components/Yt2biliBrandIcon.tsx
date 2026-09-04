type Props = {
  sizeClassName?: string
}

export function Yt2biliBrandIcon({ sizeClassName = 'h-14 w-14' }: Props) {
  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-[1.9rem] border border-zinc-200 bg-gradient-to-br from-[#fb7299]/15 via-zinc-50 to-zinc-100 shadow-[0_6px_16px_-8px_rgba(0,0,0,0.35)] dark:border-zinc-800 dark:from-[#fb7299]/20 dark:via-zinc-950 dark:to-zinc-900 ${sizeClassName}`}
    >
      <svg viewBox="0 0 64 64" className="h-[72%] w-[72%]" aria-hidden>
        <rect x="6" y="16" width="22" height="16" rx="4" fill="#FF3B30" />
        <polygon points="14,20 14,28 22,24" fill="#fff" />
        <path
          d="M32 24h6.5l4 8 4-8H53"
          fill="none"
          stroke="#FB7299"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="36" y="34" width="22" height="14" rx="4" fill="#FB7299" />
        <circle cx="44" cy="41" r="2.2" fill="#fff" />
        <circle cx="50" cy="41" r="2.2" fill="#fff" />
      </svg>
      <span className="sr-only">yt2bili</span>
    </div>
  )
}
