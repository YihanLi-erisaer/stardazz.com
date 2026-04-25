import type { Locale } from './messages'

/** `<html lang>` attribute */
export function localeToHtmlLang(locale: Locale): string {
  switch (locale) {
    case 'zh':
      return 'zh-CN'
    case 'zh-HK':
      return 'zh-HK'
    default:
      return 'en'
  }
}

/** Open Graph `og:locale` */
export function localeToOgLocale(locale: Locale): string {
  switch (locale) {
    case 'zh':
      return 'zh_CN'
    case 'zh-HK':
      return 'zh_HK'
    default:
      return 'en_US'
  }
}

/** `Intl.DateTimeFormat` locale tag */
export function localeToDateFormatLocale(locale: Locale): string {
  switch (locale) {
    case 'zh':
      return 'zh-CN'
    case 'zh-HK':
      return 'zh-HK'
    default:
      return 'en-US'
  }
}
