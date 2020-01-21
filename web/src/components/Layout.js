import React from 'react'

import { getUrl } from '../../../web/heydays-config'
import { blocksToText } from '../utils/sanityHelpers'

import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/themes'
import { GlobalStyle } from '../styles/utilities/Global'
// import Credits from './Credits'

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <div className="Site">
        {/* <Credits /> */}
        {props && (
          <SEO
            getUrl={getUrl}
            type={props._type}
            slug={props._rawSlug?.current || ''}
            seo={props.seo}
            title={props.title}
            image={props._rawMainImage}
            description={props._rawExcerpt && blocksToText(props._rawExcerpt)}
          />
        )}
        <Header />
        <div className="Site__content">{props.children}</div>
        <Footer />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}

export default Layout
