/**
 * @typedef {import('gatsby-plugin-typegen/types').PluginOptions} TypegenOptions
 */

/** @type {import('gatsby').GatsbyConfig & {plugins: {resolve: `gatsby-plugin-typegen`, options: TypegenOptions}[]}} */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Happy Paddy",
    description: "作ってる間がピーク",
    siteUrl: "https://blog.hppd.dev",
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
                  date: edge.node.fields.yyyymmdd,
                  url: `${site.siteMetadata.siteUrl}/${edge.node.fields.path}`,
                  guid: `${site.siteMetadata.siteUrl}/${edge.node.fields.path}`,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: /* GraphQL */ `
              {
                allMdx(sort: { order: DESC, fields: [fields___yyyymmdd] }) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        path
                        yyyymmdd
                      }
                      frontmatter {
                        title
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
    ...(process.env.NODE_ENV === "development"
      ? [
          {
            resolve: `gatsby-plugin-typegen`,
            options: {
              emitSchema: {
                "src/__generated__/gatsby-schema.graphql": true,
              },
              outputPath: "src/__generated__/gatsby-types.d.ts",
            },
          },
        ]
      : []),
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
