/**
 * Designing the button
 *
 * Created April 19th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import { FC } from 'react';
import styled, {StyledProps} from 'styled-components';

type ButtonColors = 'green' | 'black' | 'red'

type ButtonProps = Omit< MuiButtonProps, 'color'> & {color: ButtonColors};

export const Button: FC<ButtonProps> = styled(MuiButton)<ButtonProps>`
  && {
    font-family: "Space Mono";
    text-transform: none;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-radius: 4px;
    box-shadow: unset;

    ${(props: StyledProps<ButtonProps>) => {
      switch (props.color) {
        case 'black':
          return `
              color: ${props.theme.colors.gray200};
              background-color: ${props.theme.colors.dark800}
            `
        default:
          return `
              color: ${props.theme.colors.dark800};
              background-color: ${props.theme.colors.green}
            `
      }
    }};
  }
` as any
