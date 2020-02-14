import React from 'react'
import styled, { css } from 'styled-components'

import Pagebuilder from '../pagebuilder/Pagebuilder'
import { H1, P, Container } from '../elements'
import { spacing } from '../../styles/utilities'

const Page = ({ className, title, content, pagebuilder, ...props }) => {
  return (
    <div className={className}>
      <Container className="container">
        <header className="header">
          <P>Page</P>
          {title && <H1>{title}</H1>}
        </header>
        {pagebuilder && (
          <div className="content">
            {pagebuilder?.sections && (
              <Pagebuilder sections={pagebuilder.sections} />
            )}
          </div>
        )}
      </Container>
    </div>
  )
}

export default styled(Page)(
  ({ theme }) => css`
    .header {
      ${spacing.sm('mt')}
    }
    .content {
      ${spacing.sm('mt')}
    }
  `
)
