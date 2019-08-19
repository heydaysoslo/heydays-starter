import React from 'react'
import cc from 'classcat'

import LinkResolver from './LinkResolver'

const MenuItems = ({ menu, closeMenu, className }) => {
  return (
    menu &&
    menu.map(item => (
      <LinkResolver
        key={item._key}
        data={item.link}
        className={cc({
          Menu__item: true,
          [className]: className
        })}
        onClick={closeMenu}
      >
        {item?.title || item?.link?.title}
      </LinkResolver>
    ))
  )
}

export default MenuItems
