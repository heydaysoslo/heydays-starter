import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { getUrl } from '../../utils/config'

const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        fbAppId
      }
    }
  }
`

const truncateString = string => {
  const maxLength = 50
  if (string.length < maxLength) {
    return string
  }
  return `${string.substring(0, 50)}…`
}

const getLastValidOverride = (arr, key) => {
  let val
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && arr[i][key]) {
      val = arr[i][key]
    }
  }
  return val
}

const getTitleFromTemplate = (template, title) => {
  return template.replace(/%s/g, title)
}

const SEO = props => {
  const data = useStaticQuery(query)
  const { sanitySiteSettings, site } = data
  const { type, slug } = props

  const titleTemplate = `%s » ${site.siteMetadata.title}`
  const locale = site.siteMetadata.locale || 'en_US'
  const ogType = type === 'news' ? 'article' : 'website'
  const canonicalUrl = `${site.siteMetadata.siteUrl}${getUrl(type, slug)}`

  /**
   * Get meta tag overrides recursively, starting from global site settings
   */
  const sources = [sanitySiteSettings.seo, props, props.seo]
  const title = getLastValidOverride(sources, 'title')
  const description = getLastValidOverride(sources, 'description')
  const image = getLastValidOverride(sources, 'image')

  const tabTitle = getTitleFromTemplate(titleTemplate, truncateString(title))
  return (
    <Helmet>
      <title>{tabTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      {description && <meta name="description" content={description} />}
      {site.fbAppId && <meta name="fb:app_id" content={site.fbAppId} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && image.asset && image.asset.fixed && (
        <meta name="image" content={image.asset.fixed.src} />
      )}
      {image && image.asset && image.asset.fixed && (
        <meta itemprop="image" content={image.asset.fixed.src} />
      )}
      {image && image.asset && image.asset.fixed && (
        <meta property="og:image" content={image.asset.fixed.src} />
      )}
      {image && image.asset && image.asset.fixed && (
        <meta property="og:image:width" content={image.asset.fixed.width} />
      )}
      {image && image.fixed && (
        <meta property="og:image:height" content={image.fixed.height} />
      )}
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={tabTitle} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={tabTitle} />
    </Helmet>
  )
}

export default SEO
