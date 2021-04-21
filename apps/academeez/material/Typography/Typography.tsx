/**
 * All our test styles will be in this component
 *
 * Created April 21st, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Typography as MuiTypography } from '@material-ui/core';
import styled, { css } from 'styled-components';

type TextColors = 'white'

export const Typography = styled(MuiTypography)<{color?: TextColors}>`
  &&.MuiTypography-subtitle2 {
    font-size: 0.8rem;
    font-family: 'Radio Grotesk';
    font-weight: 700;
  }

  ${props => {
    if (!props.color || props.color === 'white') {
      return css`
        && {
          color: ${props.theme.colors.white}
        }
      `
    }
  }}
`
