/**
 * helper method to fetch from github api
 *
 * Created April 24th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import axios from 'axios';

export async function queryGithub(query: string) {
  const response = await axios.post(
    'https://api.github.com/graphql',
    {
      query
    },
    {
      headers: {
        "Authorization": `bearer ${process.env.GITHUB_TOKEN}`
      }
    }
  )
  return response.data.data;
}
