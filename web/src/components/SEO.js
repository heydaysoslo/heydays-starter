import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import {
  GatsbySeo,
  ArticleJsonLd,
  LocalBusinessJsonLd
} from 'gatsby-plugin-next-seo'

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
  const { type, slug, getUrl, authors, publishDate, id } = props

  if (!type || !slug) {
    console.info(
      `Type or slug is missing. We need this to make the SEO. Type: ${type} and Slug: ${slug}`
    )
    return null
  }

  const titleTemplate = `%s » ${sanityCompanyInfo?.name}`
  const locale = sanitySiteSettings?.locale || 'en_US'
  const ogType = type === 'article' ? 'article' : 'website'
  const canonicalUrl = `${sanitySiteSettings?.siteUrl}${getUrl(type, slug)}`

  /**
   * Get meta tag overrides recursively, starting from global site settings
   */
  const sources = [sanitySiteSettings?.seo, props, props.seo]
  const title = getLastValidOverride(sources, 'title')
  const description = getLastValidOverride(sources, 'description')
  const image = getLastValidOverride(sources, 'image')

  const tabTitle =
    slug === sanitySiteSettings?._rawFrontpage.slug.current
      ? title
      : getTitleFromTemplate(titleTemplate, truncateString(title))

  return (
    <>
      <GatsbySeo
        title={tabTitle}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: tabTitle,
          description: description,
          type: ogType,
          locale: locale,
          images: image?.asset?.fixed && [
            {
              url: image.asset.fixed.src,
              width: image.asset.fixed.width,
              height: image.asset.fixed.height
            }
          ],
          site_name: sanityCompanyInfo?.name
        }}
        twitter={{
          handle: `@${sanityCompanyInfo?._rawSocial?.twitter.split('/').pop()}`,
          cardType: 'summary_large_image'
        }}
        facebook={{ appId: sanitySiteSettings?.facebookAppId }}
      />

      {/* Rich result for article */}
      {/* https://schema.org/LocalBusiness */}
      {type === 'article' && (
        <ArticleJsonLd
          url={canonicalUrl && canonicalUrl}
          headline={title && title}
          images={
            image?.asset?.fixed && [
              {
                '@type': 'ImageObject',
                url: image.asset.fixed.src,
                width: image.asset.fixed.width,
                height: image.asset.fixed.height
              }
            ]
          }
          datePublished={publishDate && publishDate}
          publisherName={sanityCompanyInfo?.name}
          publisherLogo="https://www.example.com/photos/logo.jpg"
          authorName={authors && authors[0]?.person?.name}
          authorType="Person"
          description={description && description}
          overrides={{
            // '@type': 'BlogPosting', // set's this as a blog post.
            author: authors?.reduce((acc, author) => {
              acc.push({
                '@type': 'Person',
                name: author?.person?.name || '',
                jobTitle: author?.person?.role || '',
                image: {
                  '@type': 'ImageObject',
                  url: author?.person?.image?.asset?.url || '',
                  width:
                    author?.person?.image?.asset?.metadata?.dimensions?.width,
                  height:
                    author?.person?.image?.asset?.metadata?.dimensions?.height
                }
              })
              return acc
            }, [])
          }}
        />
      )}

      {/*
      Rich result for article.
      Only show on frontpage.
      https://schema.org/LocalBusiness
       */}
      {sanitySiteSettings._rawFrontpage.id === id && (
        <LocalBusinessJsonLd
          type="LocalBusiness"
          id={sanitySiteSettings?.siteUrl || ''}
          name={
            sanityCompanyInfo?.name ||
            sanitySiteSettings?._rawSeo?.siteName ||
            ''
          }
          description={sanitySiteSettings?._rawSeo?.description}
          url={canonicalUrl}
          telephone={sanityCompanyInfo?.phone || ''}
          address={{
            streetAddress: sanityCompanyInfo?._rawAddress?.streetAddress || '',
            addressLocality: sanityCompanyInfo?._rawAddress?.city || '',
            addressRegion: sanityCompanyInfo?._rawAddress?.region || '',
            postalCode: sanityCompanyInfo?._rawAddress?.postCode || '',
            addressCountry: sanityCompanyInfo?._rawAddress?.country || ''
          }}
          geo={{
            latitude: sanityCompanyInfo?.lat || '',
            longitude: sanityCompanyInfo?.lng || ''
          }}
          images={[
            {
              '@type': 'ImageObject',
              url: sanitySiteSettings?.seo?.image?.asset?.fixed?.src,
              width: sanitySiteSettings?.seo?.image?.asset?.fixed?.width,
              height: sanitySiteSettings?.seo?.image?.asset?.fixed?.height
            }
          ]}
        />
      )}
      <Helmet>
        <html lang={locale.includes('_') ? locale.split('_')[0] : locale} />
      </Helmet>
    </>
  )
}

export default SEO

const query = graphql`
  {
    sanityCompanyInfo {
      _rawOffices(resolveReferences: { maxDepth: 10 })
      _rawSocial(resolveReferences: { maxDepth: 10 })
      _rawAddress(resolveReferences: { maxDepth: 10 })
      email
      name
      phone
      lng
      lat
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
