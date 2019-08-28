import React from 'react'
import Pagebuilder from '../pagebuilder/Pagebuilder'
import { graphql, useStaticQuery } from 'gatsby'
import { Grid, GridItem } from 'gatsby-theme-heydays'
import Card from '../Card'

const NewsPage = ({ title, content, _rawPagebuilder, ...props }) => {
  const data = useStaticQuery(query)
  const articles = data?.allSanityArticleOrder?.nodes[0]?.articles
  return (
    <div className="Page">
      {title && <h1>{title}</h1>}
      {articles && (
        <Grid>
          {articles.map(
            article =>
              article && (
                <GridItem key={article.id}>
                  <Card
                    title={article.title}
                    image={article._rawMainImage}
                    excerpt={article._rawExcerpt}
                    link={article}
                  />
                </GridItem>
              )
          )}
        </Grid>
      )}
      {_rawPagebuilder?.sections && (
        <Pagebuilder sections={_rawPagebuilder.sections} />
      )}
    </div>
  )
}

export default NewsPage

export const query = graphql`
  {
    allSanityArticleOrder {
      nodes {
        articles {
          title
          isFeatured
          _updatedAt
          _rawMainImage(resolveReferences: { maxDepth: 10 })
          _rawExcerpt(resolveReferences: { maxDepth: 10 })
          _rawBody(resolveReferences: { maxDepth: 10 })
          ...Link
        }
      }
    }
  }
`
