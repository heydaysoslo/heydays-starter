import { createGlobalStyle, css } from 'styled-components'
import { spacing } from './Spacing'
import themes from '../themes'
import { bp } from './Breakpoints'
import { fonts } from './Typography'

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}

/* Add visible tag that shows breakpoint for dev environment */
${process.env.NODE_ENV === 'development' &&
  css`
    body:after {
      background: rgba(255, 255, 255, 0.5);
      position: fixed;
      bottom: 0;
      left: 0;
      ${spacing.xs('py,px')}
      ${fonts.body()}

      ${Object.keys(themes.breakpoints).map(
        key =>
          css`
            ${bp.above[key]`content: '${key}';`}
          `
      )}
    }
  `}
`
