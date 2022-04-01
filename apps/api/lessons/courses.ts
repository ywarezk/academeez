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

export class CoursesResolver {

  /**
   * Get a list of all the education items
   */
  async lessons() {
    const educationItems = await this._getAllEducationItems(['libs/courses/']);

    // calculate the children
    for (const lesson of educationItems) {
      const pathArray = lesson.link.split('/');
      lesson.children = educationItems
        .filter(l => {
          const childPathArray = l.link.split('/');
          if (childPathArray.length !== (pathArray.length + 1)) return false;
          return difference(pathArray, childPathArray).length === 0;
        })
        .map(l => l.link)
    }

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
  private async _getAllEducationItems(paths: string[]): Promise<any> {
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
    const newPaths = [];
    const newEducationItems = [];
    for (const key of keys) {
      const item = data.repository[key];
      if (key === '_readme') continue;
      if (includes(key, '_readme')) {
        try {
          const result = metadataParser(item.text);
          newEducationItems.push(camelcaseKeys(result.metadata))
        } catch (err) {
          throw new Error(`Failed while parsing the README of ${key}`)
        }
      } else {
        const trees = item.entries
          .filter(entry => entry.type === 'tree')
          .filter(entry => {
            const { name } = entry;
            const numStr = name.split('_')[0];
            const num = parseFloat(numStr);
            return !isNaN(num);
          })
          .map(entry => entry.path);
        newPaths.push(...trees);
      }
    }

    const recResults = await this._getAllEducationItems(newPaths)

    return [...newEducationItems, ...recResults];
  }

}
