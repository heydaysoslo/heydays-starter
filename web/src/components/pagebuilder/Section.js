import React from 'react'
import Editor from '../editor/Editor'
import ButtonResolver from '../ButtonResolver'

const Section = ({ label, title, content, button }) => {
  return (
    <div className="Section">
      {label && <p className="Section__label">{label}</p>}
      {title && <h3 className="Section__title">{title}</h3>}
      {content && <Editor className="Section__content" blocks={content} />}
      {button && <ButtonResolver button={button} />}
    </div>
  )
}

export default Section
