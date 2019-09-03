import React from 'react'
import Pagebuilder from '../pagebuilder/Pagebuilder'
import Container from '../Container'

const ContactPage = ({ title, content, _rawPagebuilder, ...props }) => {
  return (
    <div className="Page">
      <header className="Page__header">
        <Container>
          <h1 className="Page__title">Contact Page Template</h1>
        </Container>
      </header>
      <Container className="Page__content">
        {_rawPagebuilder?.sections && (
          <Pagebuilder sections={_rawPagebuilder.sections} />
        )}
      </Container>
    </div>
  )
}

export default ContactPage
