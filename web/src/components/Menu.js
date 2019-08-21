import React, { useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import AppContext from './context/AppContext'
import FadeIn from './FadeIn'
import MenuItems from './MenuItems'
import Portal from 'gatsby-theme-heydays/src/components/Portal'
import { Container } from 'gatsby-theme-heydays'

const Menu = () => {
  const data = useStaticQuery(query)
  const menu = data.sanityMenu?.item
  const { state, actions } = useContext(AppContext)

  return (
    <nav className="Menu">
      <div className="Menu__desktop">
        <MenuItems menu={menu} />
      </div>
      <div className="Menu__mobile">
        {state?.showMenu && (
          <button onClick={() => actions.toggleMenu()}>
            {state.showMenu ? 'Close' : 'Menu'}
          </button>
        )}
        <Portal>
          <FadeIn trigger={state.showMenu}>
            <div className="Menu__cover">
              <Container>
                <button
                  className="Menu__close"
                  onClick={() => actions.toggleMenu()}
                >
                  {state.showMenu ? 'Close' : 'Menu'}
                </button>
                <div className="Menu__wrapper">
                  <MenuItems
                    menu={menu}
                    closeMenu={() => actions.toggleMenu(false)}
                  />
                </div>
              </Container>
            </div>
          </FadeIn>
        </Portal>
      </div>
    </nav>
  )
}

export default Menu

export const query = graphql`
  {
    sanityMenu(_id: { eq: "menu-primaryMenu" }) {
      _id
      _key
      _type
      item {
        _key
        title
        link {
          ...Link
        }
      }
    }
  }
`
