import { applyStyleModifiers } from 'styled-components-modifiers'
import styled, { css } from 'styled-components'

const BUTTON_MODIFIERS = {
  secondary: () => css`
    background: orange;
    border-color: orange;

    &:hover {
      background-color: none;
      color: orange;
    }
  `,
  small: () => css`
    padding: 10px;
  `
}

export const Button = styled.button`
  appearance: none;
  background: none;
  display: inline-block;
  border: 1px solid black;
  font-size: 2rem;
  padding: 20px;
  transition: 0.15s ease background-color, color;

  &:hover {
    background-color: black;
    color: white;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
