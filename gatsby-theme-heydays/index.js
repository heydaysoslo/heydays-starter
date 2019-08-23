// import './node/onPreBootstrap'

// Components
export { default as Button } from './src/components/Button'
export { default as Container } from './src/components/Container'
export { default as Modal } from './src/components/Modal'
export { default as AspectContainer } from './src/components/AspectContainer'
export { default as Image } from './src/components/Image'
export { default as Helmet } from 'react-helmet'
export { default as Grid } from './src/components/Grid'
export { default as GridItem } from './src/components/GridItem'
export { default as SEO } from './src/components/SEO'

// Hooks
export { default as useMediaQuery } from './src/components/useMediaQuery'
export { default as useScroll } from './src/components/useScroll'
export { default as useWindowSize } from './src/components/useWindowSize'
export { default as useTraceUpdate } from './src/components/useTraceUpdate'

// Helpers
export { setOverflowHidden } from './src/utils/helpers'
export { mapEdgesToNode } from './src/utils/sanityHelpers'
export const isBrowser = typeof window !== 'undefined'
