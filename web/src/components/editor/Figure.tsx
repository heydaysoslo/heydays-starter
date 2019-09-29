import React from 'react'
import SanityImage from './SanityImage'

import {SanityImageInterface} from '../../interfaces'

const Figure: React.FC<SanityImageInterface> = ({ node, aspectRatio }) => {
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
