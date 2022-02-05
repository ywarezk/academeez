/**
 * Miscellanios global styling
 *
 * Created April 16th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Global, css } from '@emotion/react';
import { FC } from 'react';

export const Common: FC = () => (
  <Global styles={css`
    body {
      margin: 0;
      padding: 0;
    }

    .h-100 {
      height: 100%;
    }

    .w-100 {
      width: 100%;
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }

    .list-unstyled {
      list-style: none;
    }
  `} />
)
