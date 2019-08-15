import React from 'react'
import cc from 'classcat'

export default function Button(props) {
  const { variant, className, onClick, type, id } = props
  return (
    <button
      onClick={onClick}
      type={type && type}
      id={id && id}
      className={cc({
        Button: true,
        'Button--secondary': variant === 'secondary',
        'Button--tertiary': variant === 'tertiary',
        'Button--link': variant === 'link',
        [className]: className
      })}
    >
      {props.children}
    </button>
  )
}
