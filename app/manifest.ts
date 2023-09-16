/**
 * This will generate the manifest.json file
 *
 * Created September 16th, 2023
 * @author: ywarezk
 * @license MIT
 */

import {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'academeez',
    short_name: 'academeez',
    description: 'Open Source Learning Platform for Developers',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
