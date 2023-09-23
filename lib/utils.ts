import {allDocs} from '@/.contentlayer/generated';
import {clsx, type ClassValue} from 'clsx';
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getDocFromParams(params: Params) {
  const slug = params.slug?.join('/') || '';
  const doc = allDocs.find(doc => {
    return doc.slug === slug;
  });

  if (!doc) {
    null;
  }

  return doc;
}
