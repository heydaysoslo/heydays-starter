import { css } from 'styled-components'

const mixinDefs = {
  m: ['margin'],
  ml: ['margin-left'],
  mt: ['margin-top'],
  mr: ['margin-right'],
  mb: ['margin-bottom'],
  my: ['margin-top', 'margin-bottom'],
  mx: ['margin-left', 'margin-right'],

  p: ['padding'],
  pl: ['padding-left'],
  pt: ['padding-top'],
  pr: ['padding-right'],
  pb: ['padding-bottom'],
  py: ['padding-top', 'padding-bottom'],
  px: ['padding-left', 'padding-right'],

  gap: ['grid-gap']
}

const mixins = Object.keys(mixinDefs).reduce((acc, key) => {
  acc[key] = value => ({ theme }) => {
    return css`
      ${mixinDefs[key].map(
        prop => css`
          ${prop}: ${value};
        `
      )}
    `
  }
  return acc
}, {})

/**
 * Structure of reponsiveSpacingDefs obj below
 *
 * [name of function]: {
 *  [breakpoint]: [spacing value (theme.spacing ref || hard value ex: 100px)]
 * }
 *
 */

// const responsiveSpacingDefs = {
//   xs: {
//     xs: 'xs',
//     lg: 'lg'
//   },
//   sm: {
//     xs: 'sm',
//     lg: 'section'
//   },
//   gutter: {
//     xs: 'gutter',
//     lg: 'gutter'
//   }
// }

// const responsiveSpacing = Object.keys(responsiveSpacingDefs).reduce(
//   (acc, key) => {
//     acc[key] = propsString => ({ theme }) => {
//       // turn prop string into array. 'my,mt' => ['my', 'mt']
//       const props = propsString.split(',').map(prop => prop.trim())
//       // get breakpoints with values
//       const breakpoints = responsiveSpacingDefs[key]
//       // Loop over breakpoints to insert values
//       return Object.keys(breakpoints).map(breakpoint => {
//         // Get breakpoint spesific value
//         const value = breakpoints[breakpoint]
//         // Check if value exists in theme ex. if value === 'lg' we have theme.spacing.lg
//         // If value does not correspond to any key in spacing we assume it is a hardcoded value
//         const themeValue = theme.spacing[value]
//         // No breakpoint needed for xs breakpoint
//         return css`
//           ${breakpoint === 'xs' &&
//             props.map(
//               prop =>
//                 css`
//                   ${spacing[prop](themeValue || value)}
//                 `
//             )}
//           ${breakpoint !== 'xs' &&
//             css`
//               ${bp.above[breakpoint]`
//                 ${props.map(
//                   prop =>
//                     css`
//                       ${spacing[prop](themeValue || value)}
//                     `
//                 )}
//               `}
//             `}
//         `
//       })
//     }
//     return acc
//   },
//   {}
// )

export const spacing = {
  ...mixins
}
