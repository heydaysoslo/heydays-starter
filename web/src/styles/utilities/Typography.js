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

export const globalTypeStyle = ({ theme }) => css`
  h1,
  .h1 {
    ${fonts.h1()}
  }

  h2,
  .h2 {
    ${fonts.h1()}
  }

  h3,
  .h3 {
    ${fonts.title()}
  }

  small,
  .text-small {
    ${fonts.body()}
  }

  strong {
    font-weight: bold;
  }

  *:focus {
    outline-color: ${theme.colors.primary};
  }

  a {
    font-family: ${theme.fontFamily.serif};
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: currentColor;
  }

  .link {
    display: inline-block;
    border-bottom: ${theme.colors.secondary};
    transition: border-color ${theme.trans.fast};

    &:hover {
      border-color: transparent;
    }
  }

  .sans {
    font-family: ${theme.fontFamily.sans};
  }

  .serif {
    font-family: ${theme.fontFamily.serif};
  }
`
