/**
 * Table of content for React course
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {NavItem} from '@/lib';
import {AngularIcon} from '@/ui/icons';

const toc: NavItem = {
  title: 'Angular',
  href: '/en/course/angular',
  Icon: AngularIcon,
  items: [
    {
      title: 'NGRX',
      href: '/en/course/angular/ngrx',
      items: [
        {
          title: 'NGRX State',
          href: '/en/course/angular/ngrx/state',
          items: [],
        },
        {
          title: 'Installing @ngrx/store',
          href: '/en/course/angular/ngrx/installing-ngrx-store',
          items: [],
        },
        {
          title: '@ngrx/store - data flow',
          href: '/en/course/angular/ngrx/ngrx-store-data-flow',
          items: [],
        }
      ],
    },
  ],
};

export default toc;
