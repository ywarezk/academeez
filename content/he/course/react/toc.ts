/**
 * Table of content for React course
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {NavItem} from '@/lib';
import {ReactIcon} from '@/ui/icons';

const toc: NavItem = {
  title: 'React',
  href: '/he/course/react',
  Icon: ReactIcon,
  items: [
    {
      href: '/he/course/react/component',
      title: 'UI Components',
      items: [],      
    },
    {
      href: '/he/course/react/component-tree',
      title: 'Component Tree',
      items: [],      
    },
    {
      href: '/he/course/react/suspense',
      title: 'Suspense',
      items: [],      
    }
  ],
};

export default toc;
