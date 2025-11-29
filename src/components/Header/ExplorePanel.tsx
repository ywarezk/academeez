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
	const headerRef = React.useRef<HTMLElement | null>(null);
	const panelRef = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		if (!isOpen) return;

		// Get or cache the header element
		if (!headerRef.current) {
			headerRef.current = document.querySelector('.header');
		}

		const header = headerRef.current;
		if (!header) return;

		// Calculate initial height
		const updateHeight = () => {
			setHeaderHeight(header.getBoundingClientRect().height);
		};

		updateHeight();

		// Watch for header height changes using ResizeObserver
		const resizeObserver = new ResizeObserver(updateHeight);
		resizeObserver.observe(header);

		// Focus management: make panel focusable and focus it when it opens
		// This helps keyboard users navigate to the panel content
		if (panelRef.current) {
			panelRef.current.setAttribute('tabindex', '-1');
			// Small delay to ensure the panel is rendered before focusing
			requestAnimationFrame(() => {
				panelRef.current?.focus();
			});
		}

		// Cleanup
		return () => {
			resizeObserver.disconnect();
		};
	}, [isOpen]);

	if (!isOpen) return null;

	// Limit panel to 90% of viewport height, but let it size to content
	const maxPanelHeight = headerHeight > 0 ? `calc(90vh - ${headerHeight}px)` : '90vh';

	return (
		<div
			ref={panelRef}
			id="explore-panel"
			role="region"
			aria-label="Explore courses"
			aria-hidden={!isOpen}
			className="fixed left-0 right-0 z-50 bg-white dark:bg-gray-950 backdrop-blur supports-[backdrop-filter]:bg-white/95 dark:supports-[backdrop-filter]:bg-gray-950/95 overflow-auto p-8 focus:outline-none"
			style={{ top: `${headerHeight}px`, maxHeight: maxPanelHeight }}
			data-testid="explore-panel"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<CourseList courses={courses} />
		</div>
	);
};
