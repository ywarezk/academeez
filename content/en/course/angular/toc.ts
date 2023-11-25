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
      title: 'Best practice tips',
      href: '/en/course/angular/best-practices',
      items: [
        {
          title: 'changeDetection: OnPush on all components',
          href: '/en/course/angular/best-practices/onpush',
          items: []
        },
        {
          title: 'Injectable functions for repeating initialization',
          href: '/en/course/angular/best-practices/inject-repeating-initializations',
          items: []
        },
        {
          title: 'custom structural directives use case',
          href: '/en/course/angular/best-practices/structural-directives',
          items: []
        },
        {
          title: 'improve performance in *ngFor with trackBy',
          href: '/en/course/angular/best-practices/ngfor-trackby',
          items: []
        }
      ]
    },
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
        },
        {
          title: 'Best practices',
          href: '/en/course/angular/ngrx/best-practices',
          items: [{
            title: 'Remove @ngrx/store-devtools in production',
            href: '/en/course/angular/ngrx/best-practices/store-devtools-production',
            items: []
          }]
        },
        {
          title: 'NGRX Actions',
          href: '/en/course/angular/ngrx/actions',
          items: [],
        }
      ],
    },
  ],
};

export default toc;
