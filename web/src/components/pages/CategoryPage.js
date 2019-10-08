import React from 'react'

import Card from '../Card'
import Grid from '../Grid'
import Container from '../Container'

const CategoryPage = ({ title, articles }) => {
  return (
    <div className="Page CategoryPage">
      {title && (
        <header className="Page__header">
          <Container>
            <h1 className="Page__title">Category: {title}</h1>
          </Container>
        </header>
      )}
      <Container>
        {articles?.nodes?.length > 0 && (
          <Grid columns={{ sm: 1, md: 3 }} margin="y">
            {articles.nodes.map(article => {
              console.log(article)
              return (
                <Card
                  key={article._key}
                  title={article.title}
                  image={article._rawMainImage}
                  excerpt={article._rawExcerpt}
                  link={article}
                />
              )
            })}
          </Grid>
        )}
        {articles.nodes.length <= 0 && <h2>No articles found</h2>}
      </Container>
    </div>
  )
}

export default CategoryPage
