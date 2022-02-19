/**
 * Contains the global margins and paddings
 *
 * Created April 15th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { css } from '@emotion/react';
import { Direction, Paddings, PaddingMargin } from './theme.types.delete';

export const padding = (paddingOrMargin: PaddingMargin, direction: Direction, padding: Paddings) => css`
  ${paddingOrMargin + direction}: ${padding};
`

