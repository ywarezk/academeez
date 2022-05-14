/**
 * Create the express app
 *
 * Created May 14th, 2022
 * @author: ywarezk
 * @version: 0.2.1
 * @license: MIT
 */

import createApplication from 'express';
import { lessonsRouter } from './lessons';

export const app = createApplication()

app.use('/api', lessonsRouter);

