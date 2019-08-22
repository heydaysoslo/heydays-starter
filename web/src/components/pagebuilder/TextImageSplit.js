import React from 'react'
import { Grid, GridItem } from 'gatsby-theme-heydays'

import SanityImage from '../editor/SanityImage'
import LinkResolver from '../LinkResolver'
import Editor from '../editor/Editor'

const Content = ({ title, content, cta }) => {
  return (
    <>
      {title && <h3 className="TextImageSplit__title">{title}</h3>}
      {content && (
        <Editor className="TextImageSplit__content" blocks={content} />
      )}
      {(cta?.title || cta?.link?.title) && (cta?.url || cta?.link) && (
        <LinkResolver
          className="TextImageSplit__cta button"
          data={cta.url || cta.link}
        >
          {cta?.title || cta?.link?.title}
        </LinkResolver>
      )}
    </>
  )
}

const TextImageSplit = ({ textOnTheRight, image, aspect, ...props }) => {
  return (
    <div className="TextImageSplit">
      <Grid align="middle">
        <GridItem sm={6} md={6} lg={6} xl={6} xxl={6}>
          {!textOnTheRight && <Content {...props} />}
          {textOnTheRight && image && (
            <SanityImage node={image} aspect={aspect} />
          )}
        </GridItem>
        <GridItem sm={6} md={6} lg={6} xl={6} xxl={6}>
          {textOnTheRight && <Content {...props} />}
          {!textOnTheRight && image && (
            <SanityImage
              className="TextImageSplit__image"
              node={image}
              aspect={aspect}
            />
          )}
        </GridItem>
      </Grid>
    </div>
  )
}

export default TextImageSplit
