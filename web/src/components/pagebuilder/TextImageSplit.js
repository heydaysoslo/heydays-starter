import React from 'react'

import SanityImage from '../editor/SanityImage'
import Editor from '../editor/'
import { ButtonResolver } from '../resolvers'
import { H3, Button, Grid } from '../elements'

const Content = ({ title, content, button }) => {
  return (
    <>
      {title && <H3>{title}</H3>}
      {content && (
        <Editor className="TextImageSplit__content" blocks={content} />
      )}
      {button?.link && (
        <Button
          as={ButtonResolver}
          modifiers={button?.type && button.type}
          className="TextImageSplit__button"
          button={button}
        />
      )}
    </>
  )
}

const TextImageSplit = ({
  textOnTheRight = false,
  image,
  aspect,
  ...props
}) => {
  return (
    <Grid reverse={textOnTheRight} columns={{ sm: 2 }} align="center">
      <Content {...props} />
      <SanityImage
        className="TextImageSplit__image"
        node={image}
        aspect={aspect}
      />
    </Grid>
  )
}

export default TextImageSplit
