/**
 * This will generate the robots.txt file
 *
 * Created September 16th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {allDocs} from '@/.contentlayer/generated';
import type {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: allDocs.map(doc => ({
      userAgent: '*',
      allow: doc.slug,
    })),
    sitemap: 'https://acme.com/sitemap.xml',
  };
}
