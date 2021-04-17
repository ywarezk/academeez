/**
 * Our text color will be defined here
 *
 * Created April 16th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { createGlobalStyle } from 'styled-components';

export const Text = createGlobalStyle`
  .text-white {
    color: white !important;
  }

  .text-center {
    text-align: center;
  }

  .text-dark800 {
    color: ${ props => (props.theme as any).colors.dark800 } !important;
  }
`
