import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { getDevBlogPostBySlug } from '../content/devBlogPosts'
import { useLanguage } from '../i18n/LanguageContext'
import { localeToOgLocale } from '../i18n/localeDisplay'

const DOC_TITLE_KEY_BY_PATH: Record<string, string> = {
  '/': 'meta.title',
  '/blog': 'blog.docTitle',
  '/about': 'about.docTitle',
  '/products/smeeting': 'smeeting.docTitle',
  '/products/smeeting/privacy': 'smeetingPrivacy.docTitle',
}

const META_DESC_KEY_BY_PATH: Record<string, string> = {
  '/': 'meta.description',
  '/blog': 'blog.metaDescription',
  '/about': 'about.metaDescription',
  '/products/smeeting': 'smeeting.metaDescription',
  '/products/smeeting/privacy': 'smeetingPrivacy.metaDescription',
}

const SMEETING_GITHUB = 'https://github.com/YihanLi-erisaer/smeeting'

function defaultSiteOrigin(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
  return fromEnv || 'https://stardazz-com.vercel.app'
}

function useSiteOrigin(): string {
  return useMemo(() => {
    if (typeof window !== 'undefined') return window.location.origin
    return defaultSiteOrigin()
  }, [])
}

function buildJsonLd(args: {
  siteUrl: string
  pathname: string
  descriptionSmeeting: string
}) {
  const { siteUrl, pathname, descriptionSmeeting } = args
  const orgId = `${siteUrl}/#organization`

  const organization = {
    '@id': orgId,
    '@type': 'Organization',
    name: 'StarDazz',
    url: siteUrl,
    logo: `${siteUrl}/StardazzIcon.jpg`,
    email: 'stardazz@163.com',
  }

  const webSite = {
    '@type': 'WebSite',
    name: 'StarDazz',
    url: siteUrl,
    publisher: { '@id': orgId },
  }

  const graph: Record<string, unknown>[] = [organization, webSite]

  if (pathname === '/products/smeeting') {
    graph.push({
      '@type': 'SoftwareApplication',
      name: 'smeeting',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Android',
      description: descriptionSmeeting,
      url: `${siteUrl}/products/smeeting`,
      privacyPolicy: `${siteUrl}/products/smeeting/privacy`,
      sameAs: SMEETING_GITHUB,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export function SiteSeo() {
  const { pathname } = useLocation()
  const { t, locale } = useLanguage()
  const siteUrl = useSiteOrigin()

  const normalizedPath =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

  const blogDetailMatch = /^\/blog\/([^/]+)$/.exec(normalizedPath)
  const blogSlug = blogDetailMatch?.[1]
  const blogPost = blogSlug ? getDevBlogPostBySlug(blogSlug) : undefined

  let title: string
  let description: string

  if (blogDetailMatch) {
    if (blogPost) {
      title = `${blogPost.title[locale]} — StarDazz`
      description = blogPost.excerpt[locale]
    } else {
      title = t('notFound.docTitle')
      description = t('notFound.metaDescription')
    }
  } else if (normalizedPath === '/blog') {
    title = t('blog.docTitle')
    description = t('blog.metaDescription')
  } else {
    const titleKey = DOC_TITLE_KEY_BY_PATH[normalizedPath] ?? 'notFound.docTitle'
    const descKey =
      META_DESC_KEY_BY_PATH[normalizedPath] ?? 'notFound.metaDescription'
    title = t(titleKey)
    description = t(descKey)
  }
  const path = normalizedPath || '/'
  const canonicalUrl =
    path === '/' ? `${siteUrl}/` : `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`

  const ogImage = `${siteUrl}/StardazzIcon.jpg`
  const ogLocale = localeToOgLocale(locale)

  const jsonLd = useMemo(
    () =>
      buildJsonLd({
        siteUrl,
        pathname: path,
        descriptionSmeeting: t('smeeting.metaDescription'),
      }),
    [siteUrl, path, t],
  )

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="StarDazz" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        // Safe: JSON from our own structured object, no user HTML.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Helmet>
  )
}
