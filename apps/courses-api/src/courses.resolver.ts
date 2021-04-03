/**
 * the courses api will be implemented here
 *
 * Created April 3rd, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Query } from 'type-graphql';

export class CoursesResolver {

  @Query(() => String)
  version() {
    return '@academeez/courses-api V0.0.1';
  }
}
