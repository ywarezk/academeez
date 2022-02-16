/**
 * The site theme will be defined here
 *
 * Created February 16th, 2022
 * @author: ywarezk
 * @version: 1.0.0
 * @license: MIT
 */

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

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
  }
});

// add responsive font sizes
theme = responsiveFontSizes(theme);
