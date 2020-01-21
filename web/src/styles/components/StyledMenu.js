import styled, { css } from 'styled-components'
import { spacing, fonts, bp } from '../utilities'
import { my } from 'styled-components-spacing'

export default styled.div(
  ({ theme: { colors } }) => css`
    background: ${colors.secondary};
    ${spacing.section('my')}
    /* ${my({ md: 'xs', lg: 'lg' })} */


    ${fonts.title('red')}

    ${bp.spesific('sm,lg')`
      background: orange;
    `}
  `
)
