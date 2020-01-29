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
/**
 * Adds dots to classname string
 * convert 'classname1 classname2' => '.classname1 .classname2'
 *
 * @param {string} className from styled-components
 */
export const addDotsToClassName = classNames => {
  if (typeof classNames !== 'string') {
    console.info(
      `Type of className needs to be a string. Was ${classNames} and is ${typeof classNames}`
    )
    return null
  }
  if (!classNames.includes(' ')) return `.${classNames}`
  return classNames
    .split(' ')
    .map(className => `.${className}`)
    .join(' ')
}
