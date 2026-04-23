/// <reference types="vite/client" />

declare module '*.md?raw' {
  const content: string
  export default content
}

interface ImportMetaEnv {
  /** Canonical site origin for SEO (no trailing slash), e.g. https://stardazz-com.vercel.app */
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
