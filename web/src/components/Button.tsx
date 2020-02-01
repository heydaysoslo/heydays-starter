import React from 'react'
import cc from 'classcat'

type Props = {
  variant?: string
  className?: string
  onClick?: () => void
  type?: 'submit' | 'button'
  id?: string
  disabled?: boolean
}

const Button: React.FC<Props> = ({
  variant,
  className,
  onClick,
  type,
  id,
  disabled,
  children
}) => {
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
      {children}
    </button>
  )
}

export default Button
