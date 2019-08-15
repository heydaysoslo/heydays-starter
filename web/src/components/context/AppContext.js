/**
 * Remember to import it in gatsby-browser.js
 */

import React, { useState } from 'react'
import { setOverflowHidden } from 'gatsby-theme-heydays'

import AppContext from './Context'

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    showMenu: false
  })
  return (
    <AppContext.Provider
      value={{
        state: state,
        actions: {
          toggleMenu: condition => {
            const toggledState = !state.showMenu
            setOverflowHidden(condition ? condition : toggledState)
            setState({
              ...state,
              showMenu: condition ? condition : toggledState
            })
          }
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
