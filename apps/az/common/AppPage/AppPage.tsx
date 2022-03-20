/**
 * The layout common for all the pages will be here
 *
 * Created February 27th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import Box from '@mui/material/Box';
import { Nav } from './Nav';
import { ThemeProvider } from '@az/styles';

export const AppPage: FC<AppProps> = ({
  Component,
  pageProps
}) => {
  return (
    <>
      <Head>
        <title>academeez</title>
      </Head>
      <ThemeProvider>
        <Box component="main" sx={{ backgroundColor: 'grey.100' }}>
          <Nav />
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  )
}
