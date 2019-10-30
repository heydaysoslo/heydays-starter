import React, { useEffect } from 'react'
import { motion, useMotionValue, transform } from 'framer-motion'

const Counter = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const opacity = useMotionValue(1)

  useEffect(() => {
    function updateOpacity() {
      const maxXY = Math.max(x.get(), y.get())
      const newOpacity = transform(maxXY, [0, 100], [1, 0])
      opacity.set(newOpacity)
    }

    const unsubscribeX = x.onChange(updateOpacity)
    const unsubscribeY = y.onChange(updateOpacity)

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [])

  return <motion.div style={{ x }}>hello {opacity.get()}</motion.div>
}

export default Counter
