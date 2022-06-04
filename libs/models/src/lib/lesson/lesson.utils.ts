/**
 * lesson utilities functions
 *
 * Created June 4th, 2022
 * @author: ywarezk
 * @version: 0.1.0
 * @license: MIT
 */

import type { Lesson } from "./lesson.model";
import axios from 'axios';

/**
 * Iterates over the the tree of lessons and returns all the lessons that match the param
 * @param keyValue
 * @returns
 */
export function lessonFilter(lessons: Lesson[], keyValue: Partial<Lesson>): Lesson[] {
  const result = []
  for (const lesson of lessons) {
    let isMatch = true;
    for (const key of Object.keys(keyValue)) {
      if (keyValue[key] !== lesson[key]) {
        isMatch = false;
        continue;
      }
    }
    if (isMatch) {
      result.push(lesson)
    }
    result.push(...lessonFilter(lesson.children, keyValue))
  }
  return result
}

/**
 * gets the lessons from the server
 * @returns
 */
export async function getLessons() : Promise<Lesson[]> {
  const { data } = await axios.get<Lesson[]>('https://academeez.com/api/lessons')
  return data
}
