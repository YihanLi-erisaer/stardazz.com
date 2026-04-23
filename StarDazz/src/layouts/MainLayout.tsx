import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ScrollToHash } from '../components/ScrollToHash'
import { SkipToMainLink } from '../components/SkipToMainLink'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { useLanguage } from '../i18n/LanguageContext'

const DOC_TITLE_KEY_BY_PATH: Record<string, string> = {
  '/': 'meta.title',
  '/about': 'about.docTitle',
  '/products/smeeting': 'smeeting.docTitle',
}

export function MainLayout() {
  const { pathname } = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    document.title = t(DOC_TITLE_KEY_BY_PATH[pathname] ?? 'notFound.docTitle')
  }, [pathname, t])

  return (
    <div className="relative flex min-h-dvh flex-col bg-zinc-950 font-sans text-zinc-300 antialiased">
      <SkipToMainLink />
      <ScrollToHash />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
