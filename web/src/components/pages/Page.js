import React from 'react'
import Pagebuilder from '../pagebuilder/Pagebuilder'
import Container from '../Container'

const Page = ({ title, content, pagebuilder, ...props }) => {
  return (
    <div className="Page">
      <Container className="Page__container">
        <header className="Page__header">
          <p className="Page__label">Page</p>
          <h1 className="Page__title">{title}</h1>
        </header>
        <div className="Page__content">
          {pagebuilder?.sections && (
            <Pagebuilder sections={pagebuilder.sections} />
          )}
        </div>
      </Container>
    </div>
  )
}

export default Page
