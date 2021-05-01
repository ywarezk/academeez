/**
 * Contains the global margins and paddings
 *
 * Created April 15th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { createGlobalStyle } from 'styled-components';

export const Paddings = createGlobalStyle`
  .pt-2 {
    padding-top: 0.75rem !important;
  }

  .pt-3 {
    padding-top: 1rem !important;
  }

  .pt-4 {
    padding-top: 2.5rem !important;
  }

  .pb-2 {
    padding-bottom: 0.75rem !important;
  }

  .pr-2 {
    padding-right: 0.75rem !important;
  }

  .pl-2 {
    padding-left: 0.75rem !important;
  }

  .pr-1 {
    padding-right: 0.5rem !important;
  }

  .pl-1 {
    padding-left: 0.5rem !important;
  }

  .p-0 {
    padding: 0;
  }

  .m-0 {
    margin: 0;
  }

  .mt-3 {
    margin-top: 1rem !important;
  }

  .mr-3 {
    margin-right: 1rem !important;
  }

  .mt-6 {
    margin-top: 3rem !important;
  }
`
