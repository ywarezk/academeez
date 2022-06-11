/**
 * routing to a single lesson or a chapter (group of lessons)
 *
 * Created June 11th, 2022
 * @author: ywarezk
 * @version: 0.2.0
 * @license: MIT
 */

import { LessonProps } from '../../common'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getLessons, lessonFilter } from '@az/models'
import { FC } from 'react'
import { isEmpty } from 'lodash'
import { LessonPage } from '../../lesson'
import { ChapterPage } from '../../chapter'

const LessonOrChapter: FC<LessonProps> = ({ lesson }) => {
  if (isEmpty(lesson.children)) {
    return <LessonPage lesson={lesson} />
  } else {
    return <ChapterPage lesson={lesson} />
  }
}

export default LessonOrChapter

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const lessons = await getLessons()
  const filteredLessons = lessonFilter(lessons, {})
  return {
    paths: filteredLessons.filter((l) => l.link).map((l) => l.link),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  LessonProps,
  { slug: string[] }
> = async (context) => {
  const lessons = await getLessons()
  const lesson = lessonFilter(lessons, {
    link: `/courses/${context.params.slug.join('/')}`,
  })[0]
  return {
    props: {
      lesson: lesson,
    },
  }
}
