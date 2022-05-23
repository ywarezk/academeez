/**
 * Entry point file for the lessons api
 *
 * Created March 30th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { app } from './app';
import createApp from 'express';

const mainApp = createApp();
mainApp.use('/api', app);

const port = process.env['port'] || 3000;

mainApp.listen(port, () => {
  console.log(`now listening on port: ${port}`);
});
