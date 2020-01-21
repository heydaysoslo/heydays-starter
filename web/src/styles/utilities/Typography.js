import { css } from 'styled-components'

import theme from '../themes'
import { above } from './Breakpoints'

export const fonts = {
  h1: () => css`
    ${theme.fonts.medium()}
    ${above.lg`
      ${theme.fonts.xlarge()}
    `}
    ${above.xl`
      ${theme.fonts.xxlarge()}
    `}
  `,
  body: () => css`
    ${theme.fonts.small()}
    ${above.lg`
      ${theme.fonts.medium()}
    `}
  `,
  title: (color = 'black') => css`
    ${theme.fonts.xlarge()}
    color: ${color};
    text-transform: uppercase;
    letter-spacing: 1px;
  `
}
