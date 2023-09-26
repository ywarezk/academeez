/**
 * Every page except for the homepage I will display breadcrumbs over the article
 *
 * Created September 24th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {createElement, type FC} from 'react'
import {getDocsArrayFromSlug, cn, getToc} from '@/lib'
import {HomeIcon, CaretRightIcon} from '@radix-ui/react-icons'
import Link from 'next/link'

export const Breadcrumbs: FC<{slug: string[]}> = async ({slug}) => {
  const docs = getDocsArrayFromSlug(slug)

  const toc = await getToc(slug)

  return (
    <nav>
      <ul className="flex items-center text-sm font-bold">
        {docs.map((doc, index) => {
          const isLast = index === docs.length - 1

          const linkOrDiv = createElement(
            isLast ? 'div' : Link,
            {
              className: cn(isLast && 'bg-green/20', 'rounded-2xl px-4 hover:bg-green/20'),
              href: `/${doc.slug}`,
            },
            index === 0 ? <HomeIcon className="w-4 h-4 my-2" /> : doc.title
          )

          return (
            <li className="flex items-center" key={doc.slug}>
              {linkOrDiv}
              {!isLast && <CaretRightIcon className="mx-1" />}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
