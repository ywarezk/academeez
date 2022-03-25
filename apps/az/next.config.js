// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    disableStaticImages: true
  },
  webpack5: true,
  webpack: ( config ) => {
    config.module.rules.unshift(
      // this is used to load fonts using import
      {
        test: /\.(ttf|otf|woff|woff2)$/,
        loader: 'url-loader',
      }
    )
    return config
  }
};

module.exports = withPlugins([optimizedImages, withNx], nextConfig);
