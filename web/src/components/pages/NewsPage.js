import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Container from '../Container'
import Card from '../Card'
import Grid from '../Grid'

const NewsPage = ({ title, content, _rawPagebuilder, ...props }) => {
  const data = useStaticQuery(query)
  const articles = data?.allSanityArticle?.nodes

  return (
    <div className="Page">
      {title && (
        <header className="Page__header">
          <Container>
            <h1 className="Page__title">{title}</h1>
          </Container>
        </header>
      )}
      {articles && (
        <Container className="Page__content">
          <Grid margin="y" columns={{ xs: 1, sm: 2, md: 3 }}>
            {articles.map(
              article =>
                article && (
                  <div key={article.id}>
                    <Card
                      title={article.title}
                      image={article._rawMainImage}
                      excerpt={article._rawExcerpt}
                      link={article}
                    />
                  </div>
                )
            )}
          </Grid>
        </Container>
      )}
    </div>
  )
}

export default NewsPage

export const query = graphql`
  {
    allSanityArticle {
      nodes {
        ...ArticleCard
      }
    }
  }
`
