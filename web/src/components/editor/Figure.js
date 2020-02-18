import React from 'react'
import SanityImage from './SanityImage'
import styled, { css } from 'styled-components'
import { LightgalleryItem } from 'react-lightgallery'

const Figure = ({ node, aspectRatio, className }) => {
  if (!node?.asset) return null
  console.log(node?.asset)
  return (
    <figure className={className}>
      {node?.asset?.url && (
        <LightgalleryItem src={node.asset.url} group="article">
          <SanityImage
            key={node.asset.id}
            node={node}
            aspectRatio={aspectRatio}
          />
        </LightgalleryItem>
      )}
      {node.caption && (
        <figcaption className="Figure__caption">{node.caption}</figcaption>
      )}
    </figure>
  )
}

export default styled(Figure)(
  ({ theme }) => css`
    width: 100%;
    max-width: 100%;
  `
)
