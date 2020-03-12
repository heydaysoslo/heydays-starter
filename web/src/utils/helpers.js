export const setOverflowHidden = state => {
  document.body.style.overflow = state ? 'hidden' : ''
  // document.querySelector('html').style.overflow = state ? 'hidden' : ''
}

/**
 *
 * @param {array} arr
 * @param {string} type
 * @param {string} lang ISO Code
 */
export const formatList = (arr, type = 'conjunction', lang = 'en') => {
  if (!Array.isArray(arr) && arr.length > 0) {
    console.warn(
      `${arr} array is empty or not an array. Check the type passed to the formatList helper functiom.`
    )
    return arr
  }
  return new window.Intl.ListFormat(lang, {
    style: 'long',
    type
  }).format(arr)
}

export const makeFirstLetterCapital = string => {
  return `${string.substr(0, 1).toUpperCase()}${string.substr(
    1,
    string.length
  )}`
}

export const camel2title = camelCase =>
  camelCase
    .replace(/([A-Z])/g, match => ` ${match}`)
    .replace(/^./, match => match.toUpperCase())

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min
