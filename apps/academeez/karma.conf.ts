// Karma configuration
// Generated on Sat Aug 24 2019 22:57:11 GMT+0300 (Israel Daylight Time)

import {resolve} from 'path';
import { baseKarmaConfig } from '@nz/test/karma';

module.exports = function(config) {
  baseKarmaConfig(config, 'academeez', resolve(__dirname, 'tsconfig.spec.json'));
}
