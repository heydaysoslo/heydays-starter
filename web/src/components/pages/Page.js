import React from 'react'
import Pagebuilder from '../pagebuilder/Pagebuilder'

const Page = ({ title, content, _rawPagebuilder, ...props }) => {
  return (
    <div className="Page">
      <h1>I'm Page: {title}</h1>
      {_rawPagebuilder?.sections && (
        <Pagebuilder sections={_rawPagebuilder.sections} />
      )}
    </div>
  )
}

export default Page
