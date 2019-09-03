import React from 'react'
import cc from 'classcat'

const GridItem = ({
  xs = 12,
  sm = 6,
  md = 4,
  lg = 4,
  xl = 3,
  xxl = 3,
  first = [],
  last = [],
  hidden = [],
  offset = [0],
  children
}) => {
  const [offsetXs, offsetSm, offsetMd, offsetLg, offsetXl, offsetXxl] = offset
  return (
    <div
      className={cc({
        [`col-xs-${xs}`]: xs,
        [`col-sm-${sm}`]: sm,
        [`col-md-${md}`]: md,
        [`col-lg-${lg}`]: lg,
        [`col-xl-${xl}`]: xl,
        [`col-xxl-${xxl}`]: xxl,
        [`col-xs-offset-${offsetXs}`]: offsetXs,
        [`col-sm-offset-${offsetSm}`]: offsetSm,
        [`col-md-offset-${offsetMd}`]: offsetMd,
        [`col-lg-offset-${offsetLg}`]: offsetLg,
        [`col-xl-offset-${offsetXl}`]: offsetXl,
        [`col-xxl-offset-${offsetXxl}`]: offsetXxl,
        [`first-xs`]: first.includes('xs'),
        [`first-sm`]: first.includes('sm'),
        [`first-md`]: first.includes('md'),
        [`first-lg`]: first.includes('lg'),
        [`first-xl`]: first.includes('xl'),
        [`first-xxl`]: first.includes('xxl'),
        [`last-xs`]: last.includes('xs'),
        [`last-sm`]: last.includes('sm'),
        [`last-md`]: last.includes('md'),
        [`last-lg`]: last.includes('lg'),
        [`last-xl`]: last.includes('xl'),
        [`last-xxl`]: last.includes('xxl'),
        [`hidden-xs`]: hidden.includes('xs'),
        [`hidden-sm`]: hidden.includes('sm'),
        [`hidden-md`]: hidden.includes('md'),
        [`hidden-lg`]: hidden.includes('lg'),
        [`hidden-xl`]: hidden.includes('xl'),
        [`hidden-xxl`]: hidden.includes('xxl')
      })}
    >
      {children}
    </div>
  )
}

export default GridItem
