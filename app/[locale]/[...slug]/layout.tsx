/**
 * Layout for the lessons pages
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {TocBar} from './TocBar'
import type {PropsWithChildren} from 'react'
import {unstable_setRequestLocale} from 'next-intl/server'

export default async function LessonLayout({children, params}: PropsWithChildren<{params: any}>) {
  unstable_setRequestLocale(params.locale)
  return (
    <div>
      <div className="flex">
        <TocBar slug={params.slug} />
        {children}
      </div>
    </div>
  )
}
