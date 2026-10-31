# 性能检查与优化记录

日期：2026-10-31。范围：当前工作区的 Vite/React 网站。保留了已有产品、文章、翻译和截图修改；本次未提交、推送或部署。

## 可复现的构建结果

KB 均使用十进制。首屏 JavaScript 包含 HTML 入口及全部静态依赖，不包含后续动态加载的路由。

| 项目 | 优化前 | 优化后 | 减少 |
| --- | ---: | ---: | ---: |
| 首屏 JavaScript，未压缩 | 483,177 B | 376,365 B | 22.1% |
| 首屏 JavaScript，各文件 gzip 合计 | 160,115 B | 123,527 B | 22.9% |
| 首屏博客元数据模块，未压缩 | 115.07 KB，含所有正文 | 7.52 KB，仅元数据 | 93.5% |
| 四张产品主题图标合计 | 1,018,054 B | 34,743 B | 96.6% |
| favicon | 76,061 B | 2,298 B | 97.0% |

四张图标合计是资源库大小；每个主题实际使用两张。原始图片全部保留。

## 本地 Lighthouse 结果

Lighthouse 12.8.2，本机 Edge 无头模式，生产构建由 Vite preview 提供。使用相同默认移动模拟：412×823、模拟慢速 4G、4 倍 CPU 降速、独立浏览器缓存。下面是优化前基线和最终构建各一次运行的结果，不是线上真实用户指标或多次运行中位数。

| 首页指标 | 优化前 | 优化后 |
| --- | ---: | ---: |
| Performance | 69 | 84 |
| FCP，首次内容显示 | 3.75 s | 2.98 s |
| LCP，最大内容显示 | 5.42 s | 3.68 s |
| TBT，总阻塞时间 | 11 ms | 37 ms |
| CLS，布局偏移 | 0.00012 | 0 |
| 网站资源实际传输量 | 896.7 KB | 209.9 KB |

传输量包含本站资源及优化前 Google Fonts 请求，排除了本机安全软件注入的请求。两次测试都包含约 205 KB 的安全软件脚本，Lighthouse 分数和计时仍受到该环境影响。TBT 有小幅波动，未据此宣称主线程耗时改善。所有报告均无 Lighthouse runtime error 或 run warning。

| 最终页面 | Performance | LCP | CLS |
| --- | ---: | ---: | ---: |
| `/` | 84 | 3.68 s | 0 |
| `/blog/screator-desktop-workspace-october-2026` | 79 | 4.23 s | 0 |
| `/products/screator` | 81 | 4.00 s | 0 |

中途检查发现博客与产品页的页脚会在正文加载前出现，再被正文推离屏幕，CLS 均为 0.391。最终修复后这两页 CLS 均为 0。文章页网络记录也确认只请求当前文章正文，未下载其他九篇正文。

本地 Vite preview 不提供 Vercel 的 `/_vercel/speed-insights/script.js`，该请求返回 404；其他被测本站资源正常返回 200。新增缓存响应头尚未经过线上部署验证。

## 已实施的修改

- 将博客元数据与正文分开，正文使用模块级 `React.lazy` 按文章加载。SEO 和文章列表继续同步读取标题、摘要和日期。10 篇文章、30 份本地化正文及全部元数据都与修改前快照逐项比较一致。实现参考 [React lazy 文档](https://react.dev/reference/react/lazy)。
- 从原图生成 256×256 产品图标和 64×64 favicon，使用质量 92 的 JPEG；源图逐像素验证为不透明。保持原有居中裁切效果，补充固有尺寸与异步解码。衍生图通过 Vite 导入生成内容哈希地址。尺寸处理参考 [响应式图片文档](https://web.dev/learn/design/responsive-images)。
- 自托管 Inter WOFF2，保留字重、Unicode 子集和 `font-display: swap`，预加载 Latin 子集，移除 Google Fonts 外部阻塞样式表。字体原文件及 SIL OFL 许可证随项目保存。
- 只对 `/assets/` 下带内容哈希的构建资源设置一年 immutable 缓存，保留现有重定向及 SPA rewrite。
- 语言菜单的滚动和窗口调整事件按动画帧合并，坐标未变化时不触发 React 状态更新。
- 加载占位元素带 `data-route-loading` 标记，CSS 在正文加载期间隐藏页脚。`main#main-content` 保持挂载，保留键盘和跳转链接的焦点目标。支持 `:has()` 的浏览器应用此优化；其他浏览器保留之前的加载行为。
- 新增构建性能预算检查，限制首屏 JavaScript 为 400,000 B 原始大小和 135,000 B gzip，同时检查初始依赖图中的正文与 Markdown 渲染模块。

## 验证与维护

在仓库根目录运行（Windows PowerShell 可将 `npm` 写为 `npm.cmd`）：

```sh
npm run lint
npm run build
npm run perf:check
```

以上检查均通过，`git diff --check` 通过。已检查 Lighthouse 输出的首页、文章与产品页移动截图。Computer Use 交互检查因工具无法可靠识别当前浏览器 URL 而停止，未声称完成手动语言切换或键盘交互验证；语言正文完整性另经数据对比验证。

更新原始品牌图片后，在 Windows 从 `StarDazz` 目录运行：

```powershell
powershell -ExecutionPolicy Bypass -File scripts/optimize-brand-icons.ps1
```

脚本会拒绝含透明像素的源图，避免静默丢失透明背景。图片衍生文件已纳入项目，正常构建不需要 Windows 图像工具。

新增文章时，在 `src/content/devBlogPosts.ts` 添加元数据，并创建同名 `src/content/posts/<slug>.ts`，默认导出三种语言的 Markdown 正文；继续同步维护 SEO 脚本中的文章 slug。

本次原始 Lighthouse 报告保存在仓库根目录 `.tmp/lighthouse-before.json`、`.tmp/lighthouse-after.json`、`.tmp/lighthouse-blog.json`、`.tmp/lighthouse-product.json`。基线生产构建在 `.tmp/performance-before/`。它们是本地检查产物，不属于部署文件。

三个语言字典仍同步加载，合计约 100 KB 源码。进一步拆分需要同时设计初始化、切换与失败回退；本次优先解决已量化的正文、图片、字体及布局问题。线上效果应在部署后结合 Speed Insights 复核。
