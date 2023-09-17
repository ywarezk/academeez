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
      <div className="flex items-start md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed max-w-xs flex-0 top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] md:sticky md:block">
          <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8 ">
            <SideBarNav />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
}
