/**
 * the courses api will be implemented here
 *
 * Created April 3rd, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Query } from 'type-graphql';
import { EducationItem } from '@academeez/entities';
import { queryGithub } from './github'
import MarkdownIt from 'markdown-it';
import metadataParser from 'markdown-yaml-metadata-parser'

export class CoursesResolver {

  @Query(() => String)
  version() {
    return '@academeez/courses-api V0.0.1';
  }

  /**
   * Get a list of all the courses
   */
  @Query(() => [EducationItem])
  async courses() {
    // get all the courses
    const data = await queryGithub(`
      query {
        repository(name: "academeez", owner: "ywarezk") {

          object(expression: "main:libs/courses") {
            ... on Tree {
                entries {
                  type
                  name
                  oid
                }
            }
          }

        }
      }
    `);

    const courseEntries = data.repository.object.entries.filter(singleEntry => singleEntry.type === 'tree');

    // create the query string to grab all the courses
    let query = courseEntries.reduce((accumulator, course) => {
      return accumulator + `
        ${course.oid}: object(expression: "main:libs/courses/${course.name}/README.md") {
          ... on Blob {
            text
          }
        }
      `
    }, '')

    // grab all the data about the courses
    const coursesData = await queryGithub(`
      query {
        repository(name: "academeez", owner: "ywarezk") {
          ${query}
        }
      }
    `)

    // convert the data to courses
    return courseEntries.map((course) => {
      const courseReadme = coursesData.repository[course.oid].text;
      const result = metadataParser(courseReadme);
      return result.metadata;
    })
  }
}
