/**
 * Nextjs configuration file.
 * We added support for mdx for writing content
 *
 * Created August 29th, 2023
 * @author: ywarezk
 * @copyright: Nerdeez LTD
 * @version: 0.0.1
 */

import {createContentlayerPlugin} from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
