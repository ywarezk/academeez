import * as React from 'react';
import { ExploreButton } from './ExploreButton';
import { ExplorePanel } from './ExplorePanel';
import type { Course } from './CourseList';

interface ExploreContainerProps {
	courses: Course[];
}

export const ExploreContainer: React.FC<ExploreContainerProps> = ({ courses }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

	const handleOpen = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		setIsOpen(true);
	};

	const handleClose = () => {
		// Add a small delay to allow moving from button to panel
		timeoutRef.current = setTimeout(() => {
			setIsOpen(false);
		}, 100);
	};

	const handleCancelClose = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	};

	React.useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return (
		<>
			<ExploreButton onMouseEnter={handleOpen} isOpen={isOpen} />
			<ExplorePanel
				isOpen={isOpen}
				onMouseEnter={handleCancelClose}
				onMouseLeave={handleClose}
				courses={courses}
			/>
		</>
	);
};
