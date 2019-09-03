import React from 'react'

import { getUrl } from '../../../web/heydays-config'
import { blocksToText } from '../utils/sanityHelpers'

import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

const Layout = props => {
  return (
    <>
      <SEO
        getUrl={getUrl}
        type={props._type}
        slug={props._rawSlug?.current || ''}
        seo={props.seo}
        title={props.title}
        image={props._rawMainImage}
        description={props._rawExcerpt && blocksToText(props._rawExcerpt)}
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
