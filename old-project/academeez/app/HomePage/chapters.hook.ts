/**
 * Grabbing all the end chapters
 *
 * Created May 28th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 */

import { gql } from '@apollo/client';

export const chaptersQuery = gql`
  query {
    courses {
      id
      title
      logo
      slug
      chapters {
        order
        title
        shortDescription
        bgImg
        link
      }
    }
  }
`;
