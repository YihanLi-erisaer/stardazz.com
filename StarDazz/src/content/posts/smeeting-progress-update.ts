import type { LocalizedText } from '../devBlogPosts'

const body: LocalizedText = {
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
  'zh-HK': [
    '這一迭代裡，我們主要圍繞**合規與體驗**做了幾件事：',
    '',
    '- 上線獨立的**隱私權政策**頁面，說明麥克風、轉寫與本機模型的資料邊界。',
    '- 網站與產品側支援**淺色 / 深色主題**，減少長時間閱讀的疲勞。',
    '- 增加**應用程式介面預覽**（網頁演示），方便在商店外快速了解主要介面狀態。',
    '- 最佳化 **GitHub Releases / 下載**相關入口，讓試用路徑更直觀。',
    '',
    '## 接下來',
    '',
    '會繼續打磨 **效能**（啟動、轉寫與摘要延遲）以及 **無障礙**（焦點、對比度與螢幕閱讀器友善度）。歡迎在 [GitHub](https://github.com/YihanLi-erisaer/smeeting) 提 issue。',
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
}

export default body
