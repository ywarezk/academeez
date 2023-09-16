/**
 * cypress configuration for testing @az/web
 *
 * Created May 31st, 2023
 * @author ywarezk
 * @version 0.2.0
 * @license MIT
 */

import {defineConfig} from 'cypress';
import {resolve} from 'path';

export default defineConfig({
  watchForFileChanges: true,
  fixturesFolder: false,
  downloadsFolder: resolve(__dirname, 'cypress/downloads'),
  screenshotsFolder: false,
  videosFolder: resolve(__dirname, 'cypress/videos'),
  viewportWidth: 1920,
  viewportHeight: 1080,
  experimentalInteractiveRunEvents: true,
  chromeWebSecurity: false,
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    specPattern: '**/*.cy.ts',
    baseUrl: 'http://localhost:3000',
  },
  component: {
    supportFile: 'cypress/support/component.ts',
    specPattern: '**/*.spec.{ts,tsx}',
    indexHtmlFile: 'cypress/component/index.html',
    devServer: {
      bundler: 'vite',
      framework: 'react',
    },
  },
});
