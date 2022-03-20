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
import NextLink from 'next/link';
import Github from '@mui/icons-material/GitHub';
import AzLink from '@az/mui/Link';
import Youtube from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';

export const Nav: FC = () => {
  return (
    <AppBar color='transparent' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{flexGrow: 1}}>
            <NextLink href="/" >
              <a>
                <Logo />
              </a>
            </NextLink>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <NextLink href="/courses" passHref>
              <Button
                variant="outlined"
                component={AzLink}
                sx={{ mr: 3 }}
              >
                Start Learning
              </Button>
            </NextLink>
            <NextLink href="/blog" passHref>
              <AzLink sx={{ mr: 3 }}>
                Blog
              </AzLink>
            </NextLink>
            <AzLink
              sx={{mr: 3, lineHeight: 0}}
              href="https://www.youtube.com/channel/UCmnTSM4hGDJin7g5PyXa9pQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube />
            </AzLink>
            <AzLink
              sx={{ mr: 3, lineHeight: 0 }}
              href="https://github.com/ywarezk/academeez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </AzLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
