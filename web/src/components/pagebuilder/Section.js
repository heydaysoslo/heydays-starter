import React from 'react'
import Editor from '../editor/Editor'
import LinkResolver from '../LinkResolver'

const Section = ({ label, title, content, link }) => {
  return (
    <div className="Section">
      {label && <p className="Section__label">{label}</p>}
      {title && <h3 className="Section__title">{title}</h3>}
      {content && <Editor className="Section__content" blocks={content} />}
      {link && (link?.title || link?.link?.title) && (
        <LinkResolver className="button" data={link}>
          {link?.title || link?.link?.title}
        </LinkResolver>
      )}
    </div>
  )
}

export default Section
