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
import Box from "@mui/material/Box";
import Link from 'next/link';
import Github from '@mui/icons-material/GitHub';
import MuiLink from '@az/mui/Link';


export const Nav: FC = () => {
  return (
    <AppBar color='transparent' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{flexGrow: 1}}>
            <Link href="/" >
              <a>
                <Logo />
              </a>
            </Link>
          </Box>
          <Box>
            <MuiLink
              href="https://github.com/ywarezk/academeez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </MuiLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
