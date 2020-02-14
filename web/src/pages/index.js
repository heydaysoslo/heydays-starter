import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Page from '../components/pages/Page'

const FrontPage = props => {
  const { data } = props
  const page = data?.sanitySiteSettings?.frontpage
  if (!page) return <h1>Forsiden mangler</h1>
  return (
    <Layout {...page}>
      <Page {...page} />
    </Layout>
  )
}

export default FrontPage

export const query = graphql`
  {
    sanitySiteSettings {
      frontpage {
        ...Page
      }
    }
  }
`
