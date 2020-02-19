import React from 'react'
import styled, { css } from 'styled-components'

import { bp, spacing } from '../../styles/utilities'
import {
  FlexBoxAlignItems,
  SpacingMixins,
  ResponsiveColumns,
  ResponsiveReverse,
  SpacingUnits
} from '../../types'

type Props = {
  className?: string
  columns?: ResponsiveColumns | number // This will override span in GridItem
  reverse?: ResponsiveReverse | boolean
  align?: FlexBoxAlignItems
  justify?: FlexBoxJustifyContent
  collapse?: boolean | SpacingMixins
  gapUnit?: SpacingUnits
  gap?: object | boolean
  gapY?: object | boolean
  gapX?: object | boolean
}

type GridItemProps = {
  className?: string
  offset?: ResponsiveColumns | number
  span?: ResponsiveColumns | number
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
  ({ theme, span, offset }) => css`
    
    box-sizing: border-box;
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;

    ${
      span && typeof span === 'number' && span > 1
        ? css`
            flex-basis: ${(span / (theme?.grid?.columns || 12)) * 100}%;
            max-width: ${(span / (theme?.grid?.columns || 12)) * 100}%;
          `
        : css`
            flex-basis: ${span * 100}%;
            max-width: ${span * 100}%;
          `
    }

    ${span &&
      typeof span === 'object' &&
      Object.keys(span).map(
        key => bp.above[key]`
            flex-basis: ${(span[key] / (theme?.grid?.columns || 12)) * 100}%;
            max-width: ${(span[key] / (theme?.grid?.columns || 12)) * 100}%;
          `
      )}
    
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
  ({
    theme,
    reverse,
    align,
    justify,
    gap,
    columns,
    collapse,
    gapUnit = 'gutter',
    gapY,
    gapX
  }) => css`
    display: flex;
    flex: 0 1 auto;
    flex-direction: ${reverse ? 'row-reverse' : 'row'};
    flex-wrap: wrap;
    align-items: ${align ? align : 'stretch'};
    justify-content: ${justify ? justify : 'flex-start'};
    min-height: 0;

    /* Make it possible to add margins */
    ${gapY && spacing[gapUnit]('my', { multiplier: -0.5 })}
    ${gapX && spacing[gapUnit]('mx', { multiplier: -0.5 })}
    ${gap && spacing[gapUnit]('mx,my', { multiplier: -0.5 })}

    > ${GridItem} {

      ${gapY && spacing[gapUnit]('py', { multiplier: 0.5 })}
      ${gapX && spacing[gapUnit]('px', { multiplier: 0.5 })}
      ${gap && spacing[gapUnit]('p', { multiplier: 0.5 })}

      ${collapse &&
        css`
          margin: 0;
          padding: 0;
        `}

      /* Generate item width based on number */
      ${columns &&
        typeof columns === 'number' &&
        css`
          flex-basis: ${100 / columns}%;
          max-width: ${100 / columns}%;
        `}

      /* Generate item width based on breakpoints */
      ${columns &&
        typeof columns === 'object' &&
        Object.keys(columns).map(
          key => bp.above[key]`
            flex-basis: ${100 / columns[key]}%;
            max-width: ${100 / columns[key]}%;
          `
        )}

    }
  `
)
