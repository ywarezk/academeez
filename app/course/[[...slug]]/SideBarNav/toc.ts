/**
 * Based on the current path we are in, this will return the table of content
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {NavItem} from './nav.types';
import {ReactIcon} from '@/ui/icons';

export const toc: NavItem[] = [
  {
    title: 'React',
    href: '/course/react',
    Icon: ReactIcon,
    items: [
      {
        title: 'TLDR; Learn React in a few minutes',
        href: '/course/react/tldr',
        items: [
          {
            title: 'What is React?',
            href: '/course/react/tldr/what-is-react',
            items: [],
          },
          {
            title: 'Our first React powered website',
            href: '/course/react/tldr/our-first-react-powered-website',
            items: [],
          },
        ],
      },
      {
        href: '/course/react/react-element',
        title: 'ReactElement the building block of React',
        items: [
          {
            title: 'What is a ReactElement?',
            href: '/course/react/react-element/what-is-a-react-element',
            items: [],
          },
        ],
      },
      {
        href: '/course/react/jsx',
        title: 'JSX',
        items: [
          {
            title: 'What is JSX?',
            href: '/course/react/jsx/what-is-jsx',
            items: [],
          },
        ],
      },
    ],
  },
];
