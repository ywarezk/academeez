/**
 * Doc utils
 *
 * Created September 25th, 2023
 * @author ywarezk
 * @version 0.0.2
 * @license MIT
 */

import {type Doc, allDocs} from 'contentlayer/generated'

/**
 * Get doc from slug
 * @param slugArr - slug array
 */
export function getDocFromSlug(slugArr: string[] = []) {
  const slug = slugArr.join('/') || ''
  const doc = allDocs.find(doc => {
    return doc.slug === slug
  })

  if (!doc) {
    null
  }

  return doc
}

export function getDocsArrayFromSlug(slugArr: string[] = []) {
  const docs: Doc[] = []

  for (let i = 0; i <= slugArr.length; i++) {
    const partialSlug = slugArr.slice(0, i)
    const doc = getDocFromSlug(partialSlug)
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
export async function getToc(slugArr: string[] = []) {
  let toc = null
  if (slugArr?.length >= 2) {
    try {
      toc = (await import(`@/content/${slugArr[0]}/${slugArr[1]}/toc`)).default
    } catch (_e) {
      console.log(`failed to find toc for ${slugArr[0]}/slugArr[1]`)
    }
  }
  return toc
}
