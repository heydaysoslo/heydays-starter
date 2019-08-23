import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Page from '../components/pages/Page'
import ContactPage from '../components/pages/ContactPage'

/**
 * Passing variables into query
 *
 * https://graphql.org/learn/queries/#variables
 *
 * The ID comes from gatsby-config where the context.id is passed in
 *
 */

const templates = {
  frontpage: Page,
  contact: ContactPage,
  default: Page
}

const PageTemplate = props => {
  const { data } = props
  const page = data && data.page

  // if (!templates[page.template]) {
  //   console.warn(
  //     `No template component found in Page.js for ${page.title} ${page.id}`
  //   )
  // }

  let Component = page.template ? templates[page.template] : templates.default
  return (
    page && (
      <Layout {...page}>
        <Component {...page} />
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
    template
    _rawSlug(resolveReferences: { maxDepth: 20 })
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
