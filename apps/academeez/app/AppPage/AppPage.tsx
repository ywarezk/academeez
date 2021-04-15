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
import { useEffect, useRef, useState } from 'react';
import { LayoutContext } from './layout.context';
import { Header } from './Header/Header';
import { ThemeProvider } from '@academeez/az/styles';

export function AppPage({ Component, pageProps }: AppProps) {
  const headerRef = useRef();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return (
    <ThemeProvider>
      <LayoutContext.Provider value={{ header: headerRef }}>
        <Head>
          <title>academeez - learn coding</title>
        </Head>
        <div className="app">

          {/* header portal will be placed here */}
          <div ref={headerRef} />

          <Header />
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </LayoutContext.Provider>
    </ThemeProvider>
  );
}
