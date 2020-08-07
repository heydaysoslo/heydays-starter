import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { FormBlock, FormFeedBack, StyledInput } from './Form'
import { easings } from '../../../utils/animation'

const StyledLine = styled.div(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    overflow: hidden;
    .line {
      display: block;
      height: 1px;
      width: 100%;
      background-color: white;

      &--error {
        position: absolute;
        top: 0;
        left: 0;
        background-color: red;
      }
    }
  `
)

const Line = ({ error }) => {
  return (
    <StyledLine>
      <div className="line"></div>
      <motion.div
        transition={easings.default}
        initial={{ x: '-100%' }}
        animate={error ? { x: 0 } : { x: '-100%' }}
        className="line line--error"
      />
    </StyledLine>
  )
}

const Input = ({ error, register, rules, ...inputProps }) => {
  return (
    <FormBlock>
      <StyledInput as="input" ref={register(rules)} {...inputProps} />
      <Line error={error} />
      {error && <FormFeedBack>{error.message}</FormFeedBack>}
    </FormBlock>
  )
}

export default Input
