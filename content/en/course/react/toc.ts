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
  href: '/en/course/react',
  Icon: ReactIcon,
  items: [
    {
      href: '/en/course/react/component',
      title: 'UI Components',
      items: [],      
    },
    {
      href: '/en/course/react/component-tree',
      title: 'Component Tree',
      items: [],      
    },
    {
      href: '/en/course/react/suspense',
      title: 'Suspense',
      items: [
        {
          href: '/en/course/react/suspense/nextjs-streaming',
          title: 'Next.js Streaming',
          items: [],
        }
      ],      
    },
    {
      href: '/en/course/react/trpc',
      title: 'tRPC',
      items: [],      
    },
    {
      href: '/en/course/react/best-practices',
      title: 'Best Practices',
      items: [{
        href: '/en/course/react/best-practices/component-single-responsibility',
        title: 'Component Single Responsibility',
        items: [],
      }],
    }
  ],
};

export default toc;
