import React from 'react'
import cc from 'classcat'
import styled, { css } from 'styled-components'

import LinkResolver from './LinkResolver'
import { fonts } from '../styles/utilities'

const Wrapper = styled(LinkResolver)(
  ({ theme: { colors } }) => css`
    ${fonts.title(colors.text)};
  `
)

const MenuItems = ({ menu, closeMenu, className }) => {
  if (!menu) return null
  return menu.map(item => (
    <Wrapper
      key={item._key}
      data={item?.externalLink?.url || item?.reference}
      className={cc({
        Menu__item: true,
        [className]: className
      })}
      onClick={closeMenu}
      openInNewTab={item?.externalLink?.blank}
    >
      {item?.title || item?.reference?.title}
    </Wrapper>
  ))
}

export default MenuItems
