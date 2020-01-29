import { css } from 'styled-components'

import { bp } from './Breakpoints'

export const fonts = {
  h1: () => ({ theme }) => css`
    ${theme.fonts.medium()};
    ${bp.above.lg`
      ${theme.fonts.xlarge()};
    `}
    ${bp.above.xl`
      ${theme.fonts.xxlarge()};
    `}
  `,
  body: () => {
    return function({ theme }) {
      return css`
        ${theme.fonts.small()}
        ${bp.above.lg`
        ${theme.fonts.medium()}
      `}
      `
    }
  },
  title: (color = 'black') => {
    return function({ theme }) {
      return css`
        ${theme.fonts.xlarge()}
        color: ${color || theme.colors.text};
        text-transform: uppercase;
        letter-spacing: 1px;
      `
    }
  }
}
