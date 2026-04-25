/** Shown while lazy route chunks load (blog, about, product pages, etc.). */
export function RouteFallback() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center px-4"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading</span>
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-emerald-600 dark:border-zinc-600 dark:border-t-emerald-400"
        aria-hidden
      />
    </div>
  )
}
