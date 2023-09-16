/**
 * Vite configuration for cypress component testing
 *
 * Created September 15th, 2023
 * @author ywarezk
 * @license MIT
 */

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    'process.env': {},
  },

  // vite configure next-router-mock

  esbuild: {
    // esbuild alias
  },
});
