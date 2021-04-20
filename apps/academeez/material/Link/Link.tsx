/**
 * Designing our links
 *
 * Created April 20th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import MuiLink from '@material-ui/core/Link';
import styled, {css} from 'styled-components';

export const Link = styled(MuiLink)<{ outline?: boolean, color?: string } >`
  && {
    font-family: ${ props => props.theme.fonts.spaceMono};
    font-size: 0.95rem;
    color: ${ props => props.theme.colors.white };
    cursor: pointer;
    font-weight: 400;
    line-height: 20px;

    ${props => props.outline && css`
      border: 1px solid;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      border-radius: 4px;
    `}

    ${props => props.color && css`
      border-color: ${props.theme.colors[props.color]};
      color: ${props.theme.colors[props.color]};
    `}
  }
`
