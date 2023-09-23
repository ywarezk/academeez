/**
 * Lesson represents and entity of an article
 *
 * Created August 17th, 2023
 * @author ywarezk
 * @version 0.3.0
 * @license MIT
 */

import type {FC, SVGProps} from 'react';

export type Topic = 'react' | 'angular' | 'express' | 'node';

export interface NavItem {
  title: string;
  href: string;
  items: NavItem[];
  Icon?: FC<SVGProps<any>>;
}
