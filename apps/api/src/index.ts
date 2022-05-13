/**
 * Entry point file for the lessons api
 *
 * Created March 30th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import createApplication from 'express';
import { lessonsRouter } from './lessons';

export const app = createApplication()

app.use(lessonsRouter);

