import { Link } from 'react-router-dom'

const GITHUB = 'https://github.com/YihanLi-erisaer/smeeting'

export function SmeetingPage() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(52,211,153,0.12),transparent)]"
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="text-sm text-zinc-500">
          <Link to="/" className="hover:text-zinc-300">
            首页
          </Link>
          <span className="mx-2 text-zinc-600">/</span>
          <span className="text-zinc-400">smeeting</span>
        </nav>

        <div className="mt-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400/90">
            StarDazz Product
          </p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight text-zinc-50 sm:text-5xl">
            smeeting
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-zinc-400">
            轻量智能会议助手，整合语音识别与 AI
            摘要，简化记录流程，并自动生成高效的会议纪要与行动项。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white"
            >
              GitHub 仓库
            </a>
            <a
              href={`${GITHUB}#readme`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              阅读说明
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] bg-zinc-950/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-medium text-zinc-100 sm:text-2xl">
            核心能力
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-500">
            面向会议记录与跟进的完整链路，减少手工整理时间。
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: '语音识别',
                desc: '将讨论内容转为文本，作为摘要与检索的基础。',
              },
              {
                title: 'AI 摘要',
                desc: '自动提炼会议要点，快速把握共识与分歧。',
              },
              {
                title: '会议纪要',
                desc: '结构化输出可读纪要，便于分享与归档。',
              },
              {
                title: '行动项',
                desc: '从讨论中提取待办，方便后续执行与追踪。',
              },
            ].map((f) => (
              <li
                key={f.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <h3 className="font-medium text-zinc-100">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {f.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/50 to-zinc-950 p-8 sm:p-10">
          <h2 className="text-lg font-medium text-zinc-100">开源与参与</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500">
            smeeting 的源码与更新托管在 GitHub。欢迎提交 Issue、贡献代码，或基于仓库自行构建与部署。
          </p>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex font-mono text-sm text-emerald-400/90 underline-offset-4 hover:text-emerald-300 hover:underline"
          >
            {GITHUB}
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="text-sm text-zinc-500 hover:text-zinc-300"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}
