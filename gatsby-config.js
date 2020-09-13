/** @type import('gatsby').GatsbyConfig */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "FortunateRicefield",
    description: "作ってる間がピーク",
    domainName: "localhost:8000", // ダミーですよ！
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: true,
        fileName: `types/graphqlTypes.d.ts`,
        documentPaths: [
          "./gatsby/**/*.{ts,tsx}",
          "./src/pages/*.{ts,tsx}",
          "./src/hooks/*.{ts,tsx}",
          "./src/templates/**/*.{ts,tsx}",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
        allowNamespaces: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              // offsetY: `400`,
              className: `autolink-headers`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: "：",
              //showLineNumbers: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
