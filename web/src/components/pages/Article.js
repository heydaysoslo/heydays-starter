import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { getReadTime } from '../../utils/sanityHelpers'
import Editor from '../editor'
import SanityImage from '../editor/SanityImage'
import { Grid, GridItem, Container, Card } from '../elements'
import Share from '../Share'
import PageBuilder from '../pagebuilder/Pagebuilder'

const Article = ({
  _id,
  title,
  body,
  mainImage,
  authors,
  publishDate,
  _type,
  slug,
  pagebuilder,
  ...props
}) => {
  const data = useStaticQuery(query)
  const latestArticles = data?.allSanityArticle?.nodes
  const [currentArticles, setCurrentArticles] = useState([])

  useEffect(() => {
    if (latestArticles) {
      setCurrentArticles(latestArticles.filter(article => article._id !== _id))
    }
  }, [latestArticles, setCurrentArticles, _id])

  return (
    <Container>
      <article className="Article">
        <Grid reverse={{ md: true }}>
          <GridItem span={{ md: 3 }}>
            {body && `Read time: ${getReadTime(body)}min`}
            {publishDate && <p className="Article__date">{publishDate}</p>}
            {authors &&
              authors.map(author => (
                <div className="Author" key={author._key}>
                  {author?.person?.image && (
                    <div className="Author__image">
                      <SanityImage
                        node={author.person.image}
                        aspectRatio="square"
                      />
                    </div>
                  )}
                  {author?.person?.name && (
                    <h3 className="Author__title">{author.person.name}</h3>
                  )}
                </div>
              ))}
            {slug && slug.current && <Share type={_type} slug={slug.current} />}
          </GridItem>
          <GridItem span={{ sm: 12, md: 9 }}>
            <header className="Article__header">
              {title && <h1 className="Article__title">{title}</h1>}
              {mainImage && (
                <div className="Article__image">
                  <SanityImage node={mainImage} />
                </div>
              )}
            </header>
            {body && (
              <div className="Article__content">
                <Editor blocks={body} />
              </div>
            )}
          </GridItem>
        </Grid>
        {pagebuilder?.sections && (
          <PageBuilder sections={pagebuilder.sections} />
        )}
        {currentArticles && (
          <section className="Article__latest">
            <Grid columns={{ sm: 2 }}>
              {currentArticles.map(article => (
                <Card
                  key={article?._key}
                  title={article.title}
                  image={article.mainImage}
                  excerpt={article.excerpt}
                  link={article}
                />
              ))}
            </Grid>
          </section>
        )}
      </article>
    </Container>
  )
}

export default Article

export const query = graphql`
  {
    allSanityArticle(limit: 4) {
      nodes {
        _id
        _key
        title
        mainImage: _rawMainImage(resolveReferences: { maxDepth: 10 })
        excerpt: _rawExcerpt(resolveReferences: { maxDepth: 10 })
        ...Link
      }
    }
  }
`
