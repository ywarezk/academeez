/**
 * for pre-rendering
 * static props passed at build time
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { GetStaticProps } from 'next';
import { createApolloClient } from '../apollo';
import { coursesQuery } from './courses.hook';

export const getHomePageStaticProps: GetStaticProps = async () => {
  if (!process.env.NEXT_PUBLIC_API_URL) throw new Error('Missing environment variable NEXT_PUBLIC_API_URL');

  const client = createApolloClient();

  // get a list of all the courses
  await client.query({
    query: coursesQuery
  })

  return {
    props: {
      cache: client.cache.extract()
    }
  }
}
