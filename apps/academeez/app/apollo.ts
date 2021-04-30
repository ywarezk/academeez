/**
 * Creating the apollo client
 *
 * Created April 28th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { isServer } from '@nz/lodash';

// TODO: add declaration of the cache shape
type Cache = any;

export function createApolloClient(
  initialCache = null
): ApolloClient<Cache> {
  const cache: InMemoryCache = new InMemoryCache().restore(initialCache);

  // 'same-origin' in production cause we are in the same domain
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL || '/graphql',
    credentials: 'same-origin'
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
      }
    }
  });

  return new ApolloClient<NormalizedCacheObject>({
    ssrMode: isServer(),
    link: authLink.concat(httpLink),
    cache
  });
}
