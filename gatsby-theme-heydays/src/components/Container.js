import React from 'react'
import cc from 'classcat'

const Container = ({ children, className }) => {
  return (
    <div
      className={cc({
        Container: true,
        [className]: className
      })}
    >
      {children}
    </div>
  )
}

export default Container
