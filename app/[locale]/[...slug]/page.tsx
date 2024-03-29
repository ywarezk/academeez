/**
 * Map to an mdx file in the content folder
 *
 * Created September 16th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import type {Doc} from 'contentlayer/generated';
import {notFound} from 'next/navigation';
import {Mdx} from '@/ui';
import {VideoBar} from './VideoBar';
import {cn, getDocFromSlug, getDocsArrayFromSlug} from '@/lib';
import {Breadcrumbs} from './Breadcrumbs';
import {generateMetadata as genericGenerateMetadata} from '@/lib';
import {unstable_setRequestLocale} from 'next-intl/server';
import Balancer from 'react-wrap-balancer';
import {Pager} from './Pager';

interface PageProps {
  params: {
    slug: string[];
    locale: string;
  };
}

/**
 * generate the metadata information for a page
 * The title is a combination of all the parent docs title
 * @param param0
 */
export function generateMetadata({params}: PageProps) {
  const docs: Doc[] = getDocsArrayFromSlug(params.slug, params.locale);
  const currentDoc = docs[docs.length - 1];

  if (!currentDoc) {
    return {};
  }

  // calculate the title
  // the genericGenerateData
  // and all the ancestors title
  const title = docs.reduce((acc, doc, index) => (index === 0 ? doc.title : `${acc} | ${doc.title}`), '');

  return genericGenerateMetadata(title, currentDoc.description, currentDoc.thumbnail, currentDoc.slug);
}

/**
 * Will render a page from the mdx content area
 * If no slug I will render the homepage
 * @param {Object} param0 props holding the params with a slug
 * @returns
 */
export default async function Page({params}: PageProps) {
  const doc = await getDocFromSlug(params.slug, params.locale);

  if (!doc) {
    notFound();
  }

  unstable_setRequestLocale(params.locale);

  return (
    <>
      <main className="min-w-0 isolate px-5">
        <article className="pb-12 pt-8 flex-1 px-5 max-w-4xl mx-auto">
          <Breadcrumbs slug={params.slug} />

          <div className="my-4">
            <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>{doc.title}</h1>
            {doc.description && (
              <p className="text-lg text-muted-foreground my-4">
                <Balancer>{doc.description}</Balancer>
              </p>
            )}

            {doc.video && (
              <iframe
                className="mx-auto mt-12"
                width="560"
                height="315"
                src={doc.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="pb-12 pt-8">
            <Mdx code={doc.body.code} />
          </div>

          <Pager slug={params.slug} />
        </article>
      </main>
      <VideoBar params={params} />
    </>
  );
}
