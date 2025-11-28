import * as React from 'react';
import { X } from 'lucide-react';
import { Button } from '../Button';
import { CourseList } from './CourseList';
import type { Course } from './CourseList';

interface ExplorePanelProps {
	isOpen: boolean;
	onClose: () => void;
	courses: Course[];
}

export const ExplorePanel: React.FC<ExplorePanelProps> = ({ isOpen, onClose, courses }) => {
	const [headerHeight, setHeaderHeight] = React.useState(0);

	React.useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			// Calculate header height
			const header = document.querySelector('.header');
			if (header) {
				const height = header.getBoundingClientRect().height;
				setHeaderHeight(height);
			}
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const panelHeight = headerHeight > 0 ? `calc(100vh - ${headerHeight}px)` : '100vh';
	// Limit panel to 90% of viewport height to leave some visual space
	const maxPanelHeight = headerHeight > 0 ? `calc(90vh - ${headerHeight}px)` : '90vh';

	return (
		<div
			className="fixed left-0 right-0 z-50 bg-white dark:bg-gray-950 backdrop-blur supports-[backdrop-filter]:bg-white/95 dark:supports-[backdrop-filter]:bg-gray-950/95"
			style={{ top: `${headerHeight}px`, height: panelHeight, maxHeight: maxPanelHeight }}
			onClick={onClose}
			data-testid="explore-panel"
		>
			<div className="h-full w-full overflow-auto p-8" onClick={(e) => e.stopPropagation()}>
				<div className="flex justify-end items-center mb-8">
					<Button variant="ghost" size="icon" onClick={onClose} aria-label="Close panel">
						<X className="h-6 w-6" />
					</Button>
				</div>
				<CourseList courses={courses} />
			</div>
		</div>
	);
};
