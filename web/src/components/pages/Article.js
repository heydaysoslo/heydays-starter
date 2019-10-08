import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { getReadTime } from '../../utils/sanityHelpers'
import Editor from '../editor/Editor'
import SanityImage from '../editor/SanityImage'
import Container from '../Container'
import Grid, { GridItem } from '../Grid'
import Share from '../Share'
import Card from '../Card'
import LinkResolver from '../LinkResolver'

const Article = ({
  _id,
  title,
  _rawBody,
  _rawMainImage,
  _rawAuthors,
  _rawCategory,
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
        <Grid reverse={{ md: true }}>
          <GridItem span={{ md: 3 }}>
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
            {_rawCategory && (
              <ul>
                {_rawCategory.map(cat => (
                  <li>
                    <LinkResolver data={cat.category}>
                      {cat.category.title}
                    </LinkResolver>
                  </li>
                ))}
              </ul>
            )}
            <Share type={_type} slug={slug.current} />
          </GridItem>
          <GridItem span={{ sm: 12, md: 9 }}>
            <header className="Article__header">
              {title && <h1 className="Article__title">{title}</h1>}
              {_rawMainImage && (
                <div className="Article__image">
                  <SanityImage node={_rawMainImage} />
                </div>
              )}
            </header>
            {_rawBody && (
              <div className="Article__content">
                <Editor blocks={_rawBody} />
              </div>
            )}
          </GridItem>
        </Grid>
        {currentArticles && (
          <section className="Article__latest">
            <Grid columns={{ sm: 2 }}>
              {currentArticles.map(article => (
                <Card
                  key={article?._key}
                  title={article.title}
                  image={article._rawMainImage}
                  excerpt={article._rawExcerpt}
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
        ...ArticleCard
      }
    }
  }
`
