import React from 'react'

const CarouselItem = ({ flkty, index, children }) => {
  const handleClick = () => {
    setTimeout(() => {
      flkty.reposition()
      flkty.select(index)
    }, 0)
  }
  return (
    <div className="Carousel__item" onClick={handleClick}>
      {children}
    </div>
  )
}

export default CarouselItem
