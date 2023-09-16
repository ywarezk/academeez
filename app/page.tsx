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

export default async function HomePage() {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-6xl text-center">Open Source Learning Platform for Programmers</h1>

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
