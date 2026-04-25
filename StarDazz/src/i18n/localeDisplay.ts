import type { Locale } from './messages'

/** `<html lang>` attribute */
export function localeToHtmlLang(locale: Locale): string {
  switch (locale) {
    case 'zh':
      return 'zh-CN'
    case 'zh-TW':
      return 'zh-TW'
    default:
      return 'en'
  }
}

/** Open Graph `og:locale` */
export function localeToOgLocale(locale: Locale): string {
  switch (locale) {
    case 'zh':
      return 'zh_CN'
    case 'zh-TW':
      return 'zh_TW'
    default:
      return 'en_US'
  }
}

/** `Intl.DateTimeFormat` locale tag */
export function localeToDateFormatLocale(locale: Locale): string {
  switch (locale) {
    case 'zh':
      return 'zh-CN'
    case 'zh-TW':
      return 'zh-TW'
    default:
      return 'en-US'
  }
}
