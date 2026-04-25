import { messagesEn } from './messagesEn'
import { messagesZh } from './messagesZh'
import { messagesZhHK } from './messagesZhHK'

export type Locale = 'zh' | 'zh-HK' | 'en'

export const defaultLocale: Locale = 'en'

export const messages = {
  zh: messagesZh,
  'zh-HK': messagesZhHK,
  en: messagesEn,
} as const

export type Messages = (typeof messages)[Locale]

export function getMessage(
  root: Record<string, unknown>,
  path: string,
): string {
  const val = path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part]
    }
    return undefined
  }, root)
  return typeof val === 'string' ? val : path
}
