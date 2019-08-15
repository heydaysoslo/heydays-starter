import React from 'react'
import Pagebuilder from '../pagebuilder/Pagebuilder'

const Page = ({ title, content, pagebuilder }) => {
  return (
    <div className="Page">
      <h1>I'm Page: {title}</h1>
      {pagebuilder && pagebuilder.sections && (
        <Pagebuilder sections={pagebuilder.sections} />
      )}
    </div>
  )
}

export default Page
