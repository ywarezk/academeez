/**
 * Table of content for React course
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {NavItem} from '@/lib';
import {GitIcon} from '@/ui/icons';

const toc: NavItem = {
  title: 'Git',
  href: '/en/course/git',
  Icon: GitIcon,
  items: [
    {
      title: 'Best practice tips',
      href: '/en/course/git/best-practices',
      items: [
        {
          title: 'Clean your commits',
          href: '/en/course/git/best-practices/clean-your-commits',
          items: []
        
        
        }
      ]
    },
    
  ],
};

export default toc;
