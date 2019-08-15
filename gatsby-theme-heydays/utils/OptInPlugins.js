const fs = require('fs-extra')
const mkdirp = require('mkdirp')
const { getEnv } = require('./helpers')

const checkDependencies = (themeOptions, plugin, env) => {
  let canAddPlugin = true

  // Some are modules are standard but have a env variable dependency.
  // Therefore they are checked here
  const envDependentModules = ['tag-manager']
  // Merge envDependentModuless and optInModules
  const modules = [...envDependentModules, ...themeOptions.modules]

  // Check if module is in themeOptions
  if (!modules.includes(plugin.name)) return false
  // Check if we the neccesary env variables
  if (plugin.envKeys) {
    plugin.envKeys.forEach(key => {
      if (!env[key]) {
        console.warn(
          `Missing env variable for ${key}. We will not add the ${
            plugin.resolve.resolve
          } plugin`
        )
        canAddPlugin = false
      }
    })
  }
  // Add dependency folders if needed
  if (plugin.folders) {
    plugin.folders.forEach(dir => {
      if (!fs.existsSync(dir)) {
        console.log(
          `creating the ${dir} directory for ${plugin.resolve.resolve}`
        )
        mkdirp.sync(dir)
      }
    })
  }
  return canAddPlugin
}

module.exports = themeOptions => {
  const env = getEnv(themeOptions)

  const plugins = [
    {
      name: 'vimeo',
      resolve: {
        resolve: 'gatsby-source-vimeo-all',
        options: {
          clientId: env.VIMEO_CLIENT_ID,
          clientSecret: env.VIMEO_CLIENT_SECRET,
          accessToken: env.VIMEO_ACCESS_TOKEN
        }
      },
      envKeys: ['VIMEO_CLIENT_ID', 'VIMEO_CLIENT_SECRET', 'VIMEO_ACCESS_TOKEN']
    },
    // {
    //   name: 'image-color',
    //   resolve: 'gatsby-plugin-extract-image-colors'
    // },
    {
      name: 'tag-manager',
      resolve: {
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
      envKeys: ['GOOGLE_TAGMANAGER_ID']
    },
    {
      name: 'sanity',
      resolve: {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: env.SANITY_PROJECT_ID,
          dataset: env.SANITY_DATASET_PROD,
          // a token with read permissions is required
          // if you have a private dataset
          token: env.SANITY_TOKEN || '',
          watchMode: env.NODE_ENV === 'development',
          overlayDrafts: env.NODE_ENV === 'development'
        }
      },
      envKeys: ['SANITY_PROJECT_ID', 'SANITY_DATASET_PROD']
    }
  ]
  return plugins.filter(
    plugin => checkDependencies(themeOptions, plugin, env) && plugin.resolve
  )
}
