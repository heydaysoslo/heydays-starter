import React from 'react'
import SanityImage from '../editor/SanityImage'

const FullImageSection = ({ image, aspect }) => {
  return (
    <div className="FullImageSection">
      <SanityImage node={image} aspectRatio={aspect} />
    </div>
  )
}

export default FullImageSection
