import React from 'react'
import { Link } from 'gatsby'

import Menu from './Menu'
import Container from './Container'

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
