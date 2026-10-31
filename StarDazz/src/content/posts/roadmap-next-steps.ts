import type { LocalizedText } from '../devBlogPosts'

const body: LocalizedText = {
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
  'zh-HK': [
    'Dev Blog 會從此前「靜態公告」改成**可跳轉的多篇文章**結構：每篇文章在程式碼裡用 Markdown 維護，前端統一渲染。',
    '',
    '## 您在這裡會看到',
    '',
    '- 版本亮點與**工程權衡**（為什麼這樣設計、放棄了什麼）。',
    '- **效能與裝置端模型**相關的實測筆記。',
    '- 與 smeeting 路線圖對齊的**里程碑**更新。',
    '',
    '若有希望優先涵蓋的主題，歡迎透過 GitHub 或郵件回饋。',
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
}

export default body
