import * as scSpacing from 'styled-components-spacing'
import { css } from 'styled-components'
import { config } from 'react-transition-group'

/**
 * Create spacing
 *
 * props describes the type and direction of your spacing.
 * Ex. margin-bottom = mb. It uses emmet's css naming conventions.
 * https://docs.emmet.io/cheat-sheet/
 *
 * Available props:
 * ml = margin-left
 * mt = margin-top
 * mr = margin-right
 * mb = margin-bottom
 * my = margin-top and margin-bottom
 * mx = margin-left and margin-right
 *
 * pl = padding-left
 * pt = padding-top
 * pr = padding-right
 * pb = padding-bottom
 * py = padding-top and padding-bottom
 * px = padding-left and padding-right
 *
 *
 * @param {string} props ex uses: 'mt,ml' for multiple. 'mr' for single. Defaults to 'mb'
 * @param {object} size
 */
export const createSpacing = (props = 'mb', size) => {
  const values = props.split(',')
  // If there is single prop
  if (values.length === 0) {
    return css`
      ${scSpacing[props](size)}
    `
  }
  // If there are multiple props
  return values.map(
    val =>
      css`
        ${scSpacing[val](size)}
      `
  )
}

export const spacing = {
  xs: props =>
    createSpacing(props, {
      xs: 'xs',
      lg: 'sm'
    }),
  sm: props =>
    createSpacing(props, {
      xs: 'sm',
      lg: 'md'
    }),
  md: props =>
    createSpacing(props, {
      xs: 'md',
      lg: 'lg'
    }),
  lg: props =>
    createSpacing(props, {
      xs: 'lg',
      lg: 'lg'
    }),
  section: props =>
    createSpacing(props, {
      xs: 'lg',
      lg: 'section'
    })
}
