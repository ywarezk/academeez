/**
 * Lesson card provide description of a lesson
 *
 * Created August 17th, 2023
 * @author ywarezk
 * @version 0.3.0
 * @license MIT
 */

import type { FC } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from './Card';
import { buttonVariants } from './Button';
import { cn, getThumbnailBySlug } from './utils';
import type { CollectionEntry } from 'astro:content';

export const LessonCard: FC<{ article: CollectionEntry<'docs'>; locale: string }> = ({
	article,
	locale,
}) => {
	const slug = article.slug;
	const imageLink = getThumbnailBySlug(slug, locale.substring(1));

	return (
		<Card>
			<CardHeader>
				<CardTitle className="mt-2">{article.data.title}</CardTitle>
				<CardDescription className="mt-2 leading-snug">{article.data.description}</CardDescription>
			</CardHeader>
			<CardContent>
				{imageLink && (
					<img
						data-testid="lesson-thumbnail"
						crossOrigin="anonymous"
						src={imageLink.src}
						className="object-cover my-2 rounded-xl h-40"
					/>
				)}
			</CardContent>
			<CardFooter>
				<a className={cn(buttonVariants(), 'w-full no-underline text-black')} href={`/${slug}`}>
					Read
				</a>
			</CardFooter>
		</Card>
	);
};
