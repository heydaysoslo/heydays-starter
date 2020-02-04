import React, { useState, useEffect, useRef } from 'react'

import { setOverflowHidden } from '../utils/helpers'
import Portal from './Portal'
import { Button } from './elements'

export default function Modal({
  buttonText,
  buttonType,
  children,
  hideClose,
  contentMaxWidth,
  link,
  backdrop,
  animationWrapper
}) {
  const [open, setOpen] = useState(false)
  const content = useRef(null)

  useEffect(() => {
    setOverflowHidden(open)
  }, [open])

  const outsideClick = event => {
    if (content && content.current && !content.current.contains(event.target)) {
      setOpen(false)
    }
  }

  const Trigger = link ? 'a' : Button
  const TriggerProps = link
    ? {}
    : { variant: buttonType ? buttonType : 'primary' }

  // Bring your own animation handling component
  const AnimationWrapper = animationWrapper ? animationWrapper : 'div'

  return (
    <>
      <Trigger {...TriggerProps} onClick={() => setOpen(!open)}>
        {buttonText}
      </Trigger>
      <Portal>
        <AnimationWrapper
          trigger={open}
          style={animationWrapper ? {} : { display: open ? 'block' : 'none' }}
        >
          <div
            role="button"
            tabIndex="0"
            onClick={outsideClick}
            onKeyDown={outsideClick}
            className="Modal"
          >
            <div
              className="Modal__backdrop"
              style={backdrop && { backgroundColor: backdrop }}
            />
            <div className="Modal__container">
              <div
                ref={content}
                style={
                  contentMaxWidth && {
                    maxWidth: contentMaxWidth,
                    width: '100%'
                  }
                }
                className="Modal__content"
              >
                {children({
                  close: () => setOpen(false),
                  isOpen: open
                })}
              </div>
            </div>
            {!hideClose && (
              <Button
                variant="link"
                className="Modal__close"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            )}
          </div>
        </AnimationWrapper>
      </Portal>
    </>
  )
}
