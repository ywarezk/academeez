/**
 * Karma configuration for the material package
 *
 * Updated February 5th, 2021
 * @author: ywarezk
 * @copyright: yellowHEAD LTD
 * @version: 0.0.1
 */

import { resolve } from 'path';
import { Config } from 'karma';
import { karmaConfig } from '@alison/test';

export default function (config: Config) {
  karmaConfig(config, 'mui', resolve(__dirname, 'tsconfig.spec.json'));
}
