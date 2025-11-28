import * as React from 'react';
import { Button } from '../Button';
import { ChevronDown } from 'lucide-react';

interface ExploreButtonProps {
	onClick: () => void;
}

export const ExploreButton: React.FC<ExploreButtonProps> = ({ onClick }) => {
	return (
		<Button variant="default" size="default" className="mr-2" onClick={onClick}>
			Explore
			<ChevronDown className="ml-1 h-4 w-4" />
		</Button>
	);
};
