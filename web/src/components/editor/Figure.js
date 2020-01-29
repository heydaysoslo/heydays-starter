import React from 'react'
import SanityImage from './SanityImage'
import styled, { css } from 'styled-components'

const Figure = ({ node, aspectRatio, className }) => {
  if (!node || !node.asset) {
    return null
  }
  return (
    <figure className={className}>
      <SanityImage key={node.asset?.id} node={node} aspectRatio={aspectRatio} />
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
