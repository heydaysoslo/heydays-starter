const getOptInPlugins = require('./utils/OptInPlugins')

module.exports = themeOptions => {
  const optInPlugins = getOptInPlugins(themeOptions).map(
    plugin => plugin.resolve
  )

  return {
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-portal`,
      {
        resolve: `gatsby-plugin-favicon`,
        options: {
          logo: `${themeOptions.programDirectory}/src/assets/images/favicon.png`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${themeOptions.programDirectory}/src/assets/images`
        }
      },
      {
        resolve: `gatsby-plugin-polyfill-io`,
        options: {
          features: [
            `fetch`,
            'Array.prototype.forEach',
            'NodeList.prototype.forEach',
            'Array.prototype.map',
            ...themeOptions.polyfills
          ]
        }
      },
      {
        // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap
        resolve: `gatsby-plugin-sitemap`,
        options: {
          output: `/sitemap.xml`
          // Exclude specific pages or groups of pages using glob parameters
          // See: https://github.com/isaacs/minimatch
          // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        }
      },
      ...optInPlugins
    ]
  }
}
