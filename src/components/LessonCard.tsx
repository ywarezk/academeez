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
import { cn } from './utils';

export const LessonCard: FC<{ article: any; locale: string }> = ({ article, locale }) => {
	const slug = article.slug;
	let imageLink = slug;
	if (locale) {
		imageLink = imageLink.replace(`${locale.substring(1)}/`, '');
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle className="mt-2">{article.data.title}</CardTitle>
				<CardDescription className="mt-2 leading-snug">{article.data.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<img
					crossOrigin="anonymous"
					src={`https://raw.githack.com/ywarezk/academeez/main/src/content/docs/${imageLink}/thumbnail.png`}
					className="object-cover my-2 rounded-xl h-40"
				/>
			</CardContent>
			<CardFooter>
				<a className={cn(buttonVariants(), 'w-full no-underline text-black')} href={`/${slug}`}>
					Read
				</a>
			</CardFooter>
		</Card>
	);
};
