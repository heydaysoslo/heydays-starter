import React from 'react'
import styled, { css } from 'styled-components'

import { bp, spacing } from '../../styles/utilities'
import {
  FlexBoxAlignItems,
  SpacingMixins,
  ResponsiveColumns,
  ResponsiveReverse
} from '../../types'

type Props = {
  className?: string
  columns?: ResponsiveColumns | number // This will override span in GridItem
  reverse?: ResponsiveReverse | boolean
  align?: FlexBoxAlignItems
  gap?: SpacingMixins
  collapse?: boolean | SpacingMixins
}

type GridItemProps = {
  className?: string
  offset?: ResponsiveColumns | number
  span?: ResponsiveColumns | number
  gap?: SpacingMixins
  collapse?: boolean
}

const BaseGrid: React.FC<Props> = ({ className, children }) => {
  if (!children) return null
  return (
    <div className={className}>
      {/* TODO: Fix the any type */}
      {React.Children.map(children, (child: any, i: number) => {
        if (child?.type?.displayName === 'Grid__GridItem') {
          return child
        } else {
          return <GridItem key={`Grid__item-${i}`}>{child}</GridItem>
        }
      })}
    </div>
  )
}

const BaseGridItem: React.FC<GridItemProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

export const GridItem = styled(BaseGridItem)<GridItemProps>(
  ({ theme, span, gap, offset }) => css`
    box-sizing: border-box;
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
    ${span &&
      typeof span === 'number' &&
      css`
        flex-basis: ${(span / (theme?.grid?.columns || 12)) * 100}%;
        max-width: ${(span / (theme?.grid?.columns || 12)) * 100}%;
      `}
    ${span &&
      typeof span === 'object' &&
      Object.keys(span).map(
        key => bp.above[key]`
            flex-basis: ${(span[key] / (theme?.grid?.columns || 12)) * 100}%;
            max-width: ${(span[key] / (theme?.grid?.columns || 12)) * 100}%;
          `
      )}
    ${gap && spacing?.gutter && spacing.gutter(gap)}
    ${offset &&
      typeof offset === 'number' &&
      css`
        margin-left: ${(offset / (theme?.grid?.columns || 12)) * 100}%;
      `}
    ${offset &&
      typeof offset === 'object' &&
      Object.keys(offset).map(
        key => bp.above[key]`
          margin-left: ${(offset[key] / (theme?.grid?.columns || 12)) * 100}%;
        `
      )}
  `
)

export default styled(BaseGrid)<Props>(
  ({ theme, reverse, align, gap, columns, collapse }) => css`
    display: flex;
    flex: 0 1 auto;
    flex-direction: ${reverse ? 'column-reverse' : 'column'};
    min-height: 0;
    flex-wrap: wrap;
    align-items: ${align ? align : 'auto'};

    ${bp.above.sm`
      flex-direction: ${reverse ? 'row-reverse' : 'row'};
    `}

    ${GridItem} {
      ${gap && !collapse && spacing.gutter(gap)}
      ${collapse &&
        css`
          margin: 0;
          padding: 0;
        `}
      ${columns &&
        typeof columns === 'number' &&
        css`
          flex-basis: ${(columns / (theme?.grid?.columns || 12)) * 100}%;
          max-width: ${(columns / (theme?.grid?.columns || 12)) * 100}%;
        `}
      ${columns &&
        typeof columns === 'object' &&
        Object.keys(columns).map(
          key => bp.above[key]`
            flex-basis: ${(1 / columns[key]) * 100}%;
            max-width: ${(1 / columns[key]) * 100}%;
          `
        )}
    }
  `
)
