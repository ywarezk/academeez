/**
 * this react component is the hero section in the site homepage
 *
 * Created December 11th, 2025
 * @version 0.1.0
 * @license MIT
 */

import { Button } from '../Button';
import { cn } from '../utils';
import { useEffect, useState } from 'react';

interface HeroProps {
	translations: {
		title: string;
		description: string;
		buttonText: string;
	};
	locale?: string;
}

const technologies = ['React', 'Terraform', 'Git', 'FluxCD', 'Angular', 'Node.js'];

const technologyColors: Record<string, string> = {
	React: 'rgb(109, 210, 248)',
	Terraform: 'rgb(75, 65, 223)',
	Git: 'rgb(223, 86, 51)',
	FluxCD: 'rgb(45, 98, 219)',
	Angular: 'rgb(203, 66, 59)',
	'Node.js': 'rgb(119, 173, 84)',
};

const getTechnologyIconPath = (technology: string): string => {
	// Special case for Node.js - use white logo
	if (technology === 'Node.js') {
		return '/icons/nodejs-white.png';
	}

	// Map technology names to icon file names
	const iconMap: Record<string, string> = {
		React: 'react',
		Terraform: 'terraform',
		Git: 'git',
		FluxCD: 'fluxcd',
		Angular: 'angular',
	};
	const iconName = iconMap[technology] || technology.toLowerCase();
	return `/icons/${iconName}.svg`;
};

const getTechnologyHeroImage = (technology: string): string => {
	// Map technologies to hero images
	const heroMap: Record<string, string> = {
		React: 'hero1',
		Terraform: 'hero2',
		Git: 'hero3',
		FluxCD: 'hero4',
		Angular: 'hero5',
		'Node.js': 'hero1', // Reuse hero1 for Node.js
	};
	const heroName = heroMap[technology] || 'hero1';
	return `/hero/${heroName}.webp`;
};

