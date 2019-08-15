import React, { useEffect, useRef, useState } from 'react'
import cc from 'classcat'
import useMediaQuery from './useMediaQuery'
import useWindowSize from './useWindowSize'

const AspectContainer = ({
  aspect,
  background,
  className,
  contentClass,
  children
}) => {
  const windowSize = useWindowSize({ debounce: 250 })
  const activeMediaQuery = useMediaQuery()
  const [aspectClass, setAspectClass] = useState('portrait')

  const wrapper = useRef(null)
  const content = useRef(null)

  const handleResize = () => {
    if (content.current && wrapper.current) {
      const height = content.current.getBoundingClientRect().height
      wrapper.current.style.cssText = 'min-height:' + height + 'px'
    }
  }

  const getAspectClass = mq => {
    const aspectKeys = Object.keys(aspect)
    const lastAspect = aspectKeys[aspectKeys.length - 1]
    return aspect[mq] ? aspect[mq] : aspect[lastAspect]
  }

  const handleMediaQuery = () => {
    const key = getAspectClass(activeMediaQuery)
    setAspectClass(key)
  }

  useEffect(handleResize, [windowSize])
  useEffect(handleMediaQuery, [activeMediaQuery])

  return (
    <div
      ref={wrapper}
      className={cc({
        AspectContainer: true,
        ['AspectContainer__' + aspectClass]: aspectClass,
        [className]: className
      })}
    >
      {background && (
        <div className="AspectContainer__background">{background}</div>
      )}
      <div
        className={cc({
          AspectContainer__container: true,
          [contentClass]: contentClass
        })}
      >
        <div ref={content} className="AspectContainer__content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AspectContainer
