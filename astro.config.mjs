import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { mermaid } from './src/plugins/mermaid';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import { sitemapCopier } from './src/integrations/sitemap-copier';
import istanbul from 'vite-plugin-istanbul';

const isPreview = process.env.VERCEL_ENV === 'preview';

// https://astro.build/config
export default defineConfig({
	vite: {
		build: {
			sourcemap: isPreview || process.env.NODE_ENV === 'development',
		},
		plugins: [
			...(isPreview
				? [
						istanbul({
							include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.astro', 'src/**/*.js'],
							exclude: ['node_modules', 'tests/'],
							extension: ['.js', '.ts', '.astro', '.tsx'],
							requireEnv: false, // we already guard with `isPreview`
							checkProd: false,
							forceBuildInstrument: true,
						}),
					]
				: []),
		],
	},
	integrations: [
		react({
			experimentalReactChildren: true,
		}),
		starlight({
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'google-site-verification',
						content: 'ZLdedo-l5mm1TcXoJ4Ikyasbj8wnH4iHMyMuWu2do9s',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'msvalidate.01',
						content: '9EEEA5142FA10331B8194AC8059955E9',
					},
				},
			],
			favicon: '/favicon-32x32.png',
			editLink: {
				baseUrl: 'https://github.com/ywarezk/academeez/edit/main/docs/',
			},
			components: {
				Sidebar: './src/components/Sidebar.astro',
				PageSidebar: './src/components/PageSidebar.astro',
				SocialIcons: './src/components/SocialIcons.astro',
				PageTitle: './src/components/PageTitle.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				MarkdownContent: './src/components/MarkdownContent.astro',
				Pagination: './src/components/Pagination.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
			},
			sidebar: [
				{
					label: 'Angular',
					autogenerate: {
						directory: 'courses/angular',
						collapsed: true,
					},
				},
				{
					label: 'FluxCD',
					items: [
						{
							label: '1. Course Introduction',
							slug: 'courses/fluxcd',
						},
						{
							label: '2. Installation',
							slug: 'courses/fluxcd/installation',
						},
						{
							label: '3. kustomize-controller',
							slug: 'courses/fluxcd/kustomize-controller',
						},
						{
							label: '4. helm-controller',
							slug: 'courses/fluxcd/helm-controller',
						},
						{
							label: '5. Installing Flux with Terraform',
							slug: 'courses/fluxcd/installing-flux-terraform-opentofu',
						},
					],
				},
				{
					label: 'Terraform / OpenTofu',
					items: [
						{
							label: '1. IAC - Course Introduction',
							slug: 'courses/terraform',
						},
						{
							label: '2. Introduction to Terragrunt',
							slug: 'courses/terraform/introduction-to-terragrunt',
						},
						{
							label: '3. pre-commit',
							slug: 'courses/terraform/pre-commit',
						},
						{
							label: '4. Security - Permissions, Roles, Groups, Impersonation',
							slug: 'courses/terraform/permissions-roles-groups-impersonation',
						},
						{
							label: '5. Unit',
							slug: 'courses/terraform/unit',
						},
					],
				},
				{
					label: 'Kubernetes',
					autogenerate: {
						directory: 'courses/kubernetes',
						collapsed: true,
					},
				},
				{
					label: 'Git',
					autogenerate: {
						directory: 'courses/git',
						collapsed: true,
					},
				},
				{
					label: 'React',
					items: [
						{
							label: '1. Course Introduction',
							slug: 'courses/react',
						},
						{
							label: '2. Component',
							slug: 'courses/react/component',
						},
						{
							label: '3. Component Tree',
							slug: 'courses/react/component-tree',
						},
						{
							label: '4. Props',
							autogenerate: {
								directory: 'courses/react/props',
								collapsed: true,
							},
						},
						{
							label: '5. Understanding React Elements',
							slug: 'courses/react/understanding-react-elements',
						},
						{
							label: '6. <Suspense>',
							slug: 'courses/react/suspense',
						},
						{
							label: '7. Single Responsibility',
							slug: 'courses/react/best-practice/component-single-responsibility',
						},
					],
				},
				{
					label: 'Express',
					autogenerate: {
						directory: 'courses/express',
						collapsed: true,
					},
				},
				{
					label: 'Node.JS',
					autogenerate: {
						directory: 'courses/nodejs',
						collapsed: true,
					},
				},
			],
			title: 'academeez',
			logo: {
				light: './src/assets/logo-line.svg',
				dark: './src/assets/logo-line.svg',
				replacesTitle: true,
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				he: {
					label: 'עברית',
					dir: 'rtl',
					lang: 'he',
				},
			},
			social: [
				{
					href: 'https://x.com/academeez?ref=academeez',
					icon: 'x.com',
					label: 'Follow us on X',
				},
				{
					href: 'https://github.com/ywarezk/academeez',
					icon: 'github',
					label: 'Follow us on GitHub',
				},
				{
					href: 'https://www.youtube.com/channel/UCmnTSM4hGDJin7g5PyXa9pQ',
					icon: 'youtube',
					label: 'Follow us on YouTube',
				},
			],
			customCss: ['./src/styles/brand.css', './src/styles/tailwind.css'],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
		icon(),
		sitemapCopier(),
	],
	markdown: {
		remarkPlugins: [mermaid],
	},
	prefetch: true,
	site: 'https://www.academeez.com',
	trailingSlash: 'never',
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
});
