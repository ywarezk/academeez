/**
 * Description of the file
 *
 * Created January 18th, 2021
 * @author: ywarezk
 * @copyright: Nerdeez LTD
 * @version: 0.0.1
 */

import type {FC, SVGProps} from 'react';

export interface NavItem {
  title: string;
  href: string;
  items: NavItem[];
  Icon?: FC<SVGProps<any>>;
}
