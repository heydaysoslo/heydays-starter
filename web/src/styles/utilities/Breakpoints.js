import { css } from 'styled-components'
import theme from '../themes'
import { emSize } from './Converters'

// iterate through the breakpoints and create a media template
export const above = Object.keys(theme.breakpoints).reduce(
  (accumulator, bp) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    accumulator[bp] = (...args) => css`
      @media (min-width: ${emSize(theme.breakpoints[bp])}) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

// iterate through the breakpoints and create a media template
export const below = Object.keys(theme.breakpoints).reduce(
  (accumulator, bp) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    accumulator[bp] = (...args) => css`
      @media (max-width: ${emSize(theme.breakpoints[bp])}) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

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
export const between = (min, max) => (...args) => {
  return css`
    @media (min-width: ${emSize(
        theme.breakpoints[min]
      )}) and (max-width: ${emSize(theme.breakpoints[max])}) {
      ${css(...args)};
    }
  `
}

export const only = Object.keys(theme.breakpoints).reduce((acc, bp, i) => {
  console.log('this', theme.breakpoints[bp])
  console.log('next', Object.keys(theme.breakpoints)[i + 1])
  acc[bp] = (...args) => css`
    @media (min-width: ${emSize(
        theme.breakpoints[bp]
      )}) and (max-width: ${emSize(Object.keys(theme.breakpoints)[i + 1])}) {
      ${css(...args)}
    }
  `
  return acc
}, {})

// TODO: Make spesific

// specific(['xs', 'xl'])`
//   background: orange;
// `
