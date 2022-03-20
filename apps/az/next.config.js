// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
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

module.exports = withNx(nextConfig);
