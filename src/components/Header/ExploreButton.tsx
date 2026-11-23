import * as React from 'react';
import { Button } from '../Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExploreButtonProps {
	onMouseEnter: () => void;
	isOpen: boolean;
	label: string;
}

export const ExploreButton: React.FC<ExploreButtonProps> = ({ onMouseEnter, isOpen, label }) => {
	return (
		<Button
			type="button"
			variant="default"
			size="default"
			className="mr-2"
			onMouseEnter={onMouseEnter}
			aria-expanded={isOpen}
			aria-haspopup="true"
			aria-controls="explore-panel"
		>
			{label}
			{isOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
		</Button>
	);
};
