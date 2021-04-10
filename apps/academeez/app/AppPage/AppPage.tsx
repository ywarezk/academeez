/**
 * app layout
 *
 * Created April 10th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { AppProps } from 'next/app';
import Head from 'next/head';

export function AppPage({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>academeez - learn coding</title>
      </Head>
      <div className="app">
        <header className="flex">
          <h1>Welcome to academeez!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
