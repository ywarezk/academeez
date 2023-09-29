/**
 * Some locale constants
 *
 * Created September 28th, 2023
 * @author ywarezk
 * @version 0.0.7
 * @license MIT
 */

export type SupportedLocales = keyof typeof locales

export const locales = {
  he: 'rtl',
  en: 'ltr',
} as const

export function fromLocaleToDropdownDir(locale: string): 'start' | 'end' {
  if (locales[locale as keyof typeof locales] === 'rtl') {
    return 'start'
  } else {
    return 'end'
  }
}
