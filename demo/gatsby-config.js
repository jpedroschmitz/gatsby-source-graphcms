require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        buildMarkdownNodes: true,
        downloadLocalImages: true,
        endpoint:
          process.env.GRAPHCMS_ENDPOINT ||
          // 'https://api-eu-central-1.graphcms.com/v2/ckclvjtet0f0901z69og3f3gm/master',
          'https://api-us-east-1.graphcms.com/v2/ckmqx97xtmjwl01xnhrfmb20b/master',
        locales: ['en', 'de'],
        stages: ['DRAFT', 'PUBLISHED'],
      },
    },
  ],
}
