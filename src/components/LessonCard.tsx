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

export const LessonCard: FC<{article: any}> = ({
  article
}) => {
  return (
    <Card>
			<CardHeader>				
				<CardTitle className="text-left mt-2">{article.data.title}</CardTitle>
				<CardDescription className="text-left mt-2 leading-snug">{article.data.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<img src="https://github.com/ywarezk/academeez/blob/main/content/en/course/kubernetes/flux/helm-controller/video/thumbnail.png?raw=true" className="object-cover my-2 rounded-xl h-40" />
			</CardContent>
			<CardFooter>
				<a className={cn(buttonVariants(), 'w-full')} href={article.slug}>
					Read
				</a>
			</CardFooter>
		</Card>
  )
}
