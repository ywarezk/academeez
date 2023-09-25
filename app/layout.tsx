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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '700'],
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, 'font-sans leading-base')}>
        <Nav />
        <div className="mx-auto mt-8">{children}</div>
      </body>
    </html>
  )
}
