import * as React from 'react';
import { Button } from '../Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExploreButtonProps {
	onMouseEnter: () => void;
	isOpen: boolean;
}

export const ExploreButton: React.FC<ExploreButtonProps> = ({ onMouseEnter, isOpen }) => {
	return (
		<Button variant="default" size="default" className="mr-2" onMouseEnter={onMouseEnter}>
			Explore
			{isOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
		</Button>
	);
};
