/**
 * Table of content for React course
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */
import { NavItem } from '@/lib';
import { AngularIcon } from '@/ui/icons';
const toc: NavItem = {
  title: 'Angular',
  href: '/en/course/angular',
  Icon: AngularIcon,
  items: [{
    title: 'NGRX',
    href: '/en/course/angular/ngrx',
    items: [{
      title: 'NGRX State',
      href: '/en/course/angular/ngrx/state',
      items: []
    }]
  }]
};
export default toc;