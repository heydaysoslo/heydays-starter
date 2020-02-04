import React from 'react'
import styled, { css } from 'styled-components'

import { remSize, bp } from '../../styles/utilities'
import {
  FlexBoxAlignItems,
  SpacingMixins,
  ResponsiveColumns,
  ResponsiveReverse
} from '../../types'

type StyledProps = {
  columns: ResponsiveColumns | number
  reverse?: ResponsiveReverse | boolean
  align?: FlexBoxAlignItems
  spacing?: SpacingMixins
  collapse?: boolean
  className?: string
}

export const Grid: React.FC<StyledProps> = ({ className, children }) => {
  if (!children) return null
  return (
    <div className={className}>
      {/* TODO: Fix the any type */}
      {React.Children.map(children, (child: any, i: number) => {
        if (child?.type?.displayName === 'Grid__Item') {
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

type GridItemProps = {
  span?: ResponsiveColumns | number
  offset?: ResponsiveColumns | number
  className?: string
}

export const GridItem: React.FC<GridItemProps> = ({
  span = {},
  offset = {},
  children,
  className
}) => {
  // console.log('grid-item-props', span, offset)
  return <div className={className}>{children}</div>
}

const StyledGrid = styled(Grid)<StyledProps>(
  ({ theme, reverse, align, spacing, columns }) => css`
    display: flex;
    flex: 0 1 auto;
    flex-direction: ${reverse ? 'row-reverse' : 'row'};
    flex-wrap: wrap;
    align-items: ${align ? align : 'auto'};

    ${StyledGrid.Item} {
      ${spacing && theme?.spacing?.gutter && theme.spacing.gutter(spacing)}
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

StyledGrid.Item = styled(GridItem)<GridItemProps>(
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
