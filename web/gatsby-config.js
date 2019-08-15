const path = require('path')
const globImporter = require('node-sass-glob-importer')
const proxy = require('http-proxy-middleware')

const envPath = path.join(__dirname.split('/web').join(''), '/.env')

const env = require('dotenv').config({
  path: envPath
}).parsed

module.exports = {
  siteMetadata: {
    title: `Ably`,
    siteUrl: `https://ablymed.com`,
    fbAppId: false,
    locale: `en_US`
  },
  plugins: [
    {
      resolve: 'gatsby-theme-heydays',
      options: {
        programDirectory: __dirname,
        modules: [
          'vimeo'
          // 'image-color'
        ],
        polyfills: ['fetch', 'Array.from']
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `[SITE NAME]`,
        short_name: `[SITE NAME]`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `[SITE NAME?]`
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
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-heydays']
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: env.SANITY_PROJECT_ID,
        dataset: env.SANITY_DATASET_PROD,
        // a token with read permissions is required
        // if you have a private dataset
        token: env.SANITY_TOKEN,
        watchMode: process.env.NODE_ENV === 'development',
        overlayDrafts: process.env.NODE_ENV === 'development'
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
}
