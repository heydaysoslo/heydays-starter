import React from 'react'
import Editor from './Editor'
import Typescript from '../Typescript'

const Quote = ({ quote }) => {
  return (
    quote.content && (
      <div className="Quote">
        <blockquote className="Quote__blockquote">
          <Editor blocks={quote.content} />
        </blockquote>
        {quote.source && (
          <cite className="Quote__cite">
            <Editor blocks={quote.source} />
          </cite>
        )}
        <Typescript name={2303} />
      </div>
    )
  )
}

export default Quote
