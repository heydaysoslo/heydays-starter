import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CategoryPage from '../components/pages/CategoryPage'

const CategoryTemplate = props => {
  const { data } = props
  const category = data && data.category
  const articles = data?.articles

  return (
    category && (
      <Layout {...category}>
        <CategoryPage {...category} articles={articles} />
      </Layout>
    )
  )
}

export default CategoryTemplate

export const query = graphql`
  query CategoryQuery($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      ...Category
    }
    articles: allSanityArticle(
      filter: { category: { elemMatch: { category: { id: { eq: $id } } } } }
    ) {
      nodes {
        ...ArticleCard
      }
    }
  }
  fragment Category on SanityCategory {
    id
    _id
    _key
    _rawBody(resolveReferences: { maxDepth: 10 })
    _rawMainImage
    _rawSeo
    _rawSlug
    title
  }
`
