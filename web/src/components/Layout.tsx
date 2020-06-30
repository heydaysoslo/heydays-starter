import React, { useState } from 'react'

import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'
import { ThemeProvider } from 'styled-components'
import theme, { darkTheme } from '../styles/themes'
import { GlobalStyle } from '../styles/utilities/Global'
import FontPreLoading from './FontPreLoading'

const Layout = ({ page, children }) => {
  const themes = [theme, darkTheme]
  const [number, setNumber] = useState(0)

  return (
    <ThemeProvider theme={themes[number % themes.length]}>
      <div className="Site">
        <FontPreLoading />
        <SEO page={page} />
        <Header />
        <div className="Site__content">{children}</div>
        <Footer />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}

export default Layout
