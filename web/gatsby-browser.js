/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import 'intersection-observer'

import './src/styles/reset.css'
import './src/assets/fonts/fonts.css'

import { AppProvider } from './src/components/context/AppContext'

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)

// Prevent scroll on route change
let scrollY = 0

export const onPreRouteUpdate = () => {
  scrollY = window.scrollY
}

export const onRouteUpdate = () => {
  window.scroll(0, scrollY)
}

// Trigger animation on routechange
export const wrapPageElement = ({ element, props }) => {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter>
        <motion.div key={props.path}>{element}</motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
// export const wrapPageElement = data => {
//   console.log('data', data)

//   return data.element
// }
