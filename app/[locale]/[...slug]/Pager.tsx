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
import {getToc, findNext, findPrev, cn, getDocFromSlug} from '@/lib'
import Link from 'next/link'
import {buttonVariants} from '@/ui'
import {CaretRightIcon, CaretLeftIcon} from '@radix-ui/react-icons'

export const Pager: FC<{slug: string[]}> = async ({slug}) => {
  const locale = useLocale()
  const toc = await getToc(slug, locale)
  const currentHref = `/${locale}/${slug.join('/')}`

  if (!toc) {
    return null
  }

  const next = findNext(toc, currentHref)

  // find the doc for next
  const nextDoc = getDocFromSlug(slug, locale)

  const prev = findPrev(toc, currentHref)
  const prevDoc = getDocFromSlug(slug, locale)

  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-4 md:py-12">
      {prev ? (
        <Link
          className={cn(
            buttonVariants({
              variant: 'ghost',
            }),
            ' justify-self-start py-12 flex gap-x-4 md:gap-x-6 items-center w-full md:w-80 px-4 md:px-5 border-2 border-transparent text-base leading-base  flex-row-reverse justify-end text-end'
          )}
          href={prev.href}
        >
          <span>
            <span className="block no-underline text-sm tracking-wide text-secondary dark:text-secondary-dark uppercase font-bold group-focus:text-link dark:group-focus:text-link-dark group-focus:text-opacity-100">
              Previous
            </span>
            <span className="duration-100 leading-normal transition ease-in hover:border-opacity-100 border-opacity-0 inline border-link border-b text-green">
              {prevDoc?.lessonType}: {prev.title}
            </span>
          </span>
          <CaretLeftIcon className="w-5 h-5 text-link dark:text-link-dark" />
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          className={cn(
            buttonVariants({
              variant: 'ghost',
            }),
            ' justify-self-end py-12 flex gap-x-4 md:gap-x-6 items-center w-full md:w-80 px-4 md:px-5 border-2 border-transparent text-base leading-base  flex-row-reverse justify-end text-end'
          )}
          href={next.href}
        >
          <CaretRightIcon className="w-5 h-5 text-link dark:text-link-dark" />
          <span>
            <span className="block no-underline text-sm tracking-wide text-secondary dark:text-secondary-dark uppercase font-bold group-focus:text-link dark:group-focus:text-link-dark group-focus:text-opacity-100">
              Next
            </span>
            <span className="duration-100 leading-normal transition ease-in hover:border-opacity-100 border-opacity-0 inline border-link border-b text-green">
              {nextDoc?.lessonType}: {next.title}
            </span>
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
