/**
 * Layout for the lessons pages
 *
 * Created September 13th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {TocBar} from './TocBar';
import type {PropsWithChildren} from 'react';

export default async function LessonLayout({children, params}: PropsWithChildren<{params: any}>) {
  return (
    <div>
      <div className="flex">
        <TocBar params={params} />
        {children}
      </div>
    </div>
  );
}
