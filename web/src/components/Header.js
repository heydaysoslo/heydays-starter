import React from 'react'
import Menu from './Menu'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <div className="Header">
      <Link className="Header__logo" to="/">
        LOGO
      </Link>
      <Menu />
    </div>
  )
}

export default Header
