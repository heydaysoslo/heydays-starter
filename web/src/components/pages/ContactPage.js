import React from 'react'
import Pagebuilder from '../pagebuilder/Pagebuilder'

const ContactPage = ({ title, content, _rawPagebuilder, ...props }) => {
  return (
    <div className="Page">
      <h1>I'm ContactPage Template</h1>
      {_rawPagebuilder?.sections && (
        <Pagebuilder sections={_rawPagebuilder.sections} />
      )}
    </div>
  )
}

export default ContactPage
