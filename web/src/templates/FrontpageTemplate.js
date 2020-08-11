import React from 'react'
import { graphql } from 'gatsby'

import { TemplateResolver } from '../components/resolvers'

const FrontpageTemplate = props => {
  const { data } = props
  const page = data?.sanityFrontpage
  console.log('page', page)
  return <TemplateResolver page={page} />
}

export default FrontpageTemplate

export const frontpageQuery = graphql`
  query frontpageQuery($id: String!) {
    sanityFrontpage(id: { eq: $id }) {
      _id
      _key
      title
      _type
      template
      pagebuilder: _rawPagebuilder(resolveReferences: { maxDepth: 20 })
      seo {
        ...SEO
      }
    }
  }
`
