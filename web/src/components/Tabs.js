import React, { useState, useRef } from 'react'
import cc from 'classcat'

import keyCodes from '../utils/keyCodes'

import Editor from './editor/Editor'

/**
 * https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
 */

const Tabs = ({ items }) => {
  const defaultActive =
    Array.isArray(items) && items.filter(tab => tab.defaultOpen)

  const [activeTab, setActiveTab] = useState(
    defaultActive.length > 0 ? defaultActive[0] : items[0]
  )

  const wrapper = useRef()

  if (!items) return null

  const handleClick = tab => {
    setActiveTab(tab)
  }

  const handleKeyDown = (e, i) => {
    const { arrowLeft, arrowRight, home, end } = keyCodes

    if ([home, end].indexOf(e.keyCode) > -1) {
      e.preventDefault()
    }

    const refs = [...wrapper.current.querySelectorAll('.Tabs__trigger')]

    if (e.keyCode === arrowRight) {
      if (refs[i + 1]) {
        refs[i + 1].focus()
        setActiveTab(items[i + 1])
      } else {
        refs[0].focus()
        setActiveTab(items[0])
      }
    }
    if (e.keyCode === arrowLeft) {
      if (refs[i - 1]) {
        refs[i - 1].focus()
        setActiveTab(items[i - 1])
      } else {
        refs[refs.length - 1].focus()
        setActiveTab(items[refs.length - 1])
      }
    }
    if (e.keyCode === home) {
      refs[0].focus()
      setActiveTab(items[0])
    }
    if (e.keyCode === end) {
      refs[refs.length - 1].focus()
      setActiveTab(items[refs.length - 1])
    }
  }
  return (
    <div className="Tabs" ref={wrapper}>
      <div className="Tabs__triggers" role="tablist">
        {items &&
          items.map((tab, i) => {
            const isTabActive = activeTab?._key === tab._key
            return (
              <button
                key={`trigger-${tab._key}`}
                role="tab"
                aria-selected={isTabActive}
                tabIndex={!isTabActive && '-1'}
                aria-controls={tab._key}
                onKeyDownCapture={e => handleKeyDown(e, i)}
                onMouseDown={e => e.preventDefault()} // To prevent focus on click but still keeps focus on tab
                className={cc({
                  Tabs__trigger: true,
                  'Tabs__trigger--is-active': isTabActive
                })}
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </button>
            )
          })}
      </div>
      <div className="Tabs__window">
        {items &&
          items.map((tab, i) => (
            <div
              role="tabpanel"
              id={tab._key}
              aria-labelledby={tab.title}
              tabIndex="0"
              key={`pane-${tab._key}`}
              onKeyDownCapture={e => handleKeyDown(e, i)}
              className={cc({
                Tabs__pane: true,
                'Tabs__pane--is-active': activeTab?._key === tab._key
              })}
            >
              <Editor blocks={tab.content} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Tabs
