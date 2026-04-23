import { SpeedInsights } from '@vercel/speed-insights/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
          <SpeedInsights />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
