/**
 * Remember to import it in gatsby-browser.js
 */

import React, { useState, createContext } from 'react'
import { setOverflowHidden } from '../../utils/helpers'

const initialValue = {
  state: {
    showMenu: false
  },
  actions: {}
}

const AppContext = createContext(initialValue)

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialValue.state)
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
