import React, { useLayoutEffect, useState, useRef } from 'react'
import { Controller } from 'react-hook-form'

import { FormBlock, StyledCheckbox, FormLabel, FormFeedBack } from './Form'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { nanoid } from 'nanoid' // using nanoid because it's faster and smaller than uuid

const Checkbox = ({
  name,
  error,
  register,
  rules,
  control,
  children,
  defaultValue,
  ...inputProps
}) => {
  const [htmlforId] = useState(`${name}-${nanoid(10)}`)
  const [path, setPath] = useState(null)
  const pathRef = useRef(null)
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])

  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      rules={rules}
      render={({ onChange, onBlur, value }) => (
        <FormBlock>
          <StyledCheckbox>
            <input
              type="checkbox"
              onChange={e => onChange(e.target.checked)}
              onBlur={onBlur}
              {...inputProps}
              checked={value}
              aria-invalid={error ? 'true' : 'false'}
              id={htmlforId}
            />
            <FormLabel htmlFor={htmlforId}>
              <svg
                tabIndex="0"
                className="icon"
                viewBox="0 0 100 100"
                overflow="visible"
              >
                <rect x="10" y="10" width="90" height="90" fill="white" />
                <motion.path
                  ref={pathRef}
                  d="M30 30 L50 60 L100 0"
                  stroke="black"
                  strokeWidth="3"
                  fill="none"
                  animate={value ? { pathLength: 1 } : { pathLength: 0 }}
                  style={{ pathLength, opacity }}
                />
              </svg>
              {children}
            </FormLabel>
          </StyledCheckbox>
          {error && <FormFeedBack>{error.message}</FormFeedBack>}
        </FormBlock>
      )}
    />
  )
}

export default Checkbox