export const Hero = ({ translations, locale = 'en' }: HeroProps) => {
	const isRTL = locale === 'he';
	const [isVisible, setIsVisible] = useState(false);
	const [currentTechIndex, setCurrentTechIndex] = useState(0);
	const [displayText, setDisplayText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [isStarted, setIsStarted] = useState(false);

	useEffect(() => {
		// Trigger animation on mount
		setIsVisible(true);
		// Start typing animation after a short delay
		const startTimeout = setTimeout(() => {
			setIsStarted(true);
		}, 500);
		return () => clearTimeout(startTimeout);
	}, []);

	useEffect(() => {
		if (!isStarted) return;

		const currentTech = technologies[currentTechIndex];
		const typingSpeed = isDeleting ? 50 : 100;
		const pauseTime = isDeleting ? 500 : 2000;

		if (!isDeleting && displayText === currentTech) {
			// Finished typing, wait then start deleting
			const timeout = setTimeout(() => {
				setIsDeleting(true);
			}, pauseTime);
			return () => clearTimeout(timeout);
		}

		if (isDeleting && displayText === '') {
			// Finished deleting, move to next tech
			setIsDeleting(false);
			setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
			return;
		}

		const timeout = setTimeout(() => {
			if (isDeleting) {
				setDisplayText((prev) => prev.slice(0, -1));
			} else {
				setDisplayText((prev) => currentTech.slice(0, prev.length + 1));
			}
		}, typingSpeed);

		return () => clearTimeout(timeout);
	}, [displayText, isDeleting, currentTechIndex, isStarted]);

	return (
		<div className="relative w-full overflow-hidden mb-12">
			{/* Background Image */}
			<div
				className="relative w-full h-[60vh] min-h-[400px] bg-cover bg-center bg-no-repeat transition-all duration-1000"
				style={{
					backgroundImage: `url(${getTechnologyHeroImage(technologies[currentTechIndex])})`,
				}}
			>
				{/* Animated Overlay Gradient */}
				<div
					className={cn(
						'absolute inset-0 transition-opacity duration-1000',
						isRTL
							? 'bg-gradient-to-l from-black/60 via-black/40 to-transparent'
							: 'bg-gradient-to-r from-black/60 via-black/40 to-transparent',
						isVisible ? 'opacity-100' : 'opacity-0'
					)}
				/>

				{/* Animated Shimmer Effect */}
				{isVisible && (
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
				)}

				{/* Technology Logo - Right side for LTR, Left side for RTL */}
				<div
					className={cn(
						'absolute top-1/2 -translate-y-1/2 z-20 transition-opacity duration-1000',
						isRTL ? 'left-6 md:left-12 lg:left-24' : 'right-6 md:right-12 lg:right-24',
						isVisible ? 'opacity-70' : 'opacity-0'
					)}
				>
					<img
						key={currentTechIndex}
						src={getTechnologyIconPath(technologies[currentTechIndex])}
						alt={technologies[currentTechIndex]}
						className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain filter drop-shadow-lg transition-opacity duration-500"
					/>
				</div>

				{/* Content Container */}
				<div
					className={cn(
						'relative z-10 h-full flex items-center px-6 md:px-12 lg:px-24',
						isRTL ? 'justify-end' : 'justify-start'
					)}
				>
					<div
						className={cn(
							'max-w-2xl space-y-6 transition-all duration-1000 delay-300',
							isRTL && 'text-right ml-auto',
							isVisible
								? 'opacity-100 translate-x-0'
								: isRTL
									? 'opacity-0 translate-x-8'
									: 'opacity-0 -translate-x-8'
						)}
					>
						<h1
							className={cn(
								'hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight',
								isRTL && 'text-right'
							)}
						>
							{translations.title}
							<br />
							<span
								className="inline-block mt-2"
								style={{
									color: technologyColors[technologies[currentTechIndex]] || '#01D662',
								}}
							>
								{isRTL ? (
									<>
										<span
											aria-hidden="true"
											className="inline-block align-middle translate-y-[-0.12em] ml-2 origin-bottom"
											style={{
												color: technologyColors[technologies[currentTechIndex]] || '#01D662',
											}}
										>
											/
										</span>
										<span className="inline-block translate-y-[0.1em]">{displayText}</span>
										<span
											className="inline-block align-middle w-[0.16em] h-[1.1em] translate-y-[0.08em] mr-4 animate-pulse origin-bottom"
											style={{
												backgroundColor:
													technologyColors[technologies[currentTechIndex]] || '#01D662',
											}}
										/>
									</>
								) : (
									<>
										<span
											aria-hidden="true"
											className="inline-block align-middle translate-y-[-0.12em] mr-2 origin-bottom"
											style={{
												color: technologyColors[technologies[currentTechIndex]] || '#01D662',
											}}
										>
											/
										</span>
										<span className="inline-block translate-y-[0.1em]">{displayText}</span>
										<span
											className="inline-block align-middle w-[0.16em] h-[1.1em] translate-y-[0.08em] ml-4 animate-pulse origin-bottom"
											style={{
												backgroundColor:
													technologyColors[technologies[currentTechIndex]] || '#01D662',
											}}
										/>
									</>
								)}
							</span>
						</h1>
						<p
							className={cn(
								'text-lg md:text-xl text-white/90 max-w-xl',
								isRTL && 'text-right ml-auto'
							)}
						>
							{translations.description}
						</p>
						{!isRTL && (
							<div className="pt-4">
								<Button asChild size="lg" className="text-lg px-8 py-6 font-semibold">
									<a href="/courses" className="no-underline">
										{translations.buttonText}
									</a>
								</Button>
							</div>
						)}
					</div>
					{isRTL && (
						<div
							className={cn(
								'absolute right-6 md:right-12 lg:right-24 bottom-12 z-20 transition-opacity duration-1000 delay-300',
								isVisible ? 'opacity-100' : 'opacity-0'
							)}
						>
							<Button asChild size="lg" className="text-lg px-8 py-6 font-semibold">
								<a href="/courses" className="no-underline">
									{translations.buttonText}
								</a>
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
