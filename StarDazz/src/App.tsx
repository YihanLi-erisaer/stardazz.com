import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'

const BlogPage = lazy(() =>
  import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })),
)
const BlogPostPage = lazy(() =>
  import('./pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage })),
)
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })),
)
const ProductsPage = lazy(() =>
  import('./pages/ProductsPage').then((m) => ({ default: m.ProductsPage })),
)
const SmeetingPage = lazy(() =>
  import('./pages/SmeetingPage').then((m) => ({ default: m.SmeetingPage })),
)
const Yt2biliPage = lazy(() =>
  import('./pages/Yt2biliPage').then((m) => ({ default: m.Yt2biliPage })),
)
const SmeetingPrivacyPage = lazy(() =>
  import('./pages/SmeetingPrivacyPage').then((m) => ({
    default: m.SmeetingPrivacyPage,
  })),
)
const SmeetingSupportPage = lazy(() =>
  import('./pages/SmeetingSupportPage').then((m) => ({
    default: m.SmeetingSupportPage,
  })),
)
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const RoadmapPage = lazy(() =>
  import('./pages/RoadmapPage').then((m) => ({ default: m.RoadmapPage })),
)
const LoginPage = lazy(() =>
  import('./pages/LoginPage').then((m) => ({ default: m.LoginPage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/products/smeeting/privacy"
            element={<SmeetingPrivacyPage />}
          />
          <Route
            path="/products/smeeting/support"
            element={<SmeetingSupportPage />}
          />
          <Route path="/products/smeeting" element={<SmeetingPage />} />
          <Route path="/products/yt2bili" element={<Yt2biliPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
