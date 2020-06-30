import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { spacing } from '../styles/utilities'

import { Grid, Container } from './elements'
import Newsletter from './Newsletter'
import { LinkResolver } from './resolvers'
import Social from './Social'

const StyledFooter = styled.footer`
  ${spacing.section('mt,py')};
  border-top: 1px solid #000;
`

const Footer = () => {
  const data = useStaticQuery(query)
  const menu = data?.sanitySiteSettings?.footerMenu?._rawItem
  const privacyPage = data?.sanitySiteSettings?._rawPrivacypage
  return (
    <StyledFooter>
      <Container>
        <Grid gap="my" columns={{ sm: 2, md: 4 }}>
          <ul className="Footer__menu">
            {menu &&
              menu.map(item => (
                <li className="Footer__menu-item" key={item._key}>
                  <LinkResolver link={item}>
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
              <LinkResolver link={privacyPage}>
                {privacyPage.title}
              </LinkResolver>
            )}
          </div>
          <div className="Footer__newsletter">
            <Newsletter />
          </div>
        </Grid>
      </Container>
    </StyledFooter>
  )
}

export default Footer

export const query = graphql`
  {
    sanitySiteSettings(_id: { eq: "siteSettings" }) {
      _rawPrivacypage(resolveReferences: { maxDepth: 10 })
      footerMenu {
        _rawItem(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`
