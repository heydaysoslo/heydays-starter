import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FrontPage from '../components/pages/FrontPage'

const Index = props => {
  const { data } = props
  const page = data?.sanityFrontpage
  if (!page) return <h1>Forsiden mangler</h1>
  return (
    <Layout {...page}>
      <FrontPage {...page} />
    </Layout>
  )
}

export default Index

export const query = graphql`
  {
    sanityFrontpage(_id: { eq: "frontpage" }) {
      id
      _id
      _key
      title
      _type
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
  }
`
