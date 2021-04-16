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
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { Flexbox } from './Flexbox';
import { Background } from './Backgrounds';
import { Paddings } from './Paddings';
import { TextColors } from './TextColors';

/**
 * Academeez theme will be placed here
 */
const theme = {
  colors: {
    dark800: '#2d2d2d'
  }
}

/**
 * Our entire app will be wrapped with this theme
 */
export const ThemeProvider: FC = ({ children }) => {
  return (
    <SCThemeProvider theme={theme}>
      <Flexbox />
      <Background />
      <Paddings />
      <TextColors />

      { children }
    </SCThemeProvider>
  )
}
