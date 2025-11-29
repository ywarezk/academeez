import * as React from 'react';
import { ExploreButton } from './ExploreButton';
import { ExplorePanel } from './ExplorePanel';
import type { Course } from './CourseList';
import { EXPLORE_PANEL_CLOSE_DELAY_MS } from './constants';

interface ExploreContainerProps {
	courses: Course[];
	exploreLabel: string;
}

export const ExploreContainer: React.FC<ExploreContainerProps> = ({ courses, exploreLabel }) => {
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
		}, EXPLORE_PANEL_CLOSE_DELAY_MS);
	};

	const handleCancelClose = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	};

	React.useEffect(() => {
		return () => {
			// Cleanup: clear any pending timeout on unmount
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}
		};
	}, []);

	return (
		<>
			<ExploreButton onMouseEnter={handleOpen} isOpen={isOpen} label={exploreLabel} />
			<ExplorePanel
				isOpen={isOpen}
				onMouseEnter={handleCancelClose}
				onMouseLeave={handleClose}
				courses={courses}
			/>
		</>
	);
};
