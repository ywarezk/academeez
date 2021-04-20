/**
 * Academeez fonts
 *
 * Created April 19th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { createGlobalStyle } from 'styled-components';
import spacemono from './space-mono/SpaceMono-Regular.ttf';

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'space-mono';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${spacemono}) format('ttf');
  }
`
