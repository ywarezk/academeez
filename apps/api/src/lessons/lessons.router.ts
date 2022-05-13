/**
 * Express router for the lessons api
 *
 * Created May 9th, 2022
 * @author: ywarezk
 * @version: 0.2.0
 */

import { ErrorResponse, Lesson } from '@az/models';
import { Router } from 'express';
import { CourseService } from './course.service';

export const lessonsRouter = Router();

lessonsRouter.get('/lessons/version', (_req, res) => {
  res.send('0.2.0')
});

lessonsRouter.get<null, Lesson[] | ErrorResponse>('/lessons', async (_req, res) => {
  const resolver = new CourseService()
  try {
    const lessons = await resolver.lessons()
    res.json(lessons)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})
