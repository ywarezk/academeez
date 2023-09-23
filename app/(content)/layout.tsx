/**
 * Layout for the lessons pages
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {SideBarNav} from './SideBarNav';
import type {PropsWithChildren} from 'react';

export default function LessonLayout({children}: PropsWithChildren) {
  return (
    <div className="border-b">
      <div className="flex">
        <SideBarNav />
        {children}
      </div>
    </div>
  );
}
