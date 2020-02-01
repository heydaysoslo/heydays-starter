import React from 'react'
import Pagebuilder from '../pagebuilder/Pagebuilder'
import Container from '../Container'
import styled, { css } from 'styled-components'
import { H1, P } from '../elements'

const Page = ({ className, title, content, pagebuilder, ...props }) => {
  return (
    <div className={className}>
      <Container className="container">
        <header className="header">
          <P>Page</P>
          <H1>{title}</H1>
        </header>
        <div className="content">
          {pagebuilder?.sections && (
            <Pagebuilder sections={pagebuilder.sections} />
          )}
        </div>
      </Container>
    </div>
  )
}

export default styled(Page)(
  ({ theme }) => css`
    .header {
      ${theme.spacing.sm('mt')}
    }
    .content {
      ${theme.spacing.sm('mt')}
    }
  `
)
