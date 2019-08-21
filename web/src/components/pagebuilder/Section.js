import React from 'react'
import Editor from '../editor/Editor'
import LinkResolver from '../LinkResolver'

const Section = ({ label, title, content, cta }) => {
  return (
    <div className="Section">
      {label && <p className="Section__label">{label}</p>}
      {title && <h3 className="Section__title">{title}</h3>}
      {content && <Editor className="Section__content" blocks={content} />}
      {(cta?.title || cta?.link?.title) && (cta?.url || cta?.link) && (
        <LinkResolver className="button" data={cta.url || cta.link}>
          {cta.title || cta.link.title}
        </LinkResolver>
      )}
    </div>
  )
}

export default Section
