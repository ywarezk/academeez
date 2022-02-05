/**
 * Our text color will be defined here
 *
 * Created April 16th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { css } from '@emotion/react';
import { ColorName, Theme } from './theme.types';

export const textCenter = css`
  text-align: center;
`

export const textColor = (color: ColorName) => {
  return (theme: Theme) => css`
    color: ${theme.colors[color]};
  `
}

export const hoverColor = (color: ColorName) => {
  return (theme: Theme) => css`
    &:hover {
      color: ${theme.colors[color]} !important;
      fill: ${theme.colors[color]} !important;
    }
  `
}
