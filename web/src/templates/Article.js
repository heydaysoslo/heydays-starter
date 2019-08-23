import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Article from '../components/pages/Article'

const NewsTemplate = props => {
  const { data } = props
  const page = data && data.article

  return (
    page && (
      <Layout {...page}>
        <Article {...page} />
      </Layout>
    )
  )
}

export default NewsTemplate

export const query = graphql`
  query NewsQuery($id: String!) {
    article: sanityArticle(id: { eq: $id }) {
      ...Article
    }
  }
  fragment Article on SanityArticle {
    _key
    title
    _rawSlug(resolveReferences: { maxDepth: 20 })
    _rawBody(resolveReferences: { maxDepth: 20 })
    _rawMainImage(resolveReferences: { maxDepth: 10 })
    mainImage {
      asset {
        fluid(maxWidth: 1400) {
          ...GatsbySanityImageFluid
        }
      }
    }
    # _rawPagebuilder(resolveReferences: { maxDepth: 20 })
    seo {
      title
      description
    }
  }
`
