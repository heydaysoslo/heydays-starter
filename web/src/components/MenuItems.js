import React from 'react'
import styled, { css } from 'styled-components'

import { LinkResolver } from './resolvers'
import { fonts, spacing } from '../styles/utilities'

const MenuItems = ({ menu, closeMenu, className }) => {
  if (!menu) return null
  return menu.map(item => (
    <LinkResolver
      key={item._key}
      data={item?.externalLink?.url || item?.reference}
      className={className}
      onClick={closeMenu}
      openInNewTab={item?.externalLink?.blank}
    >
      {item?.title || item?.reference?.title}
    </LinkResolver>
  ))
}

export default styled(MenuItems)(
  ({ theme }) => css`
    ${spacing.sm('ml')}
    ${fonts.title()}
  `
)
