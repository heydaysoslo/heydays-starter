import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import Menu from './Menu'
import Container from './Container'
import { spacing } from '../styles/utilities'
import { H1 } from './elements'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container className="container">
        <H1>
          <Link className="logo" to="/">
            LOGO
          </Link>
        </H1>
        <Menu />
      </Container>
    </header>
  )
}

export default styled(Header)(
  ({ theme }) => css`
    ${spacing.sm('py')}
    background: ${theme.colors.primary};

    .container {
      display: flex;
      justify-content: space-between;
    }
  `
)
