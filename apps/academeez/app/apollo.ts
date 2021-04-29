/**
 * Creating the apollo client
 *
 * Created April 28th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ApolloClient, createHttpLink } from '@apollo/client';

// TODO: add declaration of the cache shape
type Cache = any;

export function createApolloClient(): ApolloClient<Cache> {

  // 'same-origin' in production cause we are in the same domain
  // 'include' if in different domain
  const link = createHttpLink({
    uri: '/graphql',
    credentials: 'same-origin'
  });
}
