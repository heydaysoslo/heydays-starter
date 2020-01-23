import styled, { css } from 'styled-components'
import { spacing, fonts, bp } from '../utilities'
import { my } from 'styled-components-spacing'

export default styled.div(
  ({ theme: { colors } }) => css`
    background: ${colors.secondary};
    ${spacing.section('my')}
    /* ${my({ md: 'xs', lg: 'lg' })} */

    ${bp.between('sm', 'lg')`
      background: blue;
    `}

    /* ${fonts.title('red')} */
    ${fonts.h1()}
  `
)
