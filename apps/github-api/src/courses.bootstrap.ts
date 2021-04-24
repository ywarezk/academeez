/**
 * Creating the bootstrap class of this server
 *
 * Created April 2nd, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Bootstrap } from '@nz/express-utils';
import { Graphql } from '@nz/apollo/express';
import { CoursesResolver } from './courses.resolver';

@Graphql({
  schemaOptions: {
    resolvers: [ CoursesResolver ]
  }
})
class CoursesBootstrap extends Bootstrap {}

export const coursesBootstrap = new CoursesBootstrap();
