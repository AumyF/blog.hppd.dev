const codegen = Boolean(parseInt(process.env.GATSBY_CODEGEN!));
console.log(`Codegen: ${codegen}`);

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "MOMIREPO",
  },
  plugins: [
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
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/../../posts`,
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
