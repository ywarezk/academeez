import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    experimentalReactChildren: true
  }), starlight({
    editLink: {
      baseUrl: 'https://github.com/ywarezk/academeez/edit/main/docs/'
    },
    components: {
      Sidebar: './src/components/Sidebar.astro',
      PageSidebar: './src/components/PageSidebar.astro',
      SocialIcons: './src/components/SocialIcons.astro'
    },
    sidebar: [{
      label: 'Angular',
      autogenerate: {
        directory: 'courses/angular',
        collapsed: true
      }
    }, {
      label: 'Kubernetes',
      autogenerate: {
        directory: 'courses/kubernetes',
        collapsed: true
      }
    }],
    title: 'academeez',
    logo: {
      light: './src/assets/logo-line.svg',
      dark: './src/assets/logo-line.svg',
      replacesTitle: true
    },
    defaultLocale: 'root',
    locales: {
      root: {
        label: 'English',
        lang: 'en'
      },
      he: {
        label: 'עברית',
        dir: 'rtl',
        lang: 'he'
      }
    },
    social: {
      github: 'https://github.com/ywarezk/academeez',
      youtube: 'https://www.youtube.com/channel/UCmnTSM4hGDJin7g5PyXa9pQ'
    },
    customCss: ['./src/tailwind.css']
  }), tailwind({
    applyBaseStyles: false
  }), sitemap()],
  prefetch: true,
  site: 'https://www.academeez.com',
  trailingSlash: 'never'
});