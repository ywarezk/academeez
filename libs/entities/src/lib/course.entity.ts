/**
 * Course entity
 *
 * Created May 28th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 */

import { Directive, Field, ObjectType } from "type-graphql";
import { EducationItem } from './education-item.entity';

@ObjectType()
export class Course extends EducationItem {
  @Field()
  logo: string;

  @Directive('@provides(fields: "title,slug,logo")')
  @Field(() => [EducationItem], { defaultValue: [] })
  prerequisites: EducationItem[]
}
