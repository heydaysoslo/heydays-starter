import React, { useState } from 'react'

import { FormBlock, StyledRadio, FormLabel, FormFeedBack } from './Form'
import { motion } from 'framer-motion'

const Radios = ({
  options = [],
  error,
  register,
  rules = {},
  values,
  name,
  defaultValue = ''
}) => {
  const [currentChecked, setCurrentChecked] = useState(defaultValue)

  return (
    <FormBlock>
      {options.map(opt => (
        <StyledRadio key={opt.id}>
          <input
            type="radio"
            aria-invalid={error ? 'true' : 'false'}
            name={name}
            ref={register(rules)}
            onChange={() => {
              console.log('changed')
              setCurrentChecked(opt.value)
            }}
            {...opt}
          />
          <FormLabel htmlFor={opt.id}>
            <svg
              tabIndex="-1"
              className="icon"
              viewBox="0 0 100 100"
              overflow="visible"
            >
              <circle cx="50" cy="50" r="50" fill="white" />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke={error ? 'red' : 'none'}
                strokeWidth="10"
                animate={error ? { scale: 1 } : { scale: 0 }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="25"
                className="icon-selected"
                // style={{ originX: 0.5, originY: 0.5 }}
                animate={
                  currentChecked === opt.value ? { scale: 1 } : { scale: 0 }
                }
              />
            </svg>
            {opt.label}
          </FormLabel>
        </StyledRadio>
      ))}
      {error && <FormFeedBack>{error.message}</FormFeedBack>}
      {currentChecked}
    </FormBlock>
  )
}

export default Radios
