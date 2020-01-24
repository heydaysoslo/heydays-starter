import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import AppContext from './context/AppContext'
import FadeIn from './FadeIn'
import MenuItems from './MenuItems'
import Portal from './Portal'
import Container from './Container'
import styled, { css } from 'styled-components'
import { bp, spacing, fonts } from '../styles/utilities'
import { Button } from './elements'

const Menu = ({ className }) => {
  const data = useStaticQuery(query)
  const menu = data.sanityMenu?._rawItem
  const { state, actions } = useContext(AppContext)

  return (
    <nav className={className}>
      <div className="desktop">
        <MenuItems menu={menu} />
      </div>
      <div className="mobile">
        <Button modifiers={['small']} onClick={() => actions.toggleMenu()}>
          {state?.showMenu ? 'Close' : 'Menu'}
        </Button>
        <Portal>
          <StyledFadeIn trigger={state?.showMenu}>
            <div className="cover">
              <Container className="container">
                <Button
                  as="a"
                  className="close"
                  onClick={() => actions.toggleMenu()}
                >
                  {state?.showMenu ? 'Close' : 'Menu'}
                </Button>
                <div className="wrapper">
                  <MenuItems
                    menu={menu}
                    closeMenu={() => actions.toggleMenu(false)}
                  />
                </div>
              </Container>
            </div>
          </StyledFadeIn>
        </Portal>
      </div>
    </nav>
  )
}

// Styled separate because of portal
const StyledFadeIn = styled(FadeIn)(
  ({ theme, trigger }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${theme.colors.background || 'white'};
    pointer-events: ${trigger ? 'auto' : 'none'};

    .close {
      position: absolute;
      top: 0;
      right: 0;
    }

    .wrapper {
      display: flex;
      flex-direction: column;

      .item {
        margin-left: 0;
      }
    }
  `
)

export default styled(Menu)(
  ({ theme }) => css`
    .mobile {
      display: none;
      ${bp.below.lg`
        display: block;
      `}
    }

    .desktop {
      display: none;
      ${bp.above.lg`
        display: block;
      `}
      ${MenuItems} {
        ${fonts.body()}
      }
    }

    .container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      ${spacing.sm('pt')}
      flex-direction: row-reverse;
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
