import React, { FunctionComponent } from "react"
import SanityImage from "./SanityImage"
import { oc } from "ts-optchain"

import { ISanityImageInterface } from "../../interfaces"

const Figure: FunctionComponent<ISanityImageInterface> = ({
  node,
  aspectRatio,
}) => {
  if (!node) return null;
  return (
    <figure className="Figure">
      <SanityImage
        key={oc(node).asset.id()}
        node={node}
        aspectRatio={aspectRatio}
      />
      {node.caption && (
        <figcaption className="Figure__caption">{node.caption}</figcaption>
      )}
    </figure>
  )
}

export default Figure
