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
    body: {
      zh: [
        '产品页 [smeeting](/products/smeeting) 的 **Release** 区提供 **Google Play** 与 [`app-release.apk` 直链](https://github.com/YihanLi-erisaer/smeeting/releases/latest/download/app-release.apk)。**以下变更说明均摘自** [smeeting Releases](https://github.com/YihanLi-erisaer/smeeting) **对应版本的发行正文**（截至文档整理时共 **20** 个 Release，顺序为 **新→旧**）。',
        '',
        '本站页面由 [stardazz.com](https://github.com/YihanLi-erisaer/stardazz.com) 仓库构建，部署记录见 [**Deployments**](https://github.com/YihanLi-erisaer/stardazz.com/deployments)，与 Android APK 节奏独立。',
        '',
        '## 全部 Release（按版本号 · 新→旧）',
        '',
        '- **[v4.1.3](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.3)**（Latest）— 优化 AI 摘要场景下的**语言识别准确度**。',
        '- **[v4.1.2](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.2)** — 修复 ASR 转写中**新一句可能覆盖上一句**的问题。',
        '- **[v4.1.1](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.1)** — 下载 AI 模型时**保持亮屏**；生成摘要时让转写区域**跳到最新输出位置**。',
        '- **[v4.1.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.0)** — **显著提升**摘要推理速度与准确度；LLM 框架由 llama-cpp 换为 **ncnn**；模型换为 **Qwen3.0 0.6B**；设置页**不再显示** ASR 运行于 CPU 或 GPU；修复「打开应用摘要一次后无法再次摘要、需重启」的问题。（Release 中附 **Full Changelog**：v3.3.16…v4.1.0）',
        '- **[v4.0.6-beta](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.0.6-beta)**（预发布）— 修复**中国大陆**环境下无法下载模型文件的问题。',
        '- **[v4.0.5-beta](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.0.5-beta)**（预发布）— 增加**删除模型**；生成摘要时保持亮屏；修复取消摘要后再次点「重新摘要」无法启动、**文本过长导致崩溃**等问题。',
        '- **[v4.0.0-beta](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.0.0-beta)**（预发布）— **LLM 摘要 Beta**：已可运行摘要，仍有性能与小问题；**中文**等语言支持增强。',
        '- **[v3.3.16](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.16)** — 标题注明为「**仅语音转写**的最后一版稳定能力」：主界面 UI **自适应**不同屏幕尺寸；修复**系统导航栏**显示问题。',
        '- **[v3.3.15](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.15)** — **浅色/深色主题**可随系统变化；转写详情页可选中**指定文本片段**。',
        '- **[v3.3.13](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.13)** — 历史记录中可**全屏**查看单条转写；更换 **图标与应用名称**。',
        '- **[v3.3.10](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.10)** — **聆听时保持亮屏**；结果区域满时可**自动向下滚动**；**性能**优化。',
        '- **[v3.3.7](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.7)** — **性能**改进；修复模型可能被**重复初始化**的问题。',
        '- **[v3.3.1](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.1)** — 优化**启动流程**，启动模块更稳健；修复启动过程中的**崩溃**。',
        '- **[v3.3.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.0)** — 支持 **GPU 推理**（不可用时回退 CPU）；调整**历史与设置**页按钮布局。',
        '- **[v3.2.2](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.2.2)** — **标点算法**优化（v3.2.2）。',
        '- **[v3.2.1](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.2.1)** — 调整历史页的**文案、按钮图标与 UI**。',
        '- **[v.3.2.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v.3.2.0)** — **转写历史页**：本地存储全部转写；历史页可复制或删除**单条**转写。（标签名为 `v.3.2.0`）',
        '- **[v.3.1.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v.3.1.0)** — 本版说明：历史页模块已加入并可从主页进入（Release 标题注明历史页在本版**尚不可访问**、其余功能正常；标签名为 `v.3.1.0`）。',
        '- **[v3.0.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.0.0)** — **启动优化**：缩短初始化时间，加快模型加载并可更快开始转写。',
        '- **[v2.4.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v2.4.0)** — 设置中可在 **Beam search** 与默认 **Greedy search** 之间选择。',
        '',
        '## 如何跟进',
        '',
        '- **安装**：Play 商店与 Release APK 见 [产品页](/products/smeeting)。',
        '- **Android 反馈**：[smeeting Issues](https://github.com/YihanLi-erisaer/smeeting/issues)。',
        '- **官网 / Dev Blog**：[stardazz.com 仓库](https://github.com/YihanLi-erisaer/stardazz.com) · [Deployments](https://github.com/YihanLi-erisaer/stardazz.com/deployments)。',
      ].join('\n'),
      'zh-HK': [
        '產品頁 [smeeting](/products/smeeting) 的 **Release** 區提供 **Google Play** 與 [`app-release.apk` 直連](https://github.com/YihanLi-erisaer/smeeting/releases/latest/download/app-release.apk)。**以下變更說明均摘自** [smeeting Releases](https://github.com/YihanLi-erisaer/smeeting) **對應版本的發行正文**（截至整理時共 **20** 個 Release，順序為 **新→舊**）。',
        '',
        '本站頁面由 [stardazz.com](https://github.com/YihanLi-erisaer/stardazz.com) 存放庫建置，部署紀錄見 [**Deployments**](https://github.com/YihanLi-erisaer/stardazz.com/deployments)，與 Android APK 節奏獨立。',
        '',
        '## 全部 Release（按版本號 · 新→舊）',
        '',
        '- **[v4.1.3](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.3)**（Latest）— 最佳化 AI 摘要場景下的**語言辨識準確度**。',
        '- **[v4.1.2](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.2)** — 修復 ASR 轉寫中**新一句可能覆蓋上一句**的問題。',
        '- **[v4.1.1](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.1)** — 下載 AI 模型時**保持螢幕亮起**；產生摘要時讓轉寫區域**跳到最新輸出位置**。',
        '- **[v4.1.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.0)** — **顯著提升**摘要推理速度與準確度；LLM 框架由 llama-cpp 改為 **ncnn**；模型改為 **Qwen3.0 0.6B**；設定頁**不再顯示** ASR 運行於 CPU 或 GPU；修復「開啟應用程式摘要一次後無法再次摘要、需重啟」的問題。（Release 附 **Full Changelog**：v3.3.16…v4.1.0）',
        '- **[v4.0.6-beta](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.0.6-beta)**（預發佈）— 修復**中國大陸**環境下無法下載模型檔案的問題。',
        '- **[v4.0.5-beta](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.0.5-beta)**（預發佈）— 新增**刪除模型**；產生摘要時保持螢幕亮起；修復取消摘要後再按「重新摘要」無法啟動、**文字過長導致當機**等問題。',
        '- **[v4.0.0-beta](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.0.0-beta)**（預發佈）— **LLM 摘要 Beta**：已可運行摘要，仍有效能與小問題；**中文**等語言支援增強。',
        '- **[v3.3.16](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.16)** — 標題註明為「**僅語音轉寫**」的最後一版穩定能力：主畫面 UI **自適應**不同螢幕尺寸；修復**系統導覽列**顯示問題。',
        '- **[v3.3.15](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.15)** — **淺色/深色主題**可隨系統變化；轉寫詳情頁可選取**指定文字片段**。',
        '- **[v3.3.13](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.13)** — 紀錄中可**全螢幕**檢視單筆轉寫；更換 **圖示與應用程式名稱**。',
        '- **[v3.3.10](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.10)** — **聆聽時保持螢幕亮起**；結果區域滿時可**自動向下捲動**；**效能**最佳化。',
        '- **[v3.3.7](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.7)** — **效能**改進；修復模型可能被**重複初始化**的問題。',
        '- **[v3.3.1](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.1)** — 最佳化**啟動流程**，啟動模組更穩健；修復啟動過程中的**當機**。',
        '- **[v3.3.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.0)** — 支援 **GPU 推理**（不可用時回退 CPU）；調整**紀錄與設定**頁按鈕版面。',
        '- **[v3.2.2](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.2.2)** — **標點演算法**最佳化（v3.2.2）。',
        '- **[v3.2.1](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.2.1)** — 調整紀錄頁的**字串、按鈕圖示與 UI**。',
        '- **[v.3.2.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v.3.2.0)** — **轉寫紀錄頁**：本機儲存全部轉寫；紀錄頁可複製或刪除**單筆**轉寫。（標籤名為 `v.3.2.0`）',
        '- **[v.3.1.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v.3.1.0)** — 本版說明：紀錄頁模組已加入並可從主頁進入（Release 標題註明紀錄頁在本版**尚不可存取**、其餘功能正常；標籤名為 `v.3.1.0`）。',
        '- **[v3.0.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.0.0)** — **啟動最佳化**：縮短初始化時間，加快模型載入並可更快開始轉寫。',
        '- **[v2.4.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v2.4.0)** — 設定中可在 **Beam search** 與預設 **Greedy search** 之間選擇。',
        '',
        '## 如何跟進',
        '',
        '- **安裝**：Play 商店與 Release APK 見 [產品頁](/products/smeeting)。',
        '- **Android 回饋**：[smeeting Issues](https://github.com/YihanLi-erisaer/smeeting/issues)。',
        '- **官網 / Dev Blog**：[stardazz.com 存放庫](https://github.com/YihanLi-erisaer/stardazz.com) · [Deployments](https://github.com/YihanLi-erisaer/stardazz.com/deployments)。',
      ].join('\n'),
      en: [
        'The [smeeting product page](/products/smeeting) links **Google Play** and the [`app-release.apk` direct download](https://github.com/YihanLi-erisaer/smeeting/releases/latest/download/app-release.apk). **Every bullet below quotes the published notes** for that tag on [smeeting Releases](https://github.com/YihanLi-erisaer/smeeting) (**20** releases total at the time of writing, **newest first**).',
        '',
        'This site is built from the [stardazz.com](https://github.com/YihanLi-erisaer/stardazz.com) repo; deploy history lives under [**Deployments**](https://github.com/YihanLi-erisaer/stardazz.com/deployments), separate from the Android APK cadence.',
        '',
        '## All releases (by version, newest first)',
        '',
        '- **[v4.1.3](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.3)** (Latest) — Optimize **language recognition accuracy** in AI summary.',
        '- **[v4.1.2](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.2)** — Fix ASR where a **new utterance may cover** the previous one.',
        '- **[v4.1.1](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.1)** — **Keep screen on** while downloading the AI model; **scroll the transcription box** to the newest output while the model generates a summary.',
        '- **[v4.1.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.1.0)** — **Much faster, more accurate** summary inference; LLM stack moved to **ncnn** (replacing llama-cpp); model **Qwen3.0 0.6B**; **removed** CPU/GPU ASR labels in Settings; fixed “summarize once, cannot re-summarize until app restart”. (**Full Changelog** on the release: v3.3.16…v4.1.0.)',
        '- **[v4.0.6-beta](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.0.6-beta)** (Pre-release) — Fix model download in **mainland China**.',
        '- **[v4.0.5-beta](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.0.5-beta)** (Pre-release) — **Delete model**; keep screen on while generating summary; fix re-summarize after cancel; fix **crash on very long** text.',
        '- **[v4.0.0-beta](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v4.0.0-beta)** (Pre-release) — **LLM summary beta** (usable, with perf issues and small bugs); more **Chinese** support.',
        '- **[v3.3.16](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.16)** — Titled **last stable speech-to-text-only** line: **responsive** main UI; fix **system navigation bar** display.',
        '- **[v3.3.15](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.15)** — **Light/dark theme** can follow the system; select a **specific text chunk** on the transcription detail page.',
        '- **[v3.3.13](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.13)** — History can open a transcription **full screen**; **icon and app name** updated.',
        '- **[v3.3.10](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.10)** — **Keep screen on** while listening; result box **auto-scrolls** when full; **performance** work.',
        '- **[v3.3.7](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.7)** — **Performance**; fix **double model initialization**.',
        '- **[v3.3.1](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.1)** — **Startup** flow more robust; fix **crashes during startup**.',
        '- **[v3.3.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.3.0)** — **GPU inference** with CPU fallback; **history & settings** button layout.',
        '- **[v3.2.2](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.2.2)** — **Punctuation algorithm** improvements.',
        '- **[v3.2.1](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.2.1)** — History page **strings, icons, and UI** tweaks.',
        '- **[v.3.2.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v.3.2.0)** — **Transcription history** stored locally; copy or delete **single** items. (Tag spelled `v.3.2.0`.)',
        '- **[v.3.1.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v.3.1.0)** — Release title: history page **not reachable** in this build, other features OK; notes mention adding the history module from the main page. (Tag spelled `v.3.1.0`.)',
        '- **[v3.0.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v3.0.0)** — **Startup optimization**: faster init, faster model load, quicker path to transcription.',
        '- **[v2.4.0](https://github.com/YihanLi-erisaer/smeeting/releases/tag/v2.4.0)** — Choose **Beam search** vs default **Greedy search** in Settings.',
        '',
        '## Where to follow along',
        '',
        '- **Install**: Play + APK on the [product page](/products/smeeting).',
        '- **Android**: [smeeting Issues](https://github.com/YihanLi-erisaer/smeeting/issues).',
        '- **Website**: [stardazz.com repo](https://github.com/YihanLi-erisaer/stardazz.com) · [Deployments](https://github.com/YihanLi-erisaer/stardazz.com/deployments).',
      ].join('\n'),
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
    },
  },
]

export function getDevBlogPostBySlug(slug: string): DevBlogPost | undefined {
  return DEV_BLOG_POSTS.find((p) => p.slug === slug)
}

export function getDevBlogPostsSorted(): DevBlogPost[] {
  return [...DEV_BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}
