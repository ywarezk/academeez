/**
 * Table of content for React course
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {NavItem} from '@/lib';
import {Kubernetes} from '@/ui/icons';

const toc: NavItem = {
  title: 'Kubernetes',
  href: '/en/course/kubernetes',
  Icon: Kubernetes,
  items: [
    {
      href: '/en/course/kubernetes/flux',
      title: 'Flux',
      items: [{
        href: '/en/course/kubernetes/flux/installation',
        title: 'Installing Flux',
        items: [],
      },
      {
        href: '/en/course/kubernetes/flux/kustomize-controller',
        title: 'kustomize-controller',
        items: [],
      },
      {
        href: '/en/course/kubernetes/flux/helm-controller',
        title: 'helm-controller',
        items: [],
      },
      {
        href: '/en/course/kubernetes/flux/installing-flux-terraform-opentofu',
        title: 'Install Flux with Terraform/OpenTofu',
        items: [],
      }
      ],
    },    
  ],
};

export default toc;
