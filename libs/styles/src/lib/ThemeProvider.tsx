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
import { FC, PropsWithChildren } from 'react';
import { theme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      { children }
    </MuiThemeProvider>
  )
}

