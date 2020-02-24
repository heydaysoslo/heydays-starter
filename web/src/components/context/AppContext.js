/**
 * Remember to import it in gatsby-browser.js
 */

import React, { useState, createContext } from 'react'
import { setOverflowHidden } from '../../utils/helpers'

import theme, { darkTheme } from '../../styles/themes'

const initialValue = {
  state: {
    showMenu: false,
    theme: theme
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
          },
          setTheme: newTheme => {
            setState({
              ...state,
              theme: {
                ...theme,
                ...newTheme
              }
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
