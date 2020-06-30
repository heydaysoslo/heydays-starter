import React from 'react'
import styled, { css } from 'styled-components'

import { LinkResolver } from './resolvers'
import { fonts, spacing } from '../styles/utilities'

const MenuItems = ({ menu, closeMenu, className }) => {
  if (!menu) return null
  return (
    <nav className={className}>
      {menu.map(item => (
        <LinkResolver
          key={item._key}
          className="item"
          link={item}
          onClick={closeMenu}
        >
          {item?.title || item?.reference?.title}
        </LinkResolver>
      ))}
    </nav>
  )
}

export default styled(MenuItems)(
  ({ theme }) => css`
    .item {
      ${spacing.sm('ml')}
      ${fonts.title()}
    }
  `
)
