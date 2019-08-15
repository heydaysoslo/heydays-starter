import React from 'react'
import { Image, AspectContainer } from 'gatsby-theme-heydays'
import LinkResolver from './LinkResolver'

const Card = ({ content = null }) => {
  const title = content?.cardOverride?.title || content?.content?.title
  const image =
    content?.cardOverride?.image?.asset || content?.content?.mainImage?.asset
  return (
    <div className="Card">
      <LinkResolver data={content?.cardOverride?.link || content?.content}>
        {image ? (
          <Image data={image} aspect="portrait" />
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
