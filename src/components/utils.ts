import type { CollectionEntry } from 'astro:content';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function isRtl(locale: string) {
	return ['ar', 'he'].includes(locale);
}

export const thumbnails = import.meta.glob(
	'/src/content/docs/**/thumbnail.png', // ✅ No /he/ prefix — only default locale
	{ eager: true, import: 'default' }
) as Record<string, { src: string }>;

/**
 * returns the thumbnail for a given lesson slug and locale
 * @param slug the slug of the lesson
 * @param locale the locale since we need to strip it
 * @returns the thumbnail for the lesson or undefined if not found
 */
export function getThumbnailBySlug(slug: string, locale: string): { src: string } | undefined {
	// If non-default locale, strip it from the slug
	const normalizedSlug = locale
		? slug.startsWith(`${locale}/`)
			? slug.slice(locale.length + 1)
			: slug
		: slug;

	const entry = Object.entries(thumbnails).find(([path]) => {
		return path.includes(`/docs/${normalizedSlug}/thumbnail.png`);
	});
	return entry?.[1]; // the built URL
}

export function getLocaleFromDoc(doc: CollectionEntry<'docs'>): string {
	const id = doc.id; // e.g., 'he/docs/foo/bar' or 'docs/foo/bar'

	const match = id.match(/^([a-z]{2})\/docs\//);
	return match ? match[1] : 'en';
}
