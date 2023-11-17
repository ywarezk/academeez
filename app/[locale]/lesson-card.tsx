/**
 * Displays in the homepage for a lesson link
 *
 * Created November 17th, 2023
 * @author: ywarezk
 * @version: 0.0.29
 * @license: MIT
 */

import type { Doc } from "@/.contentlayer/generated"
import { type FC, createElement } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, buttonVariants, iconCourse } from '@/ui/';
import Link from "next/link";
import { cn } from "@/lib";
 
export const LessonCard: FC<{lesson: Doc}> = ({lesson}) => {
	const course = lesson.slug.split('/')[2]	
	return (
		<Card>
			<CardHeader>
				<Link href={`/en/course/${course}`} className="flex items-center">
					{ createElement(iconCourse[course], {height: '32px', width: '32px'}) }
					<h3 className={cn('font-bold -ml-2 uppercase text-sm', buttonVariants({variant: 'link'}))}>{course}</h3>
				</Link>
				<CardTitle className="text-left mt-2">{lesson.title}</CardTitle>
				<CardDescription className="text-left mt-2 leading-snug">{lesson.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<img src={lesson.thumbnail} className="object-cover my-2 rounded-xl h-40" />
			</CardContent>
			<CardFooter>
				<Link className={cn(buttonVariants(), 'w-full')} href={lesson.slug}>
					Read
				</Link>
			</CardFooter>
		</Card>
	)
}