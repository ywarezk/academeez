/**
 * Map to an mdx file in the content folder
 *
 * Created September 16th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {Doc, allDocs} from 'contentlayer/generated'
import {notFound} from 'next/navigation'
import {Mdx} from '@/ui'
import type {Metadata} from 'next'
import {HomePage} from './HomePage'
import {VideoBar} from './VideoBar'
import {getDocFromParams} from '@/lib'
import {isEmpty} from 'lodash'

interface PageProps {
  params: {
    slug: string[]
  }
}

/**
 * generate the metadata information for a page
 * The title is a combination of all the parent docs title
 * @param param0
 */
export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const docs: Doc[] = []
  const slugArray = params.slug ? [...params.slug] : []

  for (let i = 0; i <= slugArray.length; i++) {
    const partialSlug = slugArray.slice(0, i)
    const slug = partialSlug.join('/')
    const doc = allDocs.find(doc => doc.slug === slug)
    doc && docs.push(doc)
  }

  const currentDoc = docs[docs.length - 1]

  // calculate the title
  // the title is calculated by grabbing the title of the doc
  // and all the ancestors title
  let title = ''
  if (!params.slug) {
    title = `${currentDoc.title} | ${currentDoc.description}`
  } else {
    title = docs.reduce((acc, doc, index) => (index === 0 ? doc.title : `${acc} | ${doc.title}`), '')
  }

  return {
    title,
    description: currentDoc.description,
    openGraph: {
      title: currentDoc.title,
      description: currentDoc.description,
      type: 'article',
      url: `https://www.academeez.com/${currentDoc.slug}`,
      images: [
        {
          url: currentDoc.imageBig,
          width: 1280,
          height: 720,
          alt: currentDoc.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentDoc.title,
      description: currentDoc.description,
      images: [currentDoc.imageBig],
      creator: '@academeez',
    },
  }
}

/**
 * Will render a page from the mdx content area
 * If no slug I will render the homepage
 * @param {Object} param0 props holding the params with a slug
 * @returns
 */
export default async function Page({params}: PageProps) {
  const doc = await getDocFromParams(params)

  if (!params.slug) {
    return <HomePage />
  }

  if (!doc) {
    notFound()
  }

  return (
    <>
      <div className="pb-12 pt-8 flex-1">
        <Mdx code={doc.body.code} />
      </div>
      <VideoBar params={params} />
    </>
  )
}
