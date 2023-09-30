/**
 * Table of content for React course
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {NavItem} from '@/lib'
import {AngularIcon} from '@/ui/icons'

const toc: NavItem = {
  title: 'Angular',
  href: '/course/angular',
  Icon: AngularIcon,
  items: [
    {
      title: 'NGRX',
      href: '/course/angular/ngrx',
      items: [
        {
          title: 'Installing NGRX',
          href: '/course/angular/ngrx/installation',
          items: [],
        },
      ],
    },
  ],
}

export default toc
