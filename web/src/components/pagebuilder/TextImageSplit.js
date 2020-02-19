import React from 'react'

import SanityImage from '../editor/SanityImage'
import Editor from '../editor/'
import { ButtonResolver } from '../resolvers'
import { H3, Button, Grid } from '../elements'
import styled, { css } from 'styled-components'
import { spacing } from '../../styles/utilities'

const TextImageSplit = ({
  textOnTheRight = false,
  image,
  aspect,
  button,
  title,
  content,
  className
}) => {
  if (!image && !title) return null
  return (
    <div className={className}>
      <Grid
        reverse={textOnTheRight}
        columns={{ sm: 2 }}
        gap={true}
        align="center"
      >
        <div className="content">
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
        </div>
        <div className="image">
          <SanityImage
            className="TextImageSplit__image"
            node={image}
            aspectRatio={aspect}
          />
        </div>
      </Grid>
    </div>
  )
}

export default styled(TextImageSplit)(
  ({ theme }) => css`
    ${spacing.section('my')}
    .TextImageSplit__content {
      ${spacing.sm('mt')}
    }
    .TextImageSplit__button {
      ${spacing.sm('mt')}
    }
  `
)
