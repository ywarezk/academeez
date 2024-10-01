/**
 * Lesson card provide description of a lesson
 *
 * Created August 17th, 2023
 * @author ywarezk
 * @version 0.3.0
 * @license MIT
 */

import type { FC } from 'react';
import {Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter} from './Card'
import {buttonVariants} from './Button'
import {cn} from './utils'

// https://github.com/ywarezk/academeez4/blob/main/src/content/docs/courses/angular/best-practice/new-control-flow-syntax/for/thumbnail.png?raw=true

export const LessonCard: FC<{article: any, locale: string}> = ({
  article, locale
}) => {
	let imageLink = article.slug;
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
				<img src={`https://github.com/ywarezk/academeez4/blob/main/src/content/docs/${imageLink}/thumbnail.png?raw=true`} className="object-cover my-2 rounded-xl h-40" />
			</CardContent>
			<CardFooter>
				<a className={cn(buttonVariants(), 'w-full no-underline text-black')} href={`/${article.slug}`}>
					Read
				</a>
			</CardFooter>
		</Card>
  )
}
