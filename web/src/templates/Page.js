import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { TemplateResolver } from '../components/resolvers'

/**
 * Passing variables into query
 *
 * https://graphql.org/learn/queries/#variables
 *
 * The ID comes from gatsby-config where the context.id is passed in
 *
 */

const PageTemplate = props => {
  const { data } = props
  const page = data && data?.page

  return (
    page && (
      <Layout {...page}>
        <TemplateResolver data={page} />
      </Layout>
    )
  )
}

export default PageTemplate

export const query = graphql`
  query PageQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      ...Page
    }
  }
  fragment Page on SanityPage {
    _key
    title
    _type
    template
    _rawSlug(resolveReferences: { maxDepth: 20 })
    pagebuilder: _rawPagebuilder(resolveReferences: { maxDepth: 20 })
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
