/**
 * We use this file to define astro content collections
 *
 * Created May 27th, 2024
 * @author ywarezk
 * @license MIT
 * @version 0.0.1
 */

import {defineCollection} from 'astro:content';
import {docsSchema, i18nSchema} from '@astrojs/starlight/schema';
import {z} from 'zod';

const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    avatar: z.string(),
  }),
});

export const collections = {
  authors,
  i18n: defineCollection({ type: 'data', schema: i18nSchema({
    extend: z.object({
      'header.courses': z.string(),
      'pagesidebar.authors': z.string(),
      'pagesidebar.source': z.string(),
      "breadcrumbs.home": z.string(),
      "breadcrumbs.courses": z.string(),
      "pagetitle.publish": z.string(),
    }),
  }) }),
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({        
        preview: z.boolean().optional().default(true),
        authors: z.array(z.string()).optional(),        
        sources: z.array(z.object({
          title: z.string(),
          url: z.string(),
        })).optional(),
        publishDate: z.date(),
      }),
    }),
  }),
};
