/**
 * Styling the header section
 *
 * Created April 15th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import MuiListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { FC } from 'react';

export const MuiAppBar: FC<any> = styled(AppBar)`
  && {
    ${(props: any) => {
      return props.isTransparent
        ? `
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: transparent;;
          box-shadow: none;
        `
        : `
          position: static !important;
          background: ${props.theme.colors.dark800}
        `;
    }}
  }
`;

export const LogoImage = styled.img`
  & {
    height: 2rem;
  }
`;

export const ListItem: FC<ListItemProps> = styled(MuiListItem)`
  & {
    flex: 0;
    white-space: nowrap;
    svg {
      fill: white;
    }
  }
` as any;
