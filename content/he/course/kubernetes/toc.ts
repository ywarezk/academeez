/**
 * Table of content for React course
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import { NavItem } from '@/lib';
import { Kubernetes } from '@/ui/icons';
const toc: NavItem = {
  title: 'Kubernetes',
  href: '/en/course/kubernetes',
  Icon: Kubernetes,
  items: [{
    href: '/en/course/kubernetes/flux',
    title: 'Flux',
    items: [{
      href: '/en/course/kubernetes/flux/installation',
      title: 'Installing Flux',
      items: []
    }]
  }]
};
export default toc;