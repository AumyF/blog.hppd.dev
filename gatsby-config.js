/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { generateConfig } = require("gatsby-plugin-ts-config");
/** @type import('gatsby').GatsbyConfig */

module.exports = require("gatsby-plugin-ts-config").generateConfig({
  projectRoot: "src/gatsby",
});
