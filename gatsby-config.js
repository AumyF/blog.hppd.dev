/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

console.log(parseInt(process.env.GATSBY_CODEGEN));

/** @type import('gatsby').GatsbyConfig */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "MOMIREPO",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: parseInt(process.env.GATSBY_CODEGEN),
        fileName: `types/graphqlTypes.d.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `400`,
              className: `autolink-headers`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
