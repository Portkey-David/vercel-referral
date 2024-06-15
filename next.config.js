const rewrites = require('./rewrites/index');

/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     async rewrites() {
//         return rewrites;
//     },
// }

module.exports = {
  reactStrictMode: false,
  async rewrites() {
    return rewrites;
  },
  experimental: {
    'react-use': {
      transform: 'react-use/lib/{{member}}',
    },
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  // compiler: {
  //   removeConsole: {
  //     exclude: ['error'],
  //   },
  // },
  productionBrowserSourceMaps: true,
};
