import { css } from 'styled-components'

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

export const spacing = {
  xs: remSize(5),
  sm: remSize(10),
  md: remSize(15),
  lg: remSize(40),
  xl: remSize(80),
  section: remSize(160),
  gutter: remSize(20)
}

export const negativeSpacing = Object.keys(spacing).reduce((acc, key) => {
  acc[key] = `-${spacing[key]}`
  return acc
}, {})

export const fontFamily = {
  sans: `'Suisse Works', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
  serif: `'SuisseIntl', times, serif`
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

export const border = {
  large: key => ({ theme }) => css`
    ${key}: ${theme.borderWidth.large} solid ${theme.colors.border};
  `,
  small: key => ({ theme }) => css`
    ${key}: ${theme.borderWidth.small} solid ${theme.colors.border};
  `
}

export const theme = {
  colors,
  breakpoints,
  spacing,
  negativeSpacing,
  fontFamily,
  fonts,
  aspect,
  contentWidth,
  trans,
  icons,
  borderWidth,
  border
}

export const darkTheme = {
  ...theme,
  colors: {
    primary: 'green',
    secondary: 'orange',
    text: 'white',
    border: 'red',
    background: '#b2b2b2'
  },
  spacing: {
    xs: remSize(20),
    sm: remSize(50),
    md: remSize(60),
    lg: remSize(100),
    xl: remSize(150),
    section: remSize(250),
    gutter: remSize(60)
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
      background: ${theme.colors.background};
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
