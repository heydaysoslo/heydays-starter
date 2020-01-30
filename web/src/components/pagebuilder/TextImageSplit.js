import React from 'react'
import Grid from '../Grid'

import SanityImage from '../editor/SanityImage'
import Editor from '../editor/Editor'
import ButtonResolver from '../ButtonResolver'
import { H3, Button } from '../elements'

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
          modifiers={button?.type && button?.type}
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
      <Grid.Item>
        <Content {...props} />
      </Grid.Item>
      <Grid.Item>
        <SanityImage
          className="TextImageSplit__image"
          node={image}
          aspect={aspect}
        />
      </Grid.Item>
    </Grid>
  )
}

export default TextImageSplit
