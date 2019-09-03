import React from 'react'
import Grid from '../Grid'
import GridItem from '../GridItem'

import SanityImage from '../editor/SanityImage'
import Editor from '../editor/Editor'
import ButtonResolver from '../ButtonResolver'

const Content = ({ title, content, button }) => {
  return (
    <>
      {title && <h3 className="TextImageSplit__title">{title}</h3>}
      {content && (
        <Editor className="TextImageSplit__content" blocks={content} />
      )}
      {button?.link && (
        <ButtonResolver className="TextImageSplit__button" button={button} />
      )}
    </>
  )
}

const TextImageSplit = ({ textOnTheRight, image, aspect, ...props }) => {
  return (
    <div className="TextImageSplit">
      <Grid columns={{ sm: 2 }} align="middle">
        <GridItem>
          {!textOnTheRight && <Content {...props} />}
          {textOnTheRight && image && (
            <SanityImage node={image} aspect={aspect} />
          )}
        </GridItem>
        <GridItem>
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
