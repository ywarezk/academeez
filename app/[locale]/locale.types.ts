/**
 * Some locale constants
 *
 * Created September 28th, 2023
 * @author ywarezk
 * @version 0.0.7
 * @license MIT
 */

export const locales = {
  he: 'rtl',
  en: 'ltr',
} as const

export function fromLocaleToDropdownDir(locale: keyof typeof locales): 'start' | 'end' {
  if (locales[locale] === 'rtl') {
    return 'start'
  } else {
    return 'end'
  }
}
