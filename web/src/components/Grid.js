import React from 'react'
import styled, { css } from 'styled-components'

import { remSize, bp, spacing } from '../styles/utilities'

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
  props => css`
    display: flex;
    flex: 0 1 auto;
    flex-direction: ${props.reverse ? 'row-reverse' : 'row'};
    flex-wrap: wrap;
    align-items: ${props.align ? props.align : 'auto'};

    ${StyledGrid.Item} {
      ${spacing.gutter ? spacing.gutter('px') : DEFAULT_SETTINGS.gutter}
      ${props.margin === 'y' && spacing.gutter('mb')}
      ${props.columns &&
        Object.keys(props.columns).map(
          key => bp.above[key]`
            flex-basis: ${(1 / props.columns[key]) * 100}%;
            max-width: ${(1 / props.columns[key]) * 100}%;
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
