/**
 * The main theme context component.
 * This will wrap my app
 *
 * Created February 16th, 2022
 * @author: ywarezk
 * @license: MIT
 * @version: 1.0.0
 */

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { FC } from 'react';
import { theme } from './theme';

export const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      { children }
    </MuiThemeProvider>
  )
}

