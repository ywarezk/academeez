/**
 * The site theme will be defined here
 *
 * Created February 16th, 2022
 * @author: ywarezk
 * @version: 1.0.0
 * @license: MIT
 */

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import RadioGroteskRegular from './fonts/radio-grotesk/RadioGrotesk-Regular.woff2';
import RadioGroteskBold from './fonts/radio-grotesk/RadioGrotesk-Bold.woff2';
import SpaceMonoRegular from './fonts/space-mono/SpaceMono-Regular.ttf';
import SpaceMonoBold from './fonts/space-mono/SpaceMono-Bold.ttf';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}

export let theme = createTheme({
  palette: {
    primary: {
      main: '#01D662',
      light: '#A0EAC1'
    },
    error: {
      main: '#FF5E4A'
    },
    warning: {
      main: '#FFD334'
    },
    info: {
      main: '#5C95FF',
      light: '#61DAFB'
    },
    neutral: {
      dark: '#292929',
      "100": '#4D4D4D',
      "200": '#E5E5E5',
      "300": '#D7D7D7',
      light: '#F9F9F9',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Radio Grotesk';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(${RadioGroteskRegular}) format('woff2');
        }

        @font-face {
          font-family: 'Radio Grotesk';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(${RadioGroteskBold}) format('woff2');
        }

        @font-face {
          font-family: 'Space Mono';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(${SpaceMonoRegular}) format('ttf');
        }

        @font-face {
          font-family: 'Space Mono';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(${SpaceMonoBold}) format('ttf');
        }
      `
    }
  },
  typography: {
    fontFamily: 'Radio Grotesk',
    h1: {
      fontFamily: 'Radio Grotesk',
      fontWeight: 700,
      lineHeight: '4.6rem',
      fontSize: '4.375rem'
    },
    h2: {
      fontFamily: 'Radio Grotesk',
      fontWeight: 700,
      lineHeight: '3.438rem',
      fontSize: '3.438rem'
    },
    h5: {
      fontFamily: 'Radio Grotesk',
      fontWeight: 700,
      lineHeight: '1.75rem',
      fontSize: '1.5rem'
    },
    h6: {
      fontFamily: 'Radio Grotesk',
      fontWeight: 400,
      lineHeight: '1.5rem',
      fontSize: '1.25rem'
    },
    body1: {
      fontFamily: 'Space Mono',
      fontWeight: 400,
      lineHeight: '1.25rem',
      fontSize: '0.813rem'
    },
    body2: {
      fontFamily: 'Space Mono',
      fontWeight: 700,
      lineHeight: '1.25rem',
      fontSize: '0.813rem'
    },
    button: {
      fontFamily: 'Space Mono',
      fontWeight: 400,
      lineHeight: '1.25rem',
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily: 'Radio Grotesk',
      fontWeight: 400,
      lineHeight: '1rem',
      fontSize: '0.75rem'
    }
  }
});

// add responsive font sizes
theme = responsiveFontSizes(theme);
