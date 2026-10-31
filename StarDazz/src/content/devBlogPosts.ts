import type { Locale } from '../i18n/messages'

/** Localized blog metadata; Markdown bodies live in posts/<slug>.ts. */
export type LocalizedText = Record<Locale, string>

export type DevBlogPost = {
  slug: string
  /** ISO `YYYY-MM-DD` for sorting and display */
  date: string
  title: LocalizedText
  excerpt: LocalizedText
}

export const DEV_BLOG_POSTS: readonly DevBlogPost[] = [
  {
    slug: 'screator-desktop-workspace-october-2026',
    date: '2026-10-31',
    title: {
      zh: 'screator 十月开发记录：素材库、多平台投稿与新版桌面工作区',
      'zh-HK': 'screator 十月開發記錄：素材庫、多平台投稿與新版桌面工作區',
      en: 'screator in October: material libraries, more publishing targets, and a refreshed workspace',
    },
    excerpt: {
      zh: 'yt2bili 更名为 screator。十月主线加入素材库、自动识别下载类型、内嵌预览、本地视频与图文投稿，并更新队列总览、数据中心和多语言界面；Windows 与 Apple Silicon 安装包已有公开 Alpha。',
      'zh-HK': 'yt2bili 更名為 screator。十月主線加入素材庫、自動識別下載類型、內嵌預覽、本機影片與圖文投稿，並更新佇列總覽、數據中心和多語言介面；Windows 與 Apple Silicon 安裝套件已有公開 Alpha。',
      en: 'yt2bili is now screator. October development adds material libraries, automatic media detection, inline previews, local video and image posts, plus a refreshed queue overview, data center, and multilingual UI. Public Alpha downloads are available for Windows and Apple Silicon.',
    },
  },
  {
    slug: 'yt2bili-windows-multiplatform-1-0-alpha',
    date: '2026-10-01',
    title: {
      zh: 'yt2bili：Windows v0.3.0、多平台投稿与 v1.0.0alpha',
      'zh-HK': 'yt2bili：Windows v0.3.0、多平台投稿與 v1.0.0alpha',
      en: 'yt2bili: Windows v0.3.0, multi-platform publishing, and v1.0.0alpha',
    },
    excerpt: {
      zh:
        '9 月 24 日至 10 月 1 日的主线更新交付 Windows 安装包，加入抖音与实验性 AcFun、Qwen3.5 4B、投稿记录迁移，以及新一轮桌面 UX 与可靠性改造。',
      'zh-HK':
        '9 月 24 日至 10 月 1 日的主線更新交付 Windows 安裝套件，加入抖音與實驗性 AcFun、Qwen3.5 4B、投稿記錄遷移，以及新一輪桌面 UX 與可靠性改造。',
      en:
        'Main-branch updates from September 24 through October 1 deliver a Windows installer, add Douyin and experimental AcFun, move to Qwen3.5 4B, introduce history transfer, and harden the desktop UX.',
    },
  },
  {
    slug: 'yt2bili-five-accounts-local-translation',
    date: '2026-09-23',
    title: {
      zh: 'yt2bili 9 月 23 日更新：五账号队列与本地优先翻译',
      'zh-HK': 'yt2bili 9 月 23 日更新：五帳號佇列與本機優先翻譯',
      en: 'yt2bili September 23 update: five-account queues and local-first translation',
    },
    excerpt: {
      zh:
        '单链接任务扩展到最多五个 B 站账号，并加入托管 Ollama/Qwen3 8B 本地翻译、DeepL 可选回退、协议 v2 与数据库 schema v3。',
      'zh-HK':
        '單連結任務擴展到最多五個 B 站帳號，並加入託管 Ollama/Qwen3 8B 本機翻譯、DeepL 可選回退、協議 v2 與資料庫 schema v3。',
      en:
        'Single-link tasks now support up to five Bilibili accounts, alongside managed Ollama/Qwen3 8B translation, optional DeepL fallback, protocol v2, and database schema v3.',
    },
  },
  {
    slug: 'yt2bili-desktop-alpha-1',
    date: '2026-09-20',
    title: {
      zh: 'yt2bili 桌面一期：0.2.0-alpha.1 完成工程验收',
      'zh-HK': 'yt2bili 桌面一期：0.2.0-alpha.1 完成工程驗收',
      en: 'yt2bili desktop phase 1: 0.2.0-alpha.1 passes engineering acceptance',
    },
    excerpt: {
      zh:
        '桌面开发版已实现任务中心、账号与连接、设置、预览确认投稿、持续调度和恢复机制，并通过本地自动化与原生通信验证。',
      'zh-HK':
        '桌面開發版已實現任務中心、帳號與連線、設定、預覽確認投稿、持續排程和恢復機制，並通過本機自動化與原生通訊驗證。',
      en:
        'The desktop development build now includes tasks, accounts, settings, preview-confirmed submission, persistent scheduling, and recovery, with local automation and native IPC checks passing.',
    },
  },
  {
    slug: 'yt2bili-desktop-roadmap',
    date: '2026-09-19',
    title: {
      zh: 'yt2bili：从命令行走向跨平台桌面应用',
      'zh-HK': 'yt2bili：從命令列走向跨平台桌面應用程式',
      en: 'yt2bili: from CLI to a cross-platform desktop app',
    },
    excerpt: {
      zh:
        '完成三期桌面端实施方案：先交付可视化工作流，再制作 Windows 安装程序，最后发布 Apple Silicon 与 Intel 两套 macOS DMG。',
      'zh-HK':
        '完成三期桌面端實施方案：先交付視覺化工作流程，再製作 Windows 安裝程式，最後發布 Apple Silicon 與 Intel 兩套 macOS DMG。',
      en:
        'A three-phase desktop plan: ship the visual workflow first, package a Windows installer next, then release separate Apple Silicon and Intel macOS DMGs.',
    },
  },
  {
    slug: 'yt2bili-incomplete-video-validation-fix',
    date: '2026-09-19',
    title: {
      zh: 'yt2bili：修复不完整视频误上传',
      'zh-HK': 'yt2bili：修復不完整影片誤上傳',
      en: 'yt2bili: preventing incomplete video uploads',
    },
    excerpt: {
      zh:
        '修复 `.part` 半成品被误判为完整文件的问题，新增上传前完整解码校验、损坏文件隔离与安全清理流程。',
      'zh-HK':
        '修復 `.part` 半成品被誤判為完整檔案的問題，新增上傳前完整解碼驗證、損壞檔案隔離與安全清理流程。',
      en:
        'Fixed partial `.part` downloads being mistaken for complete media, with full pre-upload decode validation, quarantine, and safer cleanup.',
    },
  },
  {
    slug: 'yt2bili-pipeline-and-commit-history',
    date: '2026-09-03',
    title: {
      zh: 'yt2bili：从第一次提交到 Windows 下载锁',
      'zh-HK': 'yt2bili：從第一次提交到 Windows 下載鎖',
      en: 'yt2bili: from first import to the Windows download lock',
    },
    excerpt: {
      zh:
        '根据 GitHub README 与全部 10 次提交，说明 yt2bili 如何把有权转载的 YouTube 视频下载、翻译并排队投稿到 B 站。',
      'zh-HK':
        '根據 GitHub README 與全部 10 次提交，說明 yt2bili 如何把有權轉載的 YouTube 影片下載、翻譯並排隊投稿到 B 站。',
      en:
        'From the README and all 10 GitHub commits: how yt2bili downloads authorized YouTube videos, translates metadata, and queues Bilibili uploads.',
    },
  },
  {
    slug: 'smeeting-release-and-deploy-history',
    date: '2026-04-27',
    title: {
      zh: 'smeeting 开发版本历史（Releases 与网站部署）',
      'zh-HK': 'smeeting 開發版本歷史（Releases 與網站部署）',
      en: 'smeeting release history (GitHub Releases & site deployments)',
    },
    excerpt: {
      zh:
        '按 GitHub Releases 上的版本号列出目前全部 20 个发行版说明（新→旧），并附网站部署说明。',
      'zh-HK':
        '按 GitHub Releases 上的版本號列出目前全部 20 個發行版說明（新→舊），並附網站部署說明。',
      en:
        'Every smeeting GitHub Release (20 tags, newest first) with notes, plus how the StarDazz site deploys.',
    },
  },
  {
    slug: 'smeeting-progress-update',
    date: '2026-04-01',
    title: {
      zh: 'smeeting 近期开发进展',
      'zh-HK': 'smeeting 近期開發進展',
      en: 'Recent smeeting progress',
    },
    excerpt: {
      zh:
        '隐私政策、主题切换、交互式 UI 预览与下载入口等更新，以及后续性能与可访问性计划。',
      'zh-HK':
        '隱私權政策、主題切換、互動式 UI 預覽與下載入口等更新，以及後續效能與無障礙計畫。',
      en:
        'Privacy page, theme switcher, interactive UI preview, download flow—and what is next for performance and a11y.',
    },
  },
  {
    slug: 'roadmap-next-steps',
    date: '2026-03-15',
    title: {
      zh: '下一阶段计划',
      'zh-HK': '下一階段計畫',
      en: 'What comes next',
    },
    excerpt: {
      zh: '更多开发日志、技术细节与里程碑公开，以及功能迭代的透明路线。',
      'zh-HK':
        '更多開發日誌、技術細節與里程碑公開，以及功能迭代的透明路線。',
      en:
        'More dev logs, technical write-ups, milestone posts, and a clearer public roadmap.',
    },
  },
]

const postsBySlug = new Map(DEV_BLOG_POSTS.map((post) => [post.slug, post]))
const sortedPosts = [...DEV_BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))

export function getDevBlogPostBySlug(slug: string): DevBlogPost | undefined {
  return postsBySlug.get(slug)
}

export function getDevBlogPostsSorted(): readonly DevBlogPost[] {
  return sortedPosts
}
