import React, { useContext } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import Menu from './Menu'
import { Container, H1 } from './elements'
import { spacing } from '../styles/utilities'
import { LinkResolver } from './resolvers'
import AppContext from './context/AppContext'

type Props = {
  className?: string
}

const Header = ({ className }: Props) => {
  const data = useStaticQuery(query)
  const menuItems = data?.sanitySiteSettings?.primaryMenu?._rawItem
  const { state, actions } = useContext(AppContext)
  return (
    <header className={className}>
      <Container className="container">
        <div className="inner">
          <H1>
            <Link className="logo" to="/">
              LOGO
            </Link>
          </H1>
          {menuItems && (
            <Menu>
              {menuItems.map(item => (
                <LinkResolver
                  key={item._key}
                  data={item?.externalLink?.url || item?.reference}
                  onClick={() => state.ShowMenu && actions.toggleMenu(false)}
                  openInNewTab={item?.externalLink?.blank}
                >
                  {item?.title || item?.reference?.title}
                </LinkResolver>
              ))}
            </Menu>
          )}
        </div>
      </Container>
    </header>
  )
}

export default styled(Header)(
  ({ theme }) => css`
    ${spacing.sm('py')}
    background: ${theme.colors.primary};

    .logo {
      ${spacing.section('mr')}
    }

    .inner {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  `
)

export const query = graphql`
  {
    sanitySiteSettings(_id: { eq: "siteSettings" }) {
      primaryMenu {
        _rawItem(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`
