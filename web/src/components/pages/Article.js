import React from 'react'
import Editor from '../editor/Editor'
import SanityImage from '../editor/SanityImage'
import { getReadTime, GridItem, Grid, Container } from 'gatsby-theme-heydays'
import Share from '../Share'

const Article = ({
  title,
  _rawBody,
  _rawMainImage,
  _rawAuthors,
  publishDate,
  _type,
  slug,
  ...props
}) => {
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
      </article>
    </Container>
  )
}

export default Article
