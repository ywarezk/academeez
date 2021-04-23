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
import { Fonts } from './fonts/Fonts';
import { Video } from './Video';
import { DefaultTheme } from "styled-components/native";

export type ColorName = 'dark800' | 'dark700' | 'gray200' | 'green' | 'greenHover' | 'greenHover2' | 'white' | 'red';

export interface Theme {
  colors: {[key in ColorName]: string},
  fonts: {
    spaceMono: string,
    radioGrotesk: string
  }
}

/**
 * Academeez theme will be placed here
 */
const theme: Theme = {
  colors: {
    dark800: '#2d2d2d',
    dark700: '#444444',
    gray200: '#f4f4f4',
    green: '#01D662',
    greenHover: '#19EB79',
    greenHover2: '#27AE60',
    white: '#fff',
    red: '#D9614C'
  },
  fonts: {
    spaceMono: 'Space Mono',
    radioGrotesk: 'Radio Grotesk'
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
      <Fonts />
      <Video />

      { children }
    </SCThemeProvider>
  )
}
