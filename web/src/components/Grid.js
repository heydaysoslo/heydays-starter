import React from 'react'
import styled, { css } from 'styled-components'

import { remSize, bp } from '../styles/utilities'

const DEFAULT_SETTINGS = {
  gutter: remSize(10)
}

export const Grid = ({
  columns = {},
  reverse = {},
  margin = false,
  padding = true,
  collapse = false,
  className,
  children
}) => {
  return (
    <div className={className} modifiers={[reverse && 'reverse']}>
      {React.Children.map(children, (child, i) => {
        if (child.type.displayName === 'Grid__Item') {
          return child
        } else {
          return (
            <StyledGrid.Item key={`Grid__item-${i}`}>{child}</StyledGrid.Item>
          )
        }
      })}
    </div>
  )
}

export const GridItem = ({ span = {}, offset = {}, children, className }) => {
  // console.log('grid-item-props', span, offset)
  return <div className={className}>{children}</div>
}

const StyledGrid = styled(Grid)(
  ({ theme, reverse, align, margin, columns }) => css`
    display: flex;
    flex: 0 1 auto;
    flex-direction: ${reverse ? 'row-reverse' : 'row'};
    flex-wrap: wrap;
    align-items: ${align ? align : 'auto'};

    ${StyledGrid.Item} {
      ${
        theme.spacing.gutter
          ? theme.spacing.gutter('px')
          : DEFAULT_SETTINGS.gutter
      }
      ${margin === 'y' && theme.spacing.gutter('mb')}
      ${columns &&
        Object.keys(columns).map(
          key => bp.above[key]`
            flex-basis: ${(1 / columns[key]) * 100}%;
            max-width: ${(1 / columns[key]) * 100}%;
          `
        )}
    }
  `
)

StyledGrid.Item = styled(GridItem)(
  ({ span }) => css`
    box-sizing: border-box;
    flex: 0 0 100%;
    max-width: 100%;
    ${span &&
      Object.keys(span).map(
        key => bp.above[key]`
            flex-basis: ${(span[key] / 12) * 100}%;
            max-width: ${(span[key] / 12) * 100}%;
          `
      )}
  `
)

export default StyledGrid
