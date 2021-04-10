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
import { useRef } from 'react';
import { LayoutContext } from './layout.context';

export function AppPage({ Component, pageProps }: AppProps) {
  const headerRef = useRef();

  return (
    <LayoutContext.Provider value={ {header: headerRef} }>
      <Head>
        <title>academeez - learn coding</title>
      </Head>
      <div className="app">

        {/* header portal will be placed here */}
        <div ref={ headerRef } />

        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </LayoutContext.Provider>
  );
}
