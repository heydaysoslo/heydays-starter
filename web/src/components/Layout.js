import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { SEO } from 'gatsby-theme-heydays'
import { getUrl } from '../../../web/heydays-config'

const Layout = props => {
  return (
    <>
      <SEO
        getUrl={getUrl}
        type={props._type}
        slug={props._rawSlug?.current || ''}
        seo={props.seo}
        title={props.title}
      />
      <div className="Page">
        <Header />
        <div className="Page__content">{props.children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
