/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: "Dancing Script",
            variants: ["700"],
          }]
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `f1vak80ez8so`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
  ],
}
