/**
 * Writes public/sitemap.xml and public/robots.txt before Vite build.
 * Set VITE_SITE_URL in Vercel env (or .env) to your production origin (no trailing slash).
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const base = (process.env.VITE_SITE_URL ?? 'https://stardazz-com.vercel.app').replace(
  /\/$/,
  '',
)

/** Keep in sync with `src/content/devBlogPosts.ts` slugs. */
const BLOG_SLUGS = [
  'yt2bili-five-accounts-local-translation',
  'yt2bili-desktop-alpha-1',
  'yt2bili-desktop-roadmap',
  'yt2bili-incomplete-video-validation-fix',
  'yt2bili-pipeline-and-commit-history',
  'smeeting-release-and-deploy-history',
  'smeeting-progress-update',
  'roadmap-next-steps',
]

const paths = [
  '/',
  '/blog',
  ...BLOG_SLUGS.map((s) => `/blog/${s}`),
  '/about',
  '/products',
  '/products/smeeting',
  '/products/smeeting/support',
  '/products/smeeting/privacy',
  '/products/yt2bili',
  '/contact',
  '/roadmap',
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) =>
      `  <url>\n    <loc>${base}${p === '/' ? '/' : p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
  )
  .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`

mkdirSync(publicDir, { recursive: true })
writeFileSync(join(publicDir, 'sitemap.xml'), sitemap)
writeFileSync(join(publicDir, 'robots.txt'), robots)

console.log('[write-seo-files] wrote sitemap.xml + robots.txt for', base)
