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
import { Grid } from "@material-ui/core";
import { HeroSection, HeroBgImg } from './HomePage.markup';
import { LogoLineAnim } from './LogoLineAnim/LogoLineAnim';

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
        </Grid>
      </HeroSection>
      {/* end hero */}

    </div>
  )
}
