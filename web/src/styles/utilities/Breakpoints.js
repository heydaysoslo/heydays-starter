import { css } from 'styled-components'
import theme from '../themes'
import { emSize } from './Converters'

/**
 * Breakpoint functions examples:
  export default styled.div`

    ${bp.above.md`
      background: red;
    `}

    ${bp.below.md`
      background: orange;
    `}

    ${bp.between('md','xl')`
      background: orange;
    `}

    ${bp.only.md`
      background: orange;
    `}

    ${bp.spesific('md')`
      background: orange;
    `}

    ${bp.spesific('md,xl')`
      background: orange;
    `}
  `
 */

// iterate through the breakpoints and create a media template
const above = Object.keys(theme.breakpoints).reduce((accumulator, bp) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[bp] = (...args) => css`
    @media (min-width: ${emSize(theme.breakpoints[bp])}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

// iterate through the breakpoints and create a media template
const below = Object.keys(theme.breakpoints).reduce((accumulator, bp) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[bp] = (...args) => css`
    @media (max-width: ${emSize(theme.breakpoints[bp])}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

/**
 *
 * Define styles that fit between two breakpoints
 *
 * Usage:
 * ${between('xs', 'md')`
 *  background: orange;
 * `}
 *
 * @param {string} min string needs to relate to a key in theme.breakpoints
 * @param {string} max string needs to relate to a key in theme.breakpoints
 */
const between = (min, max) => (...args) => {
  return css`
    @media (min-width: ${emSize(
        theme.breakpoints[min]
      )}) and (max-width: ${emSize(theme.breakpoints[max])}) {
      ${css(...args)};
    }
  `
}

const only = Object.keys(theme.breakpoints).reduce((acc, bp, i) => {
  acc[bp] = (...args) => css`
    @media (min-width: ${emSize(
        theme.breakpoints[bp]
      )}) and (max-width: ${emSize(
        theme.breakpoints[Object.keys(theme.breakpoints)[i + 1]]
      )}) {
      ${css(...args)}
    }
  `
  return acc
}, {})

/**
 * Breakpoint handler for a set of styles for a spesific breakpoints. Ex. no margin on xs and md
 * Usage:
 *
 * ${spesific('md,xl')`
      background: orange;
    `}

 * @param {string} breakpointsString string of comma separated breakpoints ex. 'md,xl'
 */
const spesific = breakpointsString => (...args) => {
  const breakpoints = breakpointsString.split(',').map(string => string.trim())
  // console.log(breakpoints)
  if (breakpoints.length === 1) {
    return css`
      ${only[breakpoints[0]]`
      ${css(...args)}
    `}
    `
  } else {
    return css`
      ${breakpoints.map(
        bp => css`
          ${only[bp]`
            ${css(...args)}
          `}
        `
      )}
    `
  }
}

export const bp = {
  above,
  below,
  between,
  only,
  spesific
}
