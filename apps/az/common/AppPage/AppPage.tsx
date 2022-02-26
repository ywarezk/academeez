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

export const AppPage: FC<AppProps> = ({
  Component,
  pageProps
}) => {
  return (
    <>
      <Head>
        <title>academeez</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  )
}
