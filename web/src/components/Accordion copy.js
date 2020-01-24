/**
 * Usage:
 * <Accordion items={props.node.items} exclusive />
 * <Accordion items={props.node.items} />
 *
 * Props:
 * @prop {boolean} exclusive
 * Decides if one opens at the time or multiple opens
 *
 * @prop {number} defaultActive
 * Pass the index if you want to leave one open by default
 *
 * TODO: Allow nested accordions
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html
 */

import React, { useState, useRef } from 'react'
import cc from 'classcat'

import keyCodes from '../utils/keyCodes'
import Editor from './editor/Editor'

const Accordion = ({ items, exclusive = false, defaultActive = null }) => {
  const [active, setActive] = useState(
    exclusive ? defaultActive : [defaultActive]
  )

  // wrapper ref for accesibilty
  const wrapper = useRef()

  // return null if no array
  if (!items || (!Array.isArray(items) && items.length === 0)) return null

  const handleClick = i => {
    if (exclusive) {
      active === i ? setActive(null) : setActive(i)
    } else {
      if (active.includes(i)) {
        const newActive = [...active].filter(a => a !== i)
        setActive(newActive)
      } else {
        setActive([...active, i])
      }
    }
  }
  return (
    <div className="Accordion" ref={wrapper}>
      {items.map((item, i) => (
        <AccordionItem
          key={item._key}
          i={i}
          active={active}
          item={item}
          exclusive={exclusive}
          handleClick={handleClick}
          wrapperRef={wrapper}
        />
      ))}
    </div>
  )
}

const AccordionItem = ({
  item,
  handleClick,
  i,
  exclusive,
  active,
  wrapperRef
}) => {
  const handleKeyDown = e => {
    const { arrowDown, arrowUp, home, end } = keyCodes
    // https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html#kbd_label
    // Prevent scrolling if following keys are pressed
    if ([arrowDown, arrowUp, home, end].indexOf(e.keyCode) > -1) {
      e.preventDefault()
    }
    const refs = [...wrapperRef.current.querySelectorAll('.Accordion__trigger')]
    if (e.keyCode === arrowDown) {
      if (refs[i + 1]) {
        refs[i + 1].focus()
      } else {
        refs[0].focus()
      }
    }
    if (e.keyCode === arrowUp) {
      if (refs[i - 1]) {
        refs[i - 1].focus()
      } else {
        refs[refs.length - 1].focus()
      }
    }
    if (e.keyCode === home) {
      refs[0].focus()
    }
    if (e.keyCode === end) {
      refs[refs.length - 1].focus()
    }
  }
  return (
    <div
      className={cc({
        Accordion__item: true,
        'Accordion__item--is-active': exclusive
          ? active === i
          : active.includes(i)
      })}
    >
      <button
        className="Accordion__trigger"
        onClick={() => handleClick(i)}
        onMouseDown={e => e.preventDefault()} // To prevent focus on click but still keeps focus on tab
        onKeyDownCapture={e => handleKeyDown(e)}
        aria-expanded={
          active === i || (Array.isArray(active) && active.includes(i))
            ? 'true'
            : 'false'
        }
        aria-controls={`${item._key}-${i}`}
        id={`${i}-${item._key}`}
      >
        <h3 className="Accordion__title">{item.title}</h3>
        <div className="Accordion__icon">v</div>
      </button>
      <div
        className="Accordion__content"
        id={`${item._key}-${i}`}
        aria-labelledby={`${i}-${item._key}`}
      >
        <Editor blocks={item.content} />
      </div>
    </div>
  )
}

export default Accordion
