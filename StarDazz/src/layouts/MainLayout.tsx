import { Outlet } from 'react-router-dom'
import { ScrollToHash } from '../components/ScrollToHash'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export function MainLayout() {
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
