export type Locale = 'zh' | 'en'

export const defaultLocale: Locale = 'zh'

export const messages = {
  zh: {
    meta: {
      title: 'StarDazz — 软件工作室',
      description: 'StarDazz — 专注打造提升效率的软件产品。',
    },
    nav: {
      tagline: '软件',
      home: '首页',
      products: '产品',
      github: 'GitHub',
    },
    lang: {
      menuAria: '切换界面语言',
      zhShort: '中文',
      enShort: 'EN',
      zh: '简体中文',
      en: 'English',
    },
    footer: {
      blurb: '专注打造提升效率的软件产品。',
      home: '首页',
      smeeting: 'smeeting',
      copyright: '保留所有权利。',
    },
    home: {
      badge: 'StarDazz · 软件工作室',
      heroTitle1: '用简洁、可靠的工具，',
      heroTitle2: '把复杂工作变简单',
      heroSub:
        '我们设计与实现面向真实场景的生产力软件，从会议到协作，让团队把时间花在真正重要的事上。',
      ctaSmeeting: '了解 smeeting',
      ctaGithub: '在 GitHub 查看',
      productsTitle: '产品',
      productsSub:
        '每个产品独立页面介绍功能与获取方式，新工具会持续加入此列表。',
      cardLabel: '产品',
      smeetingDesc:
        '轻量智能会议助手：语音识别与 AI 摘要结合，自动生成会议纪要与待办，让记录与跟进更轻松。',
      viewDetails: '查看详情',
      comingTitle: '更多产品筹备中',
      comingSub: '敬请期待 StarDazz 的下一款工具。',
      approachTitle: '构建软件的全新方式',
      approachSub:
        '我们追求清晰的交互、稳定的性能与可信赖的数据处理——就像您期待的专业工具一样，开箱即用，并随需求演进。',
      a1t: '场景驱动',
      a1b: '从真实会议与协作流程出发设计功能，而不是堆砌特性。',
      a2t: 'AI 辅助',
      a2b: '在合适环节引入模型能力，减轻重复劳动，保留人的判断。',
      a3t: '开放协作',
      a3b: '关键项目开源或提供可验证的获取渠道，方便社区与企业采用。',
    },
    smeeting: {
      crumbHome: '首页',
      label: 'StarDazz 产品',
      intro:
        '轻量智能会议助手，整合语音识别与 AI 摘要，简化记录流程，并自动生成高效的会议纪要与行动项。',
      repo: 'GitHub 仓库',
      readme: '阅读说明',
      featuresTitle: '核心能力',
      featuresSub: '面向会议记录与跟进的完整链路，减少手工整理时间。',
      f1t: '语音识别',
      f1d: '将讨论内容转为文本，作为摘要与检索的基础。',
      f2t: 'AI 摘要',
      f2d: '自动提炼会议要点，快速把握共识与分歧。',
      f3t: '会议纪要',
      f3d: '结构化输出可读纪要，便于分享与归档。',
      f4t: '行动项',
      f4d: '从讨论中提取待办，方便后续执行与追踪。',
      ossTitle: '开源与参与',
      ossBody:
        'smeeting 的源码与更新托管在 GitHub。欢迎提交 Issue、贡献代码，或基于仓库自行构建与部署。',
      backHome: '返回首页',
    },
  },
  en: {
    meta: {
      title: 'StarDazz — Software Studio',
      description:
        'StarDazz — focused on productivity software that actually helps.',
    },
    nav: {
      tagline: 'Software',
      home: 'Home',
      products: 'Products',
      github: 'GitHub',
    },
    lang: {
      menuAria: 'Change language',
      zhShort: '中文',
      enShort: 'EN',
      zh: '简体中文',
      en: 'English',
    },
    footer: {
      blurb: 'We build focused productivity software.',
      home: 'Home',
      smeeting: 'smeeting',
      copyright: 'All rights reserved.',
    },
    home: {
      badge: 'StarDazz · Software Studio',
      heroTitle1: 'Simple, dependable tools',
      heroTitle2: 'that tame complex work',
      heroSub:
        'We design and ship productivity software for real workflows—from meetings to collaboration—so teams can spend time on what matters.',
      ctaSmeeting: 'Explore smeeting',
      ctaGithub: 'View on GitHub',
      productsTitle: 'Products',
      productsSub:
        'Each product has its own page with features and how to get it. More tools will land here over time.',
      cardLabel: 'Product',
      smeetingDesc:
        'A lightweight smart meeting assistant: speech recognition plus AI summaries to generate minutes and action items with less manual work.',
      viewDetails: 'Learn more',
      comingTitle: 'More products coming',
      comingSub: 'The next StarDazz tool is on the way.',
      approachTitle: 'A fresh way to build software',
      approachSub:
        'We care about clear UX, stable performance, and trustworthy data handling—professional tools that work on day one and evolve with you.',
      a1t: 'Use-case driven',
      a1b: 'Features shaped by real meetings and collaboration—not a pile of checkboxes.',
      a2t: 'AI where it helps',
      a2b: 'Models assist on repetitive work while you stay in control of decisions.',
      a3t: 'Open collaboration',
      a3b: 'Key projects are open source or easy to verify, for communities and teams.',
    },
    smeeting: {
      crumbHome: 'Home',
      label: 'StarDazz Product',
      intro:
        'A lightweight smart meeting assistant that combines speech recognition and AI summarization to streamline notes and produce minutes and action items.',
      repo: 'GitHub repository',
      readme: 'Read the README',
      featuresTitle: 'Capabilities',
      featuresSub:
        'End-to-end support for capturing meetings and following up—with less manual cleanup.',
      f1t: 'Speech recognition',
      f1d: 'Turn discussions into text as the foundation for summaries and search.',
      f2t: 'AI summaries',
      f2d: 'Surface key points so you can see alignment and open questions quickly.',
      f3t: 'Meeting minutes',
      f3d: 'Structured, readable notes that are easy to share and archive.',
      f4t: 'Action items',
      f4d: 'Extract to-dos from the conversation for execution and tracking.',
      ossTitle: 'Open source',
      ossBody:
        'smeeting’s source and updates live on GitHub—issues, contributions, and self-hosted builds are welcome.',
      backHome: 'Back to home',
    },
  },
} as const

export type Messages = (typeof messages)[Locale]

export function getMessage(
  root: Record<string, unknown>,
  path: string,
): string {
  const val = path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part]
    }
    return undefined
  }, root)
  return typeof val === 'string' ? val : path
}
