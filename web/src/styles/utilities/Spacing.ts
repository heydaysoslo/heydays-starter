import { css } from 'styled-components'

import { addSpacingProps } from './helpers'
import { bp } from './Breakpoints'
import { remSize } from './Converters'

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
//         // Check if value exists in theme ex. if value === 'lg' we have spacing.lg
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

//
// spacing.xs('py', {mulitplier: .5, func: val => val * .5})
//

// Parse units like vw, px, rem etc and split into {number, unit}
const parseUnit = value => {
  const number = parseFloat(value)
  const unit = value.replace(/^[\-\d\.]+/, '')
  return { number, unit }
}

const getPropValue = (value, options) => {
  if (!value) {
    return value
  }
  if (!options?.multiplier) {
    return value
  }
  const unitParsed = parseUnit(value)
  return `${unitParsed.number * options.multiplier}${unitParsed.unit}`
}

export const responsiveSpacing = {
  xs: (props, negative = false) => ({ theme }) => css`
    ${addSpacingProps(
      props,
      negative ? `-${theme?.spacingUnit?.xs}` : theme?.spacingUnit?.xs
    )}

    ${bp.above.lg`
      ${addSpacingProps(
        props,
        negative ? `-${theme?.spacingUnit?.sm}` : theme?.spacingUnit?.sm
      )}
   `}
  `,
  sm: (props, negative = false) => ({ theme }) => css`
    ${addSpacingProps(
      props,
      negative ? `-${theme?.spacingUnit?.sm}` : theme?.spacingUnit?.sm
    )}

    ${bp.above.lg`
      ${addSpacingProps(
        props,
        negative ? `-${theme?.spacingUnit?.md}` : theme?.spacingUnit?.md
      )}
   `}
  `,
  md: (props, negative = false) => ({ theme }) => css`
    ${addSpacingProps(
      props,
      negative ? `-${theme?.spacingUnit?.md}` : theme?.spacingUnit?.md
    )}

    ${bp.above.lg`
      ${addSpacingProps(
        props,
        negative ? `-${theme?.spacingUnit?.lg}` : theme?.spacingUnit?.lg
      )}
   `}
  `,
  lg: (props, options) => ({ theme }) => css`
    ${addSpacingProps(props, getPropValue(theme?.spacingUnit?.lg, options))}
  `,
  section: (props, options) => ({ theme }) => css`
    ${addSpacingProps(
      props,
      getPropValue(theme?.spacingUnit?.section, options)
    )}
  `,
  gutter: (props, options) => ({ theme }) => css`
    ${addSpacingProps(props, getPropValue(theme?.spacingUnit?.gutter, options))}
  `
}

export const spacing = {
  ...mixins,
  ...responsiveSpacing
}
