import{f as e,n as t,p as n}from"./chunk-OE4NN4TA-DYv-Ym73.js";import{t as r}from"./MarkdownPreview-94h0B1F8.js";var i=`# smeeting Privacy Policy\r
\r
**Last updated:** April 23, 2026\r
\r
**StarDazz** (“we”, “us”) publishes the **smeeting** Android application (“App”). This Privacy Policy explains how the App handles sensitive data on your device. It reflects the behavior described in the [public README](https://github.com/YihanLi-erisaer/smeeting/blob/master/README.md) of the open-source project and is intended to support transparency under Google Play **User data** expectations.\r
\r
---\r
\r
## 1. Audience (including children)\r
\r
The App is **not directed to children under 13** as its primary audience. If you are under 13, **do not use** smeeting unless a parent or legal guardian installs it, supervises its use, and accepts this Policy on your behalf.\r
\r
If you believe a child has used the App in a way that raises concerns, contact us (Section 11). We do not knowingly collect personal information from children for marketing purposes.\r
\r
---\r
\r
## 2. Summary of practices (from the product design)\r
\r
- **Streaming speech recognition (ASR):** Microphone audio is processed **entirely on the device** through native pipelines (Sherpa-NCNN / ncnn). The project documentation states there is **no cloud ASR** for streaming recognition.\r
- **Transcripts and history:** Meeting text and related entries are stored **locally** (e.g., Room / local history as described in the repository architecture).\r
- **Optional summarization:** You may **download** a quantized **Qwen3** ncnn weight bundle over HTTPS; after download, summarization runs **on-device** against transcripts you already have.\r
- **Network:** Network access is used when **you initiate** downloads of optional model assets (see download hosts referenced in the README, such as the ncnn model zoo mirror). Streaming ASR itself does not send your microphone audio to StarDazz-operated servers for recognition.\r
\r
---\r
\r
## 3. Categories of information processed\r
\r
| Category | What happens |\r
|----------|----------------|\r
| **Audio** | Short windows of microphone input for live ASR; processed on-device. |\r
| **Text / transcripts** | Text produced or saved in the App; stored locally unless you export or share it yourself. |\r
| **Optional model files** | Large bundles you download for optional LLM summarization; stored in app-internal storage paths documented in the source tree. |\r
| **Device & OS data** | Android may collect diagnostics independently of the App; refer to your device manufacturer and Google accounts settings. |\r
\r
We **do not sell** your personal information.\r
\r
---\r
\r
## 4. Android permissions\r
\r
The App may request permissions including:\r
\r
- **\`RECORD_AUDIO\`** — needed to capture audio for on-device ASR.\r
- **\`INTERNET\`** — used so you can **download** optional model bundles as documented in the repository (inference remains on-device).\r
\r
The exact list shown at runtime depends on your build and Android version; always review system permission dialogs.\r
\r
---\r
\r
## 5. Storage, retention, and deletion\r
\r
Data stays on your device under storage patterns described in the open-source project (including internal directories for optional Qwen3 assets). You can delete content where the App provides controls. **Uninstalling** the App removes application sandbox data according to Android rules.\r
\r
---\r
\r
## 6. Third parties and open-source software\r
\r
smeeting relies on **open-source** native components (e.g., Sherpa-NCNN, ncnn, optional Qwen3 ncnn bundles). When you download models, your device contacts third-party **HTTPS endpoints** listed in project documentation; those operators receive typical server logs (such as IP address and request time) like any file download.\r
\r
Source code is hosted on **GitHub** under the **Apache License 2.0**; use of GitHub is subject to GitHub’s policies.\r
\r
---\r
\r
## 7. Security\r
\r
We align product messaging with **on-device** processing for microphone data, ASR, and optional LLM inference, as stated in the README. No method of storage or processing is perfectly secure—keep your OS updated and protect physical access to your device.\r
\r
---\r
\r
## 8. International users\r
\r
If you use the App outside the country where we operate, processing still occurs on your device as described. Download traffic may be routed globally by your network provider.\r
\r
---\r
\r
## 9. Changes\r
\r
We may update this Policy when features or legal requirements change. We will adjust the **Last updated** date and, when appropriate, note significant changes on this site or in the GitHub repository.\r
\r
---\r
\r
## 10. Regulatory context\r
\r
Please review Google Play’s **User data** and **Families** policies. This Policy summarizes how the published smeeting documentation describes microphone audio, transcripts, optional downloads, and local storage.\r
\r
---\r
\r
## 11. Contact\r
\r
- **Email:** [stardazz@163.com](mailto:stardazz@163.com)  \r
- **Source & issues:** [github.com/YihanLi-erisaer/smeeting](https://github.com/YihanLi-erisaer/smeeting)\r
\r
---\r
\r
*This page is a convenience copy. If any wording conflicts with a specific app build, follow in-app disclosures and the matching source revision on GitHub.*\r
`,a=`# smeeting 隐私政策\r
\r
**最近更新：** 2026 年 4 月 23 日\r
\r
**StarDazz**（“我们”）发布 **smeeting** Android 应用（“本应用”）。本政策说明本应用如何在您的设备上处理敏感数据，并与 [GitHub 上公开 README](https://github.com/YihanLi-erisaer/smeeting/blob/master/README.md) 中描述的技术行为一致，便于您理解数据流向并满足应用商店对用户数据透明度的常见要求。\r
\r
---\r
\r
## 1. 适用人群（含儿童）\r
\r
本应用**并非**以 **13 周岁以下儿童**为主要受众进行设计或推广。若您未满 13 周岁，请在**家长或监护人**安装、监督使用并同意本政策的前提下再使用 smeeting。\r
\r
若您认为儿童在不当情形下使用了本应用，请通过第 11 节方式联系我们。我们不会故意为营销目的收集儿童的个人信息。\r
\r
---\r
\r
## 2. 数据处理概要（与产品设计一致）\r
\r
- **流式语音识别（ASR）：** 麦克风音频在**设备本地**通过原生管线（Sherpa-NCNN / ncnn）处理。项目文档说明流式识别**不使用云端 ASR**。\r
- **转写与历史记录：** 会议文本及相关条目**保存在本地**（例如 README 架构中描述的 Room / 本地历史）。\r
- **可选摘要：** 您可通过 HTTPS **下载**量化 **Qwen3** ncnn 权重包；下载完成后，摘要针对您已有的转写文本在**设备本地**运行。\r
- **网络：** 网络主要用于**您主动发起**的可选模型资源下载（参见 README 中列出的下载镜像，例如 ncnn 模型相关镜像）。流式 ASR 本身不会将您的麦克风音频发送到 StarDazz 运营的服务器进行识别。\r
\r
---\r
\r
## 3. 处理的信息类别\r
\r
| 类别 | 说明 |\r
|------|------|\r
| **音频** | 用于实时 ASR 的短时麦克风输入；在设备上处理。 |\r
| **文本 / 转写** | 本应用生成或保存的文本；保存在本地，除非您自行导出或分享。 |\r
| **可选模型文件** | 为可选 LLM 摘要下载的较大资源包；保存在源码树中说明的应用内部目录。 |\r
| **设备与系统数据** | Android 系统可能独立收集诊断信息；请参阅设备厂商与 Google 账户相关设置。 |\r
\r
我们**不会出售**您的个人信息。\r
\r
---\r
\r
## 4. Android 权限\r
\r
本应用可能申请的权限包括但不限于：\r
\r
- **\`RECORD_AUDIO\`** — 用于采集音频以进行设备端 ASR。\r
- **\`INTERNET\`** — 用于按仓库文档**下载**可选模型包（推理仍在设备端）。\r
\r
具体列表以您安装的版本及系统权限弹窗为准。\r
\r
---\r
\r
## 5. 存储、保留与删除\r
\r
数据保存在设备上，存储方式与开源仓库说明一致（含可选 Qwen3 资源的内部目录）。您可在应用提供的界面中删除内容。**卸载**应用将按 Android 规则清除应用沙盒数据。\r
\r
---\r
\r
## 6. 第三方与开源组件\r
\r
smeeting 依赖 **开源** 原生组件（如 Sherpa-NCNN、ncnn、可选 Qwen3 ncnn 包）。当您下载模型时，设备会访问项目文档中列出的第三方 **HTTPS** 端点；与任何文件下载类似，对方可能记录常规服务器日志（如 IP、请求时间）。\r
\r
源代码托管于 **GitHub**，采用 **Apache License 2.0**；使用 GitHub 受 GitHub 自身政策约束。\r
\r
---\r
\r
## 7. 安全\r
\r
我们与 README 一致，强调麦克风数据、ASR 与可选 LLM 推理以**设备端**为主。任何存储与处理方式都无法保证绝对安全——请保持系统更新并妥善保管设备物理访问。\r
\r
---\r
\r
## 8. 跨境与国际用户\r
\r
若您在境外使用本应用，处理仍主要发生在您的设备上。下载流量可能由您的运营商在全球范围内路由。\r
\r
---\r
\r
## 9. 政策变更\r
\r
当功能或法规要求变化时，我们可能更新本政策，并更新文首**最近更新**日期；重大变更时我们会在本站和/或 GitHub 仓库中另行说明。\r
\r
---\r
\r
## 10. 法规与商店政策提示\r
\r
请同时参阅 Google Play **用户数据**与**家庭**相关政策。本政策旨在概括已公开发布的 smeeting 文档中对麦克风、转写、可选下载与本地存储的说明。\r
\r
---\r
\r
## 11. 联系方式\r
\r
- **邮箱：** [stardazz@163.com](mailto:stardazz@163.com)  \r
- **源码与问题：** [github.com/YihanLi-erisaer/smeeting](https://github.com/YihanLi-erisaer/smeeting)\r
\r
---\r
\r
*本页为便于阅读的汇总说明。若与某一应用版本实际行为不一致，请以应用内提示及 GitHub 上对应版本源码为准。*\r
`,o=n();function s(){let{locale:n,t:s}=e(),c=n===`zh`||n===`zh-HK`?a:i;return(0,o.jsxs)(`div`,{className:`relative`,children:[(0,o.jsx)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(52,211,153,0.12),transparent)]`}),(0,o.jsxs)(`div`,{className:`mx-auto w-full max-w-[min(100%,96rem)] px-4 py-10 sm:px-6 sm:py-14`,children:[(0,o.jsxs)(`nav`,{"aria-label":s(`a11y.breadcrumbNavigation`),className:`text-sm text-zinc-600 dark:text-zinc-500`,children:[(0,o.jsx)(t,{to:`/`,className:`hover:text-zinc-900 dark:hover:text-zinc-300`,children:s(`smeeting.crumbHome`)}),(0,o.jsx)(`span`,{className:`mx-2 text-zinc-500 dark:text-zinc-600`,children:`/`}),(0,o.jsx)(t,{to:`/products`,className:`hover:text-zinc-900 dark:hover:text-zinc-300`,children:s(`nav.products`)}),(0,o.jsx)(`span`,{className:`mx-2 text-zinc-500 dark:text-zinc-600`,children:`/`}),(0,o.jsx)(t,{to:`/products/smeeting`,className:`hover:text-zinc-900 dark:hover:text-zinc-300`,children:`smeeting`}),(0,o.jsx)(`span`,{className:`mx-2 text-zinc-500 dark:text-zinc-600`,children:`/`}),(0,o.jsx)(`span`,{className:`text-zinc-700 dark:text-zinc-400`,children:s(`smeetingPrivacy.crumbCurrent`)})]}),(0,o.jsxs)(`header`,{className:`mt-8 max-w-2xl`,children:[(0,o.jsx)(`p`,{className:`font-mono text-xs uppercase tracking-wider text-emerald-400/90`,children:`smeeting`}),(0,o.jsx)(`p`,{className:`mt-2 text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl`,children:s(`smeetingPrivacy.title`)}),(0,o.jsx)(`p`,{className:`mt-3 text-sm text-zinc-600 dark:text-zinc-500`,children:s(`smeetingPrivacy.updated`)})]}),(0,o.jsx)(`div`,{className:`mt-8 w-full`,children:(0,o.jsxs)(`div`,{className:`flex min-h-full w-full flex-col rounded-2xl border border-zinc-200 bg-white dark:border-white/[0.08] dark:bg-zinc-950/60`,children:[(0,o.jsx)(`div`,{className:`border-b border-zinc-200 px-4 py-3 dark:border-white/[0.06]`,children:(0,o.jsx)(`p`,{className:`text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-500`,children:s(`smeetingPrivacy.panelLabel`)})}),(0,o.jsx)(`div`,{className:`min-h-0 flex-1 overflow-auto px-4 py-4 lg:min-h-[min(70vh,36rem)]`,children:(0,o.jsx)(r,{source:c})})]})}),(0,o.jsx)(`p`,{className:`mt-8 text-center`,children:(0,o.jsx)(t,{to:`/products/smeeting`,className:`text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300`,children:s(`smeetingPrivacy.backSmeeting`)})})]})]})}export{s as SmeetingPrivacyPage};