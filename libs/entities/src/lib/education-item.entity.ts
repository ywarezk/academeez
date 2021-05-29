/**
 * Represents a course/chapter/lesson
 *
 * Created April 24th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class EducationItem {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  shortDescription: string;

  @Field()
  bgImg: string;

  @Field()
  slug: string;

  @Field()
  videoUrl: string;

  @Field(() => ID)
  link: string;

  @Field({ nullable: true })
  logo: string;

  @Field(() => [ID], { nullable: true })
  prerequisites: string[];

  /**
   * this will hold the id of the children
   * I will flatten the tree so all items will return
   */
  @Field(() => [ID])
  children: string[];

  /**
   * used for additional order to promote a chapter
   */
  @Field({ nullable: true })
  order: number;
}
