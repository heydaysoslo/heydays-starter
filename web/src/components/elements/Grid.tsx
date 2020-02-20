import React from 'react'
import styled, { css } from 'styled-components'
import { bp, spacing } from '../../styles/utilities'
import {
  FlexBoxAlignItems,
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
  gapUnit?: SpacingUnits
  gap?: object | boolean
  gapY?: object | boolean
  gapX?: object | boolean
}

type GridItemProps = {
  className?: string
  offset?: ResponsiveColumns | number
  span?: ResponsiveColumns | number
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
      span && typeof span === 'number' && span >= 1
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

const setResponsiveColumns = columns => {
  switch (typeof columns) {
    case 'number':
      return css`
        flex-basis: ${100 / columns}%;
        max-width: ${100 / columns}%;
      `
    case 'object':
      return Object.keys(columns).map(
        key => bp.above[key]`
        flex-basis: ${100 / columns[key]}%;
        max-width: ${100 / columns[key]}%;
      `
      )
  }
}

const setResponsiveGaps = ({ gap, gapUnit, multiplier, cssProps }) => {
  if (typeof gap === 'object') {
    return Object.keys(gap).map(
      key => bp.above[key]`
${spacing[gapUnit](cssProps, { multiplier: gap[key] ? multiplier : 0 })}
`
    )
  } else {
    return spacing[gapUnit](cssProps, { multiplier })
  }
}

export default styled(BaseGrid)<Props>(
  ({
    theme,
    reverse,
    align,
    justify,
    gap,
    columns,
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

    /* Add responsive negative margins to container */
    /* Vertical */
    ${gapY &&
      setResponsiveGaps({
        gap: gapY,
        gapUnit,
        multiplier: -0.5,
        cssProps: 'my'
      })}
      
    /* Horizontal */
    ${gapX &&
      setResponsiveGaps({
        gap: gapX,
        gapUnit,
        multiplier: -0.5,
        cssProps: 'mx'
      })}

    /* Vertical + horizontal */
    ${gap &&
      setResponsiveGaps({
        gap,
        gapUnit,
        multiplier: -0.5,
        cssProps: 'mx,my'
      })}

    > ${GridItem} {
      
      /* Add responsive margins to GridItem */
      /* Vertical */
      ${gapY &&
        setResponsiveGaps({
          gap: gapY,
          gapUnit,
          multiplier: 0.5,
          cssProps: 'py'
        })}

      /* Horizontal */
      ${gapX &&
        setResponsiveGaps({
          gap: gapX,
          gapUnit,
          multiplier: 0.5,
          cssProps: 'px'
        })}

      /* Vertical + horizontal */
      ${gap &&
        setResponsiveGaps({
          gap,
          gapUnit,
          multiplier: 0.5,
          cssProps: 'p'
        })}

      ${columns && setResponsiveColumns(columns)}

    }
  `
)
