/**
 * HomePage
 *
 * Created April 4th, 2023
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import {allDocs} from '@/.contentlayer/generated';
import {LessonCard} from './LessonCard';
import {AzLineIcon} from '@/ui';
import {cn} from '@/lib';

export default async function HomePage() {
  return (
    <div className="container mx-auto mt-20 text-center">
      <div className={cn('flex justify-center items-center')}>
        <AzLineIcon className="w-7 h-10 relative top-1 left-1" />
        <h1 className={cn('font-bold text-5xl leading-snug')}>academeez</h1>
      </div>

      <p className="text-3xl text-green/90 font-mono self-center py-1 leading-snug">
        Open Source Learning Platform for Programmers
      </p>

      <div className="grid gap-8 grid-cols-4 mt-9">
        <article>
          {allDocs
            .filter(doc => doc.isFeatured)
            .map(doc => (
              <LessonCard key={doc.slug} lesson={doc} />
            ))}
        </article>
      </div>
    </div>
  );
}
