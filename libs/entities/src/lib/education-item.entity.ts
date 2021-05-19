/**
 * Represents a course/chapter/lesson
 *
 * Created April 24th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { ObjectType, Field, ID, Directive } from 'type-graphql';

@ObjectType()
export class EducationItem {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  shortDescription: string;

  @Field()
  logo: string;

  @Field()
  bgImg: string;

  @Field()
  slug: string;

  @Field()
  videoUrl: string;

  @Directive('@provides(fields: "title,slug,logo")')
  @Field(() => [EducationItem], {defaultValue: []})
  prerequisites: EducationItem[]
}
