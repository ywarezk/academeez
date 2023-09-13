/**
 * Based on the current path we are in, this will return the table of content
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {SidebarNavItem} from './nav.types';

export const toc: {[key: string]: SidebarNavItem[]} = {
  react: [
    {
      title: 'React',
      items: [
        {
          title: 'TLDR; Learn React in a few minutes',
          items: [
            {
              title: 'What is React?',
              href: 'react/tldr/what-is-react',
              items: [],
            },
            {
              title: 'Our first React powered website',
              href: 'react/tldr/our-first-react-powered-website',
              items: [],
            },
          ],
        },
      ],
    },
  ],
};
