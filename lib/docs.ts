/**
 * Doc utils
 *
 * Created September 25th, 2023
 * @author ywarezk
 * @version 0.0.2
 * @license MIT
 */

import {type Doc, allDocs} from 'contentlayer/generated'
import type {NavItem} from './types'
import {isEmpty} from 'lodash'

/**
 * Get doc from slug
 * @param slugArr - slug array
 */
export function getDocFromSlug(slugArr: string[] = [], locale = 'en') {
  const slug = `${locale}/${slugArr.join('/')}` || ''
  const doc = allDocs.find(doc => {
    return doc.slug === slug
  })

  if (!doc) {
    null
  }

  return doc
}

export function getDocsArrayFromSlug(slugArr: string[] = [], locale = 'en') {
  const docs: Doc[] = []

  for (let i = 0; i <= slugArr.length; i++) {
    const partialSlug = slugArr.slice(0, i)
    const doc = getDocFromSlug(partialSlug, locale)
    doc && docs.push(doc)
  }
  return docs
}

/**
 * try and load the toc
 * toc is located in @/content/course/:courseName/toc
 * or @/content/blog/:articleName/toc
 * @param slugArr
 * @returns
 */
export async function getToc(slugArr: string[] = [], locale = 'en'): Promise<NavItem> {
  let toc = null
  if (slugArr?.length >= 2) {
    try {
      toc = (await import(`@/content/en/${slugArr[0]}/${slugArr[1]}/toc`)).default
    } catch (_e) {
      console.log(`failed to find toc for ${slugArr[0]}/slugArr[1]`)
    }
  }
  return toc
}

/**
 * given an href we will find the nav item with that href and also return his parent
 * @param toc
 * @param href
 */
export function findNavItemInToc(toc: NavItem, href: string): NavItem | null {
  if (toc.href === href) {
    return toc
  }

  if (toc.items) {
    for (const item of toc.items) {
      const found = findNavItemInToc(item, href)
      if (found) {
        return found
      }
    }
  }

  return null
}

export function findParentNavItemInToc(toc: NavItem, href: string): NavItem | null {
  // split by / and remove the last element then join again
  const parentHref = href.split('/').slice(0, -1).join('/')

  return findNavItemInToc(toc, parentHref)
}

/**
 * will find the previous item if parent has items array so one before me of return the parent
 * @param toc
 * @param href
 */
export function findPrev(toc: NavItem, href: string): NavItem | null {
  const parent = findParentNavItemInToc(toc, href)
  if (!parent) {
    return null
  }

  if (parent.items) {
    const myIndex = parent.items.findIndex(item => item.href === href)
    if (myIndex === 0) {
      return parent
    }
    return parent.items[myIndex - 1]
  }

  return null
}

/**
 * will find the next item if parent has items array so one after me or return one after the parent
 * @param toc
 * @param href
 */
export function findNext(toc: NavItem, href: string): NavItem | null {
  const parent = findParentNavItemInToc(toc, href)
  const me = findNavItemInToc(toc, href)

  // no next if i couldn't find myself
  if (!me) {
    return null
  }

  // if no parent choose my first items
  if (!parent && isEmpty(me.items)) {
    return null
  } else if (!parent && !isEmpty(me.items)) {
    return me.items[0]
  }

  // if i do have a parent find my next brother
  if (parent) {
    const myIndex = parent.items.findIndex(item => item.href === href)
    if (myIndex === parent.items.length - 1) {
      return findNext(toc, parent?.href)
    }
    return parent.items[myIndex + 1]
  }
  return null
}
