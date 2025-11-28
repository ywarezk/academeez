import * as React from 'react';
import { ExploreButton } from './ExploreButton';
import { ExplorePanel } from './ExplorePanel';
import type { Course } from './CourseList';

interface ExploreContainerProps {
	courses: Course[];
}

export const ExploreContainer: React.FC<ExploreContainerProps> = ({ courses }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<>
			<ExploreButton onClick={handleOpen} />
			<ExplorePanel isOpen={isOpen} onClose={handleClose} courses={courses} />
		</>
	);
};
