// Karma configuration
// Generated on Sat Aug 24 2019 22:57:11 GMT+0300 (Israel Daylight Time)

import {resolve} from 'path';
import { baseKarmaConfig } from '@nz/test/karma';

module.exports = function(config) {
  baseKarmaConfig(config, 'academeez', resolve(__dirname, 'tsconfig.spec.json'));
  // console.log(config.files);

  config.set({
    files: [
      ...config.files,
      { included: 'head', type: 'css', pattern: 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap' }
    ]
  });

  config.set({
    captureTimeout: 1000 * 60 * 60, // it was already there
    browserDisconnectTimeout: 1000 * 60 * 60,
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: 1000 * 60 * 60, //by default 10000
  });
}
