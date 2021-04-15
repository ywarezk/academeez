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

import { FC, useContext } from 'react';
import { createPortal } from 'react-dom';
import { LayoutContext } from '../layout.context';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import logo from './logo.png';
import { Grid } from '@material-ui/core';
import { MuiAppBar, LogoImage } from './Header.markup';

type HeaderProps = { isTransparent? : boolean }

export const Header: FC<HeaderProps> = () => {
  const { header } = useContext( LayoutContext );

  if (!header.current) return null;

  return createPortal(
    (
      <MuiAppBar className="bg-dark800 pt-2 pb-2">
        <Grid container className="justify-content-center">
          <Grid item xs={10}>
            <Toolbar>
              <Link href="/">
                <a>
                  <LogoImage
                    src={logo}
                    alt="Academeez - coding courses"
                  />
                </a>
              </Link>
              <List className="d-flex flex-grow-1">
                <ListItem>
                  <Link href="/courses">
                    <Typography variant="body1" component="span">
                      Learn a course
              </Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <a href="https://github.com/ywarezk/academeez">
                    <GithubIcon />
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://www.youtube.com/channel/UCmnTSM4hGDJin7g5PyXa9pQ">
                    <YoutubeIcon />
                  </a>
                </ListItem>
              </List>
            </Toolbar>
          </Grid>
        </Grid>
      </MuiAppBar>
    ),
    header.current
  )
}
