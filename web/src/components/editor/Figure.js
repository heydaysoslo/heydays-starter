import React from 'react'
import SanityImage from './SanityImage'

const Figure = ({ node, aspectRatio }) => {
  return (
    <figure className="Figure">
      <SanityImage key={node.asset?.id} node={node} aspectRatio={aspectRatio} />
      {node.caption && (
        <figcaption className="Figure__caption">{node.caption}</figcaption>
      )}
    </figure>
  )
}

export default Figure
