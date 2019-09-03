import React from 'react'
import cc from 'classcat'

export default function Button(props) {
  const { variant, className, onClick, type, id, disabled } = props
  return (
    <button
      disabled={disabled && disabled}
      onClick={onClick}
      type={type && type}
      id={id && id}
      className={cc({
        Button: true,
        [`Button--${variant}`]: variant,
        [className]: className
      })}
    >
      {props.children}
    </button>
  )
}
