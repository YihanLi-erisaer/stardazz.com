import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { SmeetingPage } from './pages/SmeetingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/smeeting" element={<SmeetingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
