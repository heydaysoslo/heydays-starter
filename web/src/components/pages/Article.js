import React from 'react'
import Editor from '../editor/Editor'
import SanityImage from '../editor/SanityImage'

const Article = ({ title, _rawBody, _rawMainImage, ...props }) => {
  console.log(props)
  return (
    <article className="Article">
      <header className="Article__header">
        {title && <h1 className="Article__title">{title}</h1>}
        {_rawMainImage && <SanityImage node={_rawMainImage} />}
      </header>
      {_rawBody && <Editor blocks={_rawBody} />}
    </article>
  )
}

export default Article
