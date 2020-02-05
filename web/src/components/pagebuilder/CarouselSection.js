import React from 'react'
import Carousel from '../elements/Carousel'
import SanityImage from '../editor/SanityImage'

const CarouselSection = ({ images }) => {
  if (!images) return null
  return (
    <div className="CarouselSection">
      <Carousel>
        {images.map(image => (
          <div className="Carousel__item" key={image._key}>
            <SanityImage node={image} aspectRatio="landscape" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselSection
