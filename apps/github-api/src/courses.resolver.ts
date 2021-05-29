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
import metadataParser from 'markdown-yaml-metadata-parser';
import camelcaseKeys from 'camelcase-keys';
import { includes, isEmpty } from 'lodash';

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
    const temp = await this._getAllEducationItems(['libs/courses/']);


  }

  /**************
   * Private
   **************/

  /**
   * given the name of the folder
   * i need to remove the underscore and the dash
   * to add it to the graphql query
   * @param originalName - example 02_html-css
   */
  private _sanitizeName(path: string): string {
    path = path.replace('libs/courses/', '');

    if (includes(path, '/')) {
      path = path.split('/').join('_');
    }
    if (includes(path, '_')) {
      const arr = path.split('_');
      const [first] = arr.splice(0, 1);
      if (!isNaN(parseFloat(first))) {
        path = arr.join('_');
      }

    }
    if (includes(path, '-')) {
      path = path.split('-').join('_');
    }
    // if (!path) return '_';
    return path;
  }

  private _queryLsFolder(path: string, alias?): string {
    return `
      ${alias || this._sanitizeName(path)}: object(expression: "main:${path}") {
        ... on Tree {
            entries {
              type
              name
              path
            }
        }
      }
    `
  }

  private _queryParseReadme(folderName: string, alias?): string {
    return `
      ${alias || this._sanitizeName(folderName)}: object(expression: "main:${folderName}/README.md") {
        ... on Blob {
          text
        }
      }
    `
  }

  /**
   * recursivly get all the education items of a folder
   * @param folderName
   * @returns
   */
  private async _getAllEducationItems(paths: string[]): Promise<EducationItem[]> {
    if (isEmpty(paths)) return [];

    // For all the paths create a big query to read all the folders and files
    let query = paths.reduce((accumulator, path) => {
      return `
        ${accumulator}
        ${this._queryLsFolder(path, this._sanitizeName(path) || '_' )}
        ${this._queryParseReadme(path, `${this._sanitizeName(path)}_readme`)}
      `
    }, '')

    const data = await queryGithub(query);

    const keys = Object.keys(data.repository);
    const newPaths = [];
    const newEducationItems = [];
    for(const key of keys) {
      const item = data.repository[key];
      if (key === '_readme') continue;
      if (includes(key, '_readme')) {
        try {
          const result = metadataParser(item.text);
          newEducationItems.push(camelcaseKeys(result.metadata))
        } catch(err) {
          throw new Error(`Failed while parsing the README of ${key}`)
        }
      } else {
        const trees = item.entries
                          .filter(entry => entry.type === 'tree')
                          .map(entry => entry.path);
        newPaths.push(...trees);
      }
    }

    const recResults = await this._getAllEducationItems(newPaths)

    return [...newEducationItems, ...recResults];
  }

}
