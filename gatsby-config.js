/** @type import('gatsby').GatsbyConfig */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Happy Paddy",
    description: "作ってる間がピーク",
    siteUrl: "https://blog.hppd.dev", // ダミーですよ！
  },
  plugins: [
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.path,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { path }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Happy_Paddy RSS Feed",
          },
        ],
      },
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
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://zenn.dev/aumy/feed`,
        name: `Zenn`,
      },
    },
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
    `@chakra-ui/gatsby-plugin`,
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
