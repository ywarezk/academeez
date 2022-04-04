/**
 * Entry point file for the lessons api
 *
 * Created March 30th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import createApplication from 'express';
import { CoursesResolver } from './courses';
import { ErrorResponse, Lesson } from '@az/models';

export const app = createApplication()

app.get('/lessons/version', (_req, res) => {
  res.send('0.1.0')
})

app.get<null, Lesson[] | ErrorResponse>('/lessons', async (_req, res) => {
  const resolver = new CoursesResolver()
  try {
    const lessons = await resolver.lessons()
    res.json(lessons)
  } catch(err) {
    res.status(500).json({error: err.message})
  }
})


