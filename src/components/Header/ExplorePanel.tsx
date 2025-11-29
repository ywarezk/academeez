import * as React from 'react';
import { CourseList } from './CourseList';
import type { Course } from './CourseList';

interface ExplorePanelProps {
	isOpen: boolean;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	courses: Course[];
}

export const ExplorePanel: React.FC<ExplorePanelProps> = ({
	isOpen,
	onMouseEnter,
	onMouseLeave,
	courses,
}) => {
	const [headerHeight, setHeaderHeight] = React.useState(0);

	React.useEffect(() => {
		if (isOpen) {
			// Calculate header height
			const header = document.querySelector('.header');
			if (header) {
				const height = header.getBoundingClientRect().height;
				setHeaderHeight(height);
			}
		}
	}, [isOpen]);

	if (!isOpen) return null;

	// Limit panel to 90% of viewport height, but let it size to content
	const maxPanelHeight = headerHeight > 0 ? `calc(90vh - ${headerHeight}px)` : '90vh';

	return (
		<div
			className="fixed left-0 right-0 z-50 bg-white dark:bg-gray-950 backdrop-blur supports-[backdrop-filter]:bg-white/95 dark:supports-[backdrop-filter]:bg-gray-950/95 overflow-auto p-8"
			style={{ top: `${headerHeight}px`, maxHeight: maxPanelHeight }}
			data-testid="explore-panel"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<CourseList courses={courses} />
		</div>
	);
};
