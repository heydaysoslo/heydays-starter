import React from 'react'
import Carousel from '../Carousel'
import SanityImage from '../editor/SanityImage'
// import CarouselItem from '../CarouselItem'

const CarouselSection = ({ images }) => {
  if (!images) return null
  return (
    <div className="CarouselSection">
      <Carousel>
        {images.map(image => (
          // <CarouselItem>
          //   <SanityImage node={image} aspectRatio="landscape" />
          // </CarouselItem>
          <div className="Carousel__item" key={image._key}>
            <SanityImage node={image} aspectRatio="landscape" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselSection
