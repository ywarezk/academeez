import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],	
	plugins: [
    starlightPlugin()
  ],
	theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        nav: 'var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),0 16px 32px -16px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.1)',
      },
      backgroundColor: {
        green: '#01D662',
        "red-30": "rgb(208 125 119/0.05)",
        "blue-30": "#cce5ff"
      },
      textColor: {
        green: 'rgb(43 110 98)',
        "red-50": "rgb(166 66 58/1);",
        "blue-50": "#004085"
      },
      fontSize: {
        sm: ['0.875rem', {lineHeight: '1.25rem'}],

        base: ['0.938rem', {lineHeight: undefined}],
        lg: ['1.0625rem', {lineHeight: '30px'}],
      },
      lineHeight: {
        base: '30px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        green: '#01D662',
        wash: 'rgb(255 255 255/var(--tw-bg-opacity))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rgb(64 71 86/var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      fontFamily: {
        sans: ['var(--font-inter)'],
      },

      borderColor: {
        link: '#01D662',
      },
    },
  },
}
