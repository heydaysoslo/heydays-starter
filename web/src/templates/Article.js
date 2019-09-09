import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Article from '../components/pages/Article'

const NewsTemplate = props => {
  const { data } = props
  const article = data && data.article

  return (
    article && (
      <Layout {...article}>
        <Article {...article} />
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
    _id
    _key
    _type
    slug {
      current
    }
    title
    publishDate(formatString: "dddd.MMMM-YY", locale: "nb_NO")
    _rawSlug(resolveReferences: { maxDepth: 20 })
    _rawExcerpt(resolveReferences: { maxDepth: 20 })
    _rawBody(resolveReferences: { maxDepth: 20 })
    _rawMainImage(resolveReferences: { maxDepth: 20 })
    _rawAuthors(resolveReferences: { maxDepth: 20 })
    _rawPagebuilder(resolveReferences: { maxDepth: 20 })
    seo {
      title
      description
      image {
        asset {
          fixed(width: 1200, height: 630) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`
