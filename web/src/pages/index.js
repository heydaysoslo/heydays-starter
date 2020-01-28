import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Page from '../components/pages/Page'

const FrontPage = props => {
  const { data } = props
  const page = data?.sanitySiteSettings?.frontpage
  return (
    <Layout {...page}>
      <Page {...page} />
    </Layout>
  )
}

export default FrontPage

export const query = graphql`
  {
    sanitySiteSettings(_id: { eq: "ead4f570-86ae-4de0-9ac5-58e07045e861" }) {
      frontpage {
        ...Page
      }
    }
  }
`
