import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  trigger: boolean
  className?: string
}

const FadeIn: React.FC<Props> = ({ className, children, trigger }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      animate={trigger ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

export default styled(FadeIn)(({ theme }) => css``)
