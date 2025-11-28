import * as React from 'react';

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
		<ul className="flex flex-row gap-4 overflow-x-auto pb-4 list-none" data-testid="course-list">
			{courses.map((course) => {
				const localePrefix = course.locale === 'en' || !course.locale ? '' : `/${course.locale}`;
				const courseHref = `${localePrefix}/courses/${course.slug}`;
				// Map course slugs to icon names (some courses have different icon names than slugs)
				const iconMap: Record<string, string> = {
					fluxcd: 'flux',
				};
				const iconName = course.icon || iconMap[course.slug] || course.slug;
				const icon = `/icons/${iconName}.svg`;

				return (
					<li
						key={`${course.locale}-${course.slug}`}
						className="flex-shrink-0 w-64"
						data-testid="course-item"
					>
						<div className="block h-full">
							<a href={courseHref} className="block mb-4 pb-4 border-b no-underline">
								<div className="flex items-center gap-3 min-w-0">
									<img
										src={icon}
										alt={course.title}
										className="h-8 w-8 flex-shrink-0"
										style={{ width: '32px', height: '32px' }}
									/>
									<h3 className="text-sm font-bold truncate min-w-0 flex-1">{course.title}</h3>
								</div>
							</a>
							{course.lessons && course.lessons.length > 0 && (
								<ul className="space-y-2 list-none" data-testid="course-lessons">
									{course.lessons.map((lesson) => {
										const lessonHref = `${localePrefix}/${lesson.slug}`;
										return (
											<li key={lesson.slug}>
												<a
													href={lessonHref}
													className="text-sm text-muted-foreground hover:text-foreground transition-colors block no-underline"
												>
													{lesson.title}
												</a>
											</li>
										);
									})}
								</ul>
							)}
						</div>
					</li>
				);
			})}
		</ul>
	);
};
