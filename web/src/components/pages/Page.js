import React from 'react'
import Pagebuilder from '../pagebuilder/Pagebuilder'
import Editor from '../editor/Editor'

const Page = ({ title, content, _rawPagebuilder, ...props }) => {
  return (
    <div className="Page">
      <h1>I'm Page: {title}</h1>
      {props._rawEditor && <Editor blocks={props._rawEditor} />}
      {_rawPagebuilder?.sections && (
        <Pagebuilder sections={_rawPagebuilder.sections} />
      )}
    </div>
  )
}

export default Page
