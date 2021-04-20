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
import { Text } from './TextColors';
import { Common } from './Common';
import { DefaultTheme } from "styled-components/native";

export interface Theme {
  colors: {
    dark800: string,
    gray200: string,
    green: string,
    white: string,
  },
  fonts: {
    spaceMono: string
  }
}

/**
 * Academeez theme will be placed here
 */
const theme: Theme = {
  colors: {
    dark800: '#2d2d2d',
    gray200: '#f4f4f4',
    green: '#01D662',
    white: '#fff'
  },
  fonts: {
    spaceMono: 'Space Mono'
  }
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

/**
 * Our entire app will be wrapped with this theme
 */
export const ThemeProvider: FC = ({ children }) => {
  return (
    <SCThemeProvider theme={theme}>
      {/* <Fonts /> */}
      <Flexbox />
      <Background />
      <Paddings />
      <Text />
      <Common />

      { children }
    </SCThemeProvider>
  )
}
