import React from 'react'
import { AspectContainer } from 'gatsby-theme-heydays'
import LinkResolver from './LinkResolver'
import SanityImage from './editor/SanityImage'
import Editor from './editor/Editor'
import InView from './InView'

const Card = ({ title, image, excerpt, link }) => (
  <InView className="Card" activeClassName="Card--is-visible">
    <LinkResolver data={link}>
      {image ? (
        <SanityImage node={image} aspectRatio="portrait" />
      ) : (
        <AspectContainer
          aspect={{
            sm: 'portrait',
            md: 'portrait',
            lg: 'portrait',
            xl: 'portrait'
          }}
        />
      )}
      {title && <h3 className="Card__title">{title}</h3>}
      {excerpt && <Editor blocks={excerpt} />}
    </LinkResolver>
  </InView>
)

export default Card
