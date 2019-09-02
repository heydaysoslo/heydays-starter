import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import cc from 'classcat'

/**
 * Usage:
 *
 * <InView
 *   className="Card"
 *   activeClassName="Card--is-visible"
 *   onInView={props => console.log(props.inView ? `I'm in view` : `I'm not in view`)}
 *   element="span"
 * >
 *   // Add children
 * </InView>
 *
 * Other resources
 * 📚Package: https://www.npmjs.com/package/react-intersection-observer
 * 🎥 With react-spring:  https://github.com/thebuilder/react-intersection-observer/blob/HEAD/docs/Recipes.md#trigger-animations
 */

const InView = ({
  children,
  className = '',
  activeClassName = '',
  threshold = 0.25,
  onInView,
  element
}) => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold,
    triggerOnce: true
  })

  useEffect(() => {
    if (onInView && typeof onInView === 'function') {
      onInView({ inView, ref, entry })
    }
  }, [onInView, inView, ref, entry])

  const Wrapper = element ? element : 'div'

  return (
    <Wrapper
      ref={ref}
      className={cc({
        [className]: className,
        [activeClassName]: inView
      })}
    >
      {children}
    </Wrapper>
  )
}

export default InView
