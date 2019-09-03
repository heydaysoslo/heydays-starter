import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Container from './Container'
import Grid from './Grid'
import Newsletter from './Newsletter'
import LinkResolver from './LinkResolver'
import Social from './Social'

const Footer = () => {
  const data = useStaticQuery(query)
  const menu = data?.sanityMenu?._rawItem
  const privacyPage = data?.sanitySiteSettings?._rawPrivacypage
  return (
    <div className="Footer">
      <Container>
        <Grid margin="y" columns={{ sm: 2, md: 4 }}>
          <ul className="Footer__menu">
            {menu &&
              menu.map(item => (
                <li className="Footer__menu-item" key={item._key}>
                  <LinkResolver
                    data={item?.externalLink?.url || item?.reference}
                    openInNewTab={item?.externalLink?.blank}
                  >
                    {item?.title || item?.reference?.title}
                  </LinkResolver>
                </li>
              ))}
          </ul>
          <div className="Footer__social">
            <Social />
          </div>
          <div className="Footer__privacy">
            {privacyPage && (
              <LinkResolver data={privacyPage}>
                {privacyPage.title}
              </LinkResolver>
            )}
          </div>
          <div className="Footer__newsletter">
            <Newsletter />
          </div>
        </Grid>
      </Container>
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
