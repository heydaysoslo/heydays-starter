import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Page from '../components/pages/Page'

/**
 * Passing variables into query
 *
 * https://graphql.org/learn/queries/#variables
 *
 * The ID comes from gatsby-config where the context.id is passed in
 *
 * _rawBody
 * https://github.com/sanity-io/gatsby-source-sanity#raw-fields
 *
 * See <Image /> for more docs on querying images
 */

export const query = graphql`
  query PageQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      _key
      title
      template
      seo {
        description
        title
        image {
          asset {
            _key
          }
        }
      }
      pagebuilder {
        ...PageBuilder
      }
    }
  }
`

const templates = {
  frontpage: Page,
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

  // let Component = page.template ? templates[page.template] : templates.default
  return (
    page && (
      <Layout {...page}>
        {/* <Component {...page} /> */}
        <Page {...page} />
      </Layout>
    )
  )
}

export default PageTemplate
