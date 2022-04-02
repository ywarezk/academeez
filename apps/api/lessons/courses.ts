/**
 * the courses api will be implemented here
 *
 * Created April 3rd, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { queryGithub } from './github'
import metadataParser from 'markdown-yaml-metadata-parser';
import camelcaseKeys from 'camelcase-keys';
import { includes, isEmpty, difference } from 'lodash';
import { Lesson } from '@az/models';

export class CoursesResolver {

  /**
   * Get a list of all the education items
   */
  async lessons(): Promise<Lesson[]> {
    const educationItems = await this._getAllEducationItems(['libs/courses/']);
    return educationItems;
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
      ${alias || this._sanitizeName(path)}: object(expression: "${process.env.BRANCH}:${path}") {
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
      ${alias || this._sanitizeName(folderName)}: object(expression: "${process.env.BRANCH}:${folderName}/README.md") {
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
  private async _getAllEducationItems(paths: string[]): Promise<Lesson[]> {
    if (isEmpty(paths)) return [];

    // For all the paths create a big query to read all the folders and files
    let query = paths.reduce((accumulator, path) => {
      return `
        ${accumulator}
        ${this._queryLsFolder(path, this._sanitizeName(path) || '_')}
        ${this._queryParseReadme(path, `${this._sanitizeName(path)}_readme`)}
      `
    }, '')

    const data = await queryGithub(query);

    const keys = Object.keys(data.repository);
    const newEducationItems = [];
    for (const key of keys) {
      const item = data.repository[key];

      // get all the eduction item
      if (!includes(key, '_readme')) continue;
      try {
        let childrenKey = '_'
        let educationItem = null
        if (key !== '_readme') {
          const result = metadataParser(item.text);
          educationItem = camelcaseKeys(result.metadata)
          childrenKey = key.split('_readme')[0]
        }

        // for the education item find all the children
        const childrenPaths = data.repository[childrenKey].entries
          .filter(entry => entry.type === 'tree')
          .filter(entry => {
            const { name } = entry;
            const numStr = name.split('_')[0];
            const num = parseFloat(numStr);
            return !isNaN(num);
          })
          .map(entry => entry.path);

        if (educationItem) {
          educationItem.children = await this._getAllEducationItems(childrenPaths)
          newEducationItems.push(educationItem)
        } else {
          newEducationItems.push(await this._getAllEducationItems(childrenPaths))
        }
      } catch (err) {
        throw new Error(`Failed while parsing the README of ${key}`)
      }
    }
    return newEducationItems;
  }

}
