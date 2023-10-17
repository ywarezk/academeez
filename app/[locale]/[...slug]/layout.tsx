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
import {unstable_setRequestLocale} from 'next-intl/server';
import '@/styles/mdx.css';

export default async function LessonLayout({children, params}: PropsWithChildren<{params: any}>) {
  unstable_setRequestLocale(params.locale);
  return (
    <div>
      <div className="grid grid-cols-[20rem_auto_20rem]">
        <TocBar slug={params.slug} />
        {children}
      </div>
    </div>
  );
}
