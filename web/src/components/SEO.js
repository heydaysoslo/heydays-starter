import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const truncateString = string => {
  if (!string) return null
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
  const { sanityCompanyInfo, sanitySiteSettings } = data
  const { type, slug, getUrl } = props

  const titleTemplate = `%s » ${sanityCompanyInfo?.name}`
  const locale = sanitySiteSettings?.locale || 'en_US'
  const ogType = type === 'article' ? 'article' : 'website'
  const canonicalUrl = `${sanitySiteSettings?.siteUrl}${getUrl(type, slug)}`

  /**
   * Get meta tag overrides recursively, starting from global site settings
   */
  const sources = [sanitySiteSettings?._rawSeo, props, props.seo]
  const title = getLastValidOverride(sources, 'title')
  const description = getLastValidOverride(sources, 'description')
  const image = getLastValidOverride(sources, 'image')

  const tabTitle =
    slug === sanitySiteSettings?._rawFrontpage.slug.current
      ? title
      : getTitleFromTemplate(titleTemplate, truncateString(title))
  return (
    <Helmet>
      <title>{tabTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      {description && <meta name="description" content={description} />}
      {sanitySiteSettings?.facebookAppId && (
        <meta name="fb:app_id" content={sanitySiteSettings.facebookAppId} />
      )}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      {image?.asset?.fixed && (
        <meta name="image" content={image.asset.fixed.src} />
      )}
      {image?.asset?.fixed && (
        <meta itemprop="image" content={image.asset.fixed.src} />
      )}
      {image?.asset?.fixed && (
        <meta property="og:image" content={image.asset.fixed.src} />
      )}
      {image?.asset?.fixed && (
        <meta property="og:image:width" content={image.asset.fixed.width} />
      )}
      {image?.asset?.fixed && (
        <meta property="og:image:height" content={image.asset.fixed.height} />
      )}
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={tabTitle} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={tabTitle} />
      <html lang={locale.includes('_') ? locale.split('_')[0] : locale} />
    </Helmet>
  )
}

export default SEO

const query = graphql`
  {
    sanityCompanyInfo {
      _rawOffices(resolveReferences: { maxDepth: 10 })
      _rawSocial(resolveReferences: { maxDepth: 10 })
      email
      name
    }
    sanitySiteSettings {
      locale
      siteUrl
      facebookAppId
      _rawFrontpage(resolveReferences: { maxDepth: 10 })
      _rawSeo(resolveReferences: { maxDepth: 10 })
      seo {
        image {
          asset {
            fixed(width: 1200, height: 630) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`
