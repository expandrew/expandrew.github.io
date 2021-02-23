const collapse = require('remark-collapse');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [collapse, { test: '' }],
    ],
  },
  rehypePlugins: [],
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/posts/media-cube',
        destination: '/media-cube',
        permanent: true,
      },
    ];
  },
});
