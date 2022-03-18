/**
 * Place the different global backgrounds we have here
 *
 * Created April 13th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { createGlobalStyle } from 'styled-components';

export const Background = createGlobalStyle`
  .bg-dark800 {
    background-color: ${(props) =>
      (props.theme as any).colors.dark800} !important;
  }

  .bg-gray200 {
    background-color: ${(props) =>
      (props.theme as any).colors.gray200} !important;
  }
`;
