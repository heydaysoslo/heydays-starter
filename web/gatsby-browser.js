/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { AppProvider } from './src/components/context/AppContext'
import 'intersection-observer'

import './src/styles/reset.css'
import './src/assets/fonts/fonts.css'

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)
