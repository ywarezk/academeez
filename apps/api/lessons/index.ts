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

export const app = createApplication()

app.get('/lessons/version', (req, res) => {
  res.send('0.0.1')
})

app.get('/lessons', async (req, res) => {
  const resolver = new CoursesResolver();
  const lessons = await resolver.lessons();
  res.json(lessons)
})


