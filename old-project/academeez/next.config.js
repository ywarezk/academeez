// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([optimizedImages, withNx], {
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
});
