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
              href: '/lessons/react/tldr/what-is-react',
              items: [],
            },
            {
              title: 'Our first React powered website',
              href: '/lessons/react/tldr/our-first-react-powered-website',
              items: [],
            },
          ],
        },
        {
          title: 'ReactElement the building block of React',
          items: [
            {
              title: 'What is a ReactElement?',
              href: '/lessons/react/react-element/what-is-a-react-element',
              items: [],
            },
          ],
        },
        {
          title: 'JSX',
          items: [
            {
              title: 'What is JSX?',
              href: '/lessons/react/jsx/what-is-jsx',
              items: [],
            },
          ],
        },
      ],
    },
  ],
};
