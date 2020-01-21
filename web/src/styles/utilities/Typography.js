import { css } from 'styled-components'

import theme from '../themes'
import { bp } from './Breakpoints'

export const fonts = {
  h1: () => css`
    ${theme.fonts.medium()}
    ${bp.above.lg`
      ${theme.fonts.xlarge()}
    `}
    ${bp.above.xl`
      ${theme.fonts.xxlarge()}
    `}
  `,
  body: () => css`
    ${theme.fonts.small()}
    ${bp.above.lg`
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
