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
import {Analytics} from '@vercel/analytics/react'
import {unstable_setRequestLocale} from 'next-intl/server'
import type {Metadata} from 'next'
import {siteConfig} from '@/config/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '700'],
})

type LocaleLayoutProps = {
  children: ReactNode
  params: {locale: SupportedLocales}
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Angular', 'Node.js', 'Typescript', 'Javascript', 'HTML', 'CSS'],
  authors: [
    {
      name: 'ywarezk',
      url: 'https://www.nerdeez.com/',
    },
  ],
  creator: 'ywarezk',
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: 'white'},
    {media: '(prefers-color-scheme: dark)', color: 'black'},
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@shadcn',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/manifest.webmanifest`,
}

export async function generateStaticParams() {
  return Object.keys(locales).map(locale => ({locale}))
}

export default function LocaleLayout({children, params: {locale}}: LocaleLayoutProps) {
  const dir = locales[locale]

  // check if the local is valid, and if not redirect to notFound()
  if (!dir) {
    return notFound()
  }

  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} dir={dir}>
      <body className={cn(inter.variable, 'font-sans leading-base')}>
        <Nav />
        <div className="mx-auto mt-8">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
