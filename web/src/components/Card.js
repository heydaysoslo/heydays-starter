import React from 'react'
import { AspectContainer } from 'gatsby-theme-heydays'
import LinkResolver from './LinkResolver'
import SanityImage from './editor/SanityImage'

const Card = ({ content = null }) => {
  const title = content?.cardOverride?.title || content?.content?.title
  const image = content?.cardOverride?.image || content?.content?.mainImage
  return (
    <div className="Card">
      <LinkResolver data={content?.cardOverride?.link || content?.content}>
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
      </LinkResolver>
    </div>
  )
}

export default Card
