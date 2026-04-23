import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const DOC_TITLE_KEY_BY_PATH: Record<string, string> = {
  '/': 'meta.title',
  '/about': 'about.docTitle',
  '/products/smeeting': 'smeeting.docTitle',
}

const META_DESC_KEY_BY_PATH: Record<string, string> = {
  '/': 'meta.description',
  '/about': 'about.metaDescription',
  '/products/smeeting': 'smeeting.metaDescription',
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

  const titleKey = DOC_TITLE_KEY_BY_PATH[pathname] ?? 'notFound.docTitle'
  const descKey = META_DESC_KEY_BY_PATH[pathname] ?? 'notFound.metaDescription'

  const title = t(titleKey)
  const description = t(descKey)
  const path = pathname || '/'
  const canonicalUrl =
    path === '/' ? `${siteUrl}/` : `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`

  const ogImage = `${siteUrl}/StardazzIcon.jpg`
  const ogLocale = locale === 'zh' ? 'zh_CN' : 'en_US'

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
