import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { sanity } from '../../../heydays-config'

import { getAspectRatio, fillMissingAspects } from '../../utils/aspect'

import { useMediaQuery } from '../hooks'

const SanityImage = ({ node, maxWidth = 1440, aspectRatio }) => {
  if (!node?.asset) {
    return null
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref || node.asset.id,
    { maxWidth },
    sanity
  )

  // Add aspect ratio to non responsive aspects
  let newFluidProps = fluidProps
  if (
    aspectRatio &&
    typeof aspectRatio === 'string' &&
    aspectRatio !== 'original'
  ) {
    newFluidProps = Object.assign(
      {},
      {
        ...fluidProps,
        aspectRatio: getAspectRatio(aspectRatio)
      }
    )
  }

  return typeof aspectRatio === 'object' ? (
    <SanityImageResonsiveAspect
      node={node}
      fluidProps={fluidProps}
      aspectRatio={aspectRatio}
    />
  ) : (
    <Img key={node.asset?.id} fluid={newFluidProps} alt={node.alt} />
  )
}

const SanityImageResonsiveAspect = ({ node, aspectRatio, fluidProps }) => {
  const activeMediaQuery = useMediaQuery()
  const [fluid, setFluid] = useState({})

  // Init aspect ratio
  useEffect(() => {
    // state does not update fast enough
    const newAspectRatios = fillMissingAspects(aspectRatio)
    setFluid({
      ...fluidProps,
      aspectRatio: getAspectRatio(newAspectRatios[activeMediaQuery])
    })
  }, [fluidProps, activeMediaQuery, aspectRatio])

  return fluid && <Img key={node.asset?.id} fluid={fluid} alt={node.alt} />
}

export default SanityImage
