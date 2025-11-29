import * as React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../Carousel';

export interface Lesson {
	title: string;
	slug: string;
}

export interface Course {
	title: string;
	slug: string;
	description?: string;
	icon?: string;
	locale: string;
	lessons?: Lesson[];
}

interface CourseListProps {
	courses: Course[];
}

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
	return (
		<Carousel className="w-full" data-testid="course-list">
			<CarouselContent className="-ml-2 md:-ml-4">
				{courses.map((course) => {
					const localePrefix = course.locale === 'en' || !course.locale ? '' : `/${course.locale}`;
					const courseHref = `${localePrefix}/courses/${course.slug}`;
					const iconName = course.icon || course.slug;
					const icon = `/icons/${iconName}.svg`;

					return (
						<CarouselItem
							key={`${course.locale}-${course.slug}`}
							className="pl-2 md:pl-4 basis-auto"
						>
							<div className="w-64" data-testid="course-item">
								<div className="block h-full">
									<a href={courseHref} className="block mb-4 pb-4 border-b no-underline">
										<div className="flex items-center gap-3 min-w-0">
											<img
												src={icon}
												alt={course.title}
												className="h-8 w-8 flex-shrink-0"
												style={{ width: '32px', height: '32px' }}
												onError={(e) => {
													// Fallback to folder icon if image fails to load
													const target = e.target as HTMLImageElement;
													if (target.src !== '/icons/folder.svg') {
														target.src = '/icons/folder.svg';
													}
												}}
											/>
											<h3 className="text-sm font-bold truncate min-w-0 flex-1">{course.title}</h3>
										</div>
									</a>
									{course.lessons && course.lessons.length > 0 && (
										<ul
											className="space-y-2 list-none text-left pl-2 m-0"
											data-testid="course-lessons"
										>
											{course.lessons.map((lesson) => {
												const lessonHref = `${localePrefix}/${lesson.slug}`;
												return (
													<li key={lesson.slug} className="text-left">
														<a
															href={lessonHref}
															className="text-sm text-muted-foreground hover:text-foreground transition-colors block no-underline text-left"
														>
															{lesson.title}
														</a>
													</li>
												);
											})}
										</ul>
									)}
								</div>
							</div>
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<CarouselPrevious className="left-0" />
			<CarouselNext className="right-0" />
		</Carousel>
	);
};
