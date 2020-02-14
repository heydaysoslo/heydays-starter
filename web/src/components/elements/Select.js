import React from 'react'
import styled, { css } from 'styled-components'
import ReactSelect from 'react-select'

const UnstyledSelect = ({ className, ...props }) => {
  return (
    <ReactSelect {...props} className={className} classNamePrefix="Select" />
  )
}

export const Select = styled(UnstyledSelect)(
  ({ theme }) => css`
    .Select__control {
      &:hover {
        border-color: ${theme?.colors?.primary};
      }
      &--is-focused {
        border-color: ${theme?.colors?.primary};
      }
    }
    .Select__option {
      color: black;

      &--is-selected,
      &--is-focused {
        background: ${theme?.colors?.primary};
        color: ${theme?.colors?.text};
      }
    }
  `
)
