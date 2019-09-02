import React, { useState, useEffect } from 'react'
import Editor from '../editor/Editor'
import SanityImage from '../editor/SanityImage'
import { getReadTime, GridItem, Grid, Container } from 'gatsby-theme-heydays'
import Share from '../Share'
import { graphql, useStaticQuery } from 'gatsby'
import Card from '../Card'

const Article = ({
  _id,
  title,
  _rawBody,
  _rawMainImage,
  _rawAuthors,
  publishDate,
  _type,
  slug,
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
        <Grid>
          <GridItem sm={3} md={3} lg={3} xl={3} xxl={3}>
            {_rawBody && `Read time: ${getReadTime(_rawBody)}min`}
            {publishDate && <p className="Article__date">{publishDate}</p>}
            {_rawAuthors &&
              _rawAuthors.map(author => (
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
            <Share type={_type} slug={slug.current} />
          </GridItem>
          <GridItem sm={9} md={9} lg={9} xl={9} xxl={9}>
            <header className="Article__header">
              {title && <h1 className="Article__title">{title}</h1>}
              {_rawMainImage && <SanityImage node={_rawMainImage} />}
            </header>
            {_rawBody && <Editor blocks={_rawBody} />}
          </GridItem>
        </Grid>
        {currentArticles && (
          <section className="Article__latest">
            <Grid>
              {currentArticles.map(article => (
                <GridItem key={article?._key}>
                  <Card
                    title={article.title}
                    image={article._rawMainImage}
                    excerpt={article._rawExcerpt}
                    link={article}
                  />
                </GridItem>
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
        _rawMainImage(resolveReferences: { maxDepth: 10 })
        _rawExcerpt(resolveReferences: { maxDepth: 10 })
        ...Link
      }
    }
  }
`
