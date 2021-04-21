/**
 * Academeez fonts
 *
 * Created April 19th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Radio Grotesk';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://academeez.s3-eu-west-1.amazonaws.com/fonts/RadioGrotesk-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Radio Grotesk';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://academeez.s3-eu-west-1.amazonaws.com/fonts/RadioGrotesk-Bold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Radio Grotesk';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://academeez.s3-eu-west-1.amazonaws.com/fonts/RadioGrotesk-Light.woff2) format('woff2');
  }
`
