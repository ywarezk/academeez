/**
 * Represents a course/chapter/lesson
 *
 * Created April 24th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class EducationItem {
  @Field()
  title: string;
}
