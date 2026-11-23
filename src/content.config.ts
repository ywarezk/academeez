/**
 * We use this file to define astro content collections
 *
 * Created May 27th, 2024
 * @author ywarezk
 * @license MIT
 * @version 0.0.1
 */

import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const authors = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/authors' }),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		avatar: z.string(),
	}),
});

export const collections = {
	authors,
	i18n: defineCollection({
		loader: glob({ pattern: '**/*.json', base: './src/content/i18n' }),
		schema: i18nSchema({
			extend: z.object({
				'header.courses': z.string(),
				'header.explore': z.string(),
				'pagesidebar.authors': z.string(),
				'pagesidebar.source': z.string(),
				'breadcrumbs.home': z.string(),
				'breadcrumbs.courses': z.string(),
				'pagetitle.publish': z.string(),
			}),
		}),
	}),
	docs: defineCollection({
		loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/docs' }),
		schema: docsSchema({
			extend: z.object({
				preview: z.boolean().optional().default(true),
				authors: z.array(z.string()).optional(),
				sources: z
					.array(
						z.object({
							title: z.string(),
							url: z.string(),
						})
					)
					.optional(),
				publishDate: z.date(),
				video: z
					.object({
						videoUrl: z.url(),
						duration: z.number(),
						publishDate: z.coerce.date(),
						tags: z.array(z.string()).optional(),
					})
					.optional(),
			}),
		}),
	}),
};
