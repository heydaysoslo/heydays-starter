import React from 'react'
import styled, { css } from 'styled-components'
import { spacing, visuallyHidden, fonts } from '../../../styles/utilities'

export const FormBlock = styled.div(
  ({ theme }) => css`
    ${spacing.md('mt')}
  `
)

export const StyledInput = styled(({ as, error, ...rest }) => (
  <input {...rest} />
))(
  ({ theme, error }) => css`
    appearance: none;
    border: none;
    background: none;
    color: ${theme?.colors?.text};
    width: 100%;
    display: inline-block;
    padding-top: 1.6rem;
    /* padding-bottom: 1.6rem; */
    transition: 0.15s ease background-color, color;
    font-family: ${theme?.fontFamily?.sans};
    vertical-align: middle;
    ${fonts.h2()};

    ::placeholder {
      color: ${theme?.colors?.text};
      opacity: 1;
    }

    ${error &&
      css`
        border-color: ${theme?.colors?.error};
      `}

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    &:focus {
      outline: none;
    }
  `
)

export const StyledRadio = styled(({ as, theme, errors, error, ...rest }) => (
  <div {...rest} />
))(
  ({ theme, error }) => css`
    input {
      ${visuallyHidden};
    }

    .icon {
      height: 3rem;
      width: 3rem;
      margin-right: 1rem;

      ${error &&
        css`
          border: 2px solid ${theme?.colors?.error};
        `}
    }

    .icon-selected {
      fill: ${theme?.colors?.black};
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `
)

export const StyledCheckbox = styled(StyledRadio)(
  ({ theme }) => css`
    path {
      stroke-width: 15px;
      stroke-linejoin: round;
      stroke-linecap: round;
      stroke: ${theme.colors.black};
    }
  `
)

export const StyledTextarea = styled.textarea(
  ({ theme }) => css`
    background: none;
    border: 1px solid white;
    width: 100%;
    height: 400px;
    font-family: ${theme.fontFamily.sans};
    ${fonts.body()}
    color: ${theme.colors.text};
    border-radius: 3rem;
    padding: 2rem;
  `
)

export const FormFeedBack = styled.p(
  ({ theme }) => css`
    color: red;
  `
)

export const FormLabel = styled.label(
  ({ theme }) => css`
    display: flex;
    color: ${theme.colors.text};
    p {
      margin: 0;
      color: ${theme.colors.text};
    }
  `
)
