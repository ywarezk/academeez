/**
 * We use this file to define astro content collections
 *
 * Created May 27th, 2024
 * @author ywarezk
 * @license MIT
 * @version 0.0.1
 */

import {defineCollection} from 'astro:content';
import {docsSchema} from '@astrojs/starlight/schema';
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
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        order: z.number().optional(),
        authors: z.array(z.string()).optional(),
      }),
    }),
  }),
};