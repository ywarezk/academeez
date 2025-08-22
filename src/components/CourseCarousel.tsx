import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './Carousel';
import type { FC } from 'react';
import { LessonCard } from './LessonCard';
import type { CollectionEntry } from 'astro:content';

export const CourseCarousel: FC<{
	title: string;
	courseLink: string;
	locale: string;
	articles: CollectionEntry<'docs'>[];
}> = ({ title, courseLink = title.toLowerCase(), locale, articles }) => {
	return (
		<div className="not-content">
			<h4>
				<a href={`${locale}/courses/${courseLink}`}>{title}</a>
			</h4>
			<br />
			<Carousel>
				<CarouselContent>
					{articles.map((article) => (
						<CarouselItem className="basis-1/3" key={article.id}>
							<LessonCard locale={locale} article={article} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};
