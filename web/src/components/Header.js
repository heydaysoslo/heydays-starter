import React from 'react'
import Menu from './Menu'
import { Link } from 'gatsby'
import { Container } from 'gatsby-theme-heydays'

const Header = () => {
  return (
    <div className="Header">
      <Container className="Header__container">
        <Link className="Header__logo" to="/">
          LOGO
        </Link>
        <Menu />
      </Container>
    </div>
  )
}

export default Header
