import React from 'react'
import { Editor } from 'gatsby-theme-heydays'

const TextSection = props => {
  return (
    <div className="TextSection">
      <Editor blocks={props.body} />
    </div>
  )
}

export default TextSection

// export const query = graphql`
//   fragment TextSection on SanityTextSection {
//     _rawBody
//   }
// `
