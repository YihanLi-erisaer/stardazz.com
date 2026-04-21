import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ScrollToHash } from '../components/ScrollToHash'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { useLanguage } from '../i18n/LanguageContext'

export function MainLayout() {
  const { pathname } = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    document.title =
      pathname === '/about' ? t('about.docTitle') : t('meta.title')
  }, [pathname, t])

  return (
    <div className="flex min-h-dvh flex-col bg-zinc-950 font-sans text-zinc-300 antialiased">
      <ScrollToHash />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
