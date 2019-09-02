import React from 'react'
import cc from 'classcat'

import LinkResolver from './LinkResolver'

const MenuItems = ({ menu, closeMenu, className }) => {
  return (
    menu &&
    menu.map(item => (
      <LinkResolver
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
      </LinkResolver>
    ))
  )
}

export default MenuItems
