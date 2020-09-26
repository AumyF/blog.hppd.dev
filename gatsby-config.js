/** @type import('gatsby').GatsbyConfig */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Happy Paddy",
    description: "作ってる間がピーク",
    domainName: "blog.hppd.dev", // ダミーですよ！
  },
  plugins: [
    "gatsby-plugin-netlify-cache",
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
    `gatsby-plugin-twitter`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: { trackingId: process.env.GOOGLE_ANALYTICS_ID },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Happy Paddy`,
        short_name: `hppd`,
        start_url: `/`,
        background_color: `#e4e2e9`,
        theme_color: `#f9477a`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
  ],
};
