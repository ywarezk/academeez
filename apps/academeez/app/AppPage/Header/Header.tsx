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
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { LayoutContext } from '../layout.context';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import logo from './logo.png';
import { Grid } from '@material-ui/core';

type HeaderProps = { isTransparent? : boolean }

export const Header: FC<HeaderProps> = () => {
  const { header } = useContext( LayoutContext );

  if (!header.current) return null;

  return createPortal(
    (
      <AppBar className="bg-dark800">
        <Grid container>
          <Grid item xs={12}>
            <Toolbar>
              <Link href="/">
                <a>
                  <img
                    src={logo}
                    alt="Academeez - coding courses"
                  />
                </a>
              </Link>
              <List className="d-flex">
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
      </AppBar>
    ),
    header.current
  )
}
