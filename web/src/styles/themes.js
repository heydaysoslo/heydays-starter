import { css } from 'styled-components'

import { remSize } from './utilities/Converters'

export default {
  colors: {
    primary: 'red',
    secondary: 'green'
  },
  breakpoints: {
    xs: 0,
    sm: 375,
    md: 768,
    lg: 1170,
    xl: 1400,
    xxl: 1800
  },
  spacing: {
    xs: remSize(5),
    sm: remSize(10),
    md: remSize(15),
    lg: remSize(40),
    xl: remSize(80),
    section: remSize(160)
  },
  fonts: {
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
  },
  contentWidth: {
    small: remSize(600),
    large: remSize(1200)
  }
}

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
