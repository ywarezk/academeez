/**
 * All our test styles will be in this component
 *
 * Created April 21st, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ColorName } from '@academeez/az/styles';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@material-ui/core';
import { FC } from 'react';
import styled, { css } from 'styled-components';


type TypographyProps = MuiTypographyProps & { color?: ColorName };

export const Typography: FC<TypographyProps> = styled(({color, ...props}) => <MuiTypography {...props} />)<TypographyProps>`
  &&.MuiTypography-subtitle2 {
    font-size: 0.8rem;
    font-family: ${props => props.theme.fonts.radioGrotesk};
    font-weight: 700;
  }

  &&.MuiTypography-subtitle1 {
    font-size: 0.85rem;
    font-family: ${props => props.theme.fonts.spaceMono};
    font-weight: 400;
  }

  &&.MuiTypography-h1 {
    font-family: ${props => props.theme.fonts.radioGrotesk};
    font-weight: 700;
    font-size: 4.4rem;
  }

  &&.MuiTypography-h2 {
    font-family: ${props => props.theme.fonts.radioGrotesk};
    font-weight: 700;
    font-size: 3.4rem;
  }

  &&.MuiTypography-h4 {
    font-family: ${props => props.theme.fonts.radioGrotesk};
    font-weight: 700;
    font-size: 1.5rem;
  }

  ${props => {
      return css`
        && {
          color: ${props.theme.colors[props.color || 'white']}
        }
      `
  }}
` as any
