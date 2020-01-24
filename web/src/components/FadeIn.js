import React from 'react'
import { motion } from 'framer-motion'

const FadeIn = ({ trigger, children, className }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <motion.div
      initial="hidden"
      animate={trigger ? 'visible' : 'hidden'}
      className={className}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
