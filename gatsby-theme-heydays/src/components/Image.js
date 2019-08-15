import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image'
import useMediaQuery from './useMediaQuery'

import { breakpoints } from './useMediaQuery'

/**
 * Possible data from Sanity
 * https://www.sanity.io/docs/image-type
 *
 * Do the query in your container and pass the image as props.
 * The component will determine if the image is fixed or fluid
 * https://github.com/sanity-io/gatsby-source-sanity#basic-usage
 *
 *
 * Example usage:
 * <Image data={person.node.image} aspect="landscape" />
 * <Image data={person.node.image} aspect={'16:9' || 1.5} />
 * <Image data={person.node.image} aspect={{sm: 'landscape', lg:'portait'}} />
 * <Image data={person.node.image} aspect={{sm: 'landscape', lg:'original'}} />
 */

//  Calculated with https://andrew.hedges.name/experiments/aspect_ratio/
const aspectRatios = {
  original: 'original',
  landscape: '3:2',
  portrait: '6:7',
  square: '1:1',
  widescreen: '16:9',
  panorama: '16:11'
}

const fillMissingKeys = obj => {
  let lastAspect = null
  let result = {}
  Object.keys(breakpoints).forEach(key => {
    if (obj[key]) {
      result[key] = obj[key]
      lastAspect = obj[key]
    } else {
      result[key] = lastAspect
    }
  })
  // console.log('FILLMISSING RESULT', result)
  return result
}

const checkAspectProp = aspect => {
  if (typeof aspect === 'object') {
    Object.keys(aspect).forEach(key => {
      if (!aspectRatios[aspect[key]]) {
        throw new Error(`😢 aspect prop ${aspect[key]} is not supported`)
      }
    })
  }

  if (
    typeof aspect === 'string' &&
    !aspect.includes(':') &&
    !aspectRatios[aspect]
  ) {
    throw new Error(`😢 aspect prop ${aspect} is not supported`)
  }
}

export default props => {
  const { data, aspect } = props
  const [img, setImg] = useState({})
  const activeMediaQuery = useMediaQuery()

  if (data.asset && data.asset.fixed)
    return <Img fixed={data.asset.fixed} alt={data.alt || ''} />

  // Check for errors
  checkAspectProp(aspect)

  const asset = data && data.fluid && data.fluid

  // console.log('asset', asset)

  useEffect(() => {
    const getAspectNumber = aspectString => {
      // Use fluid if string is original
      if (aspectString === 'original') {
        setImg(asset)
      } else {
        const [width, height] = aspectString.split(':')

        setImg(
          Object.assign(
            {},
            {
              ...asset,
              aspectRatio: width / height
            }
          )
        )
      }
    }
    const handleAspect = aspect => {
      if (typeof aspect === 'number') {
        setImg(
          Object.assign(
            {},
            {
              ...asset,
              aspectRatio: aspect
            }
          )
        )
      }

      if (typeof aspect === 'object') {
        const newAspect = fillMissingKeys(aspect)
        if (newAspect[activeMediaQuery]) {
          return getAspectNumber(aspectRatios[newAspect[activeMediaQuery]])
        }
      }

      if (typeof aspect === 'string') {
        // console.log('aspect string', aspect)
        if (aspect.includes(':')) {
          getAspectNumber(aspect)
        } else {
          return getAspectNumber(aspectRatios[aspect])
        }
      }
    }
    if (aspect && activeMediaQuery) {
      handleAspect(aspect)
    } else {
      setImg(asset)
    }
  }, [activeMediaQuery, aspect, asset])

  if (img && !img.hasOwnProperty('aspectRatio')) return null

  return (
    // <AspectContainer
    //   aspect={{ sm: 'widescreen', md: 'widescreen', lg: 'widescreen' }}
    // >
    //   <BackgroundImage
    //     key={`figure-${img.base64}`}
    //     style={{ backgroundSize: 'cover', height: '100vh' }}
    //     fluid={img}
    //     alt={data.alt || ''}
    //   />
    // </AspectContainer>
    <Img key={`figure-${img.base64}`} fluid={img} alt={data.alt || ''} />
  )
}
