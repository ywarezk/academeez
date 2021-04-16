/**
 * Styling flexbox utils
 *
 * Created April 13th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { createGlobalStyle } from 'styled-components';

export const Flexbox = createGlobalStyle`
  .d-flex {
    display: flex !important;
  }

  .flex-grow-1 {
    flex-grow: 1!important;
  }

  .justify-content-center {
    justify-content: center!important;
  }

  .flex-row-reverse {
    flex-direction: row-reverse!important;
  }
`
