type Props = {
  sizeClassName?: string
}

export function Yt2biliBrandIcon({ sizeClassName = 'h-14 w-14' }: Props) {
  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden rounded-[1.9rem] border border-zinc-200 bg-[#f8f7fb] shadow-[0_6px_16px_-8px_rgba(0,0,0,0.35)] dark:border-zinc-800 dark:bg-zinc-900 ${sizeClassName}`}
    >
      <img
        src="/yt2bili-icon.jpg"
        alt=""
        aria-hidden
        className="h-full w-full scale-[1.45] object-cover"
      />
      <span className="sr-only">yt2bili</span>
    </div>
  )
}
