/**
 * HomePage
 *
 * Created April 4th, 2023
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import {LessonCard} from './LessonCard';
import {Lesson} from '@/entities';

const featuredLessons: Lesson[] = [
  {
    slug: '/lessons/react/jsx',
    title: 'Some article title we sdfsf czxcxz wqwe rtrr ds w cvxcvxv rtwew sddf xaxs gsfdf',
    cover:
      'https://github.com/ywarezk/academeez/blob/f428098622e75640f8c0bee0237242926ecd7b8e/lessons/courses/express/cookies/thumbnail.png?raw=true',
    topic: 'react',
    tldr: 'sdfafsdafd sadfa zxcvz werasd zxcv asdf ewrt dfgh xcvb asdf sdth dfgsvcxzv sadfasd sdfafsdafd sadfa zxcvz werasd zxcv asdf ewrt dfgh xcvb asdf sdth dfgsvcxzv sadfasd sdfafsdafd sadfa zxcvz werasd zxcv asdf ewrt dfgh xcvb asdf sdth dfgsvcxzv sadfasd sdfafsdafd sadfa zxcvz werasd zxcv asdf ewrt dfgh xcvb asdf sdth dfgsvcxzv sadfasd sdfafsdafd sadfa zxcvz werasd zxcv asdf ewrt dfgh xcvb asdf sdth dfgsvcxzv sadfasd',
  },
];

export default async function HomePage() {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-6xl text-center">Open Source Learning Platform for Programmers</h1>

      <div className="grid gap-8 grid-cols-4 mt-9">
        <article>
          {featuredLessons.map(lesson => (
            <LessonCard key={lesson.slug} lesson={lesson} />
          ))}
        </article>
      </div>
    </div>
  );
}
