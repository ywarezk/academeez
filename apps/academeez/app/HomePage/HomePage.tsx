/**
 * academeez home page
 *
 * Created April 16th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC } from "react";
import Head from 'next/head';
import { Header } from '../';
import { Grid, Typography } from "@material-ui/core";
import { HeroSection, HeroBgImg } from './HomePage.markup';
import { LogoLineAnim } from './LogoLineAnim/LogoLineAnim';
import { PlayButton } from '@academeez/az/material';

export const HomePage: FC = () => {
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
          <Grid item xs={12} md={10}>
            <Typography variant="h2" className="text-white text-center">
              Free & Open Source video coding courses
            </Typography>
            <div className="d-flex justify-content-center mt-3">
              <PlayButton className="text-white" fontSize="7rem" />
            </div>

          </Grid>
        </Grid>
      </HeroSection>
      {/* end hero */}

    </div>
  )
}
