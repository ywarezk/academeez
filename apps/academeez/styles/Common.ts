/**
 * Miscellanios global styling
 *
 * Created April 16th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { createGlobalStyle } from 'styled-components';

export const Common = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  .h-100 {
    height: 100%;
  }

  *, ::after, ::before {
      box-sizing: border-box;
  }

  .list-unstyled {
    list-style: none;
  }
`
