module.exports = {
  siteMetadata: {
    title: 'andrewwestling.com',
  },
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
