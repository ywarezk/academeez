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
    }),
  }) }),
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        order: z.number().optional(),
        preview: z.boolean().optional().default(true),
        authors: z.array(z.string()).optional(),
      }),
    }),
  }),
};
