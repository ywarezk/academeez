/**
 * academeez home page
 *
 * Created April 16th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC, useState } from "react";
import Head from 'next/head';
import { Header } from '../';
import { DialogContent, Grid } from "@material-ui/core";
import { HeroSection, HeroBgImg } from './HomePage.markup';
import { LogoLineAnim } from './LogoLineAnim/LogoLineAnim';
import { Button, PlayButton } from '@academeez/az/material';
import { Typography } from '@academeez/az/material';
import { ScrollLine } from './ScrollLine/ScrollLine';
import { IntroVideo } from './IntroVideo/IntroVideo';
import { CourseList } from "./CourseList/CourseList";
import { Dialog } from '@academeez/az/material';

export const HomePage: FC = () => {
  const [isIntroDialogOpen, setIntroDialogOpen] = useState(false);

  return (
    <div className="home-page">
      <Head>
        <title>
          academeez | Free coding video courses
        </title>
        <meta name="description" content="academeez - Free video  courses. Learn React, Angular, NodeJS for free. Free professional courses for beginners and experts" />
      </Head>
      <Header isTransparent />

      {/* begin hero */}
      <HeroSection>
        <LogoLineAnim />
        <HeroBgImg />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" className="text-center" color="white">
              <Typography variant="h1" component="span" color="green">
                Free
              </Typography> &amp; <Typography variant="h1" component="span" color="red">
                Open Source
              </Typography>
              &nbsp;video coding courses
            </Typography>
            <div className="d-flex justify-content-center mt-5">
              <PlayButton
                onClick={() => setIntroDialogOpen(true)}
                className="mr-3">
                About us
              </PlayButton>
              <Dialog
                open={isIntroDialogOpen}
                fullScreen
                isCloseButton
                maxWidth="xl"
                fullWidth
                className="transparent"
                onClose={() => setIntroDialogOpen(false)}
              >
                <DialogContent>
                  <IntroVideo height="100%" fluid={false} />
                </DialogContent>
              </Dialog>
              <Button variant="contained" color="green">
                Start Learning
              </Button>
            </div>
          </Grid>
        </Grid>
        <ScrollLine />
      </HeroSection>
      {/* end hero */}

      {/* begin courses */}
      <section className="pt-6">
        <Typography variant="h2" className="text-dark800 text-center">
          Our <Typography variant="h2" component="span" color="green">FREE</Typography> video courses
        </Typography>

        <Grid container className="justify-content-center mt-5">
          <Grid item xs={12} md={9} >
            <CourseList />
          </Grid>
        </Grid>

      </section>
      {/* end courses */}

    </div>
  )
}
