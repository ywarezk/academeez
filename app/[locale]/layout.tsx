/**
 * Root layout
 *
 * Created September 25th, 2023
 * @author ywarezk
 * @version: 0.0.1
 * @license MIT
 */

import '@/styles/globals.css'
import {Inter} from 'next/font/google'
import {Nav} from './Nav'
import {cn} from '@/lib'
import type {ReactNode} from 'react'
import {notFound} from 'next/navigation'
import {locales, SupportedLocales} from '@/lib'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '700'],
})

type LocaleLayoutProps = {
  children: ReactNode
  params: {locale: SupportedLocales}
}

export default function LocaleLayout({children, params: {locale}}: LocaleLayoutProps) {
  const dir = locales[locale]

  // check if the local is valid, and if not redirect to notFound()
  if (!dir) {
    return notFound()
  }

  return (
    <html lang={locale} dir={dir}>
      <body className={cn(inter.variable, 'font-sans leading-base')}>
        <Nav locale={locale} />
        <div className="mx-auto mt-8">{children}</div>
      </body>
    </html>
  )
}
