/**
 * Navigation bar for all the pages
 *
 * Created March 4th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC } from "react";
import AppBar from '@az/mui/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Logo } from './Logo';

export const Nav: FC = () => {
  return (
    <AppBar color='transparent'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
