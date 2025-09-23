'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from './utils';

const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cn('relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full', className)}
		{...props}
	/>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn('aspect-square h-full w-full', className)}
		{...props}
	/>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn(
			'flex h-full w-full items-center justify-center rounded-full bg-muted',
			className
		)}
		{...props}
	/>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

type AvatarFullProps = {
	name: string;
	avatar: string;
	slug?: string;
} & React.ComponentProps<typeof Avatar>;

const AvatarFull: React.FC<AvatarFullProps> = ({ avatar, name, slug, ...props }) => {
	const [firstName, lastName] = name.split(' ');

	// if no slug then don't render an anchor

	const AvatarNoAnchor = (
		<Avatar {...props}>
			<AvatarImage src={avatar} />
			<AvatarFallback>
				{firstName[0]}
				{lastName[0]}
			</AvatarFallback>
		</Avatar>
	);

	if (!slug) {
		return AvatarNoAnchor;
	}

	return (
		<a
			href={`/authors/${slug}`}
			className="inline-flex items-center gap-2 no-underline text-foreground hover:text-green"
		>
			{AvatarNoAnchor}
			<span className="m-0 inline-flex items-center leading-none text-sm font-normal font-sans">
				{name}
			</span>
		</a>
	);
};

export { Avatar, AvatarImage, AvatarFallback, AvatarFull };
