/**
 * Lesson card provide description of a lesson
 *
 * Created August 17th, 2023
 * @author ywarezk
 * @version 0.3.0
 * @license MIT
 */

'use client';

import type {FC} from 'react';
import type {Lesson} from '@/entities';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/ui';
import {TopicIconFactory} from './TopicIconFactory';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export const LessonCard: FC<{lesson: Lesson}> = ({lesson}) => {
  const router = useRouter();

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card onClick={() => router.push(lesson.slug)} className="hover:border-green-400 cursor-pointer">
          <CardHeader>
            <Link className="flex items-center" href={`/lessons/${lesson.topic}`}>
              <TopicIconFactory className="h-8 w-8 rounded-full" topic={lesson.topic} />
              <h6 className="ml-3 capitalize text-green-400 underline underline-offset-4">{lesson.topic}</h6>
            </Link>
            <CardTitle className="mt-4">
              <Link href={lesson.slug}>{lesson.title}</Link>
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={lesson.cover}
              className="h-40 w-full"
              alt={lesson.title}
              style={{
                objectFit: 'cover',
              }}
            />
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <h3 className="text-xl font-bold">{lesson.title}</h3>
        <div className="border-l-green-400 border-l pl-4">
          <p className="mt-2">
            <span className="text-green-400 font-bold mr-3">TLDR;</span>
            {lesson.tldr}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
