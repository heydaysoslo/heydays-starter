import React from 'react'
import Carousel from '../elements/Carousel'
import SanityImage from '../editor/SanityImage'

const CarouselSection = ({ images }) => {
  if (!images) return null
  return (
    <div className="CarouselSection">
      <Carousel>
        {images.map(image => (
          <SanityImage key={image._key} node={image} aspectRatio="landscape" />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselSection
