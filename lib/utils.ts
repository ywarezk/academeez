/**
 * Utilit functions
 *
 * Created September 25th, 2023
 * @author ywarezk
 * @license MIT
 * @version 0.0.3
 */

import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generate the metadata for the page
 * @param title
 * @param description
 * @param image
 * @param path
 * @returns
 */
export function generateMetadata(title: string, description: string, image: string, path = '') {
  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      url: `https://www.academeez.com/${path}`,
      images: [
        {
          url: image,
          width: 1280,
          height: 720,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [image],
      creator: '@academeez',
    },
  }
}
