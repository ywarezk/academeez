/**
 * Chapter entity
 *
 * Created May 28th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 */

import { Field, ObjectType } from 'type-graphql';
import { EducationItem } from './education-item.entity';

@ObjectType()
export class Chapter extends EducationItem {
  @Field()
  order: number;
}
