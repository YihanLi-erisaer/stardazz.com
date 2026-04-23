import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  source: string
}

const components: Partial<Components> = {
  h1: ({ children }) => (
    <h1 className="mb-3 mt-8 border-b border-zinc-200 pb-2 text-2xl font-semibold tracking-tight text-zinc-900 first:mt-0 dark:border-white/10 dark:text-zinc-50">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-2 mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-2 mt-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-3 text-[0.9375rem] leading-relaxed text-zinc-700 last:mb-0 dark:text-zinc-300">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-emerald-400/95 underline decoration-emerald-400/40 underline-offset-2 hover:text-emerald-300"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="mb-3 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-3 list-decimal space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mb-3 border-l-2 border-zinc-400 pl-4 text-zinc-600 italic dark:border-zinc-600 dark:text-zinc-400">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-zinc-200 dark:border-white/10" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-zinc-800 dark:text-zinc-200">{children}</em>,
  pre: ({ children }) => (
    <pre className="mb-3 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-100 p-4 font-mono text-[0.8125rem] leading-relaxed text-zinc-800 dark:border-white/10 dark:bg-zinc-900/90 dark:text-zinc-200">
      {children}
    </pre>
  ),
  code: ({ className, children, ...props }) => {
    const isBlock = Boolean(className)
    if (isBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
    return (
      <code
        className="rounded-md bg-zinc-200/80 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-700 dark:bg-white/10 dark:text-emerald-200/95"
        {...props}
      >
        {children}
      </code>
    )
  },
  table: ({ children }) => (
    <div className="mb-3 overflow-x-auto rounded-lg border border-zinc-200 dark:border-white/10">
      <table className="w-full border-collapse text-left text-sm text-zinc-700 dark:text-zinc-300">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-zinc-100 dark:bg-white/[0.04]">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-t border-zinc-200 first:border-t-0 dark:border-white/[0.06]">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2 align-top text-zinc-700 dark:text-zinc-300">{children}</td>
  ),
}

export function MarkdownPreview({ source }: Props) {
  return (
    <div className="min-h-0 min-w-0">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {source}
      </ReactMarkdown>
    </div>
  )
}
