import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Page from '../components/pages/Page'

import Icon from '../components/Icon'

const FrontPage = props => {
  const { data } = props
  const page = data?.sanitySiteSettings?.frontpage
  return (
    <Layout {...page}>
      {/* <StyledSomething /> */}
      <Icon name="check" modifiers="small" />
      <Icon name="config" />
      <Icon name="calendar" modifiers="large" />
      <Icon name="hakuna" modifiers="large" />
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
