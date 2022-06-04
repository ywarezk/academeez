/**
 * The site theme will be defined here
 *
 * Created February 16th, 2022
 * @author: ywarezk
 * @version: 1.0.0
 * @license: MIT
 */

import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import RadioGroteskRegular from './fonts/radio-grotesk/RadioGrotesk-Regular.woff2'
import RadioGroteskBold from './fonts/radio-grotesk/RadioGrotesk-Bold.woff2'
import SpaceMonoRegular from './fonts/space-mono/SpaceMono-Regular.ttf'
import SpaceMonoBold from './fonts/space-mono/SpaceMono-Bold.ttf'
import { Palette } from '@mui/material/styles/createPalette'
import { Color } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    dark: string
    light: string
    green: string
  }
}

export let theme = createTheme({
  palette: {
    grey: {
      '50': '#2D2D2D',
      '100': '#292929',
      '200': '#4D4D4D',
      '300': '#E5E5E5',
      '400': '#D7D7D7',
      '500': '#F9F9F9',
    },
    secondary: {
      main: '#292929',
    },
    primary: {
      main: '#01D662',
      '500': '#19EB79',
      light: '#A0EAC1',
      dark: '#27AE60',
    },
    error: {
      main: '#FF5E4A',
    },
    warning: {
      main: '#FFD334',
    },
    info: {
      main: '#5C95FF',
      light: '#61DAFB',
    },
    background: {
      paper: '#FFFFFF',
      dark: 'rgba(0, 0, 0, 0.9)',
      green: '#01D662',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        body {
          margin: 0;
        }

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
      `,
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Radio Grotesk',
      // fontSize: 13
    },
    fontFamily: 'Radio Grotesk',
    h1: {
      fontFamily: 'Radio Grotesk',
      fontWeight: 700,
      fontSize: '4.375rem',
    },
    h2: {
      fontFamily: 'Radio Grotesk',
      fontWeight: 700,
      fontSize: '3.438rem',
    },
    h5: {
      fontFamily: 'Radio Grotesk',
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: 'Radio Grotesk',
      fontWeight: 400,
      fontSize: '1.25rem',
    },
    body1: {
      fontFamily: 'Space Mono',
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Space Mono',
      fontWeight: 700,
      fontSize: '1rem',
    },
    button: {
      fontFamily: 'Space Mono',
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily: 'Radio Grotesk',
      fontWeight: 400,
      fontSize: '0.75rem',
    },
  },
})

// add responsive font sizes
theme = responsiveFontSizes(theme)
