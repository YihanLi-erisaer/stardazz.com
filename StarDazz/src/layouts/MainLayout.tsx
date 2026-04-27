import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { RouteFallback } from '../components/RouteFallback'
import { ScrollToHash } from '../components/ScrollToHash'
import { SiteSeo } from '../components/SiteSeo'
import { SkipToMainLink } from '../components/SkipToMainLink'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export function MainLayout() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-zinc-50 font-sans text-zinc-700 antialiased dark:bg-zinc-950 dark:text-zinc-300">
      <SiteSeo />
      <SkipToMainLink />
      <ScrollToHash />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
      <div id="floating-ui-root" />
    </div>
  )
}
