import type { Locale } from '../i18n/messages'

/** Bilingual fields for dev blog posts (add new posts here). */
export type LocalizedText = Record<Locale, string>

export type DevBlogPost = {
  slug: string
  /** ISO `YYYY-MM-DD` for sorting and display */
  date: string
  title: LocalizedText
  excerpt: LocalizedText
  /** Full Markdown body per locale */
  body: LocalizedText
}

export const DEV_BLOG_POSTS: DevBlogPost[] = [
  {
    slug: 'smeeting-progress-update',
    date: '2026-04-01',
    title: {
      zh: 'smeeting 近期开发进展',
      en: 'Recent smeeting progress',
    },
    excerpt: {
      zh:
        '隐私政策、主题切换、交互式 UI 预览与下载入口等更新，以及后续性能与可访问性计划。',
      en:
        'Privacy page, theme switcher, interactive UI preview, download flow—and what is next for performance and a11y.',
    },
    body: {
      zh: [
        '这一迭代里，我们主要围绕**合规与体验**做了几件事：',
        '',
        '- 上线独立的**隐私政策**页面，说明麦克风、转写与本地模型的数据边界。',
        '- 站点与产品侧支持**浅色 / 深色主题**，减少长时间阅读的疲劳。',
        '- 增加**应用界面预览**（网页演示），方便在商店外快速了解主要界面状态。',
        '- 优化 **GitHub Releases / 下载**相关入口，让试用路径更直观。',
        '',
        '## 接下来',
        '',
        '会继续打磨 **性能**（启动、转写与摘要延迟）以及 **可访问性**（焦点、对比度与屏幕阅读器友好度）。欢迎在 [GitHub](https://github.com/YihanLi-erisaer/smeeting) 提 issue。',
      ].join('\n'),
      en: [
        'This cycle focused on **compliance and UX**:',
        '',
        '- Shipped a dedicated **privacy policy** page (mic, transcripts, on-device models).',
        '- Added **light/dark theme** across the site and product-facing surfaces.',
        '- Built an **in-app UI preview** (web mock-up) so people can skim flows before install.',
        '- Improved **GitHub Releases / download** entry points for a clearer try-out path.',
        '',
        '## Next',
        '',
        'We will keep tightening **performance** (cold start, ASR/summary latency) and **accessibility** (focus, contrast, screen-reader ergonomics). Issues welcome on [GitHub](https://github.com/YihanLi-erisaer/smeeting).',
      ].join('\n'),
    },
  },
  {
    slug: 'roadmap-next-steps',
    date: '2026-03-15',
    title: {
      zh: '下一阶段计划',
      en: 'What comes next',
    },
    excerpt: {
      zh: '更多开发日志、技术细节与里程碑公开，以及功能迭代的透明路线。',
      en:
        'More dev logs, technical write-ups, milestone posts, and a clearer public roadmap.',
    },
    body: {
      zh: [
        'Dev Blog 会从此前「静态公告」改成**可跳转的多篇文章**结构：每篇文章在代码里用 Markdown 维护，前端统一渲染。',
        '',
        '## 你在这里会看到',
        '',
        '- 版本亮点与**工程权衡**（为什么这样设计、放弃了什么）。',
        '- **性能与端侧模型**相关的实测笔记。',
        '- 与 smeeting 路线图对齐的**里程碑**更新。',
        '',
        '若有希望优先覆盖的主题，欢迎通过 GitHub 或邮件反馈。',
      ].join('\n'),
      en: [
        'The dev blog is now a **real index + post** setup: each article is Markdown in the repo and rendered on the site.',
        '',
        '## You can expect',
        '',
        '- Release notes with **engineering trade-offs** (what we picked and what we skipped).',
        '- Notes on **on-device models and performance** with real measurements.',
        '- **Milestone updates** aligned with the smeeting roadmap.',
        '',
        'If you want a topic covered first, ping us on GitHub or email.',
      ].join('\n'),
    },
  },
]

export function getDevBlogPostBySlug(slug: string): DevBlogPost | undefined {
  return DEV_BLOG_POSTS.find((p) => p.slug === slug)
}

export function getDevBlogPostsSorted(): DevBlogPost[] {
  return [...DEV_BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}
