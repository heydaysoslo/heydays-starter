import React from 'react'
import { Helmet } from 'react-helmet'

const FontPreLoading = () => {
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

export default FontPreLoading
