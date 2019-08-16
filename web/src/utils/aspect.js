import { aspectRatios, breakPoints } from '../../heydays-config'

export const createAspectRatios = aspects => {
  if (typeof aspects !== 'object') {
    console.error('aspects arg to createAspectRatios needs to be an object')
    return null
  }
  return Object.keys(aspects).reduce((newAspects, key) => {
    newAspects[key] = convertAspectRatio(aspects[key])
    return newAspects
  }, {})
}

export const convertAspectRatio = aspect => {
  if (typeof aspect === 'string') {
    const [width, height] = aspect.split(':')
    return width / height
  }
}

export const getAspectRatio = aspect => {
  if (!aspectRatios[aspect]) {
    console.error(
      `The aspect ratio ${aspect} does not exist. Check your heydays-config.js`
    )
  }
  return aspectRatios[aspect]
}

export const fillMissingKeys = obj => {
  let lastAspect = null
  let result = {}
  Object.keys(breakPoints).forEach(key => {
    if (obj[key]) {
      result[key] = obj[key]
      lastAspect = obj[key]
    } else {
      result[key] = lastAspect
    }
  })
  return result
}

export const fillMissingAspects = aspect => {
  let aspects = {}
  if (typeof aspect === 'object') {
    aspects = fillMissingKeys(aspect)
  } else {
    // console.error(`${JSON.stringify(aspect)} is not an object.`)
  }
  return aspects
}
