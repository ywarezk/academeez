/**
 * All our test styles will be in this component
 *
 * Created April 21st, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@material-ui/core';
import styled, { css } from 'styled-components';

type TextColors = 'white' | 'green' | 'red'

type TypographyProps = MuiTypographyProps & { color?: TextColors };

export const Typography = styled(({color, ...props}) => <MuiTypography {...props} />)<TypographyProps>`
  &&.MuiTypography-subtitle2 {
    font-size: 0.8rem;
    font-family: ${props => props.theme.fonts.radioGrotesk};
    font-weight: 700;
  }

  &&.MuiTypography-h1 {
    font-family: ${props => props.theme.fonts.radioGrotesk};
    font-weight: 700;
    font-size: 4.4rem;
  }

  ${props => {
      return css`
        && {
          color: ${props.theme.colors[props.color || 'white']}
        }
      `
  }}
`
