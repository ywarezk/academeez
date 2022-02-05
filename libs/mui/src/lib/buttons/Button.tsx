/**
 * Designing the button
 *
 * Created April 19th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ColorName } from '@academeez/az/styles';
import MuiButton, {
  ButtonProps as MuiButtonProps,
} from '@mui/material/Button';
import { FC } from 'react';
import styled, { StyledProps, css } from 'styled-components';

export type ButtonProps = Omit<MuiButtonProps, 'color'> & { color: ColorName };

export const Button: FC<ButtonProps> = styled(({ color, ...props }) => (
  <MuiButton {...props} />
))<ButtonProps>`
  && {
    font-family: 'Space Mono';
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

    &:hover {
      box-shadow: none;
    }
  }

  ${(props: StyledProps<ButtonProps>) => {
    switch (props.color) {
      case 'dark800':
        return css`
          &&.MuiButton-contained:not(.MuiButton-outlined) {
            color: ${props.theme.colors.gray200};
            background-color: ${props.theme.colors.dark800};
            &:hover {
              background-color: ${props.theme.colors.dark700};
            }
          }

          &&.MuiButton-outlined {
            color: ${props.theme.colors.dark800};
            border-color: ${props.theme.colors.dark800};
          }
        `;
      default:
        return css`
          &&.MuiButton-contained:not(.MuiButton-outlined) {
            color: ${props.theme.colors.dark800};
            background-color: ${props.theme.colors.green};
            &:hover {
              background-color: ${props.theme.colors.greenHover};
            }
          }

          &&.MuiButton-outlined {
            color: ${props.theme.colors.green};
            border-color: ${props.theme.colors.green};
          }
        `;
    }
  }};
` as any;
