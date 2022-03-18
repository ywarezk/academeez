/**
 * This is a portal we are going to use in pages to place a header
 * by default the header is trasnparent
 * but if you want you can import this component and place it in every page
 * if you want to customize the header
 *
 * Created April 24th, 2020
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Link from 'next/link';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import logo from './logo.png';
import { Box, Grid } from '@material-ui/core';
import { MuiAppBar, LogoImage, ListItem } from './Header.markup';
import { Link as AzMuiLink } from '@academeez/az/material';

type HeaderProps = { isTransparent?: boolean };

export const Header: FC<HeaderProps> = (props) => {

  return (
    <MuiAppBar {...props} className="pt-2 pb-2">
      <Grid container className="justify-content-center">
        <Grid item xs={12} lg={10}>
          <Toolbar>
            <Link href="/">
              <a>
                <LogoImage src={logo} alt="Academeez - coding courses" />
              </a>
            </Link>
            <Box
              component={List}
              display={{ xs: 'none', md: 'flex' }}
              className="flex-grow-1 flex-row-reverse"
            >
              <ListItem>
                <a
                  className="d-flex"
                  href="https://github.com/ywarezk/academeez"
                >
                  <GithubIcon className="hover-green" />
                </a>
              </ListItem>
              <ListItem>
                <a
                  className="d-flex"
                  href="https://www.youtube.com/channel/UCmnTSM4hGDJin7g5PyXa9pQ"
                >
                  <YoutubeIcon className="hover-green" />
                </a>
              </ListItem>
              <ListItem>
                <Link href="/blog">
                  <AzMuiLink>Blog</AzMuiLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/courses" passHref>
                  <AzMuiLink outline color="green">
                    start_learning
                  </AzMuiLink>
                </Link>
              </ListItem>
            </Box>
          </Toolbar>
        </Grid>
      </Grid>
    </MuiAppBar>
  )
};
