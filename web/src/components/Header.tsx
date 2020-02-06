import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

// import Menu from './Menu'
import { Container, H1 } from './elements'
import { spacing } from '../styles/utilities'
import ResponsiveMenu from './ResponsiveMenu'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container className="container">
        <div className="inner">
          <H1>
            <Link className="logo" to="/">
              LOGO
            </Link>
          </H1>
          {/* <Menu /> */}
          <ResponsiveMenu>
            {[...new Array(12)].map((box, i) => (
              <p>Menu {i + 1}</p>
            ))}
          </ResponsiveMenu>
        </div>
      </Container>
    </header>
  )
}

export default styled(Header)(
  ({ theme }) => css`
    ${spacing.sm('py')}
    background: ${theme.colors.primary};

    .logo {
      ${spacing.section('mr')}
    }

    .inner {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  `
)
