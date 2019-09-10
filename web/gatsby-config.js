const path = require('path')
const globImporter = require('node-sass-glob-importer')
const proxy = require('http-proxy-middleware')

const envPath = path.join(__dirname.split('/web').join(''), '/.env')

const env = require('dotenv').config({
  path: envPath
}).parsed

module.exports = new Promise((resolve, reject) => {
  const sanityClient = require('@sanity/client')
  const client = sanityClient({
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_DATASET_PROD,
    token: env.SANITY_TOKEN, // or leave blank to be anonymous user
    useCdn: true // `false` if you want to ensure fresh data
  })

  const query = `
    *[_id == 'siteSettings']{
        _id,
        siteUrl,
        siteName,
        locale,
        facebookAppId,
    }
  `
  const params = {}

  const res = client.fetch(query, params).then(res => {
    const siteSettings = res[0]

    resolve({
      siteMetadata: {
        ...siteSettings
      },
      plugins: [
        {
          resolve: 'gatsby-source-sanity',
          options: {
            projectId: env.SANITY_PROJECT_ID,
            dataset: env.SANITY_DATASET_PROD
            // a token with read permissions is required
            // if you have a private dataset
            // token: env.SANITY_TOKEN,
            // watchMode: process.env.NODE_ENV === 'development',
            // overlayDrafts: false
          }
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/assets/images`
          }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-portal`,
        {
          resolve: '@danbruegge/gatsby-plugin-stylelint',
          options: { files: ['**/*.scss'] }
        },
        {
          resolve: `gatsby-plugin-polyfill-io`,
          options: {
            features: [
              `fetch`,
              'Array.prototype.forEach',
              'NodeList.prototype.forEach',
              'Array.prototype.map'
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
        {
          resolve: `gatsby-plugin-netlify-functions`,
          options: {
            functionsSrc: `${__dirname}/src/netlify-functions`,
            functionsOutput: `${__dirname}/netlify-functions`
          }
        },
        {
          resolve: 'gatsby-plugin-robots-txt',
          options: {
            host: `https://ablymed.com`,
            sitemap: `https://ablymed.com/sitemap.xml`,
            policy: [{ userAgent: '*', allow: '/' }]
          }
        },
        {
          resolve: `gatsby-plugin-sass`,
          options: {
            includePaths: [path.join(__dirname, '/src/styles/app')],
            importer: globImporter()
          }
        },
        {
          resolve: 'gatsby-plugin-web-font-loader',
          options: {
            custom: {
              families: ['Suisse Works', 'SuisseIntl'],
              urls: ['fonts/fonts.css']
            }
          }
        },
        {
          resolve: `gatsby-plugin-google-tagmanager`,
          options: {
            id: env.GOOGLE_TAGMANAGER_ID,

            // Include GTM in development.
            // Defaults to false meaning GTM will only be loaded in production.
            includeInDevelopment: false

            // Specify optional GTM environment details.
            // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
            // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
            // dataLayerName: "YOUR_DATA_LAYER_NAME",
          }
        },
        // {
        //   resolve: 'gatsby-source-vimeo-all',
        //   options: {
        //     clientId: env.VIMEO_CLIENT_ID,
        //     clientSecret: env.VIMEO_CLIENT_SECRET,
        //     accessToken: env.VIMEO_ACCESS_TOKEN
        //   }
        // }
        // 'gatsby-plugin-extract-image-colors'
        // {
        //   resolve: `gatsby-plugin-manifest`,
        //   options: {
        //     icon: `${__dirname}/src/assets/images/favicon.png`,
        //     name: siteSettings.siteName,
        //     short_name: siteSettings.siteName,
        //     start_url: `/`,
        //     background_color: `#000`,
        //     theme_color: `#fff`,
        //     display: siteSettings.siteName
        //   }
        // }
      ],
      // for avoiding CORS while developing Netlify Functions locally
      // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
      developMiddleware: app => {
        app.use(
          '/.netlify/functions/',
          proxy({
            target: 'http://localhost:9000/',
            pathRewrite: {
              '^/\\.netlify/functions': ''
            }
          })
        )
      }
    })
  })
})
