import React from 'react'

import AspectContainer from './AspectContainer'
import LinkResolver from './LinkResolver'
import SanityImage from './editor/SanityImage'
import Editor from './editor/Editor'
import InView from './InView'
import styled, { css } from 'styled-components'
import { spacing } from '../styles/utilities'
import { H3 } from './elements'

const Card = ({ className, title, image, excerpt, link }) => (
  <InView className={className} activeClassName="is-visible">
    <LinkResolver data={link}>
      <div className="media">
        {image ? (
          <SanityImage node={image} aspectRatio="portrait" />
        ) : (
          <AspectContainer
            aspect={{
              xs: 'portrait'
            }}
          />
        )}
      </div>
      {title && <H3 className="title">{title}</H3>}
      {excerpt && (
        <div className="excerpt">
          <Editor blocks={excerpt} />
        </div>
      )}
    </LinkResolver>
  </InView>
)

export default styled(Card)(
  ({ theme }) => css`
    /* transition: opacity $trans, transform $trans; */
    opacity: 0;
    transform: translateY(50px);

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .media {
      background: #f1f1f1;
    }

    .title,
    .excerpt {
      ${spacing.sm('mt')}
    }
  `
)
