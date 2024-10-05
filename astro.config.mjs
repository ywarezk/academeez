import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    experimentalReactChildren: true
  }), starlight({
    favicon: '/favicon-32x32.png',
    editLink: {
      baseUrl: 'https://github.com/ywarezk/academeez/edit/main/docs/'
    },
    components: {
      Sidebar: './src/components/Sidebar.astro',
      PageSidebar: './src/components/PageSidebar.astro',
      SocialIcons: './src/components/SocialIcons.astro',
      PageTitle: './src/components/PageTitle.astro',
      ThemeSelect: './src/components/ThemeSelect.astro'
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
    }, {
      label: 'Git',
      autogenerate: {
        directory: 'courses/git',
        collapsed: true
      }
    }, {
      label: 'React',
      autogenerate: {
        directory: 'courses/react',
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
  trailingSlash: 'never',
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  })
});