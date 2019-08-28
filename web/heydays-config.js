import { createAspectRatios } from './src/utils/aspect'

/**
 * Routes
 * key === sanity _type
 */
export const routes = {
  article: '/news/',
  page: '/'
}

export const getUrl = (type, slug) => {
  return routes[type] ? `${routes[type]}${slug}` : `${slug}`
}

export const sanity = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID || '6ptaspv6',
  dataset: process.env.GATSBY_SANITY_DATASET || 'production'
}

export const breakPoints = {
  xs: 0,
  sm: 550,
  md: 870,
  lg: 1200,
  xl: 1600,
  xxl: 1800
}

export const aspectRatios = createAspectRatios({
  landscape: '3:2',
  portrait: '6:7',
  square: '1:1',
  widescreen: '16:9',
  panorama: '16:11'
})

/**
 * Used by Oembed.js
 *
 * Certain services add js which we need to run in our frontend.
 * Therefore we only allow certain, and only those we are sure of.
 * Inititially none of the providers add js as script tags
 *
 * You can check provider name here: https://oembed.com/providers.json
 * (Make sure it's in lowercase)
 */
export const allowedEmbedProviders = ['vimeo', 'youtube', 'soundcloud']
export const isProviderAllowed = provider =>
  allowedEmbedProviders.indexOf(provider) >= 0
