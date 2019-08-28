import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Newsletter from './Newsletter'
import LinkResolver from './LinkResolver'

const Footer = () => {
  const data = useStaticQuery(query)
  const menu = data?.sanityMenu?._rawItem
  return (
    <div className="Footer">
      <div className="Footer__newsletter">
        <Newsletter />
      </div>
      <ul className="Footer__menu">
        {menu &&
          menu.map(item => (
            <li className="Footer__menu-item">
              <LinkResolver key={item._key} data={item.link}>
                {item.title || item.link.title}
              </LinkResolver>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Footer

export const query = graphql`
  {
    sanityMenu(_id: { eq: "menu-footerMenu" }) {
      _rawItem(resolveReferences: { maxDepth: 10 })
    }
  }
`
