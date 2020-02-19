import React from 'react'
import Carousel from '../elements/Carousel'
import SanityImage from '../editor/SanityImage'

const CarouselSection = ({ images, aspectRatio = 'original' }) => {
  if (!images) return null

  return (
    <div className="CarouselSection">
      <Carousel>
        {images.map(image => (
          <SanityImage
            key={image._key}
            node={image}
            aspectRatio={aspectRatio}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselSection
