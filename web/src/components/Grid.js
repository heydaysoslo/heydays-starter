import React from 'react'
import cc from 'classcat'

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']

/*

Usage:

//
// Manual grid layout
//

<Grid>
  <GridItem span={{ sm: 6, lg: 3 }}>Content</GridItem>
</Grid>


//
// Block grid layout
//

<Grid columns={{ xs: 3, md: 6}}>
  <Scissors>Col 1</Scissors>
  <Paper>Col 2</Paper>
  <Rock>Col 3</Rock>
  <Scissors>Col 4</Scissors>
  <Paper>Col 5</Paper>
  <Rock>Col 6</Rock>
</Grid>

*/

/**
 * Grid
 * All direct children will be wrapped automatically in a <div>
 * @param {columns} Object Number of columns per row. Integer from 1 to 12.
 * @param {className} String
 */

const Grid = ({
  columns = {},
  reverse = {},
  // margin = false,
  margin = false,
  padding = true,
  collapse = false,
  className,
  children
}) => {
  const generateResponsiveClassNames = () => {
    // Remove padding if global collapse
    if (collapse === true) {
      padding = false
    }

    return breakpoints.reduce((classNames, bp, i) => {
      // Block grid classes
      classNames[`Grid--${bp}-${columns[bp]}`] = columns && columns[bp]

      // Reversed layout classes
      classNames[`Grid--${bp}-reverse`] = reverse && reverse[bp]

      // Collapse
      if (collapse === true && i === 0) {
        classNames[`Grid--collapse`] = true
      } else {
        classNames[`Grid--${bp}-collapse`] = collapse && collapse[bp]
      }

      // Gutters
      if (padding === true && i === 0) {
        classNames[`Grid--padding`] = true
      } else {
        classNames[`Grid--${bp}-padding`] = padding && padding[bp]
      }

      if (margin === 'y') {
        classNames[`Grid--margin-y`] = true
      }

      // if (margin) {
      //   if (margin === true) {
      //     classNames[`Grid--${bp}-margin`] = true
      //   } else {
      //     classNames[`Grid--${bp}-margin`] = margin && margin[bp]
      //   }
      // } else {
      //   if (padding === true && i === 0) {
      //     classNames[`Grid--${bp}-padding`] = true
      //   } else {
      //     classNames[`Grid--${bp}-padding`] = padding && padding[bp]
      //   }
      // }

      return classNames
    }, {})
  }

  const classNames = generateResponsiveClassNames()

  return (
    <div
      className={cc({
        [className]: className,
        Grid: true,
        ...classNames
      })}
    >
      {React.Children.map(children, (child, i) => {
        if (child.type === GridItem) {
          return child
        } else {
          return (
            <div
              key={`Grid__item-${i}`}
              className={cc({
                Grid__item: true,
                [`Grid__item-${i}`]: className,
                [`${className}__item`]: className,
                [`${className}__item-${i}`]: className
              })}
            >
              {child}
            </div>
          )
        }
      })}
    </div>
  )
}

/**
 * GridItem
 * Total columns are 12
 * @param {className} String
 * @param {span} Object Number of columns the item covers. Integer from 1 to 12.
 */
export const GridItem = ({ span = {}, offset = {}, children, className }) => {
  const generateResponsiveClassNames = () => {
    return breakpoints.reduce((classNames, bp) => {
      if (span[bp]) {
        classNames[`Grid__item--${bp}-${span[bp]}`] = true
      }
      if (offset[bp]) {
        classNames[`Grid__item--${bp}-offset-${offset[bp]}`] = true
      }
      return classNames
    }, {})
  }

  const classNames = generateResponsiveClassNames()

  return (
    <div
      className={cc({
        [className]: className,
        Grid__item: true,
        ...classNames
      })}
    >
      {children}
    </div>
  )
}

export default Grid
