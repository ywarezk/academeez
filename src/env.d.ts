/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@astrojs/starlight" />

declare module 'virtual:starlight/user-config' {
	import type { StarlightConfig } from '@astrojs/starlight/types';
	const config: StarlightConfig;
	export default config;
}

declare module 'virtual:starlight/components/LanguageSelect' {
	const Component: import('astro').AstroComponentFactory;
	export default Component;
}

declare module 'virtual:starlight/components/Search' {
	const Component: import('astro').AstroComponentFactory;
	export default Component;
}

declare module 'virtual:starlight/components/SiteTitle' {
	const Component: import('astro').AstroComponentFactory;
	export default Component;
}

declare module 'virtual:starlight/components/SocialIcons' {
	const Component: import('astro').AstroComponentFactory;
	export default Component;
}

declare module 'virtual:starlight/components/ThemeSelect' {
	const Component: import('astro').AstroComponentFactory;
	export default Component;
}
