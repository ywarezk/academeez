/**
 * Place the different global backgrounds we have here
 *
 * Created April 13th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { css } from '@emotion/react';
import { ColorName, Theme } from './theme.types';

export const background = (color: ColorName) => {
  return (theme: Theme) => css`
    backgroundColor: ${theme.colors[color]};
  `
}

