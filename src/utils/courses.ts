import { getCollection } from 'astro:content';
import type { Course } from '../components/Header/CourseList';

// Module-level cache for courses by locale
const coursesCache = new Map<string, Course[]>();

/**
 * Get all lessons for a course by filtering and sorting documents
 */
function getCourseLessons(
	coursePrefix: string,
	allDocs: Awaited<ReturnType<typeof getCollection<'docs'>>>
) {
	return allDocs
		.filter((lessonDoc) => {
			// Include lessons that start with the course prefix but exclude the index page itself
			return (
				lessonDoc.id.startsWith(coursePrefix) &&
				lessonDoc.id !== `${coursePrefix}` &&
				lessonDoc.id !== `${coursePrefix}/index` &&
				lessonDoc.id !== `${coursePrefix}/index.mdx` &&
				lessonDoc.data.template === 'doc' &&
				lessonDoc.data.preview !== false
			);
		})
		.sort((a, b) => {
			return (a.data.sidebar?.order || 0) - (b.data.sidebar?.order || 0);
		})
		.map((lessonDoc) => ({
			title: lessonDoc.data.title,
			slug: lessonDoc.slug,
		}));
}

/**
 * Aggregates all courses from the content collection for a given locale.
 * Results are cached per locale to avoid reprocessing on every page render.
 *
 * @param locale - The current locale (e.g., 'en', 'he')
 * @returns Array of Course objects
 */
export async function getCourses(locale: string): Promise<Course[]> {
	// Check cache first
	const cacheKey = locale || 'en';
	if (coursesCache.has(cacheKey)) {
		return coursesCache.get(cacheKey)!;
	}

	// Get all documents (Astro caches this internally)
	const allDocs = await getCollection('docs');

	// Filter for course index pages - these are specifically index.mdx files at courses/{coursename}/index.mdx
	// that match the current locale
	const localePrefix = locale === 'en' || !locale ? '' : `${locale}/`;
	const courseIndexPages = allDocs.filter((doc) => {
		// Match only files that end with /index.mdx (i.e., index.mdx files)
		const coursePattern = new RegExp(`^${localePrefix}courses/([^/]+)/index\\.mdx$`);
		return coursePattern.test(doc.id) && doc.data.template === 'doc';
	});

	// Extract unique courses by slug (remove /index suffix and locale prefix)
	const coursesMap = new Map<string, Course>();

	// First, add courses that have index.mdx files
	for (const doc of courseIndexPages) {
		const match = doc.id.match(new RegExp(`^${localePrefix}courses/([^/]+)`));
		if (match) {
			const slug = match[1];
			const key = `${locale}-${slug}`;
			if (!coursesMap.has(key)) {
				// Get all lessons for this course
				const coursePrefix = locale === 'en' ? `courses/${slug}` : `${locale}/courses/${slug}`;
				const courseLessons = getCourseLessons(coursePrefix, allDocs);

				coursesMap.set(key, {
					title: doc.data.title,
					slug,
					description: doc.data.description,
					locale,
					lessons: courseLessons,
				});
			}
		}
	}

	// Also find courses that have lessons but no index.mdx file
	// Get all course directories by finding all docs that are in a course directory
	const courseDirectories = new Set<string>();
	for (const doc of allDocs) {
		const coursePattern = new RegExp(`^${localePrefix}courses/([^/]+)`);
		if (coursePattern.test(doc.id) && doc.data.template === 'doc') {
			const match = doc.id.match(coursePattern);
			if (match) {
				const slug = match[1];
				const key = `${locale}-${slug}`;
				// Only add if we haven't already added this course (from index.mdx)
				if (!coursesMap.has(key)) {
					courseDirectories.add(slug);
				}
			}
		}
	}

	// For courses without index.mdx, create course entries from the directory name
	for (const slug of courseDirectories) {
		const key = `${locale}-${slug}`;
		const coursePrefix = locale === 'en' ? `courses/${slug}` : `${locale}/courses/${slug}`;

		// Get all lessons for this course
		const courseLessons = getCourseLessons(coursePrefix, allDocs);

		// Only add course if it has at least one lesson
		if (courseLessons.length > 0) {
			// Capitalize first letter and format slug as title
			const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
			coursesMap.set(key, {
				title,
				slug,
				locale,
				lessons: courseLessons,
			});
		}
	}

	const courses = Array.from(coursesMap.values());

	// Cache the result
	coursesCache.set(cacheKey, courses);

	return courses;
}
