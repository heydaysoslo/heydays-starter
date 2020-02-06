import React from 'react'
import styled, { css } from 'styled-components'
import { bp, spacing } from '../../styles/utilities'

const BlockGrid = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

export default styled(BlockGrid)(({ theme, columns, gap }) => {
  let cols
  if (typeof columns === 'string') {
    cols = columns
  } else if (typeof columns === 'object') {
    cols = Object.keys(columns).map(
      key => css`
        ${bp.above[key]`
        grid-template-columns: repeat(${columns[key]}, 1fr)
      `}
      `
    )
  }
  return css`
    display: grid;
    width: 100%;
    max-width: 100%;
    grid-template-columns: 1fr;
    ${gap &&
      css`
        ${spacing.gutter('gap')}
      `};
    ${cols &&
      css`
        ${cols}
      `};
  `
})
