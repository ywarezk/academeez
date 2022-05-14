/**
 * Entry point file for the lessons api
 *
 * Created March 30th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { app } from './app';

const port = process.env['port'] || 3000;

app.listen(port, () => {
  console.log(`now listening on port: ${port}`);
});
