import { css, DefaultTheme } from 'styled-components'

import { bp } from './utilities/Breakpoints'
import { addSpacingProps } from './utilities/helpers'
import { remSize } from './utilities/Converters'

export const colors = {
  primary: 'red',
  secondary: 'green',
  text: 'black',
  border: 'black'
}

export const breakpoints = {
  xs: 0,
  sm: 550,
  md: 870,
  lg: 1200,
  xl: 1600,
  xxl: 1800
}

export const spacingUnit = {
  xs: remSize(5),
  sm: remSize(10),
  md: remSize(15),
  lg: remSize(40),
  xl: remSize(80),
  section: remSize(160),
  gutter: remSize(20)
}

export const spacing = {
  xs: props => ({ theme }) => css`
    ${addSpacingProps(props, theme.spacingUnit.xs)}

    ${bp.above.lg`
      ${addSpacingProps(props, theme.spacingUnit.sm)}
   `}
  `,
  sm: props => ({ theme }) => css`
    ${addSpacingProps(props, theme.spacingUnit.sm)}

    ${bp.above.lg`
      ${addSpacingProps(props, theme.spacingUnit.md)}
   `}
  `,
  md: props => ({ theme }) => css`
    ${addSpacingProps(props, theme.spacingUnit.md)}

    ${bp.above.lg`
      ${addSpacingProps(props, theme.spacingUnit.lg)}
   `}
  `,
  lg: props => ({ theme }) => css`
    ${addSpacingProps(props, theme.spacingUnit.lg)}
  `,
  section: props => ({ theme }) => css`
    ${addSpacingProps(props, theme.spacingUnit.section)}
  `,
  gutter: props => ({ theme }) => css`
    ${addSpacingProps(props, theme.spacingUnit.gutter)}
  `
}

export const fontFamily = {
  sans: `'SuisseIntl', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
  serif: `'Suisse Works', times, serif`
}

export const fonts = {
  xxlarge: () =>
    css`
      font-size: ${remSize(80)};
      line-height: 1.2;
    `,
  xlarge: () =>
    css`
      font-size: ${remSize(60)};
      line-height: 1.2;
    `,
  large: () =>
    css`
      font-size: ${remSize(40)};
      line-height: 1.2;
    `,
  medium: () =>
    css`
      font-size: ${remSize(24)};
      line-height: 1.2;
    `,
  small: () =>
    css`
      font-size: ${remSize(18)};
      line-height: 1.2;
    `,
  xs: () =>
    css`
      font-size: ${remSize(16)};
      line-height: 1.2;
    `
}

export const aspect = {
  portrait: (7 / 6) * 100,
  landscape: (2 / 3) * 100,
  square: 100,
  widescreen: (9 / 16) * 100,
  panorama: (11 / 16) * 100
}

export const contentWidth = {
  small: remSize(600),
  large: remSize(1200)
}

export const icons = {
  small: remSize(40),
  medium: remSize(80),
  large: remSize(160)
}

export const trans = {
  fast: `0.1s ease`,
  slow: `1s ease`
}

export const borderWidth = {
  small: remSize(1),
  large: remSize(3)
}

// TODO: Add dynamic property without error
export const border = {
  large: key => ({ theme }) => css`
    border: ${theme.borderWidth.large} solid ${theme.colors.border};
  `,
  small: key => ({ theme }) => css`
    border: ${theme.borderWidth.small} solid ${theme.colors.border};
  `
}

export const theme: DefaultTheme = {
  colors,
  breakpoints,
  spacingUnit,
  spacing,
  fontFamily,
  fonts,
  aspect,
  contentWidth,
  trans,
  icons,
  borderWidth,
  border
}

export const darkTheme: DefaultTheme = {
  ...theme,
  colors: {
    primary: 'green',
    secondary: 'orange',
    text: 'white',
    border: 'red',
    background: '#b2b2b2'
  },
  breakpoints: {
    xs: 0,
    sm: 200,
    md: 400,
    lg: 600,
    xl: 800,
    xxl: 900
  },
  defaultStyle: ({ theme }) => css`
    html {
      font-size: 75%;
    }
    body {
      background: ${theme?.colors?.background};
    }
  `
}

export default theme

/**
 * Way to split up and reuse vals
 */

// export const createBorder = theme => ({
//   borderWidth: 1,
//   borderStyle: 'solid',
//   borderColor: colors.primary,
//   border: '1px solid black'
// })

// export const theme = {
//   border: createBorder({ colors: { primary: 'black' } })
// }
// export const darkTheme = {
//   border: createBorder({ colors: { primary: 'orange' } })
// }
