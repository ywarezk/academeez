/**
 * This will generate the manifest.json file
 *
 * Created September 16th, 2023
 * @author: ywarezk
 * @license MIT
 */

import {MetadataRoute} from 'next'
import {siteConfig} from '@/config/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/en',
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
  }
}
