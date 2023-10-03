/**
 * Will display the next previous links
 *
 * Created October 2nd, 2023
 * @author ywarezk
 * @version 0.0.14
 * @license MIT
 */

import {useLocale} from 'next-intl'
import type {FC} from 'react'
import {getToc, findNext, findPrev} from '@/lib'
import Link from 'next/link'

export const Pager: FC<{slug: string[]}> = async ({slug}) => {
  const locale = useLocale()
  const toc = await getToc(slug, locale)
  const currentHref = `/${locale}/${slug.join('/')}`

  if (!toc) {
    return null
  }

  console.log(currentHref)

  const next = findNext(toc, currentHref)

  console.log('next', next)

  const prev = findPrev(toc, currentHref)

  console.log('prev', prev)

  return (
    <div>
      {prev && <Link href={prev.href}>{prev.title}</Link>}
      {next && <Link href={next.href}>{next.title}</Link>}
    </div>
  )
}
