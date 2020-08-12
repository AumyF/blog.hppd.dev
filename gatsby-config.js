const codegen = Boolean(parseInt(process.env.GATSBY_CODEGEN));
console.log(`Codegen: ${codegen}`);

/** @type import('gatsby').GatsbyConfig */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "続かぬ",
    description: "作ってる間がピーク",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: codegen,
        fileName: `types/graphqlTypes.d.ts`,
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
