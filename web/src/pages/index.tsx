import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Page from '../components/pages/Page'
import Typescript from '../components/Typescript'

const FrontPage = props => {
  const { data } = props
  const page = data?.sanitySiteSettings?.frontpage
  return (
    <Layout {...page}>
      <Typescript name="hello" />
      <Page {...page} />
    </Layout>
  )
}

export default FrontPage

export const query = graphql`
  {
    sanitySiteSettings(id: { eq: "0f217bb5-f7f6-5420-b7c6-58db2c12b8c7" }) {
      frontpage {
        ...Page
      }
    }
  }
`
