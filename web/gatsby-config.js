require('dotenv').config()
const proxy = require('http-proxy-middleware')

module.exports = new Promise((resolve, reject) => {
  const sanityClient = require('@sanity/client')
  const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET_PROD,
    // token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
    useCdn: false // `false` if you want to ensure fresh data
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

  client.fetch(query, params).then(res => {
    const siteSettings = res[0]

    resolve({
      siteMetadata: {
        ...siteSettings
      },
      plugins: [
        {
          resolve: 'gatsby-source-sanity',
          options: {
            projectId: process.env.SANITY_PROJECT_ID,
            dataset: process.env.SANITY_DATASET_PROD,
            // a token with read permissions is required
            // if you have a private dataset
            // token: process.env.SANITY_TOKEN,
            watchMode: process.env.NODE_ENV === 'development'
            // overlayDrafts: process.env.NODE_ENV === 'development'
          }
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-portal`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/assets/images`
          }
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `assets`,
            path: `${__dirname}/src/assets`
          }
        },
        {
          resolve: 'gatsby-plugin-react-svg',
          options: {
            rule: {
              include: /icons\/.*\.svg/
            }
          }
        },
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
            id: process.env.GOOGLE_TAGMANAGER_ID,

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
        //     clientId: process.env.VIMEO_CLIENT_ID,
        //     clientSecret: process.env.VIMEO_CLIENT_SECRET,
        //     accessToken: process.env.VIMEO_ACCESS_TOKEN
        //   }
        // }
        // 'gatsby-plugin-extract-image-colors'
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            icon: `${__dirname}/src/assets/images/favicon.png`,
            name: siteSettings ? siteSettings.siteName : 'STARTER',
            short_name: siteSettings ? siteSettings.siteName : 'STARTER',
            start_url: `/`,
            background_color: `#000`,
            theme_color: `#fff`,
            display: siteSettings ? siteSettings.siteName : 'STARTER'
          }
        }
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
