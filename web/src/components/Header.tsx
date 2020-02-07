import React, { useContext } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'

// import Menu from './Menu'
import { Container, H1 } from './elements'
import { spacing } from '../styles/utilities'
import ResponsiveMenu from './ResponsiveMenu'
import { LinkResolver } from './resolvers'
import AppContext from './context/AppContext'

const Header = ({ className }) => {
  const data = useStaticQuery(query)
  const menuItems = data?.sanityMenu?._rawItem
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
          {/* <Menu /> */}
          <ResponsiveMenu>
            {/* {[...new Array(12)].map((box, i) => (
              <p>Menu {i + 1}</p>
            ))} */}
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
          </ResponsiveMenu>
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
    sanityMenu(_id: { eq: "menu-primaryMenu" }) {
      _id
      _key
      _type
      _rawItem(resolveReferences: { maxDepth: 10 })
    }
  }
`
