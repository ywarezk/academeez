/**
 * Map to an mdx file in the content folder
 *
 * Created September 16th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {allDocs} from 'contentlayer/generated';
import {notFound} from 'next/navigation';
import {Mdx} from '@/ui';
import {cn} from '@/lib';
import type {Metadata} from 'next';
import {HomePage} from './HomePage';

interface PageProps {
  params: {
    slug: string[];
  };
}

/**
 * generate the metadata information for a page
 * @param param0
 */
export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const slug = params.slug?.join('/') || '';
  const doc = allDocs.find(doc => doc.slugAsParams === slug);

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: `https://www.academeez.com/${doc.slug}`,
      images: [
        {
          url: doc.imageBig,
          width: 1280,
          height: 720,
          alt: doc.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
      images: [doc.imageBig],
      creator: '@academeez',
    },
  };
}

async function getDocFromParams({params}: PageProps) {
  const slug = params.slug?.join('/') || '';

  const doc = allDocs.find(doc => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export default async function Home({params}: PageProps) {
  const doc = await getDocFromParams({params});

  if (!params.slug) {
    return <HomePage />;
  }

  if (!doc) {
    notFound();
  }

  return (
    <>
      <div className="pb-12 pt-8 flex-1">
        <Mdx code={doc.body.code} />
      </div>
      <div className={cn('bg-slate-300 flex-1')}>video is here</div>
    </>
  );
}
