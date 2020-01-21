import styled, { css } from 'styled-components'
import { spacing, fonts, above, spesific } from '../utilities'
import { my } from 'styled-components-spacing'

export default styled.div(
  ({ theme: { colors } }) => css`
    background: ${colors.secondary};
    ${spacing.section('my')}
    /* ${my({ md: 'xs', lg: 'lg' })} */

    /* ${above.lg`
      background: ${colors.primary}
    `} */
    ${fonts.title('red')}

    ${spesific('sm,lg')`
      background: orange;
    `}
  `
)
