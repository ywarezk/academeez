/**
 * Get the list of courses
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { gql, useQuery } from "@apollo/client";
import { EducationItem } from '@academeez/entities';
import { MockedResponse } from '@apollo/client/testing';

export const coursesQuery = gql`
  query {
    courses {
      id
      title
      description
      logo
      bgImg
      videoUrl
      prerequisites {
        title
        slug
        logo
      }
      shortDescription
    }
  }
`

export const mockCourses: MockedResponse = {
  request: {
    query: coursesQuery
  },
  result: {
    data: {
      courses: [
        {
          "id": "f1f8236b2c6b4a2b15bd847311251e712064239f",
          "title": "React",
          "description": "Build web applications using React",
          "logo": "https://github.com/ywarezk/academeez/raw/main/libs/courses/01_react/logo.png",
          "bgImg": "https://github.com/ywarezk/academeez/raw/main/libs/courses/01_react/bg.png",
          "slug": "react",
          "videoUrl": "https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8",
          "prerequisites": [
            {
              "title": "HTML and CSS",
              "slug": "html-css",
              "logo": "https://github.com/ywarezk/academeez/raw/main/libs/courses/02_html-css/logo.png"
            },
            {
              "title": "Javascript",
              "slug": "javascript",
              "logo": "https://github.com/ywarezk/academeez/raw/main/libs/courses/03_javascript/logo.png"
            },
            {
              "title": "Angular",
              "slug": "angular",
              "logo": "https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/logo.svg"
            },
          ],
          "shortDescription": "Build amazing fast web applications using React."
        },
        {
          "id": "1942a5a5e2b8ea593ab6561fd2ad5a7e9f2b318b",
          "title": "HTML and CSS",
          "description": "Learn to build and design web pages",
          "logo": "https://github.com/ywarezk/academeez/raw/main/libs/courses/02_html-css/logo.png",
          "bgImg": "https://github.com/ywarezk/academeez/raw/main/libs/courses/02_html-css/bg.png",
          "slug": "html-css",
          "videoUrl": "https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8",
          "prerequisites": [],
          "shortDescription": "Learn to build web sites using HTML."
        },
        {
          "id": "53506e84a219b6ccf22e9df78fc46540b535d7ae",
          "title": "Javascript",
          "description": "Javascript is the most popular programming language according to github. Using Javascript you can build web applications, mobile apps, backend server apps and more.",
          "logo": "https://github.com/ywarezk/academeez/raw/main/libs/courses/03_javascript/logo.png",
          "bgImg": "https://github.com/ywarezk/academeez/raw/main/libs/courses/03_javascript/bg.png",
          "slug": "javascript",
          "videoUrl": "https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8",
          "prerequisites": [
            {
              "title": "HTML and CSS",
              "slug": "html-css",
              "logo": "https://github.com/ywarezk/academeez/raw/main/libs/courses/02_html-css/logo.png"
            }
          ],
          "shortDescription": "Javascript is a dynamic programming language. What began as the scripting language of the web, is now used for building dynamic websites, server applications, desktop apps, mobile apps and more."
        }
      ]
    }
  }
}

export function useCourses() {
  return useQuery<{ courses: EducationItem[] }>(coursesQuery);
}
