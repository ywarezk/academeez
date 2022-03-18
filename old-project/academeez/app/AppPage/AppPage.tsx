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
import { ThemeProvider } from '@academeez/az/styles';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '../apollo';
import { Header } from './Header';

export function AppPage({ Component, pageProps }: AppProps) {
  const client = createApolloClient(pageProps.cache);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
          <Head>
            <title>academeez - learn coding</title>
          </Head>
          <div className="app">
            <Header />

            <main>
              <Component {...pageProps} />
            </main>
          </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}
