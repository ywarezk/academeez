/**
 * Table of content for React course
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */
import { NavItem } from "@/ui/icons";
import { ReactIcon } from '@/ui/icons';
const toc: NavItem = {
  title: 'React',
  href: "/he/course/react",
  Icon: ReactIcon,
  items: [{
    title: "UI Components",
    href: "/he/course/react/component",
    items: [{
      title: 'What is React?',
      href: '/course/react/tldr/what-is-react',
      items: []
    }, {
      title: 'Our first React powered website',
      href: '/course/react/tldr/our-first-react-powered-website',
      items: []
    }]
  }, {
    href: "/he/course/react/component-tree",
    title: "Component Tree",
    items: [{
      title: 'What is a ReactElement?',
      href: '/course/react/react-element/what-is-a-react-element',
      items: []
    }]
  }, {
    href: "/he/course/react/suspense",
    title: "Suspense",
    items: [{
      title: 'What is JSX?',
      href: '/course/react/jsx/what-is-jsx',
      items: []
    }]
  }]
};
export default toc;