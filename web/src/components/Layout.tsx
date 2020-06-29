import React, { useState } from 'react'

import { getUrl } from '../../heydays-config'
import { blocksToText } from '../utils/sanityHelpers'

import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'
import { ThemeProvider } from 'styled-components'
import theme, { darkTheme } from '../styles/themes'
import { GlobalStyle } from '../styles/utilities/Global'
import Helmet from 'react-helmet'

const Layout = props => {
  const themes = [theme, darkTheme]
  const [number, setNumber] = useState(0)

  return (
    <ThemeProvider theme={themes[number % themes.length]}>
      <div className="Site">
        <FontPreloadLoading />
        {props && (
          <SEO
            id={props.id}
            getUrl={getUrl}
            type={props._type}
            slug={props._rawSlug?.current || ''}
            seo={props.seo}
            title={props.title}
            image={props?.seo?.image || props.mainImage}
            description={props._rawExcerpt && blocksToText(props._rawExcerpt)}
            authors={props?.authors}
            publishDate={props?.dateString}
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

const FontPreloadLoading = () => {
  return (
    <Helmet>
      <link
        rel="preload"
        as="font"
        href="/fonts/SuisseIntl-Regular-WebM.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/SuisseIntl-Medium-WebM.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/SuisseWorks-Regular-WebS.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/SuisseNeue-Regular-WebS.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Helmet>
  )
}

export default Layout
