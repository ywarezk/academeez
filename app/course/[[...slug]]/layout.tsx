/**
 * Layout for the lessons pages
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {ScrollArea} from '@/ui';
import {SideBarNav} from './SideBarNav';
import type {PropsWithChildren} from 'react';

export default function LessonLayout({children}: PropsWithChildren) {
  return (
    <div className="border-b">
      <div className="grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc">
        <SideBarNav />
        {children}
      </div>
    </div>
  );
}
