const codegen = Boolean(parseInt(process.env.GATSBY_CODEGEN));
console.log(`Codegen: ${codegen}`);

/** @type import('gatsby').GatsbyConfig */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "快速急行明朝行",
    description: "規則正しい生活は、永久にこれを放棄しようかと",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
    },
    {
      resolve: `gatsby-plugin-ts-config`,
      options: { configDir: `src/gatsby` },
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
          // {
          //   resolve: `gatsby-remark-autolink-headers`,
          //   options: {
          //     offsetY: `400`,
          //     className: `autolink-headers`,
          //   },
          // },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              //showLineNumbers: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
