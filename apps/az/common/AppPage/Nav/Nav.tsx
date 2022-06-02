/**
 * Navigation bar for all the pages
 *
 * Created March 4th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC, useState } from "react";
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
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const GithubLink = () => {
  return (
    <AzLink
      sx={{ mr: 3, lineHeight: 0 }}
      href="https://github.com/ywarezk/academeez"
      target="_blank"
      data-test="nav-link-github"
      rel="noopener noreferrer"
    >
      <Github />
    </AzLink>
  )
}

export const YoutubeLink = () => {
  return (
    <AzLink
      sx={{mr: 3, lineHeight: 0}}
      href="https://www.youtube.com/channel/UCmnTSM4hGDJin7g5PyXa9pQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Youtube />
    </AzLink>
  )
}

export const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AppBar color='transparent' position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* begin logo */}
          <Box sx={{flexGrow: 1}}>
            <NextLink href="/" >
              <a>
                <Logo />
              </a>
            </NextLink>
          </Box>
          {/* end logo */}

          {/* begin nav for screen > mobile */}
          <Box sx={{display: { xs: 'none', sm: 'flex'}, alignItems: 'center'}}>
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
            <YoutubeLink />
            <GithubLink />
          </Box>
          {/* end nav */}

          {/* begin hamburger drawer for mobile */}
          <Box sx={ {display: {xs: 'flex', sm: 'none'}} }>
            <IconButton
              sx={{color: 'background.paper'}}
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              open={isOpen}
              onClose={() => setIsOpen(false)}
              onOpen={() => setIsOpen(true) }
            >
              <List sx={{p: 0}}>
                <ListItem sx={{ p: 0 }}>
                  <ListItemText sx={{ m: 0 }}>
                    <NextLink href="/courses" passHref >
                      <Button
                        variant="text"
                        component={AzLink}
                        sx={{ color: 'primary.main', p: 2}}
                      >
                        Start Learning
                      </Button>
                    </NextLink>
                  </ListItemText>
                </ListItem>
              </List>
              <Divider />
              <List sx={{ p: 0 }}>
                <ListItem sx={{ p: 0 }}>
                  <ListItemText sx={{ m: 0 }}>
                    <NextLink href="/blog" passHref >
                      <Button
                        variant="text"
                        component="a"
                        sx={{ p: 2, width: '100%', display: 'block', color: 'secondary.main' }}
                      >
                        Blog
                      </Button>
                    </NextLink>
                  </ListItemText>
                </ListItem>

                <ListItem sx={{ p: 0 }}>
                  <ListItemText sx={{ m: 0 }}>
                    <Button
                      variant="text"
                      component="a"
                      href="https://github.com/ywarezk/academeez"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ p: 2, width: '100%', display: 'block', color: 'secondary.main' }}
                    >
                      Github
                    </Button>
                  </ListItemText>
                </ListItem>

                <ListItem sx={{ p: 0 }}>
                  <ListItemText sx={{ m: 0 }}>
                    <Button
                      variant="text"
                      component="a"
                      href="https://www.youtube.com/channel/UCmnTSM4hGDJin7g5PyXa9pQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ p: 2, width: '100%', display: 'block', color: 'secondary.main' }}
                    >
                      Youtube
                    </Button>
                  </ListItemText>
                </ListItem>
              </List>
            </SwipeableDrawer>
          </Box>
          {/* end hamburger drawer for mobile */}

        </Toolbar>
      </Container>
    </AppBar>
  )
}
