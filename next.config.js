/**
 * Nextjs configuration file.
 * We added support for mdx for writing content
 *
 * Created August 29th, 2023
 * @author: ywarezk
 * @copyright: Nerdeez LTD
 * @version: 0.0.1
 */

const {createContentlayerPlugin} = require('next-contentlayer')
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

module.exports = withNextIntl(withContentlayer(nextConfig))
