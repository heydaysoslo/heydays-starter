import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Newsletter from './Newsletter'
import LinkResolver from './LinkResolver'
import Social from './Social'

const Footer = () => {
  const data = useStaticQuery(query)
  const menu = data?.sanityMenu?._rawItem
  const privacyPage = data?.sanitySiteSettings?._rawPrivacypage
  return (
    <div className="Footer">
      <div className="Footer__newsletter">
        <Newsletter />
      </div>
      <ul className="Footer__menu">
        {menu &&
          menu.map(item => (
            <li className="Footer__menu-item" key={item._key}>
              <LinkResolver data={item.link}>
                {item.title || item.link.title}
              </LinkResolver>
            </li>
          ))}
      </ul>
      <div className="Footer__social">
        <Social />
      </div>
      {privacyPage && (
        <div className="Footer__privacy">
          <LinkResolver data={privacyPage}>{privacyPage.title}</LinkResolver>
        </div>
      )}
    </div>
  )
}

export default Footer

export const query = graphql`
  {
    sanityMenu(_id: { eq: "menu-footerMenu" }) {
      _rawItem(resolveReferences: { maxDepth: 10 })
    }
    sanitySiteSettings(_id: { eq: "siteSettings" }) {
      _rawPrivacypage(resolveReferences: { maxDepth: 10 })
    }
  }
`
