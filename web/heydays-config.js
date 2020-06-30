import { createAspectRatios } from './src/utils/aspect'
import sanityConfig from '../cms/sanity.json'

export const sanity = {
  projectId: sanityConfig.api.projectId,
  dataset: sanityConfig.api.dataset
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
 */
export const allowedEmbedProviders = ['vimeo', 'youtube', 'soundcloud']
export const isProviderAllowed = provider => {
  return allowedEmbedProviders.indexOf(provider.toLowerCase()) >= 0
}
