/**
 * Academeez theme will hold public common styles
 * shared in all the pages
 *
 * Created April 13th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC } from 'react';
import { Common } from './Common.delete';
import { Fonts } from './fonts/Fonts.delete';
import { Video } from './Video.delete';
import { Theme } from './theme.types.delete';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

/**
 * Academeez theme will be placed here
 */
const theme: Theme = {
  colors: {
    dark800: '#2d2d2d',
    dark700: '#444444',
    gray300: '#e5e5e5',
    gray200: '#f4f4f4',
    green: '#01D662',
    greenHover: '#19EB79',
    greenHover2: '#27AE60',
    white: '#fff',
    red: '#D9614C',
  },
  fonts: {
    spaceMono: 'Space Mono',
    radioGrotesk: 'Radio Grotesk',
  }
};

/**
 * Our entire app will be wrapped with this theme
 */
export const ThemeProvider: FC = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      {/* <Fonts /> */}
      <Common />
      <Fonts />
      <Video />

      {children}
    </EmotionThemeProvider>
  );
};
