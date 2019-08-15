import React from 'react'
import { CSSTransition } from 'react-transition-group'

const FadeIn = ({ trigger, children }) => {
  return (
    <CSSTransition in={trigger} timeout={500} classNames="FadeIn">
      <div className="FadeIn">{children}</div>
    </CSSTransition>
  )
}

export default FadeIn
